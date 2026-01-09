---
type: reference
literature:
    - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#v1-shared-stateless-query-files
    - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#v1-client-stateless-query-files
    - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#v1-client-stateful-query-files
---
Queries are files written in `<build>/.cmake/api/v<api_version>/query`. Queries can be one of three types: [[#Shared Stateless]], [[#Client Stateless]], or [[#Client Stateful]].

## Shared Stateless
Shared stateless queries can be made by creating an empty file in the query directory. The files should have the form `<kind>-v<major>`, where `<kind>` is the [[Object Kinds|object kind]] to query and `<major>` is the major version number for the kind. For example `<build>/.cmake/api/v1/query/codemodel-v2` will query for the version 2 [[Object Kinds#`codemodel`|codemodel]] object.

Shared Stateless queries are not owned by any client, and so "should not be removed without external client coordination or human intervention." [^shared_removal_conditions]

## Client Stateless
Client stateless queries are similar to [[#Shared Stateless]] except they are owned by a specific client. They can be made by creating a file in `client-<client>/<kind>-v<major>`, where `<kind>` is the [[Object Kinds|object kind]] to query and `<major>` is the major version number for the kind. `<client>` should by a string uniquely identifying the client, chosen by the client.

Client stateless queries are owned by the client and can be removed by their owner at any time.

## Client Stateful
Client stateful queries are created by creating a `client-<client>/query.json` file, where `<client>` is a string uniquely identifying the client and chosen by the client.

The `query.json` file must contain a JSON object containing a list of the `requests` it is making. Each `request` should have the form `{ "kind": "<kind>", "version": <version> }`, where `<kind>` is the [[Object Kinds|object kind]]. `<version>` should be either the major version number, an object containing the `"major"` and optionally the `"minor"` version, or an array of any other option. CMake will choose the first version it recognizes.

The query file can also optionally contain a `"client"` field, which will be preserved unmodified in the response.

Client stateful queries are owned by the client and can be removed by their owner at any time. They are useful for allowing clients to change which objects it supports without requiring CMake to create multiple replies. For example, a client can update and update the query to use v3 of [[Object Kinds#`codemodel`|codemodel]] while still maintaining support for v2. CMake will then choose the first version it recognizes, so if it supports v3 it'll write v3, otherwise it will use v2 without. Otherwise, the client would need to request both v3 and v2 in the hopes that CMake will recognize one.

Example from <https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#v1-client-stateful-query-files>:
```json
{
  "requests": [
    { "kind": "<kind>" , "version": 1 },
    { "kind": "<kind>" , "version": { "major": 1, "minor": 2 } },
    { "kind": "<kind>" , "version": [2, 1] },
    { "kind": "<kind>" , "version": [2, { "major": 1, "minor": 2 }] },
    { "kind": "<kind>" , "version": 1, "client": {} },
    { "kind": "..." }
  ],
  "client": {}
}
```

[^shared_removal_conditions]: <https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#v1-shared-stateless-query-files>

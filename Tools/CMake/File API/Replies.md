---
literature:
    - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#v1-reply-index-file
    - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#v1-reply-files
---
Replies are stored in `<build>/.cmake/api/v<api_version>/reply`. They are owned by CMake and should not be deleted by clients.

## Reply Index
The first file that should be read by clients is the `index-*.json`, where `*` is some identifier chosen by CMake. Each time an index file is generated, any old ones are deleted and replaced by the new. While generating, there is a chance that two index files may be present for a short period of time. If there are ever more than one index files, the lexicographically largest file will be the newest index.

The index file contains information about CMake, objects that were generated, and replies.

The `"cmake"` field contains version information about CMake, the generator used, and that paths containing used for `cmake`, `ctest`, `cpack`, and `root`. `root` is the absolute path containing CMake resources, such as modules. See also [[CMAKE_ROOT]].

The `"objects"` field is an array of all [[#File Reference|file references]] that were generated as part of the reply.

The `"reply"` field is an object that mirrors the [[#Queries]]. A [[#Shared Stateless]] response will be at the top level of the object, while [[#Client Stateful]] and [[#Client Stateless]] responses will be inside an object with the client's folder name. [[#Client Stateful]] response will further be inside a `"query.json"` object mirroring the client's `query.json`. For each request, there will either be an `"error"` or a [[#File Reference]] as a response. Notably, the response contains a `"jsonFile"` field with the name of the file containing the requested [[Object Kinds|object kind]].

## File Reference
A File Reference contains three fields: `"kind"`, `"version"`, and `"jsonFile"`. The `"kind"` field details the [[Object Kinds|object kind]], `"version"` contains the major and minor version of the object kind, and `"jsonFile"` contains the name of the reply file containing reply for the object kind. Note the `"jsonFile"` is just the name of the file; the file will be located in the `reply` directory with the [[#Reply Index|index]].
```json
{
    "kind": "<kind>",
    "version": { "major": 1, "minor": 0 },
    "jsonFile": "<file>"
}
```

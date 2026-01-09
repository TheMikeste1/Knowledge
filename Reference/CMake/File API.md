---
type: overview
literature:
    - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html
---
CMake provides an API to access build information for a project. The API is accessed by reading and writing files in `<build>/.cmake/api/v<api_version>`. In version 1, queries are written to the `query` folder, and responses in the `reply` folder. Responses consist of [[Object Kinds|object kinds]].

To use the API, create one or more of the [[Queries|query]] files and configure the project. Afterwards, there will be a set of [[Replies|reply]] files. Start by reading the [[Replies#Reply Index|reply index]] and then parse the response files as needed.

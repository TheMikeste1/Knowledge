---
type: reference
literature:
    - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#object-kinds
---
Object Kinds contain information about the build system. Each object contains the `"kind"` and the `"version"` followed by the kind-specific data.
```json
{
  "kind": "<kind>",
  "version": { "major": 1, "minor": 0 },
  "<kind-specific-data>": {}
}
```

The kinds include
- [[codemodel]]: provides information about targets, projects, and other build system components
- [[cache]]: provides information about the CMake cache
- [[cmakeFiles]]: provides information about the CMake files used, such as `CMakeLists.txt` and other `*.cmake` files
- [[configureLog]]: provides information about the CMake configure log
- [[toolchains]]: provides information about the toolchains used by the build system

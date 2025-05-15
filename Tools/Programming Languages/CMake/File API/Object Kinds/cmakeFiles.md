---
literature:
  - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#object-kind-cmakefiles
---
The `cmakeFiles` object contains information about the CMake files used when configuring and generating the project. This includes the build and source paths, the `CMakeLists.txt`, and the `*.cmake` files. It also includes information about watched files, such as the globbed files.

```json
{
  "kind": "cmakeFiles",
  "version": { "major": 1, "minor": 1 },
  "paths": {
    "build": "/path/to/top-level-build-dir",
    "source": "/path/to/top-level-source-dir"
  },
  "inputs": [
    {
      "path": "CMakeLists.txt"
    },
    {
      "isGenerated": true,
      "path": "/path/to/top-level-build-dir/.../CMakeSystem.cmake"
    },
    {
      "isExternal": true,
      "path": "/path/to/external/third-party/module.cmake"
    },
    {
      "isCMake": true,
      "isExternal": true,
      "path": "/path/to/cmake/Modules/CMakeGenericSystem.cmake"
    }
  ],
  "globsDependent": [
    {
      "expression": "src/*.cxx",
      "recurse": true,
      "files": [
        "src/foo.cxx",
        "src/bar.cxx"
      ]
    }
  ]
}
```

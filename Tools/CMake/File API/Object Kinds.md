---
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

## `codemodel`
<!-- TODO -->

## `configureLog`
The `configureLog` object contains the location and event kinds for the configure log generated using [`cmake-configure-log`](https://cmake.org/cmake/help/latest/manual/cmake-configure-log.7.html).

```json
{
  "kind": "configureLog",
  "version": { "major": 1, "minor": 0 },
  "path": "/path/to/top-level-build-dir/CMakeFiles/CMakeConfigureLog.yaml",
  "eventKindNames": [ "try_compile-v1", "try_run-v1" ]
}
```

## `cache`
The `cache` object contains information about the cached variables. The variables are described in the `"entries"` field as an array.

```json
{
  "kind": "cache",
  "version": { "major": 2, "minor": 0 },
  "entries": [
    {
      "name": "BUILD_SHARED_LIBS",
      "value": "ON",
      "type": "BOOL",
      "properties": [
        {
          "name": "HELPSTRING",
          "value": "Build shared libraries"
        }
      ]
    },
    {
      "name": "CMAKE_GENERATOR",
      "value": "Unix Makefiles",
      "type": "INTERNAL",
      "properties": [
        {
          "name": "HELPSTRING",
          "value": "Name of generator."
        }
      ]
    }
  ]
}
```

## `cmakeFiles`
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

## `toolchains`
The `toolchains` object contains information about the toolchains to use when building. The toolchain information is stored in the `"toolchains"` array.

Each entry contains the programming language the toolchain is for, information about the compiler, and optionally the source file extensions the entry will be used on. All information in the `"compiler"` field is optional. This includes the compiler path and version, as well as the ID (e.g. GNU, MSVC), and architecture `"target"`. The `"compiler"` object may also include an `"implicit"` member, which holds the include, link, and link framework directories, as well as the link libraries for the toolchain.

```json
{
  "kind": "toolchains",
  "version": { "major": 1, "minor": 0 },
  "toolchains": [
    {
      "language": "C",
      "compiler": {
        "path": "/usr/bin/cc",
        "id": "GNU",
        "version": "9.3.0",
        "implicit": {
          "includeDirectories": [
            "/usr/lib/gcc/x86_64-linux-gnu/9/include",
            "/usr/local/include",
            "/usr/include/x86_64-linux-gnu",
            "/usr/include"
          ],
          "linkDirectories": [
            "/usr/lib/gcc/x86_64-linux-gnu/9",
            "/usr/lib/x86_64-linux-gnu",
            "/usr/lib",
            "/lib/x86_64-linux-gnu",
            "/lib"
          ],
          "linkFrameworkDirectories": [],
          "linkLibraries": [ "gcc", "gcc_s", "c", "gcc", "gcc_s" ]
        }
      },
      "sourceFileExtensions": [ "c", "m" ]
    },
    {
      "language": "CXX",
      "compiler": {
        "path": "/usr/bin/c++",
        "id": "GNU",
        "version": "9.3.0",
        "implicit": {
          "includeDirectories": [
            "/usr/include/c++/9",
            "/usr/include/x86_64-linux-gnu/c++/9",
            "/usr/include/c++/9/backward",
            "/usr/lib/gcc/x86_64-linux-gnu/9/include",
            "/usr/local/include",
            "/usr/include/x86_64-linux-gnu",
            "/usr/include"
          ],
          "linkDirectories": [
            "/usr/lib/gcc/x86_64-linux-gnu/9",
            "/usr/lib/x86_64-linux-gnu",
            "/usr/lib",
            "/lib/x86_64-linux-gnu",
            "/lib"
          ],
          "linkFrameworkDirectories": [],
          "linkLibraries": [
            "stdc++", "m", "gcc_s", "gcc", "c", "gcc_s", "gcc"
          ]
        }
      },
      "sourceFileExtensions": [
        "C", "M", "c++", "cc", "cpp", "cxx", "mm", "CPP"
      ]
    }
  ]
}
```

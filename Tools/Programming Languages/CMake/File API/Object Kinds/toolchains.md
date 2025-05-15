---
literature:
  - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#object-kind-toolchains
---
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

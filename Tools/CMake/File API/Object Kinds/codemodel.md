The `codemodel` provides information about the entire build system. It includes information about the different configurations, the projects, the targets, and the directories included in the build system.

The first added field is the `"paths"` object. This includes the `"source"` path, which is the path to the top level of the CMake project. It also includes the `"build"` path, which is the top level of the build directory.

The second added field is the `"configurations"` array. In a [[Multi-configuration Build|multi-configuration]] setup this will have one configuration for each type in [[CMAKE_CONFIGURATION_TYPES]]. For [[Single-configuration Build|single-configuration]] generators, it will only have the current configuration as specified by the [[CMAKE_BUILD_TYPE]].

Each configuration contains a `"name"` and three arrays of objects:
- `"directories"` with links to [[Directory Object|directory objects]]
- `"projects"` with links to [[Project Object|project objects]]
- `"targets"` with links to [[Target Object|target objects]]
Each link is in the `"jsonFile"` field and is relative to the `codemodel` file. Additionally, each entry has some basic information about the object.

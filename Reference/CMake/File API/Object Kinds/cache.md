---
literature:
  - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#object-kind-cache
---
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

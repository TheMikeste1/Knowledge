---
type: reference
literature:
  - https://cmake.org/cmake/help/latest/manual/cmake-file-api.7.html#object-kind-configurelog
---
The `configureLog` object contains the location and event kinds for the configure log generated using [`cmake-configure-log`](https://cmake.org/cmake/help/latest/manual/cmake-configure-log.7.html).

```json
{
  "kind": "configureLog",
  "version": { "major": 1, "minor": 0 },
  "path": "/path/to/top-level-build-dir/CMakeFiles/CMakeConfigureLog.yaml",
  "eventKindNames": [ "try_compile-v1", "try_run-v1" ]
}
```

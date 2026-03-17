---
type: guide
---
#TODO

Depending on the work being done by a thread or coroutine, a different dispatcher should be used. The dispatcher can be assigned using `withContext`.

| Layer                             | Responsibility           | Typical Dispatcher                    |
| --------------------------------- | ------------------------ | ------------------------------------- |
| [[UI Layer]]                      | Observe and Display      | Dispatchers.Main                      |
| [[View Model]]                    | Coordinate and Transform | Dispatchers.Main (via viewModelScope) |
| [[Domain Layer]] / [[Data Layer]] | Business Logic           | Dispatchers.Default (if heavy)        |
| [[Data Layer]] / [[Repository]]   | I/O (Disk/Network)       | Dispatchers.IO                        |

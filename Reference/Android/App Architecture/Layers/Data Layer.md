---
type: technique
---
The *Data layer* handles the business logic of the application. This is where the heavy lifting of the application lives. It retrieves, manages, stores, and mutates data. The layer consists of one or more [[Repository]], each of which can contain zero or more datasources (such as a database).

Each type of data should have its own repository. That is, the data layer in a chain restaurant app should have a repository for menu items and a repository for restaurants. Note that the data layer itself should not modify the data: that is the job of the repositories, which serve as the [[Single Source of Truth|SSOT]].

#TODO Review https://developer.android.com/topic/architecture/data-layer
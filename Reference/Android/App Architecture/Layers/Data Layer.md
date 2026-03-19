---
type: technique
---
The *Data layer* handles the business logic of the application. This is where the heavy lifting of the application lives. It retrieves, manages, stores, and mutates data. The layer consists of one or more [[Repository]], each of which can contain zero or more [[Datasource]] (such as a database).

Each type of data should have its own repository. That is, the data layer in a chain restaurant app should have a repository for menu items and a repository for restaurants. To provide offline-first support, it is recommended that the repositories use a local datasource as the [[Single Source of Truth|SSOT]], though they may also use a remote (or a datasource that can do both, such as Firebase) for syncing purposes.

Data exposed from this layer should **always be immutable**. This layer has full ownership over the data and should perform all mutations. Data should be exposed through the repositories, which should use [[Dependency Injection]] to obtain their datasources.

The data layer usually exposes one-shot [[CRUD]] operations as well as [[Flow|flows]], which allow subscribers to be notified of data changes over time.

Generally, repositories are named `<data_type>Repository`, such as `TasksRepository`. Datasources are named `<data_type><source_type>DataSource`, such as `TaskRemoteDataSource` or more specifically `TaskNetworkDataSource`. Avoid using overly-specific names such as `TaskFirebaseDataSource`, at least at the interface level. Repositories should prefer to take as generic as possible datasources.

Sometimes, repositories may rely on other repositories to aggregate data from multiple sources or because its responsibility requires access to multiple data types. Typically, these types of repositories are called [[Manager|Managers]].

Calling functions on datasources and repositories should be main-safe, meaning they can be called from the main thread. Typically, this means they are `suspend` functions. `WorkManager`s can be beneficial for periodic tasks.
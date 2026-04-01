---
type: principle
---
Apps often do not have access to the internet or have spotty connections. In order to continue working well, apps should be designed to be *offline-first*, meaning the can perform "perform all, or a critical subset of its core functionality without access to the internet."[^1] For an app the be considered offline-first, it must
- Be at least minimally useful without a reliable network connection
- Provide local data immediately without having to wait for the network
- Fetch and update data while being conscious of battery and the network. For example, it may be best to fetch large amounts of data only when on WiFi.

The majority of the work for an offline-first app occurs in the [[Data Layer]], specifically the [[Repository]]. The repositories are responsible for syncing reads and writes between [[Datasource|datasources]], at least one of which must not require network access.

When working with multiple datasources, the local datasource should act as the [[Single Source of Truth|SSOT]]. Note this does not mean it needs to be a fully-fleshed-out database: simple files or temporary data may work for some apps. It should be synced with the network datasource, if one exists, when the application is back online.

It is important to note that different datasources will likely have different models. For example, the local source might use SQL, while the network source might use NoSQL. Each schema will require its own dataclasses to interact with the datasource. In these cases, these dataclasses should remain internal to the data layer (or even internal to the repository), and another dataclass combining the two created for interacting with the other layers. [[Extension Method|Extension methods]] can then be used to convert between the different models.

[^1]: https://developer.android.com/topic/architecture/data-layer/offline-first

## Reading
When reading from a remote datasource, it is often best practice to use [[Exponential Backoff]] until success, cancellation, or reaching a maximum number of retries. Cancellation may be from the user, but it may also be from the network source. For example, if the user is not authorized the app can stop its attempts. Alternatively, requests can be queued until the network is available. [WorkManager](https://developer.android.com/topic/libraries/architecture/workmanager) may be useful for this.

## Writing
When writing to a datasource, the writes should be asynchronous. Additionally, for writes to a remote datasource, there are multiple strategies depending on the nature of the app and the data. An app may make use of one or more of these strategies, depending on the need.

### Online-Only Writes
For apps where writes are time-sensitive, such as banks, it may be best to only allow writes when the network is available and successful. In these cases, if the write does not succeed, the write should be discarded.

### Queued Writes
If the data is not time sensitive and the user doesn't need to know about success or failure, *Queued Writes* might be a good strategy. Under this strategy, the write is queued (possibly using a [WorkManager](https://developer.android.com/topic/libraries/architecture/workmanager)). If the write is successful, the local datasource is updated. Otherwise, the repository can retry or simply quit. This strategy is good for logging or analytics, where the user doesn't necessarily care about if the data is stored or not.

### Lazy Writes
Lazy writes are best for data that is critical to the app. Data the is critical to the operation of the app should take this approach to avoid data loss.

This strategy involves writing to the local datasource first, **then** enqueueing the write for the network datasource. Once the write succeeds, handle any conflicts between the local and remote datasources using one of the [[#Conflict Resolution]] strategies.

## Synchronization
Data between local and remote datasources must be synchronized to ensure both their data is up-to-date. There are a couple strategies apps can use to synchronize data, each of which can be used at different points in the app.
### Pull-Based Synchronization
Pull-base synchronization involves the app reaching out to the network when required. This might be at the user's request, or when navigating to a specific page. This works best when there are brief or no network interruptions, since longer periods will mean the user will interact with more stale data.

 This technique is easy to implement and has the additional advantage that only the data required will be fetched. However, it may require data to be repeatedly fetched, even if not needed. It may also not scale well if large amounts of data need to be fetched.
### Push-Based Synchronization
Push-base synchronization involves seeding a local datasource with an appropriate amount of remote data, then relying on notifications from the server to notify when data has changed. Upon receiving the notification, the app reaches out to the remote source to update its data.

This technique reduces the amount of data the application needs to fetch, since it only updates stale data. It also works well when a strong datamodel exists, such as with relational data models. However, [[#Conflict Resolution]] may be trickier, and not all network data sources support this method natively.

## Conflict Resolution
It is common for a local repository and a remote repository to get out of sync and develop conflicts in its data due to multiple users writing to the same data. These conflicts must be resolved so future updates can be made, and it naturally means some kind of bookkeeping must occur to track what changes have occurred.

There a couple main strategies for conflict resolution.

### Last Write Wins
*Last write wins* is a common and easy strategy for conflict resolution. It simply keeps the data from the most recent write. This naturally requires some way of determining how recent a write was, typically by including timestamp metadata with the data.

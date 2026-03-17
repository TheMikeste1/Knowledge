---
type: technique
aliases:
  - presentation layer
---
The *UI layer*, also know as the *presentation layer*, displays application data to the user. Its job is to keep the UI up to date.

> [!QUOTE]
> Effectively, the UI is a visual representation of the application state as retrieved from the data layer.
> ~ [Android](https://developer.android.com/topic/architecture/ui-layer?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-architecture%23article-https%3A%2F%2Fdeveloper.android.com%2Ftopic%2Farchitecture%2Fui-layer)

There are two main components of the UI layer: UI elements, and state holders. UI elements, naturally, display data to the user. State holders manage and expose the data to the UI elements while also handling logic. A common tool for state holders is the [[View Model]].

The UI gets its data from the [[Data Layer]]. It may need to combine, transform, or rearrange data, but it should not manage "raw" data on its own. The job of the UI layer can be summarized as
1. Consume application data by transforming it into data the UI can render
2. Consume render-able data by transforming it into UI elements
3. Consume input events from UI elements by updating the UI-only data and forwarding events to the data layer[^1]
4. Update the UI to reflect changes from the data layer

State holders produce UI data. UI data should be in the form of immutable data classes to ensure [[Single Source of Truth|SSOT]]. State holders do not mutate their data themselves, but instead bubble input events up to the data layer, which will perform the update and send the holder the new data. The state holder can then compose this new data however it needs.

Since the app should be using [[Unidirectional Data Flow|UDF]], the state can be considered to be produced as a stream or a pipe. This allows the data to be exposed to the UI through containers such as `LiveData` or `StateFlow`, which allows the data layer to "push" data to the UI instead of requiring the UI to "pull" it from the data layer. Ideally, each state holder will produce a single stream of data. The data may be a single datapoint, but more likely will be a `UiState` class. Note that these `UiState` classes should be small so updates will have less of an impact on the UI due to `UiState` diffing.

| Use Multiple Streams in One ViewModel if...                                              | Use Two Different ViewModels if...                                                   |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| The data is specific to this one screen.                                                 | The UI component and its logic are reused across multiple screens.                   |
| Both data types depend on the same input (e.g., a user ID).                              | The logic for each part is extremely complex and would make one ViewModel too large. |
| You want to avoid the "boilerplate" of coordinating multiple lifecycle-aware components. | You are building a modular "Dashboard" where each widget is completely independent.  |

When using Jetpack Compose, these flows can be condensed into Kotlin's `State`s, though functions such as `mutableStateOf` can create these `State`s directly instead.[^2] Be aware that `mutableStateOf` is not thread-safe, and so should only be used for data that updates on the main thread. As such, `mutableStateOf` should be used directly in Composables, while the `Flow` should be used in [[View Model|view models]] and [[Repository|repositories]].

Any work performed on the UI layer or view model should be main-thread safe. That is, every function that is called should not require the caller to spin up or manage a thread on the function's behalf. The [[Data Layer]] and [[Domain Layer]] are responsible for moving work to a different thread. In the rare cases that the view model has a long-running calculation, it should manage that task through threading or coroutines instead of forcing the UI/Composable to do it. See also [[Threading, Coroutines, and Dispatchers]].

When using [[Animations]] to transition between screens, it is often beneficial to wait for the second screen to be loaded before running the animation.[^3] [`postponeEnterTransition`](https://developer.android.com/reference/androidx/fragment/app/Fragment#postponeEnterTransition()) and [`startPostponedEnterTransition`](https://developer.android.com/reference/androidx/fragment/app/Fragment#startPostponedEnterTransition()) may be useful in these cases.

---
[^1]: [[Unidirectional Data Flow]]
[^2]: <https://developer.android.com/develop/ui/compose/libraries#streams>
[^3]: <https://developer.android.com/topic/architecture/ui-layer?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-architecture%23article-https%3A%2F%2Fdeveloper.android.com%2Ftopic%2Farchitecture%2Fui-layer#animations>

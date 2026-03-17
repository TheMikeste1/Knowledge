---
type: guide
---
In Android apps, there are two main type of logic: *business logic* and *UI logic*.

Business logic is what makes an application special. It is the "implementation" portion of the app. For example, bookmarking an article is business logic because it is a part of how the app *functions*. Business logic should be placed in the [[Domain Layer]] or the [[Data Layer]], but never in the [[UI Layer]].

UI logic determines how the display is rendered or changes. This includes displaying elements, navigation, or forwarding events to the data layer. UI logic should **always** live in the UI and not the [[View Model]]. If the UI becomes too complex, create a simple state holder class to help manage the states. The simple class will follow the lifecycle of the UI, whereas view models might live longer and so should not manage the state of the UI.
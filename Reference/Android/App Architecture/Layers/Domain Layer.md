---
type: technique
---
The *Domain layer* is an optional layer between the [[Data Layer]] and the [[UI Layer]]. They serve as an intermediary layer between [[View Model|view models]] and [[Repository|repositories]]. It has two jobs: encapsulate complex business logic and to unify common business logic used by multiple [[View Model|view models]]. They essentially serve to encapsulate complex, difficult, or reusable logic.

Classes associated with the domain layer are often called *use cases* or *interactors*, and should serve a single function. For example, if multiple view models need the current time zone an app could have a `GetTimeZoneUseCase` class.

> [!INFO] Naming Convention
> *verb in present tense + noun/what (optional) + UseCase*

> [!NOTE]
> The domain layer in Android architecture is different from domain layers in other architectures, such as "clean" architecture. There may or may not be parallels between the layers.

The domain layer should only be used [[#^a06b09|when needed]]. Classes in this layer should stay simple and lightweight with responsibility for a single functionality. They should not contain mutable data: that should be handled by the UI or data layer. It is common to implement the `invoke()` method in these classes so they can be called like functions from the view models.

> [!QUOTE] [Android](https://developer.android.com/topic/architecture/domain-layer)
> - It avoids code duplication.
> - It improves readability in classes that use domain layer classes.
> - It improves the testability of the app.
> - It avoids large classes by allowing you to split responsibilities.
^a06b09

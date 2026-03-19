---
type: technique
---
The *Domain layer*'s has two jobs: encapsulate complex business logic and to unify common business logic used by multiple [[View Model|view models]]. Classes associated with the domain layer are often called *use cases* or *interactors*, and should serve a single function. For example, if multiple view models need the current time zone an app could have a `GetTimeZoneUseCase` class.

#TODO Review https://developer.android.com/jetpack/guide/domain-layer
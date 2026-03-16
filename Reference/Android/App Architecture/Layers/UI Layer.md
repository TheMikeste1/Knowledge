---
type: technique
aliases:
  - presentation layer
---
The *UI layer*, also know as the *presentation layer*, displays application data to the user. Its job is to keep the UI up to date.

There are two main components of the UI layer: UI elements, and state holders. UI elements, naturally, display data to the user. State holders manage and expose the data to the UI elements while also handling logic. A common tool for state holders is the [[View Model]].

#TODO Go through https://developer.android.com/topic/architecture/ui-layer
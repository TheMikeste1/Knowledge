---
type: pattern
---
*List-detail* is a [[Canonical Layouts|canonical layout]] that allows users to explore lists and their associated details. It consists of two panes: one for the list, and the other for the details. Large displays display both panes side-by-side, whereas medium- or compact-displays show one or the other. By clicking on an item, the details for that item are displayed. For medium/compact displays, pressing the back button on the details pane takes the user back to the list.

> Configuration changes such as device orientation changes or app window size changes can change the display's window size class. A list‑detail layout responds accordingly, preserving app state:
>
> - If an expanded-width display showing both the list and detail panes narrows to medium or compact, the detail pane remains visible and the list pane is hidden
> - If a medium- or compact-width display has just the detail pane visible and the window size class widens to expanded, the list and detail are shown together, and the list indicates that the item corresponding to the content in the detail pane is selected
> - If a medium- or compact-width display has just the list pane visible and widens to expanded, the list and a placeholder detail pane are shown together
>
> ~ <https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts>

Jetpack Compose has two main Material 3 components to create this layout: [`ListDetailPaneScaffold`](https://developer.android.com/reference/kotlin/androidx/compose/material3/adaptive/layout/package-summary#ListDetailPaneScaffold(androidx.compose.material3.adaptive.layout.PaneScaffoldDirective,androidx.compose.material3.adaptive.layout.ThreePaneScaffoldState,kotlin.Function1,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Function1,kotlin.Function2,androidx.compose.material3.adaptive.layout.PaneExpansionState)) and `NavigableListDetaulPaneScaffold`. See <https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail> for instructions on how to use them.
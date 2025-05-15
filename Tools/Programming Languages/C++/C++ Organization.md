---
tags:
  - c++
  - programming
---
Based on <https://github.com/DotNetAnalyzers/StyleCopAnalyzers/blob/master/documentation/SA1201.md>

Objects in each category should be organized by interface first (e.g. the methods for `IClickable` should be next to each other), then by group (e.g. the getter and setter for some field or property should be next to each other), then alphabetically.

## Outside an object
- Using/typedefs
- Enums
- Interfaces
- Structs
- Classes
- Constants
- Variables
- Macros
- Functions
- Methods
- Namespaces (internally follows same structure as [[#Outside an object]])

## Inside an object and source file
- Using/typedefs
- Enums
- Structs
- Interfaces
- Classes
- Static
- Constructors
- Destructors
- Properties
- Fields
- Methods
- Operators
- Friends (declared in the same structure as [[#Inside an object and source file]])

Objects should first declare public, then protected, then private

---
role: primitive
domain: computer-science
paradigm:
tags:
  - role/primitive
  - software-design
literature:
  - "[[Boolean blindness - R, Shreevatsa]]"
  - "[[Boolean Blindness - Harper, Robert]]"
---
"Boolean blindness" is refers to losing information about a state when using booleans or other uninformative data types. Since booleans can only indicate true or false, it is impossible to know what they mean without having additional context.

> There is no _information_ carried by a Boolean beyond its value, and that’s the rub.  As Conor McBride puts it, to make use of a Boolean you have to know its _provenance_ so that you can know what it _means._
> ~ [[Boolean Blindness - Harper, Robert]]

Instead of using booleans, one can use types that provide additional information. This idea is from #functional-programming. These types don't need to contain any additional data: the type itself is the data. For example, instead of using a boolean to indicate whether or not a task succeeded, one could encode it as
```cpp
enum class TaskResult
{
   FAILED,
   SUCCESS
}
```
^e92276

However, this can be further expanded to provide additional information about the result of the task. For example, if there may be multiple ways the task can fail:
```cpp
enum class TaskResultRedux
{
   UNKNOWN_FAILURE,
   NOT_ENOUGH_ROOM,
   INSUFFICIENT_PERMISSIONS,
   SUCCESS
}
```
^681fcb

This provides additional information, and additionally indicates that not all failures are equal. Using booleans, all the programmer (and compiler) would know is whether or not the task failed. By encoding the possibilities into a type, both the programmer and compiler keep additional context about the result of the task and understand that not all errors are the same.

Encoding information into types also helps avoid illegal program states. For example, if a function returns an object but it might fail there are two main ways one might accomplish this using booleans:
1. Return a tuple of the boolean result and the resulting object
    ```cpp
    std::pair<bool, SomeObject> func(); // This could also return a pointer to the object
    ```

2. Return a boolean and require the user to pass in an "out" parameter
    ```cpp
    bool func(SomeObject& outObject);
    ```

The problem for both of these techniques is if `func` fails, the returned object is in an unknown and possibly undefined state. Instead, the result of the function can be encoded into a type. C++17 already has a type for this: `std::optional`.
```cpp
std::optional<SomeObject> func();
```
By encoding the result of the function into a type, both the programmer and the compiler can only access the successful result of `func` iff it is successful. This makes the invalid state impossible. This is similar to [`TaskResult`](#^e92276) above. To encode additional information about failures, a la [`TaskResultRedux`](#^681fcb), one can use a `std::expected` (C++23) or a well-designed `std::variant` (C++17).

This idea can be expanded to programming languages. If the compiler is able to deduce additional information and verify certain facts about data due to its type, it is not boolean-blind. However, if it fails or is unable to verify information about data, it is boolean blind. For example, a pointer in C++ is boolean blind. Given a pointer to an object, the compiler does not know if there is a pointer to an actual instance at compile time. Instead, it is up to the programmer to manually check and verify the pointer is valid. `std::optional`, however, does provide additional information and so the compiler can assert at compile time whether or not an instance exists. See <https://news.ycombinator.com/item?id=4148307> for more information and examples.

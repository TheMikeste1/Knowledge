---
type: pattern
---
The [[Singleton]] pattern is very useful, but is often seen as an antipattern due to memory management issues (such as the [static initialization order fiasco](https://isocpp.org/wiki/faq/ctors#static-init-order)), "hidden" control flow, testing problems, and other issues.

Instead, in C++, one can use a template with a reference provided through [[Dependency Injection]]. This provides similar benefits to the singleton pattern, but allows the developer to control initialization and considerably easier testing. Additionally, the compiler can resolve the calls at compile time, essentially making it a zero-cost abstraction. This pattern looks like this:
```cpp
struct DataRepository
{
   int readNumber() { /* ... */ }
};

// Template allows the compiler to inline method calls instead of using a vtable
template <class TRepository>
class Consumer
{
public:
    Consumer(TRepository& repository): m_repository(repository) {}

private:
    TRepository& m_repository; // If Consumer only reads from the repository, this can be const

    void doSomething()
    {
        int data = m_repository.readNumber();
        // . . .
    }
};

int main()
{
    // Instantiate the SSOT
    DataRepository repo{};
    // Inject it into the consumer
    Consumer consumer{repo};
    // . . .
    return 0;
}
```

Many C++ developers push against storing references on classes. In that case, a `std::reference_wrapper` or a pointer may ease their concerns. However, these will not have the same compile time benefits and will incur runtime penalties. Proper lifetime management (like Rust) can negate these concerns. Alternatively, the [[Single Source of Truth|SSOT]] can be made fully static which will allow easier testing. However, this technique will still incur the downsides of the singleton.

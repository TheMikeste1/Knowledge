## Identify an unknown exception
Getting an exception but don't know its type? Try catching and using `type_info` (C++11):
```cpp
try
{
   mightThrow();
}
catch (...)
{
   std::exception_ptr ex = std::current_exception();
   const auto* pType = ex.__cxa_exception_type(); // GNU; Might want to demangle with `__cxa_demangle`: https://stackoverflow.com/a/4541470/10078500
   
   std::cerr << "Unknown Exception! Type: " << pType->name() << std::endl;
}
```

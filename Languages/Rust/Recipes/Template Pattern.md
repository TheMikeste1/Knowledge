---
tope: recipe
concept: "[[Template Pattern]]"
---
## With [[Strategy Pattern]]

### Composition
Use composition with a strategy implementer.

```rust
pub trait Foo {
    fn implement_me(&self);
}

struct Object<'a> {
    foo: &'a dyn Foo
}

impl<'a> Object<'a> {
    pub fn new(foo: &'a dyn Foo) -> Self {
        Self {
            foo
        }
    }

    pub fn do_thing(&self) {
        // . . .
        self.foo.implement_me();
        // . . .
    }
}

fn thingamabob(obj: Object) {
    obj.do_thing();
}
```

### Pass in
Pass in a strategy implementer when calling the method.

```rust
pub trait Foo {
    fn implement_me(&self);
}

struct Object;

impl Object {
    pub fn do_thing(&self, foo: &dyn Foo) {
        // . . .
        foo.implement_me();
        // . . .
    }
}

fn thingamabob(obj: Object, foo: &dyn Foo) {
    obj.do_thing(foo);
}
```

## Without Strategy Pattern
Have a trait that defines the methods to override, then use `impl dyn` on the trait to create the "skeleton."

```rust
pub trait Foo {
    fn implement_me(&self);
}

impl dyn Foo + '_ { // `impl dyn` defaults to using a static lifetime; use `+ '_` to allow any lifetime
    fn do_thing(&self) {
        // . . .
        self.implement_me();
        // . . .
    }
}

fn thingamabob(foo: &dyn Foo) {
    foo.do_thing();
}
```

---
type: guide
aliases:
  - OOP in Lua
references:
  - https://www.lua.org/pil/16.html
---
Lua doesn't have traditional class data structures. Instead, it uses tables with attached functions and common metadata.

## Attaching Methods

Functions can be attached to tables to create methods. These can be attached using the dot operator:

```lua
Account = { balance = 0.0 }

function Account.withdraw(self, value)
    self.balance = self.balance - value
end

local a = {
    balance = 0.0,
    withdraw = Account.withdraw
}
```

However, this would require us to call the function like `a.withdraw(Account, 123)`. Instead, we can use the implicit self operator by attaching the function with the colon operator:

```lua
function Account:withdraw(value)
    self.balance = self.balance - v
end

a:withdraw(123)
```

> [!NOTE]
> In reality, the colon operator is syntactic sugar. We can still define the function using the dot operator, but call the function using the colon. This allows us to customize the name of the `self` parameter.

## Creating a Class

Instead of traditional classes, Lua emulates classes using the [[Prototype|prototype pattern]]. Each table is unique, but through the prototype it can be structurally identical to other tables. To assign a prototype, we call `setmetatable` and set the `__index` of the newly-created object:

```lua
function Account:new(o)
    o = o or {} -- It seems to be conventional to allow callers to optionally pass in an object to become the class
    setmetatable(o, self)
    self.__index = self  -- Due to the setmetatable call, self's __index field will serve as a lookup for unrecognized fields.
    return o
end
```

`self.__index` appears to be similar to Python's `__getattr__` method in that it serves as a fallback if the table does not have the field or method requested. `__index` can also be a function instead of a table to allow dynamic calculations. By serving as the index, `Account` has effectively become the parent of `o`.

> [!NOTE]
> We can also override methods such as `__add` through the metatable.

Interestingly, since `o` doesn't start with a balance, `o.balance` will return `Account`'s balance. If balance is subsequently assigned, it will now be on `o`, effectively allowing `o` to inherit default values for fields.

> [!WARNING]
> `o` will also inherit tables and other datatypes from `Account`. This means any mutations against the default list will apply to all instances. Consider the example below.
>
> ```lua
> Students = {
>   names = {},
> }
>
> function Students:new(o)
>   o = o or {}
>   setmetatable(o, self)
>   self.__index = self
>   return o
> end
>
> s = Students:new()
> table.insert(s.names, "Bob")
> print("s: " .. vim.inspect(s.names))               -- Prints 's: { "Bob" }'
> print("Students: " .. vim.inspect(Students.names)) -- Also prints 'Students: { "Bob" }'!?!?
> ```
>
> As such, `table`s and other similar objects should be copied and assigned as part of `new` instead of relying on the base instance.

^cff43c

## Inheritance and overriding methods

Inheritance in Lua is trivia. Simply create a `new` instance of the parent class:

```lua
SpecialAccount = Account:new()
```

Now, when `SpecialAccount:new` is called, `self` refers to `SpecialAccount`, meaning we got `new` for free. If `new` needs to be changed, it can be done like so:

```lua
function SpecialAccount:new(o)
  o = Account.new(self, o)
  -- Other changes. . .
  return o
end
```

> [!WARNING]
> Be careful when setting defaults with inheritance! for mutable objects! Since `Account.new` sets the index, any changes made *after* the `Account.new` call will use `SpecialAccount` as the index. This may cause unintended problems when dealing with [[#^cff43c|mutable types]]:
>
> Don't do this:
>
> ```lua
> JointAccount = Account:new({
>   additional_owners = {}
> })
>
> function JointAccount:new(o)
>     Account.new(self, o)
>     o.additional_owners = o.additional_owners or {} -- Will always use `o.additional_owners` because we're the index. Worse, the referred-to `additional_owners` is the prototype's! This will cause all instances to share the same table.
>     return o
> end
> ```
>
> Instead, do this:
>
> ```lua
> JointAccount = Account:new({
>   additional_owners = {}
> })
>
> function JointAccount:new(o)
>     o = o or {}
>     o.additional_owners = o.additional_owners or {} -- Skip the problem entirely, though it technically causes you to construct your classes in reverse order
>     Account.new(self, o)
>     return o
> end
> ```
>
> Or this:
>
> ```lua
> JointAccount = Account:new({
>   additional_owners = nil -- Skip setting a default; not always desirable since it communicates less
> })
>
> function JointAccount:new(o)
>     Account.new(self, o)
>     o.additional_owners = o.additional_owners or {} -- Should now be good
>     return o
> end
> ```

`SpecialAccount` can add additional methods as desired, and parent methods can still be accessed just like on normal instances. Overriding methods is also simple: just shadow the old version with a new function:

```lua
function SpecialAccount:withdraw(value)
    -- Custom implementation
end
```

Since `SpecialAccount` now has its own version of `withdraw`, instances will call that method instead.

## Multiple Inheritance

Multiple inheritance in Lua is a little trickier than single inheritance. The `__index` field can only be one table, and so can only be one class. Instead, `__index` must be a function so it can determine which parent class to use.

For these cases, it may be beneficial to use the following function to create multiple inheritance classes:

```lua
-- look up for `k' in list of tables `plist'
local function search(k, plist)
    for i = 1, table.getn(plist) do
        local v = plist[i][k] -- try `i'-th superclass
        if v then
            return v
        end
    end
end

function create_class(...)
    local c = {} -- new class
    local parents = { ... }

    -- class will search for each method in the list of its
    -- parents (`arg' is the list of parents)
    setmetatable(c, {
        __index = function(t, k)
            local v = search(k, parents)
            t[k] = v -- Optionally cache the result
            return v
        end,
    })

    -- prepare `c' to be the metatable of its instances
    c.__index = c

    -- define a new constructor for this new class
    function c:new(o)
        o = o or {}
        setmetatable(o, c)
        return o
    end

    -- return new class
    return c
end

NewClass = create_class(ClassA, ClassB, ClassC)
```

---
tags:
  - technology
  - software-design
type: blog
author: Harper, Robert
date_published: 2011-03-15
genre:
  - technology
  - software-engineering
times_read: 1
date_first_finished: 2025-03-15
date_last_started: 2025-03-15
date_last_finished: 2025-03-15
currently_reading: false
references:
  - https://existentialtype.wordpress.com/2011/03/15/boolean-blindness/
short_description: Harper explains "boolean blindness" and its effects on software.
---
**Abstract**:: Harper starts his writing exclaiming, "I hate Booleans!" He goes on to explain a concept called "[[Boolean Blindness|boolean blindness]]," a term coined by [Dan Licata](https://www.cs.cmu.edu/~15150/previous-semesters/2012-spring/resources/lectures/09.pdf), and how it can be detrimental to code and programs. Along the way, he identifies the difference between two different types of computer scientists: logicians, who are "concerned with languages and semantics," and combinatorialists, who are "concerned with algorithms and complexity."

**Notes**:: Harper makes a distinction between "true or false" as a proposition versus as data. He states that booleans are data and not propositions, though they may have associated propositions (e.g. `a == b` returns a boolean, and its associated proposition is that `a` is equal to `b`). He states this is an important distinction, as confusing the two may cause "all sorts of bad consequences." He then explains how just using booleans causes one to forget about the meaning of the boolean: it's "provenance." The developer must assign the value some meaning; it's not built into the data. Every time a developer goes back to read that code, they must figure out where the boolean came from in order to assign it meaning; perhaps erroneously so.

**Thoughts**:: Harper's distinction between the data and the proposition is interesting; he is completely correct that we the programmer must assign meaning to any booleans used. The idea and ability to have meaning built intrinsically into a datatype is valuable, as it forces both the user and the compiler to respect the predicate that produced the boolean as well as the value of the boolean. I do agree it is important to make a distinction between the data and the function providing the data, but I admittedly was unable to gleam what kind of "bad consequences" were meant from his example of confusing the two.

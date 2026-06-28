---
references:
  - https://github.com/bsiever/vhdlweb
type: log
---
VHDL Web is a great resource for learning to build and design different circuits. The website seemed to be down, but luckily there's a GitHub repository. I submoduled it, and, after some work to get it running, was able to run through the contained exercises.

Most of the exercises were fairly easy at this point, but they were good practice and let me show what I've learned. I was able to complete all the exercises between Friday and Saturday. I especially liked the exercises which showed a diagram of the resulting circuit, which genuinely helped me design better circuits. Seeing what my code results in makes it easier to see where I'm overcomplicating things.

I did have one resource-related issue. The final assignment, where you need to read a register, subtract one, and write it back, seemed to have an error. There's a `dataread` field that's set to `out`, but that doesn't really make sense. I need to *read* the data, which means it should be an in. After I tried applying the golden solution and it failed, I change the testbench and the golden and my copy to use `dataread` as an `in`, and it started working. I've added a patch to my repository to automatically patch it in the future.

VHDL Web was mostly just practice for me, but I do think I learned a little about state machines in VHDL. There were only a few assignments where state machines were involved, but the ones with more complicated tasks I struggled with due to timing. The logic wasn't hard– it was just difficult to get my stuff to trigger when I expected it to. The golden examples did everything in the tick (synchronous) process, but I didn't like that because it added so much clutter. When I worked there everything seemed to work better though. I persisted with my multi-process approach though, and think I determined a solution. Instead of naming things `state` and `next_state`, shift things back a time-step: `previous_state` and `state`. This helps indicate when changes will actually take affect and makes the logic work better.
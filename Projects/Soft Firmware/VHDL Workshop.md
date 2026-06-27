---
references:
  - https://www.vhdl-online.de/vhdl_workshop/lab_1
type: log
---
I ran through VHDL Workshop after reading [[Free Range VHDL - Mealy, Bryan]]. A lot of the beginning levels were trivial after NAND Land and that book, but were worth going through to get used to the style.

I *think* the website is somehow automatically translated from German. Some of the wording is off and some of the labs were difficult to figure out due to lack of clarity or strange phrasing. Nevertheless, I was able to push through and pass the all the labs (though I skipped most of 11, since that's just hooking all your work together and didn't really seem to provide a challenge).

The workshop provided a much more hands-on and advanced approach compared to the other activities so far. I feel I learned a lot of for VHDL specifically works, and am starting to get a feel for digital circuit design. I will say, however, some of the design decisions seem a little strange to me. A lot of the components were EXTREMELY specific, but I Felt they could have been generalized and composed into circuits, instead of creating unique circuits with very specific tasks for each lab. That may have just been due to how the lab was set up though.

One of the more important lessons I learned from running through the workshop was in [lab 10](https://www.vhdl-online.de/vhdl_workshop/lab_10) ([my implementation](https://github.com/TheMikeste1/softfirmware/blob/master/vhdl_workshop/lab_10/main_ctrl.vhd)). In it there is a state machine. Depending on the state of the machine, a motor may be on or off and a timer may be on or off. In my initial implementation, I attempted to stick everything in the state machine process:
```vhdl
  transition : process
    -- . . .
      when TakePic =>
        timer_go <= '1';
        r_next_state <= DelayTakePic;

      when DelayTakePic =>
        timer_go <= '0';
        r_next_state <= WaitExpTime;
    -- . . .
    end process transition;
```
However, I quickly learned it's considerably easy to extract these types of signals to a combinatorial signal instead of a process.
```vhdl
  transition : process
    -- . . .
      when TakePic =>
        r_next_state <= DelayTakePic;

      when DelayTakePic =>
        r_next_state <= WaitExpTime;
    -- . . .
    end process transition;
  
  -- . . .

  timer_go <= '1' when r_state = TakePic else
              '0';
```
Doing it this way makes the signal directly connected to the state, and prevents accidental latching. It also makes it WAY easier to make the state machine because the transition process can focus on transitions in the state machine instead of trying to update variables. You also then don't have to worry about resetting the signals: they'll naturally be reset when the state transitions back to its default.

I'm immortalizing the diff below just to show how much simple this change made my code.
```diff
diff --git a/vhdl_workshop/lab_10/main_ctrl.vhd b/vhdl_workshop/lab_10/main_ctrl.vhd
index eed4eb3..f466480 100644
--- a/vhdl_workshop/lab_10/main_ctrl.vhd
+++ b/vhdl_workshop/lab_10/main_ctrl.vhd
@@ -48,67 +48,53 @@ architecture rtl of main_ctrl is
 begin
   state <= r_state;
   -- process to calculate the next state
-  transition : process (reset, r_state, trigger, expose, motor_ready, motor_error) is
+  transition : process (r_state, trigger, expose, motor_ready, motor_error) is
   begin
     r_next_state <= r_state;
-    if reset = '1' then
-      r_next_state <= Idle;
-      timer_go     <= '0';
-      motor_go     <= '0';
-    else
-      -- Keep the old state as default action
-      -- Check all transitions
-      case r_state is
-        when Idle =>
-          timer_go <= '0';
-          motor_go <= '0';
-          if trigger = '1' then
-            r_next_state <= TakePic;
-          end if;
+    -- Keep the old state as default action
+    -- Check all transitions
+    case r_state is
+      when Idle =>
+        if trigger = '1' then
+          r_next_state <= TakePic;
+        end if;
 
-        when TakePic =>
-          timer_go     <= '1';
-          r_next_state <= DelayTakePic;
+      when TakePic =>
+        r_next_state <= DelayTakePic;
 
-        when DelayTakePic =>
-          timer_go     <= '0';
-          r_next_state <= WaitExpTime;
+      when DelayTakePic =>
+        r_next_state <= WaitExpTime;
 
-        when WaitExpTime =>
-          if expose = '0' then
-            r_next_state <= DelayMotor;
-          end if;
+      when WaitExpTime =>
+        if expose = '0' then
+          r_next_state <= DelayMotor;
+        end if;
 
-        when DelayMotor =>
-          motor_go     <= '1';
-          r_next_state <= WaitMotor;
+      when DelayMotor =>
+        r_next_state <= WaitMotor;
 
-        when WaitMotor =>
-          motor_go <= '0';
-          if motor_error = '1' then
-            r_next_state <= Broken;
-          elsif motor_ready = '1' then
-            r_next_state <= TakePic when trigger = '1' else Idle;
-          end if;
+      when WaitMotor =>
+        if motor_error = '1' then
+          r_next_state <= Broken;
+        elsif motor_ready = '1' then
+          r_next_state <= TakePic when trigger = '1' else Idle;
+        end if;
 
-        when Broken =>
-          if trigger = '1' then
-            r_next_state <= Recovery;
-          end if;
+      when Broken =>
+        if trigger = '1' then
+          r_next_state <= Recovery;
+        end if;
 
-        when Recovery =>
-          if trigger = '0' then
-            r_next_state <= Idle;
-          end if;
-
-        -- Other states
-        when others =>
-          assert false;
+      when Recovery =>
+        if trigger = '0' then
           r_next_state <= Idle;
-          timer_go     <= '0';
-          motor_go     <= '0';
-      end case;
-    end if;
+        end if;
+
+      -- Other states
+      when others =>
+        assert false;
+        r_next_state <= Idle;
+    end case;
 
   end process transition;
 
@@ -125,6 +111,10 @@ begin
   end process proc_name;
 
   -- Concurrent statements to drive the output signals with STATE select
-  i_error <= '1' when r_state = Broken else
-             '0';
+  i_error  <= '1' when r_state = Broken else
+              '0';
+  timer_go <= '1' when r_state = TakePic else
+              '0';
+  motor_go <= '1' when r_state = DelayMotor else
+              '0';
 end architecture rtl;
```
---
role: model
domain: computer-science
paradigm:
tags:
  - role/model
---
# Inverse Kinematics (Position to angles)
Inverse Kinematics: Given a point in space, how do I get to it?

What you are given:
- Length of each link
- The position of some point on the robot

What you can find:
- The angles of each joint needed to obtain that position


$$\displaylines{
(x, y)_{\text{target}} = (1, 2)\\
a_1 = 1.5;\;\; a_2 = 2.5
}$$


Find $\theta_1$ and $\theta_2$ that leads to $(x,y)_{\text{target}}$

```python
import math
import random

  
a1 = 1.5
a2 = 2.5

x_goal = 1
y_goal = 2
  
theta1 = 0
theta2 = 0

x = a1 * math.cos(theta1) + a2 * math.cos(theta1 + theta2)
y = a1 * math.sin(theta1) + a2 * math.sin(theta1 + theta2)

threshold = 0.0002  # 0.2 is a large threshold
n = 1000
for _ in range(n):
    d_theta1 = (random.random() - 0.5) * 0.3
    d_theta2 = (random.random() - 0.5) * 0.3

    theta1 += d_theta1
    theta2 += d_theta2

    x_new = a1 * math.cos(theta1) + a2 * math.cos(theta1 + theta2)
    y_new = a1 * math.sin(theta1) + a2 * math.sin(theta1 + theta2)

    if abs(x_new - x_goal) < threshold and abs(y_new - y_goal) < threshold:
        print("Success!")
        print(f"Final position: ({x_new}, {y_new})")
        print(f"Final thetas: [{theta1}, {theta2}]")
    # If distance between the target is lower with the new x and y than with the current x and y, then swap them into the current x and y
```

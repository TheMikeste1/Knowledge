![[car_kinematics.png]]

$$\frac{L}{R} = \tan{\alpha} \Rightarrow R = \frac{L}{\tan{\alpha}}$$

```python
def motion(
		   alpha: float, 
		   velocity: Vector2, 
		   deltaTime: float = 0.1
) -> (float, float, float):
   . . .
   return x, y, theta
```

This is a simplified model, similar to a bicycle (since we're focussed only on the center points of the robot). In reality, changes would be required such as the two front wheels not being at the same angle.

$\theta$ is always assumed to be towards the front of the vehicle, meaning if the vehicle is moving straight up in the $y$ axis, $theta = 0$.

We can calculate the change in the car's orientation (angle) with the equation
$$\displaylines{
\dot\theta = \frac{v_{rear\,wheel}}{R}\\
\Rightarrow \dot\theta = \frac{v_{wheel}}{L} \times \tan{\alpha}
\,,}$$
where $\dot\theta$ is the change in angle.

We can calculate the change in x and y using
$$\displaylines{
\dot{x} = -v_{rear\,wheel} \times \sin{\theta} \\
\dot{y} = v_{rear\,wheel} \times \cos{\theta}
\,,}$$
where $\dot{x}$ and $\dot{y}$ are the change in $x$ and $y$, respectively. This is also known as velocity.

The new $x, y, \theta$ in the next time step ($(x, y, \theta)_{t + 1}$) will be equal to
$$\displaylines{
x_{t + 1} = x_t + \dot{x} \cdot \Delta{t}\\
y_{t + 1} = y_t + \dot{y} \cdot \Delta{t}\\
\theta_{t + 1} = \theta_t + \dot{\theta} \cdot \Delta{t}
\,,}$$
where $\Delta{t}$ is the length of the time step (*delta time*).




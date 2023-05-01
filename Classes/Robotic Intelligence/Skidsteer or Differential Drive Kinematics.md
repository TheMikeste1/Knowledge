![[skidsteer_kinematics.png]]

$$
C = \begin{bmatrix}
	v_{left} \\
	v_{right}
\end{bmatrix}
$$
where $C$ is the control vector (a potential instruction to the robot).

$$
R = \frac{W}{2} \cdot 
   \left(\frac{v_{right} + v_{left}}{v_{right} - v_{left}}\right)
$$

The change of theta, x, and y are described by
$$\displaylines{
\dot\theta = \frac{v_{right} - v_{left}}{W}\\
\dot{x} = -\frac{v_{right} + v_{left}}{2} \cdot \sin{\theta}\\
\dot{y} = -\frac{v_{right} + v_{left}}{2} \cdot \cos{\theta}
}$$

```python
def f_kinematics(self, v_left, v_right, x_0, y_0, theta_0, deltatime=0.1):
	x_new = x_0 - 0.5 * (v_right + v_left) * sin(theta_0) * deltatime
	y_new = y_0 + 0.5 * (v_right + v_left) * cos(theta_0) * deltatime
	theta_new = theta_0 + (v_right - v_left) / self.width * deltatime
	return (x_new, y_new, theta_new)
```

# Error
Let's say we have $C = \begin{bmatrix} 2 m/s \\ 1 m/s \end{bmatrix}$, $\Delta{t} = 1$, and $W = 1$. Then at timestep 1, we will have
$$\displaylines{
x_1 = 0\\
y_1 = 1.5\\
\theta_1 = -1 \text{ radians} \approx -57.29\degree
}$$
This can't be right though--we would have moved forward and not over to the right (see below).
![[skidsteer_error.png]]
We've actually traveled around a circle, with $\text{Circumference} = 3\pi \approx 9 \text{ meters}$. Our total distance is $1.5m$, so we can calculate our position with 
$$\displaylines{
\frac{1.5m}{9m} = \frac{\theta_t}{360\degree} \Rightarrow 
\theta_t = 60\degree\\
\sin{\theta_t} = \frac{y}{1.5m} \Rightarrow y = 1.5m\sin{\theta_t}\\
\cos{\theta_t} = \frac{x}{1.5m} \Rightarrow x = 1.5m\cos{\theta_t}
}$$
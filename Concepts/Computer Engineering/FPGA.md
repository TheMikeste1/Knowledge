---
type: definition
---
*FPGA*, short for *field programmable gate array*, is a type of circuit the can be reprogrammed in the field. This means it can be update without needing to return it to the manufacturer. This makes them extremely flexible and able to be adapted as required.

Programming FPGAs is different from typical software engineering. While most software engineering programming languages are procedural (first this, then that), FPGAs are parallel by their nature. That is, everything is running at the same time.

Programming FPGAs is also extremely low level. It works directly at the gate level. While they were originally only able to perform simple boolean operations, they now often have more complex components that allow them to perform many tasks, such as connecting to USB, memory, or other chips. Some even have *dedicated* or *hard* processors that allow them to run C code.

Major manufacturers in the FPGA market include:
- *Xilinx*- Owned by AMD and the creator of the original FPGA
- *Altera*- Owned by Intel
- *Lattice Semiconductor*- Offers less expensive FPGAs often used by the open source community

FPGAs are used in many applications, from routing internet traffic and cell phone towers, to assisting with high frequency trading, [[Machine Learning|AI]], and defense applications. FPGAs are well suited to these tasks because they are extremely fast and efficient at processing. FPGAs can be easily reprogrammed with redundancies, making them effective in space and other rad-high environments.

![When to use FPGAs vs microcontrollers vs ASICs](https://nandland.com/wp-content/uploads/2023/10/fpga-vs-microcontroller-vs-asic.png)

FPGAs are usually programmed using either [[VHDL]] or [[Verilog]].
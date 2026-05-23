> [!Goal Statement]
> Learn how to develop firmware from a software engineer's perspective.

We're going to learn to develop firmware using [[VHDL]]. The goal is to come up with a system to control firmware development in a way similar to software. That is:
- Version controlled
- Tested
- Linting
- Config management
- CI/CD for testing, linting, and producing artifacts automatically
- PRs

With this, we need to answer the following questions:
- What [[VCS]] serves firmware the best?
    - Git?
    - Subversion?
    - Mercurial?
    - Other?
- Which files need to be version controlled?
- How should projects be organized?
- What type of tests can be performed for firmware?
    - Unit? Would require simulation.
    - Integration?
    - System?
    - Coverage?
    - Where are the lines?
- What does/could a development environment look like?
    - Linters?
    - LSPs?
    - Debuggers?
    - TS grammars?
    - Other tools?
- How easily can we set up CI/CD?
    - Can we make [[Docker]] containers to build and test?
- What would a PR look like?

Along the way, we will need to learn how to write firmware. That means we need to identify tutorials and answer these questions through experimentation as we learn.
- [NAND Land](https://nandland.com)- FPGA, VHDL, and Verilog tutorials
- [Free Range VHDL](https://github.com/fabriziotappero/Free-Range-VHDL-book)- Free VHDL book
- [VHDL Whiz](https://vhdlwhiz.com)- Advanced VHDL tutorials
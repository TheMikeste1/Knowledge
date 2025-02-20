## Don't automatically clone submodule
Add `update = none` to the submodule's entry in `.gitmodules`. To checkout the submodule later, pass `--checkout` to `git submodule update`: `git submodule update --checkout`.

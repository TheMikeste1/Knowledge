## Don't automatically clone submodule
Add `update = none` to the submodule's entry in `.gitmodules`. To checkout the submodule later, pass `--checkout` to `git submodule update`: `git submodule update --checkout`.

## Ignore/Unignore repository file

Source: https://stackoverflow.com/a/23673910/10078500

### Ignore

`git update-index --assume-unchanged <filename>`

### Unignore

`git update-index --no-assume-unchanged <filename>`
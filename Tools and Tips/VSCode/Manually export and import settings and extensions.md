---
tags: vscode, programming, tool
---
# Export
Go to `%AppData%\Code\User` and copy `keybindings.json` and `settings.json`. You may want to copy your data in `snippets` and `profiles` as well.

To export the extensions, run
```bash
# Bash
code --list-extensions | tail -n +2 > extensions.txt
```
This works by having `code` print its extensions, removing the first line (to remove the header), and redirecting the output to `extensions.txt`.

On Powershell, use
```powershell
# Powershell
code --list-extensions > extensions.txt
```

# Import
To import, copy the `keybindings.json` and `settings.json` (as well as `snippets` and `profiles`) to `%AppData%\Code\User`.

To import extensions, take the generated `extensions.txt` and run 
```bash
# Bash
cat extensions.txt | while read line; do code --install-extension $line; done
```
or, on Powershell,
```powershell
cat extensions.txt | ForEach-Object { code --install-extension $_ }
```

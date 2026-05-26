#!/usr/bin/env python3
import json
import subprocess
import sys
from pathlib import Path

NOTES_ROOT = Path(__file__).parent.parent
OBSIDIAN_ROOT = NOTES_ROOT / ".obsidian"

def install_plugin(id_: str):
    try:
        subprocess.run(
            ["obsidian", "plugin:install", f"id={id_}"],
            check=True,
        )
    except subprocess.CalledProcessError as e:
        print(f"Failed to install plugin {id_}: {e.returncode}", file=sys.stderr)
        if e.stderr:
            print(f"\tError: {e.stderr}", file=sys.stderr)


def install_theme(name: str):
    try:
        subprocess.run(
            ["obsidian", "theme:install", f"name={name}"],
            check=True,
        )
    except subprocess.CalledProcessError as e:
        print(f"Failed to install theme {name}: {e.returncode}", file=sys.stderr)
        if e.stdout:
            print(f"\tError: {e.stdout}", file=sys.stderr)

def main():
    appearance_json = None
    with open(OBSIDIAN_ROOT / "appearance.json", "r") as fin:
        appearance_json = json.load(fin)
    if appearance_json is not None :
        if theme := appearance_json["cssTheme"]:
            install_theme(theme)

    plugins_json = None
    with open(OBSIDIAN_ROOT / "community-plugins.json", "r") as fin:
        plugins_json = json.load(fin)
    if plugins_json is not None :
        for id_ in plugins_json:
            install_plugin(id_)

if __name__ == "__main__":
    main()

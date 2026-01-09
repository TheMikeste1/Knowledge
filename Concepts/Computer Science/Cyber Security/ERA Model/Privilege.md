---
type: definition
---
Privilege in the [[ERA Model]] is defined as the level of access an [[Agents|Agent]] has to another [[Agents|Agent's]] asset components. A high level of privilege is not necessarily a bad thing: some agents need more privilege to do their job. Nevertheless, the [[Principle of Least Privilege]] should still be followed and privilege restricted where possible.

The ERA model recognizes five levels of privilege:
1. **None**. The agent has no access to the given component. ^49d7fb
2. **Self**. The agent only has access to the components that it owns.
    - E.g., A user only owns the files in their home directory.
3. **Cohort**. The agent has access to its own components and the components of other closely-related agents.
    - E.g., A user can see their own and their family members' calendars.
4. **Others'**. The agent has access to its own components and the components of unrelated agents.
5. **Global**. The agent has global access to all components in the system. ^66d59d

Privilege is determined on a per-[[Actions|action]] basis. For example, a user might be able to read any script in the system, but not be able to execute any. This would mean the user has [[#^66d59d|global]] [[Actions#^66b87c|read]] privilege, but no (or [[#^49d7fb|none]]) [[Actions#^56ffbc|possess]] privilege.

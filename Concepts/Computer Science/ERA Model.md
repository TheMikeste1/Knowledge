---
tags:
  - self-designed
  - software-security
---
ERA is a model that describes how much access an individual agent has in a system. "ERA" stands for [[Environment]], [[Resources]], and [[Agents]], which are the three assets identified in the model. Each asset can be further broken down into **components**, such as the File System Resource. Agents, such as applications or users, are then graded according to the [[Actions]] they can perform on those components and the level of [[Privilege]] they have for those actions. This model plays a critical role in identifying how much damage an agent can cause, and, by extension, how much effort should be dedicated towards securing that agent.

To apply ERA, one starts by identifying the components in the system and assigning them as an Environment, Resource, or Agent asset. Components can be as general or as specific as desired. For example, one could use ERA to score each asset as a whole, or drill down to more refined components (such as individual applications in the Agents category) and score each of those. A more mid-level component could be groups of components, such as all configuration files in a system. These component levels can be mixed and matched depending of the goals of the analysis.

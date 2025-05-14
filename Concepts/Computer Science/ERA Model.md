---
tags:
  - self-designed
  - software-security
---
ERA is a model that describes how much access an individual agent has in a system. "ERA" stands for [[Environment]], [[Resources]], and [[Agents]], which are the three asset categories identified in the model. Each category contains a set of **assets**, or **components**, such as the Network Resource. Agents, such as applications or users, are then graded according to the [[Actions]] they can perform on those assets and the level of [[Privilege]] they have for those actions. The actions and privilege from one agent to an asset is called an **interaction**. This model plays a critical role in identifying how much damage an agent can cause, and, by extension, how much effort should be dedicated towards securing that agent.

## Using ERA

### Identify Assets
To apply ERA, one starts by identifying the assets in the system and assigning them as an Environment, Resource, or Agent. Assets can be as general or as specific as desired. For example, one could use ERA to score each category as a whole, or drill down to more refined assets (such as individual applications in the Agents category) and score each of those. A more mid-level approach could be to group assets, such as all configuration files in a system. These approaches can be mixed and matched depending of the goals of the analysis. Assets can optionally be assigned an importance modifier, which indicates how essential, important, or otherwise in need of protection an asset is to the system. The larger the modifier, the more important.

### Score Interactions
Once assets have been identified, the actions each agent can take on each asset and the privilege for that action is tabulated and scored. For example, to document agents' interaction with the scripts on a computer, one might tabulate it as

| Agent | Asset   | Read   | Write | Possess |
| ----- | ------- | ------ | ----- | ------- |
| App1  | Scripts | None   | Self  | None    |
| User1 | Scripts | Others | Self  | Self    |

^b00882

Once an agent's interactions with different assets is identified, a score for each interaction can be assigned. This consists of two formulas: once to determine the score of an action, defined as #TODO, and a second to score the interaction, defined as #TODO. The scoring formulas themselves can be adapted to the analysis, but a simple ones could be

#TODO

$$
\DeclareMathOperator{\score}{score}
\DeclareMathOperator{\interaction}{interaction}
\DeclareMathOperator{\importance}{importance}
\DeclareMathOperator{\asset}{asset}
\DeclareMathOperator{\read}{read}
\DeclareMathOperator{\write}{write}
\DeclareMathOperator{\possess}{possess}

\score_\interaction = \importance_\asset \times (v_\read + v_\write + v_\possess)
$$

In other worse, a simply scoring formula could be to sum the values of the actions and multiply by the asset's importance. Assuming the asset's importance is 1 and action values are $\text{None} = 0$; $\text{Self} = 1$; $\text{Cohort} = 2$; $\text{Others} = 3$; $\text{Global} = 4$, the scores for the above [[#^b00882|interactions]] would be $\text{App1} = 1$ and $\text{User1} = 5$.

### Score Access
Once all interactions for an agent have been identified and scored,

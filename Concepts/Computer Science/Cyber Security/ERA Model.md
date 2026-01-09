---
type: model
tags:
  - self-designed
---
ERA is a model that describes how much access an individual agent has in a system. "ERA" stands for [[Environment]], [[Resources]], and [[Agents]], which are the three asset categories identified in the model. Each category contains a set of **assets**, or **components**, such as the Network Resource. Agents, such as applications or users, are then graded according to the [[Actions]] they can perform on those assets and the level of [[Privilege]] they have for those actions. The actions and privilege from one agent to an asset is called an **interaction**. This model plays a critical role in identifying how much damage an agent can cause, and, by extension, how much effort should be dedicated towards securing that agent.

## Using ERA

### 1. Identify Assets
To apply ERA, one starts by identifying the assets in the system and assigning them as an Environment, Resource, or Agent. Assets can be as general or as specific as desired. For example, one could use ERA to score each category as a whole, or drill down to more refined assets (such as individual applications in the Agents category) and score each of those. A more mid-level approach could be to group assets, such as all configuration files in a system. These approaches can be mixed and matched depending of the goals of the analysis. Assets can optionally be assigned an importance modifier, which indicates how essential, important, or otherwise in need of protection an asset is to the system. The larger the modifier, the more important.

ERA can also be applied to one asset or agent at a time, in which case one can focus on the associated assets. Applying ERA in a sequential approach (i.e., one agent at a time) can help break up the work of identifying assets. However, a final ERA pass should be performed afterward to ensure no interactions were missed due to not listing an asset in an earlier iteration.

### 2. Score Interactions
Once assets have been identified, the actions each agent can take on each asset and the privilege for that action is tabulated and scored. For example, to document agents' interaction with the scripts on a computer, one might tabulate it as

| Agent | Asset   | Read   | Write | Possess |
| ----- | ------- | ------ | ----- | ------- |
| App1  | Scripts | Self   | Self  | None    |
| User1 | Scripts | Others | Self  | Self    |
| User1 | App1    | None   | None  | Self    |
| App1  | Network | Self   | Self  | Self    |
| App2  | Network | Self   | None  | None    |

^b00882

Once an agent's interactions with different assets is identified, a score for each interaction can be assigned. This consists of two formulas. The first is to determine the score of an action, defined as $S_\mathrm{action}(a, p)$, where $a$ is the action and $p$ is the privilege for that action. The second calculates the score for the interaction, defined as $S_\mathrm{interaction}(m, s_\mathrm{read}, s_\mathrm{write}, s_\mathrm{possess})$, where $m$ is the importance modifier for the asset, and $s_\mathrm{a}$ is the score for action $\mathrm{a}$. The scoring formulas themselves can be adapted to the analysis, but a simple ones could be

$$
S_\mathrm{action}(a, p) =
  p
  \text{, where } p \text{ is some numeric value for the privilege}
$$
$$
S_\mathrm{interaction}(m, s_\mathrm{read}, s_\mathrm{write}, s_\mathrm{possess}) = 
  m \times (s_\mathrm{read} + s_\mathrm{write} + s_\mathrm{possess})
$$

In other words, a simply scoring formula could be to sum the scores for each action and multiply by the asset's importance. Assuming the asset's importance is 1 and action/privilege scores are $\text{None} = 0$, $\text{Self} = 1$, $\text{Cohort} = 2$, $\text{Others} = 3$, $\text{Global} = 4$, the scores for the above [[#^b00882|interactions]] would be:

| Agent | Asset   | Score |
| ----- | ------- | ----- |
| App1  | Scripts | 2     |
| User1 | Scripts | 5     |
| User1 | App1    | 1     |
| App1  | Network | 3     |
| App2  | Network | 1     |

^f7f277

### 3. Score Access
Once all interactions for an agent have been identified and scored, it can be beneficial to obtain an overall access score for an individual agent. The function used to calculate the access score is defined as $S_\mathrm{access}(s_\mathrm{interactions})$, where $s_\mathrm{interactions}$ is the list of the interaction scores for the agent. From here, any aggregation method can be used. If focusing on the agent's potential to cause damage, it may be beneficial to use $S_\mathrm{access}(s_\mathrm{interactions}) = \sum{s_\mathrm{interactions}}$. This has the advantage of including all interactions for the agent as part of the score, but can cause an agent with many low-level interactions to overtake those with few, larger interactions. Alternatively, $S_\mathrm{access}(s_\mathrm{interactions}) = \max{s_\mathrm{interactions}}$ can help identify that most impactful interactions and agents. For example, using the [[#^f7f277|interaction score table]], we can calculate the following scores for each agent:

| Agent | Aggregate Score | Max Score |
| ----- | --------------- | --------- |
| App1  | 5               | 3         |
| App2  | 1               | 1         |
| User1 | 6               | 5         |

Scoring all agents' access allows teams to identify which agents need more protection and scrutiny, therefore directing work towards the agents with the highest potential for causing damage. Further work could extend access scoring to provide a "score inheritance" for agents that interact with other agents. E.g., User1 can possess App1, and so inherits App1's actions and privilege to some extent.

### 4. Optionally Score Assets
Thus far, all scoring has been focused on determining which agents have the highest access. However, we can also use ERA to identify which *assets* need securing.

We can score an asset's accessibility using the same $S_\mathrm{access}(s_\mathrm{interactions}) = \sum{s_\mathrm{interactions}}$ formulas from earlier. However, this time $s_\mathrm{interactions}$ are the interactions associated with the *asset* instead of the *agent*. Again, using the [[#^f7f277|interaction score table]], we can calculate

| Asset   | Aggregate Score | Max Score |
| ------- | --------------- | --------- |
| App1    | 1               | 1         |
| Scripts | 7               | 5         |
| Network | 4               | 3         |

This score tells us which assets need securing, and allows teams to identify which assets might be too available, allowing teams to better secure them.

### 5. Optional Graph the Access vs. Accessibility Scores
If both an agent's access and accessibility is graded, the scores can be graphed to easily identify which agents have a lot of power and have a large attack surface. Alternatively, if some aggregation method is used to keep an agent's score inside bounds (such as by averaging the interactions), the scores can be put on something similar to a risk matrix to identify which agents need immediate action.

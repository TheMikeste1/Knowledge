---
tags:
  - techonology
  - cyber-security
type: paper
author: Howard, Michael
coauthors:
  - Pincus, Jon
  - Wing, Jeannette M.
date_published: 2005-01-01
genre:
  - technology
  - cyber-security
times_read: 1
date_first_finished: 2025-09-16
date_last_started: 2025-09-16
date_last_finished: 2025-09-16
currently_reading: false
urls:
  - https://www.cs.cmu.edu/~wing/publications/Howard-Wing03.pdf
  - https://doi.org/10.1007/0-387-24006-3_8
short_description: Howard et al. propose a metric for determining whether one version of a system is more secure than another.
---
**Abstract**:: 
> We propose a metric for determining whether one version of a system is more secure than another with respect to a fixed set of dimensions. Rather than count bugs at the code level or count vulnerability reports at the system level, we count a system’s attack opportunities. We use this count as an indication of the system’s “attackability,” likelihood that it will be successfully attacked. We describe a system’s attack surface along three abstract dimensions: targets and enablers, channels and protocols, and access rights. Intuitively, the more exposed the system’s surface, the more attack opportunities, and hence the more likely it will be a target of attack. Thus, one way to improve system security is to reduce its attack surface.
> To validate our ideas, we recast Microsoft Security Bulletin MS02-005 using our terminology, and we show how Howard’s Relative Attack Surface Quotient for Windows is an instance of our general metric.

**Notes**:: Instead of giving an arbitrary metric or empty statement, Howard et al. instead compare systems, saying something like "System A is more secure than System B with respect to a fixed set of \[predefined\] dimensions" (p. 1). The analysis seems to focus on comparing *versions* of software, though it appears to also work with software applications operating in the same system. The framework proposed gives a relative metric, similar to the [[ERA Model]]. This metric is dubbed the Relative Attack Surface Quotient (RASQ). 

Howard et al.'s framework is composed of targets and enablers, channels and protocols, and access rights. Targets are states or resources an attacker wants to attack, and enablers are resources that are used to carry out that attack. Channels and protocols are ways an attack gains access to targets, whereas protocols determine the rules for interaction between parties on a channel. Finally, access rights are rights associated with each process and data resource.
^4b3393

**Thoughts**::  In relation to the ERA model, Howard et al.'s model appears to attempt to trace through a system to gain access to assets, whereas the ERA model more statically defines the interactions between assets. This means Howard et al.'s model requires in-depth knowledge of how the system and code works. An example given by the paper is if a program checks the length of an input string `s` (p. 5): 
$$
\begin{gather*}
       \text{length(s)} \le 512 \Rightarrow \text{``process normally''} \\
\land\;\text{length(s)} \gt 512 \Rightarrow \text{``report error and terminate''}
\end{gather*}
$$

The ERA model deliberately avoids diving too deeply into behavior, preferring instead to look at assets as black boxes and only caring about what they can access and who can access them. This limits the ERA model's ability to identify specific vulnerabilities, instead letting it serve as a map of where problematic vulnerabilities might exist. Due to this difference in philosophy, the two models may be able to work together. Researchers might be able to first run the ERA Model, then use the interactions discovered to perform the state transitions in Howard et al.'s RASQ framework. This may allow researchers to perform faster and more specific analyzes by allowing them to take high-access and highly-accessible agents from the ERA model and calculating a RASQ for them against other applications in the system.

Additionally, ERA may help identify components in the RASQ framework. Agents with high access could be an [[#^4b3393|enabler]] for many assets.

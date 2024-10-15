---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
Hello👋, here is a person who stumbled into the field of AI by accident and still hasn't left. He graduated from the Gaoling School of Artificial Intelligence at Renmin University of China with a bachelor's degree.

He is passionate about hackathons and has secured significant prizes in various competitions organized by prominent Chinese internet companies. His motto is to venture forth like bounty hunters!

His research interests include LLM-based multi-agent, LLM implicit/explicit reasoning and tool learning. This journey began during his internship at [Kwai](https://www.kuaishou.com/), where he experienced the excitement of continuous exploration.
# 🔥 News
- *2024.06.23*: &nbsp;🎓🎓 I have graduated from Renmin University of China! Reluctant to leave the good friends I've made here, but life always has its crossroads.
- *2024.06.13*: &nbsp;🎉🎉 My team got the third place in the Alibaba 2024 Global Mathematics Competition AI Challenge! 🥉 ($2000 bonus)
- *2024.05.29*: &nbsp;🥳🥳 My thesis has successfully passed the defense as a recommended thesis at Renmin University of China! Looking forward to the day it gets submitted for publication!

# 📝 Publications and Preprints

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ARXIV</div><img src='images/aflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AFlow: Automating Agentic Workflow Generation](https://arxiv.org/abs/2410.10762)

Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu, **Fengwei Teng**, Xionghui Chen, Jiaqi Chen, Mingchen Zhuge, Xin Cheng, Sirui Hong, Jinlin Wang, Bingnan Zheng, Bang Liu, Yuyu Luo, Chenglin Wu

We introduces AFlow, an automated framework that reformulates workflow optimization as a search problem over code-represented workflows, using Monte Carlo Tree Search to efficiently explore and refine workflows through code modification and execution feedback. By leveraging this approach, AFlow achieves superior performance compared to state-of-the-art baselines across multiple benchmarks, while also enabling smaller models to outperform larger ones at a fraction of the cost.

</div>

<!-- - Graph-DPO: Preference Optimization on Reasoning Graph of LLM-based Multi-Agent<br>

- Meta Code Snippet Toolkit: Learning Transition Functions from Code Generation Trajectories<br> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition]()

**Fengwei Teng**, Yankai Lin

[**Project**]() <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1"> -->

# 🎖 Honors and Awards
- *2024.06* Alibaba Global Mathematics Competition AI Challenge - Third Place Award🥉 (3th out of 563 teams) ($2000)
\[[code](https://github.com/didiforgithub/MetaGPT-MathAI)\]
- *2023.12* Baidu & FounderPark AGI Hackathon - Second Place Award🥈 (¥10000)
\[[code](https://github.com/didiforgithub/Prompt-Navigator)\]
- *2023.05* The International Mathematical Contest in Modeling (MCM) - Meritorious Award
\[[pdf](https://www.overleaf.com/read/vpvcsksqyrfz#5df8c5)\]
- *2022.12* The Chinese Mathematics Competitions - Second Prize Award

# 📖 Educations
- *2020.09 - 2024.06* B. Eng in Artificial, Renmin University of China, Gaoling School of Artificial Intelligence <span style="float: right;">Beijing, China</span>

# 💬 Invited Talks
I have given two speeches in Chinese about the Alibaba Global Mathematics Competition AI Challenge. Once there is a replay video link, I will update it in a timely manner.

# 💻 Internships
- *2023.09 - 2024.01* <img src="images/kuaishou.png" alt="" style="width: auto; height: 1em; vertical-align: middle;">Kwai Technology
  - Research Focus: LLM-based Agents; Advanced Data Analysis
  - Main Contributions:
    - Define the code for data analysis and visualization as a finite automaton process, by learning transfer equations as tools from successful trajectories, defining a correct trajectory through a finite number of ordered calls to functions in the transfer equation library.
    - To address the challenge of white boxing, use retrieval-augmentation methods to provide a visual explanation process for each tool calling, enhancing users’ confidence in the results provided by the AI copilot.
- *2023.05 - 2023.07* <img src="https://img.36krcdn.com/hsossms/20230424/v2_06078b14341f4486835b4b05ec8d8fb4@000000_oswg7548oswg132oswg132_img_000" style="width: auto; height: 1em; vertical-align: middle;">Deep Space Symphony
  - Research Focus: Music-Driven Motion Diffusion; Controllable Generation
  - Main Contributions:
    - Combine VQVAE and Diffusion: independently train VQVAE on motion sequences to obtain discrete code book of keyframe, add music features in the attention during the diffusion phase, then obtain the prior of VQVAE in the encoder stage, and restore it to a music-driven motion sequence in the decoder stage.
    - Utilize choreography knowledge for fine-grained generation: edit discrete codes on time series and constrain discrete codes according to beats; perform lyrics-music separation for music with lyrics and repeat actions according to the lyrics.
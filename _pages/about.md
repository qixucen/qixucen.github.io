---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.paper-title {
    font-size: 1.2em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
}

.author-list {
    color: #666;
    font-style: italic;
    margin-bottom: 15px;
}

.author-highlight {
    font-weight: bold;
    color: #3498db;
}

.badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: bold;
    margin-bottom: 10px;
}

.badge-oral {
    background-color: #e74c3c;
    color: white;
}

.badge-arxiv {
    background-color: #3498db;
    color: white;
}

.link-group {
    margin: 10px 0;
}

.link-group a {
    display: inline-block;
    margin-right: 8px;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #f5f5f5;
    text-decoration: none;
    transition: all 0.3s ease;
}

.link-group a:hover {
    background-color: #e0e0e0;
}

.award-item {
    margin-bottom: 15px;
    padding-left: 20px;
    border-left: 3px solid #3498db;
}

.award-date {
    color: #666;
    font-style: italic;
}

.award-title {
    font-weight: bold;
    color: #2c3e50;
}

.paper-box {
    border: 1px solid #eee;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "<https://cdn.jsdelivr.net/gh/>" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "<https://raw.githubusercontent.com/>" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
Hello👋, here is a person who stumbled into  the field of AI by accident and still hasn't left. He graduated from the Gaoling School of Artificial Intelligence at Renmin University of China with a bachelor's degree.

He is passionate about hackathons and has secured significant prizes in various competitions organized by prominent Chinese internet companies.

His research interests lie primarily in Natural Language Processing (NLP), with a focus on LLM test-time scaling through approaches including reasoning frameworks, reasoning models (e.g., o1 and R1), and agentic workflow optimization.

He is still seeking PhD opportunities. It's a long journey, but he never lacks the perseverance to grow through adversity.

# 🔥 News

- *2024.03.02*: &nbsp;🔥🔥 [AoT](https://arxiv.org/abs/2502.12018) has ignited widespread discussions on X (370K+ Views)! Take a look at the [post](https://x.com/didiforx/status/1895902471635288252).
- *2024.02.11*: &nbsp;🥳🥳 [AFlow](https://arxiv.org/abs/2410.10762) is accepted by ICLR 2025 as an <span style="color: red;">Oral</span>!
- *2024.10.15*: &nbsp;📑📑 Life's first paper! Please explore our innovative work on the Automated Agentic Workflow.
- *2024.06.13*: &nbsp;🎉🎉 My team got the third place in the Alibaba 2024 Global Mathematics Competition AI Challenge! 🥉 ($2000 bonus)

# 📝 Publications

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge badge-oral">ICLR 2025 Oral (1.8%)</div>
<img src='images/aflow.png' alt="sym" width="100%">
</div>
</div>
<div class='paper-box-text' markdown="1">

<div class="paper-title">AFlow: Automating Agentic Workflow Generation</div>

<div class="author-list">
Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu, <span class="author-highlight">Fengwei Teng</span>, Xionghui Chen, Jiaqi Chen, Mingchen Zhuge, Xin Cheng, Sirui Hong, Jinlin Wang, Bang Liu, Yuyu Luo, Chenglin Wu
</div>

<div class="link-group">
\[[paper](https://arxiv.org/abs/2410.10762)\]
\[[code](https://github.com/geekan/MetaGPT)\]<img src="https://img.shields.io/github/stars/geekan/MetaGPT?style=social" style="display: inline-block; vertical-align: middle;">
\[[report](https://mp.weixin.qq.com/s/5YpPFYIpuCkSf0sJp0_RnQ)\] (机器之心)
</div>

We introduces AFlow, an automated framework that reformulates workflow optimization as a search problem over code-represented workflows, using Monte Carlo Tree Search to efficiently explore and refine workflows through code modification and execution feedback. By leveraging this approach, AFlow achieves superior performance compared to state-of-the-art baselines across multiple benchmarks, while also enabling smaller models to outperform larger ones at a fraction of the cost.

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge badge-arxiv">ARXIV</div>
<img src='images/aot.png' alt="sym" width="100%">
</div>
</div>
<div class='paper-box-text' markdown="1">

<div class="paper-title">Atom of Thoughts for Markov LLM Test-Time Scaling</div>

<div class="author-list">
<span class="author-highlight">Fengwei Teng</span>, Zhaoyang Yu, Quan Shi, Jiayi Zhang, Chenglin Wu, Yuyu Luo
</div>

<div class="link-group">
\[[paper](https://arxiv.org/abs/2502.12018)\]
\[[code](https://github.com/qixucen/atom)\]<img src="https://img.shields.io/github/stars/qixucen/atom?style=social" style="display: inline-block; vertical-align: middle;">
\[[post](https://x.com/didiforx/status/1895902471635288252)\]<img src="https://img.shields.io/badge/Views-370K+-blue?logo=x&style=flat" style="display: inline-block; vertical-align: middle;">
\[[huggingface](https://huggingface.co/papers/2502.12018)\]
\[[report](https://mp.weixin.qq.com/s/UPMC6aQ1zHtpHO4FL1eVdA)\] (机器之心)
</div>

We introduce Atom of Thoughts (AoT), a novel reasoning framework that transforms complex reasoning processes into a Markov-style sequence of atomic questions. By implementing a two-phase transition mechanism of decomposition and contraction, AoT eliminates the need to maintain historical dependencies during reasoning, allowing models to focus computational resources on the current question state. Experiments across multiple benchmarks demonstrate AoT's effectiveness both as a standalone framework and as a plug-in enhancement for existing test-time scaling methods.

</div>
</div>

# 🎖 Honors and Awards

<div class="award-item">
<span class="award-date">2024.06</span>
<div class="award-title">Alibaba Global Mathematics Competition AI Challenge - Third Place Award 🥉</div>
<div>(3rd out of 563 teams) ($2000)</div>
\[[code](https://github.com/didiforgithub/MetaGPT-MathAI)\]<img src="https://img.shields.io/github/stars/didiforgithub/MetaGPT-MathAI?style=social" style="display: inline-block; vertical-align: middle;">
</div>

- *2023.12* Baidu & FounderPark AGI Hackathon - Second Place Award🥈 (¥10000)
\[[code](https://github.com/didiforgithub/Prompt-Navigator)\]<img src="https://img.shields.io/github/stars/didiforgithub/Prompt-Navigator?style=social" style="display: inline-block; vertical-align: middle;">
- *2023.05* The International Mathematical Contest in Modeling (MCM) - Meritorious Award
\[[pdf](https://www.overleaf.com/read/vpvcsksqyrfz#5df8c5)\]
- *2022.12* The Chinese Mathematics Competitions - Second Prize Award

# 📖 Educations

- *2020.09 - 2024.06* B. Eng in Artificial, Renmin University of China, Gaoling School of Artificial Intelligence <span style="float: right;">Beijing, China</span>
  - Graduation thesis recommendation

# 💬 Invited Talks

I have given two speeches in Chinese about the Alibaba Global Mathematics Competition AI Challenge. Once there is a replay video link, I will update it in a timely manner.

# 📅 Internships

- *2023.09 - 2024.01* <img src="images/kuaishou.png" alt="" style="width: auto; height: 1em; vertical-align: middle;">Kwai Technology
  - Research Focus: LLM-based Agents; Advanced Data Analysis
- *2023.05 - 2023.07* <img src="https://img.36krcdn.com/hsossms/20230424/v2_06078b14341f4486835b4b05ec8d8fb4@000000_oswg7548oswg132oswg132_img_000" style="width: auto; height: 1em; vertical-align: middle;">Deep Space Symphony
  - Research Focus: Music-Driven Motion Diffusion; Controllable Generation

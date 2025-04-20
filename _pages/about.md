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
.badge {
    display: inline-block;
    padding: 4px 8px;
    margin: 0 4px;
    border-radius: 4px;
    font-size: 0.9em;
    font-weight: bold;
    color: white;
}

.badge-iclr {
    background-color: #e74c3c;
}

.badge-arxiv {
    background-color: #3498db;
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

He is passionate about hackathons and has secured significant prizes in various competitions organized by prominent Chinese internet companies. Nowadays, he is more involved as a hackathon organizer.

His research interests lie primarily in Natural Language Processing (NLP), with a focus on LLM test-time scaling through approaches including reasoning frameworks, reasoning models (e.g., o1 and R1), and agentic workflow optimization.

He is still seeking PhD opportunities. It's a long journey, but he never lacks the perseverance to grow through adversity.

<div class="scholar-stats">
  <a href="https://scholar.google.com/citations?user=HLT8CC8AAAAJ" target="_blank">
    <img src="https://img.shields.io/badge/Citations-{{ site.data.google_scholar_stats.citations | default: 0 }}-blue?logo=google-scholar&style=flat" alt="Google Scholar Citations">
  </a>
  <a href="https://scholar.google.com/citations?user=HLT8CC8AAAAJ" target="_blank">
    <img src="https://img.shields.io/badge/h-index-{{ site.data.google_scholar_stats.h_index | default: 0 }}-blue?logo=google-scholar&style=flat" alt="Google Scholar h-index">
  </a>
  <script>
    // 使用 google-scholar-stats 获取实时数据
    fetch('{{ url }}')
      .then(response => response.json())
      .then(data => {
        document.querySelectorAll('.scholar-stats img').forEach(img => {
          if (img.alt.includes('Citations')) {
            img.src = img.src.replace(/Citations-\d+/, `Citations-${data.citations}`);
          } else if (img.alt.includes('h-index')) {
            img.src = img.src.replace(/h-index-\d+/, `h-index-${data.h_index}`);
          }
        });
      });
  </script>
</div>

# 🔥 News

- *2024.03.02*: &nbsp;🔥🔥 [AoT](https://arxiv.org/abs/2502.12018) has ignited widespread discussions on X (380K+ Views)! Take a look at the [post](https://x.com/didiforx/status/1895902471635288252).
- *2024.02.11*: &nbsp;🥳🥳 [AFlow](https://arxiv.org/abs/2410.10762) is accepted by ICLR 2025 as an <span style="color: red;">Oral</span>!
- *2024.06.13*: &nbsp;🎉🎉 My team got the third place in the Alibaba 2024 Global Mathematics Competition AI Challenge! 🥉 ($2000 bonus)

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-iclr">ICLR 2025 Oral (1.8%)</div><img src='images/aflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[ICLR 2025 Oral (1.8%)]** AFlow: Automating Agentic Workflow Generation \[[paper](https://arxiv.org/abs/2410.10762)\]\[[code](https://github.com/geekan/MetaGPT)\]<img src="https://img.shields.io/github/stars/geekan/MetaGPT?style=social" style="display: inline-block; vertical-align: middle;">\[[report](https://mp.weixin.qq.com/s/5YpPFYIpuCkSf0sJp0_RnQ)\] (机器之心)

Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu, **Fengwei Teng**, Xionghui Chen, Jiaqi Chen, Mingchen Zhuge, Xin Cheng, Sirui Hong, Jinlin Wang, Bang Liu, Yuyu Luo, Chenglin Wu

We introduces AFlow, an automated framework that reformulates workflow optimization as a search problem over code-represented workflows, using Monte Carlo Tree Search to efficiently explore and refine workflows through code modification and execution feedback. By leveraging this approach, AFlow achieves superior performance compared to state-of-the-art baselines across multiple benchmarks, while also enabling smaller models to outperform larger ones at a fraction of the cost.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-arxiv">ARXIV</div><img src='images/aot.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[ARXIV]** Atom of Thoughts for Markov LLM Test-Time Scaling \[[paper](https://arxiv.org/abs/2502.12018)\]\[[code](https://github.com/qixucen/atom)\]<img src="https://img.shields.io/github/stars/qixucen/atom?style=social" style="display: inline-block; vertical-align: middle;">\[[post](https://x.com/didiforx/status/1895902471635288252)\]<img src="https://img.shields.io/badge/Views-380K+-blue?logo=x&style=flat" style="display: inline-block; vertical-align: middle;">\[[report](https://mp.weixin.qq.com/s/UPMC6aQ1zHtpHO4FL1eVdA)\] (机器之心)

**Fengwei Teng**, Zhaoyang Yu, Quan Shi, Jiayi Zhang, Chenglin Wu, Yuyu Luo

We introduce Atom of Thoughts (AoT), a novel reasoning framework that transforms complex reasoning processes into a Markov-style sequence of atomic questions. By implementing a two-phase transition mechanism of decomposition and contraction, AoT eliminates the need to maintain historical dependencies during reasoning, allowing models to focus computational resources on the current question state. Experiments across multiple benchmarks demonstrate AoT's effectiveness both as a standalone framework and as a plug-in enhancement for existing test-time scaling methods.

</div>
</div>

# 🎖 Honors and Awards

- *2024.06* Alibaba Global Mathematics Competition AI Challenge - Third Place Award🥉 (3rd out of 563 teams) ($2000)
\[[code](https://github.com/didiforgithub/MetaGPT-MathAI)\]<img src="https://img.shields.io/github/stars/didiforgithub/MetaGPT-MathAI?style=social" style="display: inline-block; vertical-align: middle;">
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

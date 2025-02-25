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

<style>
/* Global styling */
body {
  line-height: 1.6;
}

/* Section styling */
.section-title {
  border-bottom: 2px solid #4b6cb7;
  padding-bottom: 8px;
  margin-top: 30px;
  margin-bottom: 20px;
}

/* News items styling */
.news-item {
  display: flex;
  margin-bottom: 10px;
  align-items: baseline;
}

.news-date {
  font-weight: bold;
  min-width: 100px;
  color: #555;
}

/* Publication styling */
.paper-box {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 25px;
  border-radius: 8px;
  overflow: hidden;
}

.paper-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Awards styling */
.award-item {
  display: flex;
  margin-bottom: 15px;
}

.award-date {
  min-width: 80px;
  font-weight: bold;
  color: #555;
}

/* Skills section */
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.skill-tag {
  background: #f0f0f0;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9em;
}

/* Social links */
.social-icons {
  display: flex;
  gap: 15px;
  margin: 20px 0;
}

.social-icon {
  font-size: 24px;
  color: #555;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #4b6cb7;
}
</style>

<span class='anchor' id='about-me'></span>

<!-- Profile Header with Photo -->
<div style="display: flex; align-items: center; margin-bottom: 30px;">
  <img src="images/profile.jpg" alt="Profile Photo" style="width: 150px; height: 150px; border-radius: 50%; margin-right: 30px; object-fit: cover;">
  <div>
    <h1 style="margin-bottom: 10px;">Fengwei Teng</h1>
    Hello👋, here is a person who stumbled into the field of AI by accident and still hasn't left. He graduated from the Gaoling School of Artificial Intelligence at Renmin University of China with a bachelor's degree.
    
    <!-- Add social media icons -->
    <div class="social-icons">
      <a href="https://github.com/yourusername" class="social-icon"><i class="fab fa-github"></i></a>
      <a href="https://scholar.google.com/citations?user=yourid" class="social-icon"><i class="ai ai-google-scholar"></i></a>
      <a href="https://linkedin.com/in/yourusername" class="social-icon"><i class="fab fa-linkedin"></i></a>
      <a href="https://twitter.com/yourusername" class="social-icon"><i class="fab fa-twitter"></i></a>
    </div>
  </div>
</div>

<!-- Rest of biography -->
<p>
He is passionate about hackathons and has secured significant prizes in various competitions organized by prominent Chinese internet companies. His motto is to venture forth like bounty hunters!
</p>

<p>
His research interests primarily focus on Natural Language Processing (NLP), particularly Large Language Model (LLM)-based Agents and LLM Reasoning. Recently, his work has centered on agentic workflow optimization and the development of reasoning frameworks leveraging inference-time scaling techniques. His research in this area began during his internship at <a href="https://www.kuaishou.com/">Kwai</a>, where he gained hands-on experience in exploring and advancing these technologies.
</p>

<!-- Research Interests as Tags -->
<h2 class="section-title">🔬 Research Interests</h2>
<div class="skills-container">
  <span class="skill-tag">LLM-based Agents</span>
  <span class="skill-tag">LLM Reasoning</span>
  <span class="skill-tag">Agentic Workflow Optimization</span>
  <span class="skill-tag">Inference-time Scaling</span>
  <span class="skill-tag">Natural Language Processing</span>
</div>

<h2 class="section-title">🔥 News</h2>
<div class="news-item">
  <span class="news-date">2024.02.11</span>
  <span>🥳 <a href="https://arxiv.org/abs/2410.10762">AFlow</a> is accepted by ICLR 2025 as an <span style="color: red; font-weight: bold;">Oral</span>!</span>
</div>
<div class="news-item">
  <span class="news-date">2024.10.15</span>
  <span>📑 Life's first paper! Please explore our innovative work on the Automated Agentic Workflow.</span>
</div>
<div class="news-item">
  <span class="news-date">2024.06.13</span>
  <span>🎉 My team got the third place in the Alibaba 2024 Global Mathematics Competition AI Challenge! 🥉 ($2000 bonus)</span>
</div>

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025 <span style="color: red;">Oral</span></div><img src='images/aflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[ICLR 2025 Oral (1.8%)]** AFlow: Automating Agentic Workflow Generation \[[paper](https://arxiv.org/abs/2410.10762)\]\[[code](https://github.com/didiforgithub/MetaGPT-MathAI/tree/main/examples/ags)\]\[[report](https://mp.weixin.qq.com/s/5YpPFYIpuCkSf0sJp0_RnQ)\]

Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu, **Fengwei Teng**, Xionghui Chen, Jiaqi Chen, Mingchen Zhuge, Xin Cheng, Sirui Hong, Jinlin Wang, Bingnan Zheng, Bang Liu, Yuyu Luo, Chenglin Wu

We introduces AFlow, an automated framework that reformulates workflow optimization as a search problem over code-represented workflows, using Monte Carlo Tree Search to efficiently explore and refine workflows through code modification and execution feedback. By leveraging this approach, AFlow achieves superior performance compared to state-of-the-art baselines across multiple benchmarks, while also enabling smaller models to outperform larger ones at a fraction of the cost.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ARXIV</div><img src='images/aot.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[ARXIV]** Atom of Thoughts for Markov LLM Test-Time Scaling \[[paper](https://arxiv.org/abs/2502.12018)\]\[[code](https://github.com/qixucen/atom)\]\[[huggingface daily](https://huggingface.co/papers/2502.12018)\]

**Fengwei Teng**, Zhaoyang Yu, Quan Shi, Jiayi Zhang, Chenglin Wu, Yuyu Luo

We introduce Atom of Thoughts (AoT), a novel reasoning framework that transforms complex reasoning processes into a Markov-style sequence of atomic questions. By implementing a two-phase transition mechanism of decomposition and contraction, AoT eliminates the need to maintain historical dependencies during reasoning, allowing models to focus computational resources on the current question state. Experiments across multiple benchmarks demonstrate AoT's effectiveness both as a standalone framework and as a plug-in enhancement for existing test-time scaling methods.

</div>
</div>

# �� Honors and Awards
<div class="award-item">
  <span class="award-date">2024.06</span>
  <span>Alibaba Global Mathematics Competition AI Challenge - Third Place Award🥉 (3rd out of 563 teams) ($2000)
  <a href="https://github.com/didiforgithub/MetaGPT-MathAI">[code]</a></span>
</div>
- *2023.12* Baidu & FounderPark AGI Hackathon - Second Place Award🥈 (¥10000)
\[[code](https://github.com/didiforgithub/Prompt-Navigator)\]
- *2023.05* The International Mathematical Contest in Modeling (MCM) - Meritorious Award
\[[pdf](https://www.overleaf.com/read/vpvcsksqyrfz#5df8c5)\]
- *2022.12* The Chinese Mathematics Competitions - Second Prize Award

# 📖 Educations
- *2020.09 - 2024.06* B. Eng in Artificial, Renmin University of China, Gaoling School of Artificial Intelligence <span style="float: right;">Beijing, China</span>
  - Graduation thesis recommendation


# 💬 Invited Talks
I have given two speeches in Chinese about the Alibaba Global Mathematics Competition AI Challenge. Once there is a replay video link, I will update it in a timely manner.

# 💻 Internships
- *2023.09 - 2024.01* <img src="images/kuaishou.png" alt="" style="width: auto; height: 1em; vertical-align: middle;">Kwai Technology
  - Research Focus: LLM-based Agents; Advanced Data Analysis
  - Main Contributions:
    - Define the code for data analysis and visualization as a finite automaton process, by learning transfer equations as tools from successful trajectories, defining a correct trajectory through a finite number of ordered calls to functions in the transfer equation library.
    - To address the challenge of white boxing, use retrieval-augmentation methods to provide a visual explanation process for each tool calling, enhancing users' confidence in the results provided by the AI copilot.
- *2023.05 - 2023.07* <img src="https://img.36krcdn.com/hsossms/20230424/v2_06078b14341f4486835b4b05ec8d8fb4@000000_oswg7548oswg132oswg132_img_000" style="width: auto; height: 1em; vertical-align: middle;">Deep Space Symphony
  - Research Focus: Music-Driven Motion Diffusion; Controllable Generation
  - Main Contributions:
    - Combine VQVAE and Diffusion: independently train VQVAE on motion sequences to obtain discrete code book of keyframe, add music features in the attention during the diffusion phase, then obtain the prior of VQVAE in the encoder stage, and restore it to a music-driven motion sequence in the decoder stage.
    - Utilize choreography knowledge for fine-grained generation: edit discrete codes on time series and constrain discrete codes according to beats; perform lyrics-music separation for music with lyrics and repeat actions according to the lyrics.
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

His research interests primarily focus on Natural Language Processing (NLP), particularly Large Language Model (LLM)-based Agents and LLM Reasoning. Recently, his work has centered on agentic workflow optimization and the development of reasoning frameworks leveraging inference-time scaling techniques. His research in this area began during his internship at [Kwai](https://www.kuaishou.com/), where he gained hands-on experience in exploring and advancing these technologies.

# 🔥 News
- *2024.02.11*: &nbsp;🥳🥳 [AFlow](https://arxiv.org/abs/2410.10762) is accepted by ICLR 2025 as an <span style="color: red;">Oral</span>!
- *2024.10.15*: &nbsp;📑📑 Life's first paper! Please explore our innovative work on the Automated Agentic Workflow.
- *2024.06.13*: &nbsp;🎉🎉 My team got the third place in the Alibaba 2024 Global Mathematics Competition AI Challenge! 🥉 ($2000 bonus)

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

# 🎖 Honors and Awards
- *2024.06* Alibaba Global Mathematics Competition AI Challenge - Third Place Award🥉 (3rd out of 563 teams) ($2000)
\[[code](https://github.com/didiforgithub/MetaGPT-MathAI)\]
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

# 暗色模式和互动性优化方案

在网页开发中，提供暗色模式已经成为现代网站的标准功能之一。我注意到您的学术主页已经有了暗色模式切换按钮，但点击时没有效果。此外，我们可以增强网站的互动性，提高用户体验。

主要问题是暗色模式切换功能没有实际实现，按钮存在但没有对应的JavaScript代码来处理点击事件。我将提供修复方案及其他交互改进。

## 修改方案

### 1. 添加暗色模式CSS样式和JavaScript功能

```css:assets/css/main.scss
/* Dark Theme Styles */
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --link-color: #4B6CB7;
  --header-bg: #ffffff;
  --border-color: #ddd;
  --code-bg-color: #f5f5f5;
  --box-shadow: 0 1px 1px rgba(0, 0, 0, 0.125);
}

.dark-theme {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  --link-color: #8cb4ff;
  --header-bg: #222222;
  --border-color: #444;
  --code-bg-color: #2d2d2d;
  --box-shadow: 0 1px 1px rgba(255, 255, 255, 0.05);
  
  background-color: var(--bg-color);
  color: var(--text-color);
  
  a:not(.btn) {
    color: var(--link-color);
  }
  
  .masthead {
    background-color: var(--header-bg);
    border-bottom: 1px solid var(--border-color);
  }
  
  .author__urls-wrapper {
    background-color: var(--bg-color);
  }
  
  .author__urls {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  code {
    background-color: var(--code-bg-color);
  }
  
  pre {
    background-color: var(--code-bg-color);
  }
  
  th, td {
    border-bottom: 1px solid var(--border-color);
  }
  
  .profile_box {
    background-color: var(--bg-color);
    box-shadow: var(--box-shadow);
  }
}

/* Apply default theme variables to non-dark-theme elements */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.masthead {
  background-color: var(--header-bg);
}

a:not(.btn) {
  color: var(--link-color);
}
```

### 2. 更新JavaScript实现暗色模式切换功能

```javascript:assets/js/custom.js
// 添加平滑滚动效果
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有导航链接
  const navLinks = document.querySelectorAll('.masthead__menu-item a');
  
  // 添加点击事件监听器
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 只对锚点链接进行处理
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // ... existing code ...
        }
      }
    });
  });
  
  // ... existing code ...
  
  // 主题切换功能
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  
  // 检查用户之前是否设置了主题偏好
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
  
  // 点击按钮切换主题
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    
    // 在body上切换暗色主题类
    document.body.classList.toggle('dark-theme');
    
    // 更新图标
    if (document.body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // 添加滚动动画
  const animateElements = document.querySelectorAll('h1, h2, h3, p, ul, .profile_box');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // 观察所有需要动画的元素
  animateElements.forEach(el => {
    observer.observe(el);
  });
});
```

## 功能说明

1. **暗色模式切换**：
   - 修复了暗色模式切换按钮的功能
   - 在暗色和亮色模式之间切换时自动变更图标（月亮/太阳）
   - 使用localStorage保存用户偏好，在用户下次访问时自动应用

2. **响应式设计增强**：
   - 添加了CSS变量来控制颜色主题
   - 确保在暗色模式下所有元素都有合适的对比度

3. **交互性改进**：
   - 保留了现有的平滑滚动功能
   - 保留了现有的滚动动画效果

这些更改将使您的学术主页更加现代化、用户友好，同时也增强了网站的可访问性。
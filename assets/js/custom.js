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
          // 平滑滚动到目标元素
          window.scrollTo({
            top: targetElement.offsetTop - 100, // 减去导航栏高度
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
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
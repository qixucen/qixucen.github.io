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
  
  // 添加滚动动画
  const animateElements = document.querySelectorAll('.publication-item, .news-item, .award-item');
  
  // 创建一个Intersection Observer来监测元素是否在视口中
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
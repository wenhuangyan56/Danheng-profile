
  // 滚动监听，自动高亮导航项
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['bg', 'intro', 'skills', 'equipment', 'team'].map(id => document.getElementById(id));

  window.addEventListener('scroll', () => {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section, index) => {
      const offsetTop = section.offsetTop - 100; // 提前一点触发
      const offsetBottom = offsetTop + section.offsetHeight;

      const link = navLinks[index];
      if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    // 事件委托处理所有组件
    document.addEventListener('click', function(e) {
      // 点击图片时切换弹出框
      const imageContainer = e.target.closest('.instrument-image');
      if (imageContainer) {
        const card = imageContainer.closest('.instrument-card');
        card.classList.toggle('active');
        e.stopPropagation();
        return;
      }
      
      // 点击弹出内容时不关闭
      if (e.target.closest('.instrument-popup')) {
        e.stopPropagation();
        return;
      }
      
      // 点击其他位置关闭所有弹出框
      document.querySelectorAll('.instrument-card').forEach(card => {
        card.classList.remove('active');
      });
    });
    
    // 键盘可访问性
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.instrument-card').forEach(card => {
          card.classList.remove('active');
        });
      }
    });
  });
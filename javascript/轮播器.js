
const carousel = document.getElementById("carousel");
const slides = carousel.getElementsByTagName("img");
let currentIndex = 1; // 从第1张正式图开始（前面有个克隆图）
let interval;

function updateSlide() {
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(${-600 * currentIndex}px)`;
}

// 自动播放逻辑
function startCarousel() {
  interval = setInterval(() => {
    currentIndex++;
    updateSlide();
    // 检查是否到最后一个（克隆的第一张）
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        carousel.style.transition = "none";
        currentIndex = 1; // 跳回第1张
        carousel.style.transform = `translateX(${-600 * currentIndex}px)`;
      }, 500);
    }
  }, 3000);
}

function pauseCarousel() {
  clearInterval(interval);
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlide();
  }
  if (currentIndex === slides.length - 1) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentIndex = 1;
      carousel.style.transform = `translateX(${-600 * currentIndex}px)`;
    }, 500);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
  if (currentIndex === 0) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentIndex = slides.length - 2;
      carousel.style.transform = `translateX(${-600 * currentIndex}px)`;
    }, 500);
  }
}

updateSlide(); // 初始位置设置
startCarousel(); // 启动轮播

// 获取按钮和卡片元素
const toggleButton = document.querySelector('.xianzhou-btn');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');

// 添加按钮点击事件
toggleButton.addEventListener('click', () => {
    // 交换 z-index 和 transform 的值，切换卡片顺序
    if (card1.style.zIndex === '2') {
        // 卡片1在前，卡片2在后
        card1.style.zIndex = '1';
        card2.style.zIndex = '2';
        card1.style.transform = 'translateY(10px)';
        card2.style.transform = 'translateY(0)';
    } else {
        // 卡片2在前，卡片1在后
        card1.style.zIndex = '2';
        card2.style.zIndex = '1';
        card1.style.transform = 'translateY(0)';
        card2.style.transform = 'translateY(10px)';
    }
});

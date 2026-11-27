
  // 播放器功能
  document.getElementById('musicPlayer').addEventListener('click', function() {
    const audio = document.getElementById('playerAudio');
    const button = document.getElementById('playerButton');
    
    if (audio.paused) {
      audio.play();
      button.classList.add('playing');
    } else {
      audio.pause();
      button.classList.remove('playing');
    }
  });

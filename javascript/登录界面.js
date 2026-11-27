
  function login() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    

    if (user && pass) {
      document.getElementById('login-screen').style.display = 'none';
      const main = document.getElementById('main-content');
      main.style.display = 'flex';
      
      // 登录成功后切换背景图
      main.style.backgroundImage = "url(images/image1.png)";
      main.style.backgroundSize = "cover";
      main.style.backgroundPosition = "center";
      main.style.backgroundRepeat = "no-repeat";
    } else {
      alert("请输入用户名和密码");
    }
  }
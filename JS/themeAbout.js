let clicks = false;

document.getElementById('theme').addEventListener('click', () => {
  if (clicks == false) {
    document.documentElement.style.setProperty('--primary', '#fff');
    document.documentElement.style.setProperty('--secondary', '#1f1f1f');
    document.querySelector('header > nav > ul > div > li > span').style.color = '#fff';
    document.querySelectorAll('#interact-options > a').forEach(function(element) {
        element.style.backgroundColor = '#ccc';
    });
    document.querySelectorAll('#tools img').forEach(function(element) {
        element.style.filter = 'brightness(.25)';
    });
    document.getElementById('theme').style.background = 'url(../ASSETS/icons/sun.png) center/contain no-repeat';
    clicks = true;
  }
  else if (clicks == true) {
    document.documentElement.style.setProperty('--primary', '#1f1f1f');
    document.documentElement.style.setProperty('--secondary', '#ccc');
    document.querySelector('header > nav > ul > div > li > span').style.color = '#1f1f1f';
    document.querySelectorAll('#interact-options > a').forEach(function(element) {
        element.style.backgroundColor = '#3b3b3b';
    });
    document.querySelectorAll('#tools img').forEach(function(element) {
        element.style.filter = 'none';
    });
    document.getElementById('theme').style.background = 'url(../ASSETS/icons/moon.png) center/contain no-repeat';
    clicks = false;
  }
});
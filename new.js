const darkModeToggle = document.getElementById('switch-theme');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '☀️ Light';
  } else {
    darkModeToggle.innerHTML = '🌙 Dark';
  }
});
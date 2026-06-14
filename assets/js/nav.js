var btn = document.getElementById('nav-toggle');
if (btn) {
  btn.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
    btn.textContent = document.body.classList.contains('nav-open') ? '✕ CLOSE' : '☰ MENU';
  });
}

setTimeout(m, 4000);

function m() {
  window.location = 'menu.html';
}

setInterval(k, 400);
function k() {
  document.getElementsByTagName('meter')[0].value = document.getElementsByTagName('meter')[0].value + 10;

} 
function kk() {
  if(window.innerHeight < window.innerWidth) {
    window.location = window.location.href;
  }
}

function mm() {
  if(window.innerHeight > window.innerWidth) {
    var a = document.createElement('img');
     a.style = "width: 100%";
     a.src = 'https://raw.githubusercontent.com/abhineetraj1/dragon-fighter/main/r.png';
     document.body.innerHTML = '<center><h1>rotate device</h1></center>'
     document.body.appendChild(a);
     setInterval(kk, 1000);
  }
}

mm()
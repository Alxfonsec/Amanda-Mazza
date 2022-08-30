window.onscroll = function() {myFunction()};

var header = document.getElementById('myHeader');
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    header.style.position = 'fixed';
    } else {
      header.classList.remove("sticky");
    header.style.position = 'absolute';

    }
  }


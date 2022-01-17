

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

function mostraraveiro(){
  document.getElementById('bejaC').style.display="none";
  document.getElementById('vianadocasteloC').style.display="none";
  document.getElementById('AveiroC').style.display="block";
  document.getElementById('PT-01').style.fill="blue";
  document.getElementById('PT-02').style.fill="#CCCCCC";
   document.getElementById('PT-16').style.fill="#CCCCCC";
  
}
function mostrarbeja(){
  document.getElementById('bejaC').style.display="block";
  document.getElementById('vianadocasteloC').style.display="none";
  document.getElementById('AveiroC').style.display="none";
  document.getElementById('PT-02').style.fill="blue";
  document.getElementById('PT-01').style.fill="#CCCCCC";
   document.getElementById('PT-16').style.fill="#CCCCCC";
}

function mostrarvianadocastelo(){
  document.getElementById('vianadocasteloC').style.display="block";
  document.getElementById('bejaC').style.display="none";
  document.getElementById('AveiroC').style.display="none";
  document.getElementById('PT-16').style.fill="blue";
  document.getElementById('PT-01').style.fill="#CCCCCC";
  document.getElementById('PT-02').style.fill="#CCCCCC";
}



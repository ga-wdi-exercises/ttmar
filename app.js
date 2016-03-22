document.getElementById("first_paragraph").addEventListener("click",function(){
  document.body.style.background = "#ccc";
});

document.getElementById("second_paragraph").addEventListener("click", function(){
  document.querySelector(".second_paragraph").style.display = "block";
});

document.getElementById("first_chorus").addEventListener("click", function(event){
  event.preventDefault();
  document.querySelector(".first_chorus").style.display = "block";
});

document.getElementById("third_paragraph").addEventListener("click", function(event){
  event.preventDefault();
  var elements = document.querySelectorAll(".third_paragraph");
  for (var i = 0; i < elements.length; i++){
    elements[i].style.display = "block";
  }
});

document.getElementById("fourth_paragraph").addEventListener("click", function(event){
  event.preventDefault();
  var elements = document.querySelectorAll(".fourth_paragraph");
  for (var i = 0; i < elements.length; i++){
    elements[i].style.display = "block";
  }
});

var click = 0;
document.getElementById("second_chorus").addEventListener("click", function(event){
  event.preventDefault();
  var elements = document.querySelectorAll(".second_chorus");
  elements[click].style.display = "block";
  click++;
});

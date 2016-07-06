$("#first_paragraph").on("click", function(){
  $("body").css("background", "#ccc")
})

$("#second_paragraph").on("click", function(){
  $(".second_paragraph").show()
})

$("#first_chorus").on("click", function(evt){
  evt.preventDefault();
  $(".first_chorus").show()
})

$("#third_paragraph").on("click", function(evt){
  evt.preventDefault()
  $(".third_paragraph").show()
})

$("#fourth_paragraph").on("click", function(evt){
  evt.preventDefault();
  $(".fourth_paragraph").show()
})

var click = 0;
$("#second_chorus").on("click", function(evt){
  evt.preventDefault();
  $(".second_chorus").eq(click).show()
  click++
})

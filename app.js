// Links
var firstLink =  $("#first_paragraph");
var secondLink = $("#second_paragraph");
var thirdLink =  $("#first_chorus");
var fourthLink = $("#third_paragraph");
var fifthLink =  $("#fourth_paragraph");
var sixthLink =  $("#second_chorus");

// Text
var firstParagraph =  $(".first_paragraph");
var secondParagraph = $("#second_paragraph");
var thirdParagraph =  $(".first_chorus");
var fourthParagraph = $(".third_paragraph");
var fifthParagraph =  $(".fourth_paragraph");
var sixthParagraph =  $(".second_chorus");

// Listeners
firstLink.on("click", function(){
  firstParagraph.style.display = "block"
})

secondLink.on("click", function(){
  secondParagraph.show()
})

thirdLink.on("click", function(){
  thirdParagraph.show()
})

fourthLink.on("click", function(){
  fourthParagraph.show()
})

fifthLink.on("click", function(){
  fifthParagraph.show()
})

sixthLink.on("click", function(){
  sixthParagraph.show()
})

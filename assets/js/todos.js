//check off item selected
$("ul").on("click", "li", function() {
  $(this).toggleClass("selected");
})
//
// $("li").click(function() {
//   if ($(this).css("color") === "rgb(128, 128, 128)") {
//
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//
//   } else {
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//   }
// });

// click on X to delted the item
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove(); // here this is the parent i.e the li
  });
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val() //extracting value out of the text field
    $(this).val("");
    $("ul").append("<li><span><img src='https://img.icons8.com/material-outlined/24/000000/trash.png'/> </span>" + todoText + " </li>");
  }
})

$("#plus").on("click", function() {
  $("input[type='text']").fadeToggle(500);
})

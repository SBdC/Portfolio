// $( window ).scroll(function() {
//   $( "#present" ).css( "display", "hide" ).fadeOut( "slow" );
// });

var today = new Date();
var year = today.getFullYear();

var copy = document.getElementById("copyright");
copy.innerHTML = "<p> Sara Bento de Castro &copy; " + year + " All rights reserved<p>";

var phone=$("#phone");
var num=$("#number");

phone.click(function(){
    num.css("display", "flex");
});
phone.mouseover(function(){
    num.css("display", "flex");
});
phone.mouseout(function(){
    num.css("display", "none");
});

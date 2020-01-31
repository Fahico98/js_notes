
$(document).ready(function(){

   $("#title").mouseover(function(){
      $(this).css("color", "red");
   });

   $("#title").mouseleave(function(){
      $(this).css("color", "black");
   });

   $("#testButton").mouseover(function(){
      $(this).addClass("btn btn-primary");
   });
   
   $("#testButton").mouseleave(function(){
      $(this).removeClass("btn btn-primary");
   });
});
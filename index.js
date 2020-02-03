
$(document).ready(function(){

   $("#titleDiv")
      .addClass("d-flex")
      .addClass("justify-content-center")
      .css("cursor", "pointer")
      .html("<h2 class='text-primary'>Dummy title extra...!</h2>")
      .click(function(){
         $("a").removeClass().addClass(getRandomTextClass());
      });

   $.ajax({
      type: "POST",
      url: "php/getUsers.php",
      dataType: "html",
      success: function(response){
         $("#testTable").append(response);
         $(".nameLink").addClass("text-danger");
         $(".lastnameLink").addClass("text-warning");
         $(".eMailLink").addClass("text-success");
      }
   });

});

function getRandomTextClass(){
   var r = Math.floor(119 * Math.random()) + 1; // An integer: 0 < n < 120
   var output = "text-";
   if(r >= 0 && r < 20){
      output += "primary";
   }else if(r >= 20 && r < 40){
      output += "secondary";
   }else if(r >= 40 && r < 60){
      output += "success";
   }else if(r >= 60 && r < 80){
      output += "danger";
   }else if(r >= 80 && r < 100){
      output += "warning";
   }else{
      output += "info";
   }
   return(output);
}
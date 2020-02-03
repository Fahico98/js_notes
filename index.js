
$(document).ready(function(){

   $.ajax({
      type: "POST",
      url: "php/getUsers.php",
      dataType: "html",
      success: function(response){
         $("#testTable").append(response);
      }
   });

});

<?php

   include("php/database.php");
   createDatabase();

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>

   <!-- Bootstrap 4 Style Sheet -->
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
   <body>
      <div class="container mt-5" id="titleDiv">...</div>
      <div class="container mt-4">
         <table id="testTable" class="table">
            <thead>
               <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>E mail</th>
                  <th>Phone number</th>
               </tr>
            </thead>
         </table>
      </div>

      <!-- JQuery Script - Downloaded via Google CDN (*) -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      
      <!-- Bootstrap 4 Scripts-->
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
         integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
         crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
         integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
         crossorigin="anonymous"></script>

      <!-- Own Script -->
      <script src="index_Module_Pattern.js" defer></script>
   </body>
</html>

<?php

   include("connection.php");

   global $db_name;
   global $table_name;
   $pdo = connect();
   $query = "SELECT * FROM $table_name";
   $result = $pdo->query($query);

   $output = "";

   if($result->rowCount() !== 0){
      foreach($result as $row){
         $output .=
            "<tr>
               <th scope='row'>" . str_pad($row["id"], 3, "0", STR_PAD_LEFT) . "</th>
               <td><a href='#' class='nameLink'>" . $row["name"] . "</a></td>
               <td><a href='#' class='lastnameLink'>" . $row["lastname"] . "</a></td>
               <td><a href='#' class='eMailLink'>" . $row["e_mail"] . "</a></td>
               <td><a href='#' class='phoneNumberLink'>" . $row["phone_number"] . "</a></td>
            </tr>";
      }
   }

   $pdo = null;
   echo($output);

?>
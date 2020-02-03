
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
               <td>" . $row["name"] .           "</td>
               <td>" . $row["lastname"] .       "</td>
               <td>" . $row["e_mail"] .         "</td>
               <td>" . $row["phone_number"] .   "</td>
            </tr>";
      }
   }

   $pdo = null;
   echo($output);

?>
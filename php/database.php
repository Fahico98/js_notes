
<?php

   include("connection.php");

   function createDatabase(){
      try{
         global $db_name;
         $pdo = connect();
         $query =
            "CREATE TABLE IF NOT EXISTS users (
               id                      INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
               name                    VARCHAR(75) NOT NULL,
               lastname                VARCHAR(75) NOT NULL,
               e_mail                  VARCHAR(75) NOT NULL UNIQUE,
               phone_number            VARCHAR(75) NOT NULL
            ) ENGINE = INNODB";
         $pdo->query($query);
         $pdo = null;
      }catch(Exception $e){
         die("ERROR: " . $e->getMessage());
      }
   }

?>
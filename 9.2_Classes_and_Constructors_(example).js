
class User{

   constructor(username, email, password){
      this.username = username;
      this.email = email;
      this.password = password;
   }

   register(){
      console.log(
         "Username: " + this.username + "\n" +
         "Email: " + this.email + "\n" +
         "Password: " + this.password + "\n" +
         "Registered successfully...!"
      );
   }
}

class Member extends User{

   constructor(username, age, id, email, password){
      super(username, email, password);
      this.age = age;
      this.id = id;
   }
}
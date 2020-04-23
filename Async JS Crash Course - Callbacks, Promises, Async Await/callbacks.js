
const posts = [
   {
      title: "First post",
      body: "This is the content of the first post...!"
   },
   {
      title: "Second post",
      body: "This is the content of the second post...!"
   },
   {
      title: "Third post",
      body: "This is the content of the third post...!"
   }
];

function getPosts(){
   console.log("inside of getPosts method !");
   setTimeout(() => {
      console.log("inside setTimeout of getPosts method !");
      let output = "";
      posts.forEach((post) => {
         output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
   }, 3000);
}

function addPost(post, callback){
   console.log("inside of addPost method !");
   setTimeout(() => {
      console.log("inside setTimeout of addPost method !");
      posts.push(post);
      callback();
   }, 2000);
}

addPost({
   title: "Fourth post",
   doby: "This is the content of the fourth post...!"
}, getPosts);

console.log("Program finished !");

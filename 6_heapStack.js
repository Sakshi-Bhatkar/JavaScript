//Stack(Primitive) , heap(Non-Primitive)

let blog = "myblog"
let anotherBlog = blog

console.log(blog);
console.log(anotherBlog);

let user1 = {
    userEmail: "user1@gmail.com",
    id: "user1@yahho"
}

let user2 = user1

user2.userEmail = "sakshibhatkar@yahho.com"

console.log(user1.userEmail);
console.log(user2.userEmail);
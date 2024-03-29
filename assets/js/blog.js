// Gets the Back button element
const back = document.getElementById("Back");

const blogArt = document.querySelector(".blog-posts");

// Redirects back to the form site
back.addEventListener("click",() => window.location.href = "index.html");

// Gets the posts from the local storage and  turns the contents back to an array of objects
let blogposts = JSON.parse(localStorage.getItem("posts"));

// Creates a forEach loop to iterate over the objects in the blogposts array
blogposts.forEach(blogpost => {
    // Creates and gets a div element in the newArt variable
    const newArt = document.createElement("div");

    // Sets the innerHTML of the div to a h2 title,  p content and  p username based on the contents of the object that is iterating at that moment in the loop
    newArt.innerHTML = `
    <h2>${blogpost.title}</h2>
    <p>${blogpost.blog}</p>
    <p>Posted by: ${blogpost.username}</p>`;

    // appends the div and all of it's content to the blogArt 
    blogArt.appendChild(newArt);
});



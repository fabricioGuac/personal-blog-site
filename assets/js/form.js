// Gets the submit button element
const submitButton = document.querySelector("button");

// Adds event listener for clicks in the button
submitButton.addEventListener("click", (event) => {
    // stops the page from reloading
    event.preventDefault(); 

    // Creates an array to store the previous posts if any if there are not just an empty array
    const oldposts = JSON.parse(localStorage.getItem("posts")) || [];

    // Gets the information from the form into an object
    const post = {
        username: document.getElementById("Username").value,
        title: document.getElementById("Title").value,
        blog: document.getElementById("Content").value  
    };
    // Creates a condition so that returns true if any of the values is empty, trimming the blank spaces
    if(post.username.trim() === "" || post.title.trim() === ""||  post.blog.trim() === ""){
        // Gets the div html element
        const cont = document.getElementById("alert");
        // Creates and sets an h3 element in the alert variable
        const alert = document.createElement("h3");
        // Sets the content to be the desired message
        alert.textContent = "Please make sure to complete the form";
        // appends the h3 element to the main html element
        cont.appendChild(alert);
        
    }else{
        // Pushes the post object to the end of the posts aray
        oldposts.push(post);
        
        // Sends the stringified version of posts to the local storage
        localStorage.setItem("posts", JSON.stringify(oldposts));
        
        // Redirects to post page
        window.location.href = "blog.html";}
});
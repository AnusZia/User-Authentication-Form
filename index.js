const username = localStorage.getItem("loggedInUser");
const usernameDisplay = document.getElementById("usernameDisplay");

if(username){
    usernameDisplay.innerText = username;
} else {
    usernameDisplay.innerText = "Guest";
}


function logout () {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
};
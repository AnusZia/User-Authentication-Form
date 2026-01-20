const username = localStorage.getItem("loggedInUser");
    if(username){
        document.getElementById("usernameDisplay").innerText = username;
    } else {
        document.getElementById("usernameDisplay").innerText = "Guest";
    }
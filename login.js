function loginform(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let storedPassword= localStorage.getItem(username);
    if(storedPassword === null ){
        alert("user not found")
    }
    else{
        if(storedPassword=== password){
            alert("login successfully");
            localStorage.setItem("loggedInUser", username);
            window.location.href= 'index.html'
        }
        else {
            alert("invalid password")
            return;
        }
    }
}
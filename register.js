
function register(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(localStorage.getItem(username)){
        alert("this user name already taken")
        return
    }
    

localStorage.setItem(username,password);
alert("user registeration successfully")
window.location.href= 'login.html'
    
}
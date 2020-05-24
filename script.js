var button=document.getElementById("first");
var signup=document.getElementById("signup");
var main=document.getElementById("main");
var form=document.getElementById("form");
var login=document.getElementById("login");
var signin=document.getElementById("signin");
var welcome=document.getElementById("welcome");
var name=document.getElementById("name");



button.addEventListener("mouseover",function(){
    button.innerHTML="Please Log In";
button.style.color="red";
})
button.addEventListener("mouseleave",function(){
    button.innerHTML="Welcome to Project";
    button.style.color="black";

})
signup.addEventListener("click",function(){
    main.style.display="none";
    form.style.display="block";
    login.style.display="none";

})
signin.addEventListener("click",function(){
    main.style.display="none";
    form.style.display="none";
    login.style.display="block";
})                         

welcome.addEventListener("click",function(){
    main.style.display="block";
    form.style.display="none";
    login.style.display="none";
})       
var fun=function(){
    document.getElementById("pictures").style.display="grid";
    login.style.display="none";
    document.getElementById("navbarc").removeChild(signup);
    document.getElementById("signin").innerHTML=name.value; 
    return false;

}
function validate() {
    var mail = document.getElementById("text").value;


var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

if(regx.test(mail)){
    document.getElementById("text").className = document.getElementById("text").className.replace(" error", "");
    return true
}
else{
    document.getElementById("text").className = document.getElementById("text").className + " error";
    return false
}
}
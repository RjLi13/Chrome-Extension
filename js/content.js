// Javascript file
var username;
var password;

function getCredentials(){
    username = localStorage.getItem('username');
    password = localStorage.getItem('password');
    if(username && password){
        return true;
    }else{
        return false;
    }
}

function setCredentials(username, password){
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

$(document).ready(function(){
    var hasCredentials = getCredentials();
    if(hasCredentials && $('.error').length == 0){
        //autofill user's login
        $('input#username').val(username);
        $('input#password').val(password);
        $('input.button').click();
    }else {
        // no credentials filled
        $('#loginForm').submit(function(){
            username = $('input#username').val();
            password = $('input#password').val();
            //parameter = set value, no parameters = get value
            setCredentials(username, password);
        }) //selector for login form
    }
    //$('input#username').val('haha') // filling it with some value
}); // # is identifier for id
// $ is jquery selector which is an object and checks how elements it has
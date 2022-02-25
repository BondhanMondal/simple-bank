document.getElementById('login-sumbit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'bondhan@gmail.com' && userPassword == 'secret'){
        console.log('valid user');
    }
    
})
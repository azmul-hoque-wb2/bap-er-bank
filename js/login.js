// step-1: add click event handler to submit btn
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit btn clicked')
    // step-2: get the email address from email input field 
    const emailField = document.getElementById('user-eamil');
    // always remember to use .value to get text form input field
    const email = emailField.value ;

    // step-3:get password
    // step-3.1:set id on the html element 
    // step-3.2: get the element 
    // step-3.3: get the value form the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value ;
    console.log(email, password)
    // do not verify email password on the client side 
    // step-4: verify email and password and check whether valid user or not
    if(email === 'azmul@gmail.com' && password ==='qwert'){
        console.log('valid user');
        window.location.href = 'bank.html';
    }else{
        alert('you are a invalid user');
    }
})
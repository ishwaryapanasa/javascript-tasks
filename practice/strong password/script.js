let inputField = document.querySelector('#password');
let msg= document.querySelector('#strength-text');

inputField.addEventListener('input', () => {
   let inputFieldVal = inputField.value;
    if(inputFieldVal.length<=5){
        inputField.classList.remove('weak', 'medium', 'strong');
        msg.classList.remove('weak', 'medium', 'strong');
        inputField.classList.add('weak');
        msg.innerText="password is weak";
    }else if(inputFieldVal.length>5 && inputFieldVal.length<13)
    {
        inputField.classList.remove('weak', 'medium', 'strong');
        msg.classList.remove('weak', 'medium', 'strong');
        inputField.classList.add('medium');
        msg.innerText="password is medium";
    }else{
        inputField.classList.remove('weak', 'medium', 'strong');
        msg.classList.remove('weak', 'medium', 'strong');
        inputField.classList.add('strong');
        msg.innerText="password is strong";
}
});

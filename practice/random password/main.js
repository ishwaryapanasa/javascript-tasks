let btn= document.querySelector('#generateBtn');
let input= document.querySelector("#input");
let copyBtn= document.querySelector('#copyBtn');
  



btn.addEventListener('click', ()=>
{
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    length=12
    
    // Combine all characters into a single string
    const allChars = uppercase + lowercase + numbers + specialChars;
    
    // Initialize an empty string to store the password
    let password = '';
    
    // Randomly pick characters from allChars to create the password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
        console.log(password);  
        // return password;
    }
    input.value=password;

});

copyBtn.addEventListener('click', () => {
    // Select the text inside the input field
    input.select(); 

    // This line ensures that the selection is valid on mobile devices
    input.setSelectionRange(0, 99999); // For mobile devices

    // Use the Clipboard API to write the selected text to the clipboard
    navigator.clipboard.writeText(input.value)
        .then(() => {
            // Success: show a message indicating the password was copied
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            // If something goes wrong, log the error
            console.error("Error copying text: ", err);
        });
});



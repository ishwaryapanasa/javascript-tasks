const input= document.querySelector('#textInput');
const btn=document.querySelector('#generateBtn');
const qrContainer=document.querySelector('#qrCodeContainer');

btn.addEventListener('click', () =>
{
    let inputVal=input.value;

     if(inputVal !== ""){

        qrContainer.innerHTML = "";

        new QRCode(qrContainer, {
            text: inputVal,
            width: 200,
            height: 200
          });
     }else{
        alert("please enter the anything");
     }
    input.value="";
})
let btn= document.querySelector('#submitBtn');
let popup=document.querySelector('#popup');
let popupContent =document.querySelector('.popup-content');
let popupHeader = document.querySelector('.popup-header');
let icon = document.querySelector('.icon');
let okBtn = document.querySelector('#okBtn');

btn.addEventListener('click',() => {
    popup.style.display="block";
    console.log('button is clicked');
})
okBtn.addEventListener('click', () => {
    popup.style.display="none";
})
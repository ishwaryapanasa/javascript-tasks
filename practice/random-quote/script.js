let quote = document.querySelector('#newQuoteBtn');
let quoteText = document.querySelector('#quoteText');
let authText = document.querySelector('#authorText');
let upload = document.querySelector('#tweetBtn')

quote.addEventListener('click', () =>
 {
 getTheQuote();
 })
//  let apiUrl='http://api.quotable.io/random';

//  fetch(apiUrl)
//  .then((response) => {
//      return response.json();
// })
//  .then((data)=> {
//     console.log("quote", data.content)
// quoteText.innerText=data.content;
// authText.innerText=data.author;
//  }).catch((err) =>{
//     alert('error occured whilr fetching the data');
//  })
// })

async function getTheQuote() {
    try{
    let apiUrl='http://api.quotable.io/random';
    let response  = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    let data = await response.json();
    console.log(data.content);
    quoteText.innerText=data.content;
    authText.innerText= data.author;
}catch(err){
    alert('error');
}
}
upload.addEventListener('click', () => {
    let quote = quoteText.innerText;
    let author = authText.innerText;

    // Prepare the message text
    let message = `"${quote}" + ${author}`;

    // WhatsApp share URL
    let whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    // Open WhatsApp (it will either open the app or the web version)
    window.open(whatsappUrl, '_blank');
});

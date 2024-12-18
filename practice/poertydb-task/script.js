const author=document.querySelector('#author');
const fetchPoems=document.querySelector('#fetch-poems');
const showPoems = document.querySelector('#poems');
const poemTitle=document.querySelector('#poem-title');
const poemLines= document.querySelector('#poem-lines');


// function getAuthors(){
// apiurl='https://poetrydb.org/author';
 
// fetch(apiurl)
// .then(response =>{
//     return response.json();
// }).then(data => {
//     console.log(data);

//     let authors = document.createElement('ul')
//     data.authors.forEach(author => {
//         let auth = document.createElement('li')
//         // let auth=data.author
//     auth.textContent=author;
//        authors.appendChild(auth);
//     });
//     showPoems.appendChild(authors);
// }).catch(err =>{
//     alert('error while fetching data');
// })
// }
// fetchPoems.addEventListener('click',getAuthors);


//function to get the author title and poems of a particular poet
// function getPoems() {
//     let poetName = author.value.trim(); // Get the poet's name from input
//     if (!poetName) {
//         showPoems.innerText = "Please enter a poet's name.";
//         return;
//     }

//     let apiurl = `https://poetrydb.org/author/${poetName}`; // Correct template literal syntax

//     fetch(apiurl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("No poems found for the specified poet.");
//             }
//             return response.json();
//         })
//         .then(poems => {
//             console.log(poems)
//             if (!poems || poems.length === 0) {
//                 showPoems.innerText = "No poems found for the specified poet.";
//                 return;
//             }
//             poems.forEach(poem => {
//                 let poemContainer=document.createElement('div')
//                let title= document.createElement('h3');
//                title.innerText=`${poem.title} ${poem.author}`;
//                let poemlines= document.createElement('p')
//                poemlines.innerHTML=poem.lines.join("<br>");

//                poemContainer.appendChild(title);
//                poemContainer.appendChild(poemlines);
//                showPoems.appendChild(poemContainer);
//             })
//             // Display the poems
                       
//         })
//         .catch(err => {
//             showPoems.innerText = "No poem found.";
//         });
// }

// fetchPoems.addEventListener('click', getPoems);

//function to get total number of all poems of a particular poet and ttiles of minimum number of lines of poems
function getPoems() {
    let poetName = author.value.trim(); // Get the poet's name from input
    if (!poetName) {
        showPoems.innerText = "Please enter a poet's name.";
        return;
    }
    let apiurl = `https://poetrydb.org/author/${poetName}`; // Correct template literal syntax

    fetch(apiurl)
        .then(response => {
            if (!response.ok) {
                throw new Error("No poems found for the specified poet.");
            }
            return response.json();
        })
        .then(poems => {
            console.log(poems)
            if (!poems || poems.length === 0) {
                showPoems.innerText = "No poems found for the specified poet.";
                return;
            }

            showPoems.innerText="";
            let length=0; 
            let minLines=Infinity;
            let shortPoems=[];

            poems.forEach(poem => {
               let lineCount=poem.lines.length;
                length += poem.lines.length;

                    if(lineCount < minLines){
                        minLines = lineCount;
                    shortPoems=[poem.title];

                    }else if (lineCount === minLines) {
                        // If line count matches the minimum, add this poem's title
                        shortPoems.push(poem.title);
                    }
            })

            let poemlines= document.createElement('p');
            poemlines.innerText= length;
            showPoems.appendChild(poemlines);

            let shortPoemContainer = document.createElement('ul')
            shortPoems.forEach(shortPoem => {
            let shortTitle=document.createElement('li')
            shortTitle.innerHTML=shortPoem;
            shortTitle.style.fontWeight='bold';
            shortPoemContainer.appendChild(shortTitle);
           
            })
            showPoems.appendChild(shortPoemContainer);
        })
        .catch(err => {
            showPoems.innerHTML = `0 <br> -`;
        });
}

fetchPoems.addEventListener('click', getPoems);




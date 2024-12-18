const searchBtn=document.getElementById('search-button');
const movie = document.querySelector("#input-text"); 
const image=document.querySelector('.image');
const title=document.getElementById("name");
const year=document.getElementById("year");
const actors=document.getElementById("actors");
const imb=document.getElementById("imb");
const rank=document.getElementById("rank");
const aka=document.getElementById("aka");


movie.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const movieName = movie.value.trim();
        if (movieName) {
            fetchMovieData(movieName); // Call the function with the movie name
            image.style.display = "block"; // Display the image
            movie.value = ""; // Clear the input field
        } else {
            console.log('Please enter a movie name!');
        }
    }
});
searchBtn.addEventListener('click',  () => {
    const movieName=movie.value.trim();
    if (movieName) {
         fetchMovieData(movieName); // Call the function
    } else {
        console.log('Please enter a movie name!');
    }
    image.style.display="block";
    movieName="";
    
});

async function fetchMovieData(movieName) {
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(movieName)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        console.log(data); // Check the structure of the returned data

        // Ensure description exists and contains data
        if (data.description && data.description.length > 0) {
            const movie = data.description[0];  // Get the first movie in the response

        title.innerText=`TITLE : ${movie["#TITLE"]}`;
        year.innerText= `YEAR : ${movie["#YEAR"]}`;
        actors.innerText=`ACTORS : ${movie["#ACTORS"]}`;
        image.src= movie["#IMG_POSTER"];
        rank.innerText=`RANK:${movie["#RANK"]}`;
        imb.innerText=`IMDB ID : ${movie["#IMDB_ID"]}`;
        aka.innerText=`AKA : ${movie["#AKA"]}`;


           
        } 
    else {
            console.log('No movie found for that name');
        }

    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}


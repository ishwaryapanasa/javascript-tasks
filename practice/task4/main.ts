// HTML elements
const cityInput = document.getElementById('cityInput') as HTMLInputElement;
const btn = document.querySelector('#filterButton') as HTMLButtonElement;
const resultDiv = document.querySelector('#results') as HTMLDivElement;

// Interface for Person
interface Person {
    name: string;
    age: number;
    city: string;
}

// Array of people
const People: Person[] = [

    { name: "Ishwarya" ,age: 21 , city: 'kamareddy'},
    { name: 'Nivas', age: 22, city: 'Nizamabad' },
    { name: 'Sampath', age: 22, city: 'Nizamabad' },
    { name: 'Vishal', age: 24, city: 'Karimnagar' },
    { name: 'Saicharan', age: 24, city: 'Karimnagar' },
    { name: 'Adarsh', age: 24, city: 'Karimnagar' },
    { name: 'Silesh', age: 25, city: 'Jagityal' },
    { name: 'Pawan', age: 25, city: 'Armur' },
    { name: 'Srihari', age: 24, city: 'Armur' },
    { name: "sreejadyavanapally" ,age: 23 , city: 'Nizamabad'},
    { name: "Manasa" ,age: 24 , city: 'Dharmaram'},
    { name: "Tejaswini" ,age: 23 , city: 'Laxmipur'}
  
  ]; 


// Function to filter people by city
function filterByCity(persons: Person[], cityName: string): Person[] {
    return persons.filter(person => person.city.toLowerCase() === cityName.toLowerCase());
}

// Event listener for the button
btn.addEventListener('click', () => {
    const city = cityInput.value.trim(); // Get the input value
    const result = filterByCity(People, city); // Filter the People array based on input

    resultDiv.innerHTML = '';

    // Display results on the webpage
    if (result.length > 0) {
        resultDiv.style.color = 'black'; 
        result.forEach((person) => {
            const personDiv = document.createElement('div');
            personDiv.innerHTML= `Name : ${person.name}<br> Age : ${person.age}<br> City : ${person.city}`;
            personDiv.style.fontWeight='bold';
            resultDiv.appendChild(personDiv);
            console.log(person)
        });
    } else {
        resultDiv.textContent ='No results found.';
        resultDiv.style.color='red';
        console.log("[]");
    }
    cityInput.value='';
});

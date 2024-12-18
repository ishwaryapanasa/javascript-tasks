// HTML elements
var cityInput = document.getElementById('cityInput');
var btn = document.querySelector('#filterButton');
var resultDiv = document.querySelector('#results');
// Array of people
var People = [
    { name: "Ishwarya", age: 21, city: 'kamareddy' },
    { name: 'Nivas', age: 22, city: 'Nizamabad' },
    { name: 'Sampath', age: 22, city: 'Nizamabad' },
    { name: 'Vishal', age: 24, city: 'Karimnagar' },
    { name: 'Saicharan', age: 24, city: 'Karimnagar' },
    { name: 'Adarsh', age: 24, city: 'Karimnagar' },
    { name: 'Silesh', age: 25, city: 'Jagityal' },
    { name: 'Pawan', age: 25, city: 'Armur' },
    { name: 'Srihari', age: 24, city: 'Armur' },
    { name: "sreejadyavanapally", age: 23, city: 'Nizamabad' },
    { name: "Manasa", age: 24, city: 'Dharmaram' },
    { name: "Tejaswini", age: 23, city: 'Laxmipur' }
];
// Function to filter people by city
function filterByCity(persons, cityName) {
    return persons.filter(function (person) { return person.city.toLowerCase() === cityName.toLowerCase(); });
}
// Event listener for the button
btn.addEventListener('click', function () {
    var city = cityInput.value.trim(); // Get the input value
    var result = filterByCity(People, city); // Filter the People array based on input
    resultDiv.innerHTML = '';
    // Display results on the webpage
    if (result.length > 0) {
        resultDiv.style.color = 'black';
        result.forEach(function (person) {
            var personDiv = document.createElement('div');
            personDiv.innerHTML = "Name : ".concat(person.name, "<br> Age : ").concat(person.age, "<br> City : ").concat(person.city);
            personDiv.style.fontWeight = 'bold';
            resultDiv.appendChild(personDiv);
            console.log(person);
        });
    }
    else {
        resultDiv.textContent = 'No results found.';
        resultDiv.style.color = 'red';
        console.log("[]");
    }
    cityInput.value = '';
});

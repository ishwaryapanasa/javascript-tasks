// People array
var People = [
    { name: 'Nivas', age: 22, city: 'Nizamabad' },
    { name: 'Sampath', age: 22, city: 'Nizamabad' },
    { name: 'Vishal', age: 24, city: 'Karimnagar' },
    { name: 'Saicharan', age: 24, city: 'Karimnagar' },
    { name: 'Adarsh', age: 24, city: 'Karimnagar' },
    { name: 'Silesh', age: 25, city: 'Jagityal' },
    { name: 'Pawan', age: 25, city: 'Metupally' },
    { name: 'Srihari', age: 24, city: 'Metupally' }
];
// Function to filter people by city
function filterByCity(persons, cityName) {
    return persons.filter(function (person) { return person.city.toLowerCase() === cityName.toLowerCase(); });
}
// Simulated input
var inputCity = "kamareddy"; // Replace with user input during testing
// Perform filtering
var result = filterByCity(People, inputCity);
// Display result in the console
if (result.length > 0) {
    console.log("Results for city \"".concat(inputCity, "\":"));
    result.forEach(function (person) {
        console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", City: ").concat(person.city));
    });
}
else {
    console.log([]);
    console.log("No results found for city \"".concat(inputCity, "\"."));
}

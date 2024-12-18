interface Person {
    name: string;
    age: number;
    city: string;
}

// People array
const People: Person[] = [
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
function filterByCity(persons: Person[], cityName: string): Person[] {
    return persons.filter(person => person.city.toLowerCase() === cityName.toLowerCase());
}

// Simulated input
const inputCity = "kamareddy"; // Replace with user input during testing

// Perform filtering
const result = filterByCity(People, inputCity);

// Display result in the console
if (result.length > 0) {
    console.log(`Results for city "${inputCity}":`);
    result.forEach(person => {
        console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
    });
} else {
    console.log([]);
    console.log(`No results found for city "${inputCity}".`);
}

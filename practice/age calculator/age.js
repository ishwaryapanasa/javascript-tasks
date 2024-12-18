const Dobinput = document.querySelector("#dob");
 const calci =document.querySelector("#calculateBtn");
 const result = document.querySelector('#ageResult');

 calci.addEventListener('click',()=>{
    const Dob = document.querySelector("#dob").value;
    if (!Dob) {
        alert('Please select a valid date of birth!');
        return;
    }

    // Convert the DOB to a Date object
    let dob = new Date(Dob);
// Get the current date
let today = new Date();

// Calculate the age difference
let ageInYears = today.getFullYear() - dob.getFullYear();
let ageInMonths = today.getMonth() - dob.getMonth();
let ageInDays = today.getDate() - dob.getDate();

// Adjust for negative month or day difference
if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
}

if (ageInDays < 0) {
    ageInMonths--;
    let daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageInDays += daysInLastMonth;
}

// Display the result
console.log(ageInDays,ageInMonths,ageInYears);
result.innerText = `Your age is ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days.`;

Dobinput.value="";
});

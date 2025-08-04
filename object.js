// ### Task-1
// Access the `golden rod` color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "rgba(0, 0, 255, 1)",
    "golden rod": '#daa520'
};

console.log(colors['golden rod']);




// ---
// ### Task-2
// For this object below add a property named `passenger capacity` with value 5
// ```js

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car['passenger capacity'] = 5;

console.log(car);


// ### Task-3
// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics);




// ### Task-4

// Count the `number of properties`



let studentInfo = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

console.log(Object.keys(studentInfo).length);
console.log(Object.values(studentInfo));

const keys = Object.keys(studentInfo);
for (const key of keys) {
    console.log(key, ':', studentInfo[key]);
}




// ### Task-5 (Hard)

// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// <br>

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};



for(const prop in myObject){
    console.log(`key: ${prop} | type: ${typeof myObject[prop]}`);
}


// **Output:**

// <br>

//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean


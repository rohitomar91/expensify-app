//** Object Destructuring

// const person = {
//     age: 27,
//     location: {
//         city: 'Bengaluru',
//         temp: 92
//     }
// };

// const { name:firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}.`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//** Array Destructuring */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];

const [, city = 'Newyork', state] = address;

console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [itemName, , mPrice ] = item;

console.log(`A medium ${itemName} costs ${mPrice}`);
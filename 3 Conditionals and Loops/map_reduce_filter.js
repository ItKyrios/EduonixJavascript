// Map Method
const people = ['josh woodhouse', 'sonam choden', 'tshering lama'];

let capitalizedPeople = people.map((person) => {
  let [firstName, lastName] = person.split(' ');
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);

  return `${firstName} ${lastName}`;
});

console.log(capitalizedPeople);

// Reduce Method
const numbers = [9, 3, 45, 90, 55, 26, 19, 28];

let sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
});

console.log(sum);

// Filter Method
let numbersLessThanTen = numbers.filter((number) => {
  return number < 10;
});

console.log(numbersLessThanTen);

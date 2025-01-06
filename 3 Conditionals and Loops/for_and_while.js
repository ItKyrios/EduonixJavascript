const people = ['josh woodhouse', 'sonam choden', 'tshering lama'];

for (let i = 0; i < people.length; i++) {
  let [firstName, lastName] = people[i].split(' ');
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);

  people[i] = `${firstName} ${lastName}`;
}

console.log(people);

let j = 1;

while (j <= 20) {
  console.log(`This loop has looped ${j} times`);
  j++;
}

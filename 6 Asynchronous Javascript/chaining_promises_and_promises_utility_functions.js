import fetch from 'node-fetch';

const apiUrl = 'https://jsonplaceholder.typicode.com';

const user1 = fetch(`${apiUrl}/users/1`).then((res) => res.json());
const user2 = fetch(`${apiUrl}/users/2`).then((res) => res.json());
const user3 = fetch(`${apiUrl}/users/3`).then((res) => res.json());

Promise.all([user1, user2, user3])
  .then((objects) => console.log(objects))
  .catch((err) => console.log(err));

// Fetching normal data and parsing the json
// const user = fetch(`${apiUrl}/users/1`)
//   .then((res) => res.json())
//   .then((user) => console.log(user))

// Fetching nested data and parsing the json
// const user = fetch(`${apiUrl}/users/1`)
//   .then((res) => res.json())
//   .then((user) => fetch(`${apiUrl}/users/${user.id}/posts`))
//   .then((res) => res.json())
//   .then((username) => console.log(username));

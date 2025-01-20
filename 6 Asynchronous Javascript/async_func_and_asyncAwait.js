import fetch from 'node-fetch';

const apiUrl = 'https://jsonplaceholder.typicode.com';

async function getUser(id) {
  const res = await fetch(`${apiUrl}/users/${id}/`);
  const user = await res.json();

  console.log(user);
}

getUser(5);

let timer = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('timer expired');
  }, 3000);
});

console.log('other function');

timer.then((res) => {
  console.log(res);
});

console.log('this wont wait');

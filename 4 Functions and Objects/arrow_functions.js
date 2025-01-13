function whatColorIsTheSky() {
  this.color = 'blue';

  setTimeout(() => {
    console.log(this.color);
  }, 500);

  setTimeout(function () {
    console.log(this.color);
  }, 500);
}

whatColorIsTheSky();

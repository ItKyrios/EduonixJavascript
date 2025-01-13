const strings = [
  ['h', 'e', 'l', 'l', 'o', ','],
  ['n', 'i', 'c', 'e'],
  ['t', 'o'],
  ['m', 'e', 'e', 't'],
  ['y', 'o', 'u'],
];

let sentence = '';

strings.forEach((val) => {
  val.forEach((letter) => {
    sentence = sentence + letter;
  });
  sentence = sentence + ' ';
});

console.log(sentence);

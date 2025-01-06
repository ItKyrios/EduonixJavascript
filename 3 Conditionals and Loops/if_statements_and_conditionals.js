const hourOfDay = new Date().getHours();

let partOfDay;

if (hourOfDay > 5 && hourOfDay < 12) {
  partOfDay = 'morning';
} else if (hourOfDay > 12 && hourOfDay <= 17) {
  partOfDay = 'afternoon';
} else if (hourOfDay > 17 && hourOfDay < 24) {
  partOfDay = 'evening';
}

if (hourOfDay === 12 || hourOfDay === 24) {
  partOfDay = 'noon or midnight';
}

console.log(partOfDay);

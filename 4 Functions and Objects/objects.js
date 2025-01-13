const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 120,
  changeId: function (val) {
    this.id = val;
  },
};

console.log(person.firstName);
console.log(person['lastName']);

const property = 'id';
console.log(person[property]);

person.changeId(33);
console.log(person.id);

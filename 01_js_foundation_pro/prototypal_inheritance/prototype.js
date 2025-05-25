const engineer = {
  name: "Harshit",
  sayHello: function () {
    console.log("hello");
  },
};
const faang = {
  salary: "500k",
  __proto__: {
    fuck: "you",
  },
};

console.log(engineer.salary);

engineer.__proto__ = faang;

console.log(engineer.salary);

const dummy = Object.create(faang, {
  name: {
    value: "dummy",
  },
});
console.log(dummy.fuck);
console.log(Object.getPrototypeOf(dummy));

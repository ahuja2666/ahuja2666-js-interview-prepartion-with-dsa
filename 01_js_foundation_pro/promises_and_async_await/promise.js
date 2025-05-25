const promise = new Promise((res) => res("promise"));

console.log("first");
promise.then((data) => console.log(data));
console.log("end");

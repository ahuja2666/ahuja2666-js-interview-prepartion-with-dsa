console.log("script start");

setTimeout(function () {
  console.log("set timeout");
}, 0);

new Promise((res, rej) => {
  console.log("promise constructor    ");
  res("new promise resolve");
}).then((data) => console.log(data));

async function asyncFunc() {
  console.log("async function start");
  await new Promise((res) => {
    console.log("promise inside async function");
    res("async/await promise resolve ");
  });
  console.log("async func end");
}

asyncFunc();

console.log("script end");

const wait = (time, shouldResolve) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res(`promise resolve after ${time} seconds`);
      } else {
        rej(`promise rejected after ${time} seconds`);
      }
    }, time * 1000);
  });
};

wait(2, true)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
wait(1, false)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

const obj = {
  obj2: {
    x: () => {
      console.log(this);
    },
  },
};

obj.obj2.x();

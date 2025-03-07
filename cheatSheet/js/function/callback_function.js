let func1 = (f) => {
  console.log("1");
  f();
  console.log("3");
};

func1(() => {
  console.log("2");
});

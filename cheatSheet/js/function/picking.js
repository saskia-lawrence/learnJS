let Obj = [
  { name: "saskia", info: "goodgirl" },
  { name: "sandy", info: "vvvvgoodgirl" },
];

//getPersonInfo function picks a string, from '_obj' object, based on 'input_Value'
let getPersonInfo = (input_Value, _obj) => {
  //info is the picking variable
  //declare it empty, so that if did not pick anything, it would return undefined
  //always return the picking variable
  let info;
  for (let i = 0; i < _obj.length; i++) {
    let a = _obj[i];
    if (input_Value === a.name) {
      //setting a value to picking variable if the above condition becomes true
      info = a.info;
    }
  }
  //returning the picking variable
  return info;
};
console.log(getPersonInfo("sandy", Obj));

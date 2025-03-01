let obj = { key1: "apple", key2: "orange" };
let { key1, key2 } = obj;
//console.log(key1,key2,key3)
let func1 = ({ key1, key2 }) => {
  console.log(key1, key2);
};
func1(obj);

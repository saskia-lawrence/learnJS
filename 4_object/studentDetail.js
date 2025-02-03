/*
{
  '5': {
    name: 'arun',
    age: 14,
    gender: 'male',
    mathsMark: 61,
    scienceMark: 74
  },
  '13': {
    name: 'gopi',
    age: 15,
    gender: 'male',
    mathsMark: 73,
    scienceMark: 93
  },
  '43': {
    name: 'kumar',
    age: 14,
    gender: 'male',
    mathsMark: 30,
    scienceMark: 41
  }
}
*/
let studentId = [5, 13, 43];
let name = ["arun", "gopi", "kumar"];
let age = [14, 15, 14];
let gender = ["male", "male", "male"];
let mathsMark = [61, 73, 30];
let scienceMark = [74, 93, 41];
let b = {};
let list = function (x) {
  let d = {};
  d.name = name[x];
  d.age = age[x];
  d.gender = gender[x];
  d.mathsMark = mathsMark[x];
  d.scienceMark = scienceMark[x];
  return d;
};
for (let i in studentId) {
  let c = studentId[i];
  b[c] = list(i);
}
console.log(b);

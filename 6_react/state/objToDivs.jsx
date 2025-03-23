let getResult = function (x, y) {
  return (
    <div>
      <h1>{x}</h1>
      <h6>{y}</h6>
    </div>
  );
};
export default function App() {
  let f = {
    0: { a: "abc", b: "def" },
    1: { a: "123", b: "457" },
    2: { a: "mno", b: "stu" },
  };
  let z = [];
  for (let i in f) {
    let l = f[i];
    let m = l.a;
    let n = l.b;
    let o = getResult(m, n);
    z.push(o);
  }

  return <div>{z} </div>;
}

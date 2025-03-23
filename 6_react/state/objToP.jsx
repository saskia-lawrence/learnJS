let getAns = (x, y, z) => {
  return (
    <p id={x} className={y}>
      {z}
    </p>
  );
};
export default function App() {
  let a = {
    0: {
      id: "abc",
      class_name: "class1",
      text: "text1",
    },
    1: {
      id: "def",
      class_name: "class2",
      text: "text2",
    },
  };
  let u = [];
  for (let i in a) {
    let b = a[i];
    let c = b.id;
    let d = b.class_name;
    let e = b.text;
    let v = getAns(c, d, e);
    u.push(v);
  }
  return <div>{u}</div>;
}

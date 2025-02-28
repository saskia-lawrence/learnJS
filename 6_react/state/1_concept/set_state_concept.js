//by not using 'count' variable
let [count, setCount] = useState(0);
 
  const increment = () => {
    count = count + 1
    setCount(count);
  }


-----------------------------------------------  

//by not using 'count' variable
let [count, setCount] = useState(0);
 
  const increment = () => {
   
    setCount((a)=>{
      return a+1
    });
  }
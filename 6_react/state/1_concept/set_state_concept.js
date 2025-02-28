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
   
    setCount((a)=>{//this a has current value of count
      return a+1 // this return  value will become new value of count 
    });
  }
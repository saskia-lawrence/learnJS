//Boo.js
import React from 'react';
export default  Boo = {
    pen: [{size : 32,
          colour : 'green'},
          {size : 36,
          colour : 'red'},
          {size : 36,
          colour : 'pink'}] ,
    pencil : [{size : 17,
          colour : 'gray',
               company : 'apsara' 
         },
              {size : 61,
         colour : 'white',
         company : 'renold' }
            ]
};
    
//App.js
import React from 'react';
import Boo from './Boo';
import Pen from './pen';
import Pencil from './pencil';
let getPen = function(Boo){
    let arr = []
        Boo.pen.forEach((h) => {
             arr.push(<Pen y={h.size} z={h.colour}></Pen>) 
                    })
        return arr
}
let getPencil = function(Boo){
    let arr = []
        Boo.pencil.forEach((k) => {
             arr.push(<Pencil o={k.size} p={k.colour} q={k.company}></Pencil>) 
                    })
        return arr
}
export default function App() {
    let pen = getPen(Boo)
    let pencil = getPencil(Boo)
  return (<>
      {pen}
      {pencil}
  </>)
}
//pen.js
import React from 'react';
function Pen(props) {        
    return (
        <div>
                       <p>{props.y}</p>
            <p>{props.z}</p>
    </div>
    );
}
export default Pen;
//pencil
import React from 'react';
function Pencil(props) {
          
    return (
        <div>
    <h1>{props.q}</h1>
        <p>{props.o}</p>
        <p>{props.p}</p>
    </div>);
}
export default Pencil;
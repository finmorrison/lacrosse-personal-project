import React from "react";
import './StringMain.scss'



export default function Pocket(props) {
//   let options = props.pocketPlacement.map((el, i)=>{
//       return <button key ={i}>{el}</button>
//   });

  return (
    <div className='selectors'>
      <span>Pocket Placement:</span>
        <select onChange={(e) => props.handleChange('pocketPlacement', e.target.value) }>
            <option  value=''>Please choose an option</option>
            <option  value='high'>High</option>
            <option  value='mid-high'>Mid-high</option>
            <option  value='middle'>Middle</option>
            <option  value='mid-low'>Mid-low</option>
            <option  value='low'>Low</option>
        </select>
    </div>
  );
}


//"high", "mid-high", "middle", "mid-low", "low"
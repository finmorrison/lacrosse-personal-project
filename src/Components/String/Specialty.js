import React from "react";
import './StringMain.scss'


export default function Specialty(props) {
  // let options = props.whip.map((el, i)=>{
  //     return <button key ={i}>{el}</button>
  // });
  // let specialtyOptions = props.specialtyStyle.map((el, i)=>{
  //     return <button key ={i}>{el}</button>
  // });
  return (
    <div>
      <div className='selectors'>
        <span>Whip:</span>
        <select onChange={(e)=> props.handleChange('whip', e.target.value)}>
          <option value="">Please choose an option</option>
          <option value="high">High </option>
          <option value="mid">Mid </option>
          <option value="low">Low </option>
        </select>
     
      </div>
      <div className='selectors'>
        <span>Specialty Style:</span>
        <select onChange={(e)=> props.handleChange('specialtyStyle', e.target.value)}>
          <option value="">N/A</option>
          <option value="chenango">Chenango </option>
          <option value="traditional">Traditional </option>
          <option value="pita">Pita </option>
        </select>
      </div>
    </div>
  );
}

//["high", "mid", "low"]
//["chenango", "traditional", "pita"]

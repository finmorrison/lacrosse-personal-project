import React from "react";
import './StringMain.scss'

export default function AssortStrings(props) {
  // let options = props.shootingStrings.map((el, i)=>{
  //     return <button key ={i}>{el}</button>
  // });

  // let sidewallOptions = props.sidewallColor.map((el, i)=>{
  //     return <button key ={i}>{el}</button>
  // });
  return (
    <div>
      <div className='selectors'>
        <span>Shooting String Color:</span>
        <select onChange={(e)=>props.handleChange('shootingStrings', e.target.value)}>
          <option value="">Please choose an option</option>
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div className='selectors'>
        <span>Sidewall Color</span>
        <select onChange={(e)=>props.handleChange('sidewallColor', e.target.value)}>
          <option value="">Please choose an option</option>
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
      </div>
    </div>
  );
}

//["white", "black"]
// ["white", "black"]

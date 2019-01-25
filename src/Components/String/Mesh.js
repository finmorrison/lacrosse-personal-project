import React from "react";
import "./StringMain.scss";

export default function Mesh(props) {
  // let options = props.meshType.map((el, i)=>{
  //     return <button key ={i}>{el}</button>
  // });

  // let colorOptions = props.meshColor.map((el, i)=>{
  //     return <button key ={i}>{el}</button>
  // });
  return (
    <div>
      <div className='selectors'>
        <span>Mesh Type:</span>
        <select onChange={e => props.handleChange("meshType", e.target.value)}>
          <option value="">Please choose an option</option>
          <option value="hard">Hard</option>
          <option value="soft">Soft</option>
          <option value="semi-hard">Semi-hard</option>
        </select>
      </div>
      <div className='selectors'>
        <span>Mesh Color:</span>
        <select onChange={e => props.handleChange("meshColor", e.target.value)}>
          <option value="">Please choose an option</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="grey">Grey</option>
        </select>
      </div>
    </div>
  );
}

//["hard", "soft"]
// ["white", "green", "blue"]

import React from 'react';
import './style.css';

export default function Buttons({ category, fun }) {
  // console.log("  category",category)
  return (
    <div className="btnz">

      {category.map((i, k) => <button type="button" class="btn btn-outline-danger" onClick={() => fun(i)} key={k}>{i}</button>)}


    </div>
  )
}

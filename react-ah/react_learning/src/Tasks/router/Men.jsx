
import React,{useState} from 'react';
import {men} from './data';
import {useHistory} from 'react-router-dom'


  



export default function Men() {
  const [id,setId]=useState();
  let history =useHistory();
 
    return (

        <div class="row row-cols-1 row-cols-md-3 g-4" >
            {men.map((i,v)=>
            <div class="col" onClick={()=>{
              setId(i.name)
              history.push(id)
            }
              }>
            <div className="card h-100">
              <img src={i.img} class="card-img-top" alt="..."  className="img" />
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.price}.</p>
              </div>
            </div>
          </div>)}
             {/* <Disp id={id}/> */}
        </div>
    )
}


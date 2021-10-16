import React from 'react';
import { useParams } from 'react-router';
import { men } from './data';

export default function Id() {
    const {category}=useParams()
    const data = men;
    const card =  data.filter((i,v)=>i.name === category)
    console.log("card",card)
    return(<div class="row row-cols-1 row-cols-md-3 g-4">
  {card.map((i,v)=><div className="card h-100">
              <img src={i.img} class="card-img-top" alt="..."  className="img" />
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.price}.</p>
              </div>
            </div>
)}
    </div>
         
       
            
        
            
         
    )
}

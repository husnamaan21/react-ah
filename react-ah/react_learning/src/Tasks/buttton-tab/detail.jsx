import React from 'react'

export default function Detail({val,i,duty}) {
    console.log("detail",val[i].company)
    
    return (
        <div>
             <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">{val[i].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{val[i].company}</h6>
               { duty[i].map((j,l)=> <p class="card-text"><li>{j}</li></p>)}
              
               
            </div>
        </div> 
          
            
           
        </div>
    )
}

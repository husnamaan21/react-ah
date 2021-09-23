import React,{useState} from 'react'


export default function Search({search,change,input}) {
    
    return (
        
        <div >
            <input type="text" placeholder= " search here" onChange ={(e)=>change(e)}  value={input}  className="search"  />
           
            
        </div>
    )
}


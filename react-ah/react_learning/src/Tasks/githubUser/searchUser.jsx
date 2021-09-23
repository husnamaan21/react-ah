import React,{useState} from 'react';
import { GoSearch } from 'react-icons/go'


export default function SearchUser({change}) {
    const[item,setItem]=useState("")

    return (
        <div className="search-bar"  >
               <input type="text" placeholder=" &#x1F512; search user" onChange ={(e)=>setItem(e.target.value)}  value={item}  className="bar"  />
            <button onClick={()=>change(item)} className="srch-btn"  ><GoSearch /></button>
        </div>
    )
}

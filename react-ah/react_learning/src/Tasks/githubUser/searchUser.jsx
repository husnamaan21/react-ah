import React,{useState} from 'react';
import { GoSearch } from 'react-icons/go'


export default function SearchUser({change,user}) {
    const[item,setItem]=useState("")

    return (
        <div className="search-bar"  >
               <input type="text" placeholder=" &#x1F512; search user" onChange ={(e)=>change(e)}  value={user}  className="bar"  />
            <button  className="srch-btn"  ><GoSearch /></button>
        </div>
    )
}

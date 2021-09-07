import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import data from './data';



export default function Accordion() {
    const [flag, setflag] = useState(null)
 
    function toggle(val){
        if(flag == val){
            return setflag(null)
        }
        setflag(val)


    }


    return (
       
        <div>
        {
                data.map((i,val)=>
                    <div>
                    <div className={flag? "up" :"down" }>
                    <p>{i.title} </p>
                    <button className="btnz"  onClick={() =>toggle(i.id) }>
                        {flag === i.id? <FontAwesomeIcon icon={faChevronUp } className="up" /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </button>
                </div>
                <div>
                    {flag ===i.id  && <div className="content" >
    
                       <p>{i.content} </p>
    
                    </div> 
                    }
    
    
    
    
                </div>
                </div>
                
                  
               
)
               
        }
         
                

    
        </div>  

    )
}

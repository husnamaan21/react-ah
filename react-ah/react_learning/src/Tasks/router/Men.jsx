
import React,{useState} from 'react';
import {men} from './data';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Home';






  function MiniNav({func,items}){
     return(<>
    <nav>
    <div class="nav-wrapper">
    
      <ul id="nav-mobile" class="right hide-on-med-and-down">{
          items.map((i,v)=><li to={i} onClick={()=>func(i)}>{i}</li>)
      }
        
      </ul>
    </div>
  </nav>
  </>)
  }



export default function Men() {
  const [id,setId]=useState();
  const [data,setData]=useState(men);
  let history =useHistory();
  const category = data.map((i,v)=>i.type)
  const type =  new Set(category)
  const items =["All",...type]
  function check(e){

    (e ==="All") && setData(men)
      
    

      const filteritem= men.filter((i)=>i.type == e)
      setData(filteritem)
  }
 
    return (
     

        <div class="row row-cols-1 row-cols-md-3 g-4" >
      
          <MiniNav func={check} items={items} />
         
     
       
            {data.map((i,v)=>
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
           


    
        </div>
    )
}


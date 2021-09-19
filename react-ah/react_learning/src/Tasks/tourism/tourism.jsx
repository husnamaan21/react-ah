import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Footer from './footer'
import Cards from './cards';
import './style.css';

export default function Tourism() {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(false)
  const desc = data.map((i, val) => i.info)
  const descStr = desc.toString()
  const descSlice = descStr.slice(0, 500)
  const [flag, setflag] = useState(null)
  const [buttonz, setbuttonz] = useState(false)
  let click = buttonz ? desc : descSlice;
  function toggle(val) {
    if (flag == val) {
      return setflag(null)
    }
    setflag(val)
    setbuttonz(!buttonz)


  }
  const url = 'https://course-api.com/react-tours-project';
  async function fetched(){
    try{
      const response = await axios.get(url)  
      setdata(await response.data)
      console.log("await data api", data)
      setLoading(true)
    }
    catch(err){
          console.log(err)
    }
  }
  

  useEffect(() => {
 
    fetched()
   
}, [])
  function remove(ind) {
    const deleteItem = data.filter((i) => ind !== i.id)
    return setdata(deleteItem)

  }
 


 
  

  const ref = data.map((i, v) =>
    <Cards data={i} remove={remove} toggle={toggle} setbuttonz={setbuttonz} click={click} buttonz={buttonz} />)

  const condition = !loading ? <Loader /> : ref
  function refresh() {
    fetched()
    return ref
  }


  return (


    <div>







      {

        data.length == 0 && loading ? <button className=" btns waves-effect  blue-grey darken-3 btn-large" onClick={refresh}>Refresh</button> : condition

      }
      <Footer />





    </div>
  )
}

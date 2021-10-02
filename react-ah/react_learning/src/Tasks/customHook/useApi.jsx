import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function UseApi() {
   
        const [data, setdata] = useState([])
        const [loading, setLoading] = useState(false)

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
       
      
      
       
        
      
  
      
 
    return [data,remove]
}

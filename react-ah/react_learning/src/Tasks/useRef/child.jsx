import React,{useState,useRef,useEffect} from 'react'

export default function Child({val}) {
    const [flag,setFlag]=useState(false)

  
    let ref =useRef()
    let tb=useRef()
    let tr=useRef()
    let td=useRef()
 
   
 
    useEffect(()=>{
       
       
        ref.current=val
    
        console.log("useEffect and ref",ref.current)
      
        tb.current.width="100%"
        tr.current.style.padding="8px"
        tr.current.style.textAlign='center'
        td.current.style.backgroundColor="grey"
        td.current.style.color="white"
      
        
    })
    
    let chk= true

   
  val ? chk = !chk:null 
  

    return (
     
        <div>
            {  console.log("return and ref",ref.current)
            }
            {  console.log("return and prop",val)}
               {/* {ref.current && setFlag(true)}
               {flag  }  */}
            <table ref={tb} style={{ borderCollapse: "collapse",marginTop:"5%"}}>
               
                <tr ref={tr} style={{border:"1px solid #dddddd" }}>
                    <td  >
                  <thead ref={tr}>
                        Previos task
                  </thead>
                  </td>
                  <td  >
                  <thead ref={tr}>
                      Current task
                  </thead>
                  </td>
                </tr>
                <tr ref={tr}>
            
                 <td ref={td}>{ref.current || "no task is here"}</td>
                
                 {console.log("refffff",chk)}
           
               
                <td ref={tr}>{val}</td>
            
         
          
                 </tr>
            </table>
        </div>
    )
}

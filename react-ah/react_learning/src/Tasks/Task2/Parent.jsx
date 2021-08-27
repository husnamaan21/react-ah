import obj from './newData';
import React from 'react';
import Cards from './Cards';




export const Parent = () => {
   
    return (
        <div style={{"display":"flex","justifyContent":"space-evenly", "flex-wrap":"wrap"}}>
            {obj.map((i,index)=>
                <div key={index}>
                    <Cards  img={i.src} title={i.title} price={i.price} desingner={i.content}  />
                   
                </div>
            )}
          
              
                      {/* <Cards  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHMC6od4TP4kX5D9NwokcKDPBX0BvIWSCx27T3DRcdqrbkVo7IzvkQ6yEAEbg2rg-BwA&usqp=CAU"} title={"Nike Shoes_01"} price={19} desingner={"Done by Husna_Shahbaz"} avatar={"avatar1"} /> 
                      <Cards img={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwc2hvZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} title={"Nike Shoes_02"} price={23} desingner={"Done by Husna_Shahbaz"} avatar={"avatar2"} /> 
                      <Cards img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyEl3xeA0X3L7tYOrVMRntzFNRuhAJGxjSNHIl52ORbwijel8v2Z0BSDxiNRVNOOjuqI&usqp=CAU"} title={"Nike Shoes_03"} price={21} desingner={"Done by Husna_Shahbaz"} avatar={"avatar3"}/> 
                      <Cards img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibZtCeLglg5FzVkxENg1MhKi0ZiHZ1xF2CA&usqp=CAU"} title={"Nike Shoes_04"}  price={34} desingner={"Done by Husna_Shahbaz"} avatar={"avatar4"}/>  */}
                   
          
         
            
        </div>
    )
   
}

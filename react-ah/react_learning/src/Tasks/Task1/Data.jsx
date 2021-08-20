import React from 'react';
import img from './logo.jpg';
import './main.css';




export default function Data() {
    const obj =[
        {
            "id": "1",
            "title": "Nike Shoes 01",
            "src":"../images/img1.jpg",
            "content": "Done by Husna_Shahbaz",
            "price": 23,
          
        },
        {
            "id": "2",
            "title": "Nike Shoes 02",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f5356d5-9f29-48c2-a97b-a74b329add75/air-max-270-little-kids-shoe-RStNgd.png",
             "content": "Done by Husna_Shahbaz",
            "price": 19,
           
        },
        {
            "id": "3",
            "title": "Nike Shoes 03",
            "src": "../images/img2.jpg",
            "content": "Done by Husna_Shahbaz",
            "price": 19,
          
        },
        
    ]
    const title= React.createElement('h3',null,"nike shoes 04");
    const price = 20
    const content = React.createElement('p',null,"Done by Husna_Shahbaz");
    return (
        <div className="styling">
          {  obj.map((item)=>
                <div className="style">
                <h3>{item.title}</h3>
                <img src={item.src} />
                <h4>price ${item.price}</h4>
                <p>{item.content}</p>
                </div>

            )
          }
          <div className="style">
           <h3>{title}</h3>
          <img src={img} alt="no" />
          <h4>price ${price}</h4>
          <p>{content}</p>
          </div>

         
        
        </div>
    )
}


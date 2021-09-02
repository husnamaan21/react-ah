
import './style.css';

import React, { Component } from 'react'

export class Main extends Component {
    constructor(props){
        super(props)
        console.log(props)
         const {data ,index } = this.props;
        const {title,src,price,content} =data[index]
        console.log(title)
        
    }
    
    render() {
       
      
       
        return (


            <div className="styling">
               
                    <div className="style" >
                         <h3> {this.title}</h3>
                        <img src={this.src} />
                        <h4>price ${this.price}</h4>
                        <p>{this.content}</p>
                       
                    </div> 
                    <p>{this.index}</p>
            
                
            </div>
        )
    }
}

export default Main
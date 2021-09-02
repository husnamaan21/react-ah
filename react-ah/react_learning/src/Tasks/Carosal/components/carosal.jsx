import React, { Component } from 'react';
import {data} from './data';
import Main from './main';
import './style.css';


export class Carosal extends Component {
        constructor(){
            super()
           this.state={
                index : 0
            }
            this.Next= this.Next.bind(this);
        }
       
        Next() {
          
   
            (this.state.index < data.length - 1 ?  this. setState({index:this.state.index+1}) :  this. setState({ index:0     }))
           
            
        }
   
    
    render() {
        const [{title}]=data
        
    
       
        
       
        const pre=()=>{
            (this.state.index > 0 ?  this. setState({ index:this.state.index-1 }): this. setState({  index:data.length-1 }))
               
           
     
        }
        
      
       
        return (
            <div>
               
             
                <Main data={data} index={this.state.index} next={this.Next} back={pre}/>
              
             

            </div>
        )
    }
}

export default Carosal

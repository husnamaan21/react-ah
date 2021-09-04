
import './style.css';

import React, { Component } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export class Main extends Component {
    
    
    render() {
       
        const {data ,index,next,back } = this.props;
        console.log(next)
        const {title,src,price,content} =data[index]
       
        return (
            <div>
            <h1>{title}</h1>
            <div className="styling">
              
                    <div className="style" >
                         {/* <h3> {title}</h3> */}
                        <img src={src} />
                     <h4>price ${price}</h4>
                     <div className="btns">
                    <ArrowBackIosIcon onClick={back} style={{ fontSize:"29px" , fontWeight: "900",  }} />
                     <p>{content}</p>
                     <NavigateNextIcon onClick={next} style={{ fontSize:"49px", fontWeight: "600",  }} />
                     </div>
                   
                       
                       
                    </div> 
                   
                    </div>
                
            </div>
        )
    }
}

export default Main

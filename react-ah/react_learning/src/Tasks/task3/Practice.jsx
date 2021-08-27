import React from 'react';
import PracticeComponent from './practiceComponent'

function Practice() {

     let  obj1 ={
        deg:"bscs",
        sem:"6th"
    }
    let arr =["hello","hi","bye",obj1]
     return (
        <div>
           <PracticeComponent arr={arr} />
        </div>
    )
}

export default Practice;

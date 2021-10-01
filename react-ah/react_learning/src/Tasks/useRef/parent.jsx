import React, { useState, useRef, useEffect } from 'react';
import Child from './child';

export default function Parent() {
    let input = useRef()

    const [val, setVal] = useState()
    // const [disp,setDisp]=useState()
    // const [flag,setflag]=useState(true)
    // useEffect(()=>{
    //     return ()=>setDisp("pre val")
    // })


    return (
        <div>

            <input type="text" ref={input} />
            <button onClick={() => {
                // setflag(false)
                setVal(input.current.value)
                input.current.value = ""
            }
            }>Add me</button>
            <Child val={val} />
        </div>
    )
}

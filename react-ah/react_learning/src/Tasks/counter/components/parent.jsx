import React, { useState } from 'react';
import Child from './childComponenet';
import './counter.css';

function Parent() {
    const [flag, setflag] = useState(true)
    const [add, setadd] = useState(0)
    const [color, setColor] = useState(true)
    const [value,setValue]=useState("unlock")
    let changeColor = (color ? 'main' : 'main2')

    function subtraction() {
        flag && setadd(add - 1)
        if(add == 0){
            setadd(0)
            alert("value already 0")
        }
    }
    function lock() {
        setflag(false)
        setValue("lock")
    }
    function unlock() {
        setflag(!flag)
        setValue("unlock")
    }
    function changeTheme() {
        flag && setColor(!color)
    }


    return (
        <div className="container">
            <h1>React Counter</h1>
            <div className={changeColor}>
                <Child add={add} />
                <div className="reset">
                    <button className="reset" onClick={() => { flag && setadd("") }}>Reset</button>
                </div>
                <div className="btns">

                    <button style={{borderRadius:"13px"}} onClick={() => {
                        flag && setadd(add + 1)
                    }} >Increment</button>
                    <button style={{borderRadius:"13px"}} onClick={subtraction}>Decrement</button>

                </div>
                <div className="btnz">
                    <button style={{borderRadius:"13px"}} onClick={lock} onDoubleClick={unlock}>{value}</button>
                    <button style={{borderRadius:"13px"}} onClick={changeTheme}>Change Theme</button>
                </div>


            </div>
        </div>
    )
}

export default Parent;

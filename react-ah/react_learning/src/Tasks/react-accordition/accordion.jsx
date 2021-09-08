import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import data from './data';



export default function Accordion() {

    const con = data.map((i, val) => i.content)
    const arrange = new Set(con)
    const con1 = [...arrange]
    const conn = con1.toString()
    const con2 = conn.slice(0, 69)
    const [flag, setflag] = useState(null)
    const [buttonz, setbuttonz] = useState(false)
    let click = buttonz ? con1 : con2;;
    function toggle(val) {
        if (flag == val) {
            return setflag(null)
        }
        setflag(val)


    }




    return (

        <div>
            {
                data.map((i, val) =>
                    <div>
                        <div className={flag ? "up" : "down"}>
                            <p>{i.title} </p>
                            <button className="btnz" onClick={() => toggle(i.id)}>
                                {flag === i.id ? <FontAwesomeIcon icon={faChevronUp} className="up" /> : <FontAwesomeIcon icon={faChevronDown} />}
                            </button>
                        </div>
                        <div>

                            {flag === i.id && <div className="content" >



                                <p>{click} </p>
                                <button className="btnz" onClick={() => setbuttonz(!buttonz)}>{buttonz ? 'read less' : "read more"}</button>

                            </div>
                            }




                        </div>
                    </div>



                )

            }




        </div>

    )
}

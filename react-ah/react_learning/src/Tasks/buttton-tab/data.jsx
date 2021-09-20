import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './button';
import Detail from './detail';
import Loader from './loading';
import './style.css';

export default function Data() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const [flag, setFlag] = useState(false)


    useEffect(() => {
        async function fetching() {
            const res = await axios.get('https://course-api.com/react-tabs-project')
            setData(await res.data)
            console.log("data", data)
            setLoading(true)
        }

        fetching()

    }, [])

    const duties = data.map((i, v) => i.duties)

    function change(id) {
        setIndex(id)
        setFlag(true)


    }



    return (
        <div>

            {!loading && <Loader />}
            <Button data={data} change={change} />
            {flag ? <Detail val={data} i={index} duty={duties} /> : null}
       















        </div>
    )
}

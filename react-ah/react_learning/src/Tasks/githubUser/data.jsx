import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './cards';
import Search from './search';
import SearchUser from './searchUser';
import UserCard from './userCard';
import './style.css';

export default function Data() {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])
    const [input, setInput] = useState("")
    const [userData, setUserData] = useState()
    const [user, setUser] = useState("")

    let url = "https://api.github.com/users"
    async function fetching() {

        const res = await axios.get(url)
        setdata(await res.data)
        setloading(true)

    }
    async function fetchingUser() {

        const res = await axios.get(`https://api.github.com/users/${user}`)
        setUserData(await res.data)
        console.log("userdata", userData)
        setloading(true)

    }

    useEffect(() => {

        fetching()

    }, [])
    useEffect(() => {

        fetchingUser()

    }, [user])

    function change(e) {
        setInput(e.target.value)
    }
    function changeUser(val) {

        setUser(val)
        fetchingUser()
    }

    const searchItem = data.filter((i) => { return i.login.includes(input) })
    return (




        <div>
          
            {!loading && "loading" }
          
            <SearchUser change={changeUser} />
            <div className="logo-box">
            <img src={"https://desktop.github.com/images/desktop-icon.svg"} alt="logo" className="logo" />
            <Search change={change} input={input} />
            </div>
           
          

            {userData ? <UserCard data={userData} /> : <Cards data={searchItem} />}


        </div>
    )
}

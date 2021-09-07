import React, { useState } from 'react';
import data from './data';
import Button from './button';
import Cards from './cards';

export default function Menu() {
    const category = data.map((val, i) => val.category)
    const arrangeCategory = new Set(category)
    const arrangeData = ['All', ...arrangeCategory]
    // console.log("new", (arrangeData))
    const [item, setitem] = useState(data)
    function desireItem(choice) {

        (choice == 'All') && setitem(data)

        const filter = data.filter((item) => item.category == choice)
        setitem(filter)
        console.log(filter)
    }

    return (

        <div>
            <Button category={arrangeData} fun={desireItem} />
            <div className="main"> {item.map((i, k) => <Cards item={i} />)}</div>

        </div>
    )
}

import React from 'react'

export default function Button({data,change}) {
    return (
        <div>
            {
                data.map((i,v)=> <button type="button" onClick={()=>change(v)} class="btn btn-outline-warning" >{i.company}</button>)
            }
            
        </div>
    )
}

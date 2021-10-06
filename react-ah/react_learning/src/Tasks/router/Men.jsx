import { ManageAccounts } from '@mui/icons-material';
import React from 'react';
import {men} from './data'

export default function Men() {
    return (

        <div class="row row-cols-1 row-cols-md-3 g-4">
            {men.map((i,v)=>
            <div class="col">
            <div className="card h-100">
              <img src={i.img} class="card-img-top" alt="..."  className="img" />
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.price}.</p>
              </div>
            </div>
          </div>)}
             
        </div>
    )
}

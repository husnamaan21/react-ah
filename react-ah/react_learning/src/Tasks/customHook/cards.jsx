import React from 'react';
import UseApi from './useApi';

export default function Cards() {
    const [data,remove] = UseApi()
    console.log(data)
    return (


        <div >
            {data.map((data,i)=>
              <div className="row">
              <div class="col s6 m6">
                  <div className="card large">
                      <div class="card-image waves-effect waves-block waves-light">
                          <img class="activator" src={data.image} />
                      </div>
                      <div class="card-content">
                          <span class="card-title activator grey-text text-darken-4">{data.name}<i class="material-icons right">more_vert</i></span>
                          <button onClick={() => remove(data.id)} class="waves-effect  blue-grey darken-3 btn-large"><i class="material-icons left">delete_forever</i>Not Interested</button>
                      </div>

                      <div class="card-reveal" >
                          <span class="card-title grey-text text-darken-4">Price : ${data.price}<i class="material-icons right">close</i></span>
                          <h4>{data.info}</h4>










                      </div>
                  </div>
              </div>
          </div>)}

          
        </div>

    )
}


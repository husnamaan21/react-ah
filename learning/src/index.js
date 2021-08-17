import React from 'react';
import ReactDOM from 'react-dom';

<h2>first class</h2>
const title=123
const word=React.createElement('p',null,"hello world") // create Element
var parent=  React.createElement('div',null,React.createElement('h1',null,"Husna"))
{/* <div>
</div>
 <>
</> */} // React Fragment (packets)

  
ReactDOM.render( <>{title} {parent}</>

 ,
  document.getElementById('root')
);



import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

export default function Box() {
    // const movement =  [
    //     {transform: 'translateX(700px)'},
    //     {transform: 'translateX(100px)'}
    // ]
    // const moveTime={
    //     durations :3000,
    //     iterations:Infinity
    // }
    // const {ref} =useWebAnimations({
    //     keyframes : movement,
    //     timing:moveTime
    // })
    const my= useWebAnimations({
        keyframes: {
          transform: "translateX(900px)", 
          transform: "translateX(100px)",// Move by 500px
          background: ["red", "blue", "green"], // Go through three colors
        },
        animationOptions: {
          delay: 500, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: 2, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
    })
    return (
        <div>
            <div style={{color:"black",backgroundColor:"lightcyan",width:"300px",height:"100px"}} ref={my.ref}> hello</div>
        </div>
    )
}

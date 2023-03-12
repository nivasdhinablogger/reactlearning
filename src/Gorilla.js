import React, { useEffect, useState } from 'react'

function Gorilla(props) {
    const [counter, setCounter]=useState(0);
    useEffect(
        ()=>{
            console.log("hi");
            setCounter(1);
        },[props.visible]);
  return (
    <div>{counter}</div>
  )
}

export default Gorilla
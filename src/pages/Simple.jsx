import React, { useEffect } from 'react'

const Simple = () => {
useEffect(()=>{
    console.log("Component Mounted");
},[]);
  return <h1> Check console for a message!</h1>
}

export default Simple

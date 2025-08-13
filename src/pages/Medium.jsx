import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'

const Medium = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log(`Count changed : ${count}`);
    },[count])
  return (
    <div>
      <h1>Count : {count}</h1>
      <Button onClick={()=>setCount(count+1)}>Increment</Button>
    </div>
  )
}

export default Medium

import React, { useEffect, useState } from 'react'

const Hard = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading]= useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        const fetchUsers = async() =>{
            try {
               const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) throw new Error("Failed to fetch users");
                const data = await res.json();
                setUsers(data); 
            } catch (error) {
                setError(data);
            } finally{
                setLoading(false);
            }
        };
        fetchUsers();
    },[]);

    if(loading) return <p> Loading users</p>
    if(error) return <p style={{color : "red"}}>Error:{error}</p>
  return (
    <div>
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  )
}

export default Hard

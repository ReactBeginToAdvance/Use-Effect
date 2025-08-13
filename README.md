# React `useEffect` 

## What is `useEffect`?

`useEffect` is a **React Hook** that allows you to perform **side effects** in functional components.  
Side effects can include:

- Fetching data from an API
- Updating the DOM directly
- Setting up subscriptions or timers
- Logging or analytics

It combines the behavior of **`componentDidMount`**, **`componentDidUpdate`**, and **`componentWillUnmount`** from class components.

---

## Syntax

```javascript
useEffect(() => {
  // Your side effect code
  return () => {
    // Optional cleanup
  };
}, [dependencies]);

```

- Effect function: Runs after the component renders.
- Cleanup function: Runs before the component unmounts or before running the effect again.
- Dependency array: Controls when the effect should re-run.
- Dependency Array
- [] → Runs only once (on mount).
- [stateOrProp] → Runs when the specified value changes.
- Omitted → Runs on every render.


## 1. Simple Example – Log on Mount

```javascript
import React, { useEffect } from "react";

function SimpleExample() {
  useEffect(() => {
    console.log("Component Mounted!");
  }, []);

  return <h1>Check console for a message!</h1>;
}

export default SimpleExample;
```
- Explanation: Logs a message once when the component mounts.


## 2. Medium Example – Counter with Dependency

```javascript
import React, { useState, useEffect } from "react";

function MediumExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MediumExample;
```
- Explanation: Effect runs whenever the count state changes.


## 3. Hard Example – Fetch API with Loading and Error Handling

```javascript
import React, { useState, useEffect } from "react";

function HardExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default HardExample;
```

- Fetches data from an API only once.
- Handles loading and error states.
- Demonstrates async/await inside useEffect.
- Tips & Best Practices
- Always include all dependencies in the dependency array.
- Use cleanup functions for subscriptions or timers.
- Avoid heavy computation inside useEffect; consider memoization.
- If you need to run code only once, always use an empty array [].

import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [ count, setCount ] = useState(0);
    const [ count2 ] = useState(1);
    console.log("user Page functional constructor and render");
    useEffect(()=>{
        console.log("User page functional useEffect")
        const timer = setInterval(()=> {
            console.log('interval is called');
        }, 1000)
        return () => {
            clearInterval(timer);
            console.log("useEffect return")
        }
    },[])
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <button onClick={()=> {
                setCount(count+1);
            }}>Increase Count</button>
            <h2>Name:- {name}</h2>
            <h3>Location:- Panipat</h3>
            <h4>Contact:- @DikshaTaneja3</h4>
        </div>
    )
}

export default User;
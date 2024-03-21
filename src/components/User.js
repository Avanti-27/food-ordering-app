import { useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0)

    return (
       <div className="users">
        <h1>Count: {count} </h1>
        <button onClick={() => {setCount(count+1)}}>Increase Count</button>
        <h2>Name: {props.name}</h2>
        <h3>Location: {props.location}</h3>
        <h3>Social Media: @avanti2710</h3>

       </div> 
       
    )
};

export default  User;
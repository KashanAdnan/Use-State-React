import { useState } from 'react'
import React from 'react'
import  Navbar  from "./Navbar";

const Light = () => {
    const [light, setLight] = useState(false)
    return (
        <>
            <Navbar />
            <div className={light ? "light" : "dark"}>
                <button onClick={() => setLight(true)}>ON</button>
                <button onClick={() => setLight(false)}>OFF</button>
            </div>
        </>
    )
}

export default Light

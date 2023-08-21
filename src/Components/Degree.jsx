import React, { useState } from 'react'
import Navbar from "./Navbar";

const Degree = () => {
    let [degree, setDegree] = useState(72)
    return (
        <>
            <Navbar />
            <div className='light'>
                <div>
                    <button onClick={() => setDegree(degree++)}>+</button>
                    <button onClick={() => setDegree(degree--)}>-</button>
                    <div className='degree'>
                        <p>{degree} Degrees</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Degree

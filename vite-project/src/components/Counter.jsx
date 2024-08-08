import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        let timer;
        
        if (time < 11) {
            timer = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else {
            setDisable(true);
        }

        return () => clearInterval(timer);
    }, [time]);

    return (
        <div>
            <div className="container">
                <div className="box">
                    <h2>No of clicks until Timer expires</h2>
                    <div className="card">
                        <h1>{count}</h1>
                        <h2>Time left: {11 - time} seconds</h2>
                        <button disabled={disable} onClick={() => setCount(count + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;

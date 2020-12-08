import React, { useState } from "react";
import "./App.css";

const useInput = (initalValue, validator) => {
    const [value, setValue] = useState(initalValue);
    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
        console.log(typeof validator);
    };
    return { value, onChange };
};

const App = () => {
    const maxValue = (value) => value.length < 10;
    console.log(maxValue);
    const name = useInput("JaeJun", maxValue);

    return (
        <div className="App">
            <h1>Hook</h1>
            <input {...name} placeholder="Name" />
        </div>
    );
};

export default App;

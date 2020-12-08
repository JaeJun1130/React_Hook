import React, { useState, useEffect } from "react";
import "../App.css";

const useTitme = (initalValue) => {
    const [title, setTitle] = useState(initalValue);
    const updateTitle = () => {
        const htmlTtitle = document.querySelector("title");
        htmlTtitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};
const App = () => {
    const titleUpdate = useTitme("Loding...");
    setTimeout(() => titleUpdate("home"), 2000);
    return (
        <div className="App">
            <h1>UseEffect</h1>
        </div>
    );
};

export default App;

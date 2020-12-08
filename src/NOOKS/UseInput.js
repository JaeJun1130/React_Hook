// import React, { useState } from "react";
// import "../App.css";

// const useInput = (initalValue, validator) => {
//     const [value, setValue] = useState(initalValue);
//     const onChange = (e) => {
//         const {
//             target: { value },
//         } = e;

//         let willUpdate = true;
//         if (typeof validator === "function") {
//             willUpdate = validator(value);
//         }
//         if (willUpdate) {
//             setValue(value);
//         }
//     };

//     return { value, onChange };
// };

// const App = () => {
//     const maxname = (value) => value.length < 10;
//     const name = useInput("JaeJun", maxname);
//     return (
//         <div className="App">
//             <h1>your name</h1>
//             <input {...name} placeholder="name"></input>
//         </div>
//     );
// };

// export default App;

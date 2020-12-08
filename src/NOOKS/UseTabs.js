// import React, { useState } from "react";
// import "../App.css";

// const content = [
//     {
//         tab: "Section1",
//         content: "Section1 title",
//     },
//     {
//         tab: "Section2",
//         content: "Section2 title",
//     },
// ];

// const useTabs = (item, allItem) => {
//     const [currentIndex, setCurrentIndex] = useState(item);

//     return { currentItem: allItem[currentIndex], currentChage: setCurrentIndex };
// };

// const App = () => {
//     const { currentItem, currentChage } = useTabs(0, content);
//     return (
//         <div className="App">
//             <h1>UseTabs</h1>
//             {content.map((section, index) => (
//                 <button onClick={() => currentChage(index)}>{section.tab}</button>
//             ))}
//             <div>{currentItem.content}</div>
//         </div>
//     );
// };

// export default App;

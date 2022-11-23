// import {useEffect} from "react";

// const Timer = () => {
//     useEffect(() => {
//         const timer = setInterval(() => {
//             document.getElementById("timer").innerText = parseInt(document.getElementById("timer").innerText) + 1;
//         }, 1000);

//         return () => {
//             //unmount시 작업
//             clearInterval(timer);
//         }
//     }, []);
//     return <div>타이머 켜짐</div>
// };

// export default Timer;
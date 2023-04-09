// // 리덕스 사용하지 않을때 props사용하면서 여러 중간다리를 통해야하는 번거로움 테스트 
// import React, { useState } from "react";
// import "./style.css";

// export default function App() {

//   const [number, setNumber] = useState(55);

//   return (
//     <div id="container">
//         <h1 style={{color:"red"}}>Root:{number}</h1> 

//       {/* 1. left 의 prop 만 초기값 숫자1을 중간다리 통해서 전달해야하는 번거로움 테스트   */}
//         {/* <Left1 number={number}></Left1> */}
//         {/* 2. right 까지 추가되면 더 많은 중간다리를 통해서 전달하게됨  */}
//       <div id="grid">
//         <Left1 number={number}></Left1>
//         <Right1 onIncrease={() => {
//           setNumber(number + 1);
//         }}></Right1>
//       </div>
//     </div>
//   );
// }

// function Left1(props) {
//   return <div>
//     <h1>Left1 : {props.number}</h1>
//     <Left2 number={props.number}></Left2>
//   </div>
// }

// function Left2(props) {
//   return <div>
//     <h1>Left2 : {props.number}</h1>
//     <Left3 number={props.number}></Left3>
//   </div>
// }

// function Left3(props) {
//   return <div>
//     <h1>Left3 : {props.number}</h1>
//   </div>
// }
// function Right1(props) {
//   return <div>
//     <h1>Right1</h1>
//     <Right2 onIncrease={() => {
//       props.onIncrease();
//     }}></Right2>
//   </div>
// }

// function Right2(props) {
//   return <div>
//     <h1>Right2</h1>
//     <Right3 onIncrease={() => {
//       props.onIncrease();
//     }}></Right3>
//   </div>
// }

// function Right3(props) {
//   return <div>
//     <h1>Right3</h1>
//     <input type="button" value="number+1" onClick={() => {props.onIncrease()}} ></input>
//   </div>
// }



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


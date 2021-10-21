import "./styles.css";
import { useState } from "react";
import { data } from "./component/data";

export default function App() {
  const [Text, setText] = useState("");
  const [Text2, setText2] = useState("");
  const [longpress, setLongpress] = useState(false);
  const [counter, setCounter] = useState(0);

  var myVar;

  const choiseAndReset = () => {
    clearTimeout(myVar);
    setText2(Text2 + Text);
    setText("");
    setCounter(0);
    setLongpress(false);
    console.log(longpress);
  };

  const downHandler = (element) => {
    myVar = setTimeout(function () {
      setText(element.number);
      setLongpress(true);
      console.log(element.number);
    }, 1000);
  };
  const clickHandler = (element) => {
    clearTimeout(myVar);
    setCounter(counter + 1);
    if (longpress) {
      console.log("longpress key");
    } else {
      if (counter >= element.letter.length + 1) {
        setCounter(1);
      } else {
        if (counter >= element.letter.length) {
          setText(element.number);
          console.log("number");
        } else {
          setText(element.letter.charAt(counter));
          console.log(element.letter.charAt(counter));
        }
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="displaybar">
          <h3> {Text2 + Text}</h3>
        </div>
        <div className="input-box">
          {data.map((element, index) => (
            <div
              onMouseLeave={() => choiseAndReset()}
              onMouseDown={() => downHandler(element)}
              onTouchStart={() => downHandler(element)}
              onTouchEnd={() => choiseAndReset()}
              onTouchCancel={() => choiseAndReset()}
              onClick={() => clickHandler(element)}
              key={element.number}
              className="item"
            >
              <div className="item-no">{element.number}</div>
              <div className="item-aph">{element.letter}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

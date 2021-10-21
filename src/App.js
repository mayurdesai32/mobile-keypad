import "./styles.css";
import { useState } from "react";
import { data } from "./component/data";

export default function App() {
  const [Text, setText] = useState("");
  const [Text2, setText2] = useState("");
  const [longpress, setLongpress] = useState(false);
  const [counter, setCounter] = useState(0);

  // const [clicked, setClicked] = useState(false);
  // let counter = 0;

  var myVar;

  const choiseAndReset = () => {
    // counter = 0;

    clearTimeout(myVar);

    console.log("hello");

    setText2(Text2 + Text);
    setText("");
    setCounter(0);
    setLongpress(false);
    console.log(longpress);
    // return counter;
  };

  const downHandler = (element) => {
    myVar = setTimeout(function () {
      setText(element.number);
      setLongpress(true);
      console.log(element.number);
    }, 2000);
  };
  const clickHandler = (number) => {
    // console.log(number);
    clearTimeout(myVar);
    setCounter(counter + 1);
    if (longpress) {
      null;
      console.log("myname");
    } else {
      switch (number) {
        // for 1

        case 0:
          // console.log(counter);
          // if (longpress) {
          //   // setText("1");NULL
          //   null;
          // } else {
          if (counter >= 4) {
            setCounter(1);
            console.log("change");
            setText(".");
          } else {
            if (counter % 4 === 0) {
              setText(".");
            } else if (counter % 3 === 0) {
              setText("1");
              // console.log("3");
            } else if (counter % 2 === 0) {
              setText("!");
              // console.log("2");
            } else if (counter % 1 === 0) {
              setText(",");
            }
          }
          // }
          break;
        // for 2
        case 1:
          setCounter(counter + 1);
          if (counter >= 4) {
            setCounter(1);
            console.log("change");
            setText("a");
          } else {
            if (counter % 4 === 0) {
              setText("a");
            } else if (counter % 3 === 0) {
              setText("2");
            } else if (counter % 2 === 0) {
              setText("c");
            } else if (counter % 1 === 0) {
              setText("b");
            }
          }

          break;

        // for 3
        case 2:
          setCounter(counter + 1);
          if (counter >= 4) {
            setCounter(1);
            console.log("change");
            setText("d");
          } else {
            if (counter % 4 === 0) {
              setText("d");
            } else if (counter % 3 === 0) {
              setText("3");
            } else if (counter % 2 === 0) {
              setText("f");
            } else if (counter % 1 === 0) {
              setText("e");
            }
          }
          break;

        // for 3
        case 3:
          setCounter(counter + 1);
          if (counter >= 4) {
            setCounter(1);
            console.log("change");
            setText("g");
          } else {
            if (counter % 4 === 0) {
              setText("g");
            } else if (counter % 3 === 0) {
              setText("4");
            } else if (counter % 2 === 0) {
              setText("i");
            } else if (counter % 1 === 0) {
              setText("h");
            }
          }
          break;

        // for 5
        case 4:
          setCounter(counter + 1);
          if (counter >= 4) {
            setCounter(1);
            console.log("change");
            setText("j");
          } else {
            if (counter % 4 === 0) {
              setText("j");
            } else if (counter % 3 === 0) {
              setText("5");
            } else if (counter % 2 === 0) {
              setText("l");
            } else if (counter % 1 === 0) {
              setText("k");
            }
          }
          break;

        // for 6

        case 5:
          setCounter(counter + 1);
          if (counter >= 4) {
            setCounter(1);
            console.log("change");
            setText("m");
          } else {
            if (counter % 4 === 0) {
              setText("m");
            } else if (counter % 3 === 0) {
              setText("6");
            } else if (counter % 2 === 0) {
              setText("o");
            } else if (counter % 1 === 0) {
              setText("n");
            }
          }
          break;

        // for 7

        case 6:
          setCounter(counter + 1);
          if (counter >= 5) {
            setCounter(1);
            console.log("change");
            setText("p");
          } else {
            if (counter % 5 === 0) {
              setText("p");
            } else if (counter % 4 === 0) {
              setText("7");
            } else if (counter % 3 === 0) {
              setText("s");
            } else if (counter % 2 === 0) {
              setText("r");
            } else if (counter % 1 === 0) {
              setText("q");
            }
          }
          break;

        // for 8
        case 7:
          setCounter(counter + 1);
          if (counter >= 4) {
            setCounter(1);
            console.log("change");
            setText("t");
          } else {
            if (counter % 4 === 0) {
              setText("t");
            } else if (counter % 3 === 0) {
              setText("8");
            } else if (counter % 2 === 0) {
              setText("v");
            } else if (counter % 1 === 0) {
              setText("u");
            }
          }
          break;
        // for 9
        case 8:
          setCounter(counter + 1);
          if (counter >= 5) {
            setCounter(1);
            console.log("change");
            setText("w");
          } else {
            if (counter % 5 === 0) {
              setText("w");
            } else if (counter % 4 === 0) {
              setText("9");
            } else if (counter % 3 === 0) {
              setText("z");
            } else if (counter % 2 === 0) {
              setText("y");
            } else if (counter % 1 === 0) {
              setText("x");
            }
          }
          break;
        // for *
        case 9:
          setText("*");

          break;
        // for0
        case 10:
          setText("0");

          break;

        case 11:
          setText("#");

          break;
        // start
        default:
          return null;
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
              // {addEventListener('mouseleave', choiseAndReset)};
              onClick={() => clickHandler(index)}
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

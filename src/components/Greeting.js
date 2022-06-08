import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangeText] = useState(false);

  const textChangeHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h1>Hello World</h1>
      {changedText === false && (
        <Output>
          <p>hey everybody</p>
        </Output>
      )}
      {changedText ? (
        <Output>"true text"</Output>
      ) : (
        <Output>"false text"</Output>
      )}
      <button onClick={textChangeHandler}>change text</button>
    </div>
  );
};

export default Greeting;

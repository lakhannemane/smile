import React from "react";
import Button from "./Components/Buttons/Index";

function App() {
  const handleClick = () => {
    alert("first");
  };

  const secondbtnHandler = () => {
    alert("second");
  };
  return (
    <div className="App">
      <div className="container">
        <Button text="click me" styleButton="first-btn" OK={handleClick} />
        <Button
          text="click me"
          styleButton="second-btn"
          OK={secondbtnHandler}
        />
        <Button
          text="click me"
          styleButton="success-btn"
          OK={secondbtnHandler}
        />
        <Button text="warning" styleButton="warn-btn" OK={secondbtnHandler} />
        <Button
          text="click me"
          styleButton="second-btn"
          OK={secondbtnHandler}
        />
        <Button text={132} styleButton="danger-btn" OK={secondbtnHandler} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
// import axiosInstance from "./Axios/AxiosInstance";
import FormLogin from "./Components/Form/Index";
// import Button from "./Components/Buttons/Index";

function App() {
  return (
    <div className="App">
      <div className="container">
        <FormLogin />
        {/* button group */}
        {/* <div className="buttons-group">
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
        </div> */}

        {/* form login */}
      </div>
    </div>
  );
}

export default App;

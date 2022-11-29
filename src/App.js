import React from "react";
// import axiosInstance from "./Axios/AxiosInstance";
import FormLogin from "./Components/Form/Index";
import Yup from "./Components/Form/Yup";
// import Button from "./Components/Buttons/Index";

function App() {
  return (
    <div className="App">
      <div className="container">
        <FormLogin />
        <hr />
        <h5>Another for using alternative aproach of validation</h5>
        <hr />
        <Yup />
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

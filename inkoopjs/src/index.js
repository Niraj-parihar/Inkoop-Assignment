import React from "react";
import ReactDOM from "react-dom";
import NumberInput from "./component/NumberInput";

/* imported NumberInput component for rendering */

const App = () => {
  return (
    <div>
      <NumberInput />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

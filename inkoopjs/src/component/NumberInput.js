import React, { useState } from "react";



const NumberInput = () => {
  /* Used hook system for function component */
  const [inputValue, setInputValue] = useState("");
  const [outputText, setOutputText] = useState("");

  /* written helper function */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    const input = parseInt(inputValue);
    let output = "";

    if (isNaN(input)) {
      setOutputText("Please enter a valid number");
    } else if (input < 0) {
      setOutputText("Enter a positive value");
    } else if (input % 2 === 0) {
      const nextEvenNumbers = Array.from({ length: 3 }, (_, index) =>
        (input + 2 * (index + 1)).toString()
      );
      output = "Next 3 even numbers: " + nextEvenNumbers.join(", ");
      setOutputText(output);
    } else {
      const nextOddNumbers = Array.from({ length: 3 }, (_, index) =>
        (input + 2 * (index + 1)).toString()
      );
      output = "Next 3 odd numbers: " + nextOddNumbers.join(", ");
      setOutputText(output);
    }
  };

/* UI returing  */

  return (
    <div>
      <label htmlFor="numberInput" style={{ color: "blue" }}>
        Enter a number:
      </label>
      <input
        type="number"
        id="numberInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        class="btn btn-outline-primary"
        type="submit"
        onClick={handleInputSubmit}
      >
        Submit
      </button>

      <div>{outputText}</div>
    </div>
  );
};

export default NumberInput;

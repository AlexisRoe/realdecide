import "./Form.css";
import { useState } from "react";
import Button from "./Button";

export default function Form({ setValues, setAlreadyChoosen, setTheLuckyOne }) {
  const [inputValue, setInputValue] = useState("");
  const [separator, setSeparator] = useState(/\d+\s/g);
  function inputValueToArray(inputText, seperator) {
    return inputText.split(seperator);
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        setAlreadyChoosen([]);
        setTheLuckyOne("");
        setValues(inputValueToArray(inputValue, separator));
      }}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="👩‍🎤 Use the separator-Input  ⬇️ ‍"
        className="persons__input"
      />
      <div className="form__extras">
        <label htmlFor="persons__inputSeperator">seperator: </label>
        <input
          placeholder={separator}
          onChange={(event) => {
            console.log("Seperator set ", event.target.value);
            setSeparator(event.target.value);
          }}
          id="persons__inputSeperator"
          type="text"
        />
      </div>
      <Button className="button__submit" innerText={"Submit"} />
    </form>
  );
}

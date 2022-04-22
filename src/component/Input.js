import { useState } from "react";
import styles from "./Input.module.css";

const Input = () => {
  const [string, setString] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [validation, setValidation] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(string);
    reverse(string);
    // setString("");
    setShow(true);
    if (string !== "") {
      setValidation(true);
    } else {
      alert("enter a string");
    }
  };

  const reverse = (str) => {
    let s = "";
    // console.log(str.length);
    for (let i = str.length - 1; i >= 0; i--) {
      s += str[i];
    }
    // console.log(s);
    setName(s);
    // console.log(name);
  };

  const resetHandler = () => {
    setShow(false);
    setString("");
    setValidation(false);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <label>
          Enter String:
          <input
            type="text"
            value={string}
            onChange={(e) => setString(e.target.value)}
          />
        </label>
        <button type="submit">submit</button>
      </form>
      {show && validation ? (
        <div className={styles.result}>
          {" "}
          <h2>
            Reverse of {string} is - {name}
          </h2>{" "}
          <button onClick={resetHandler}> Reset </button>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Input;

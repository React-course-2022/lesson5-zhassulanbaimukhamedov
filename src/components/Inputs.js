import { useState, useEffect } from "react";

function Input({ addToList }) {
  const [input, setInput] = useState("");

  const addAndClean = () => {
    let myObj = {
      id: Date.now(),
      text: input,
      status: false,
    };
    addToList(myObj);
    setInput("");
  };

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="enter To Do"
        value={input}
      />
      <button onClick={addAndClean}>Add Item</button>
    </div>
  );
}

export default Input;

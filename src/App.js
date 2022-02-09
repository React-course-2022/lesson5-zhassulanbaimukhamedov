import Inputs from "./components/Inputs";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import Axios from "axios";

function App() {
  const [list, setList] = useState([]);

  const addToList = (input) => {
    setList([...list, input]);
  };
  console.log(list, "--list");

  const removeItem = (id) => {
    const newArray = list.filter((el) => el.id !== id);
    setList(newArray);
  };

  const checkItem = (el, event) => {
    let checked = event.target.checked;
    const newArray = list.map((elem) => {
      if (elem.id === el.id) {
        elem.status = checked;
      }
      return elem;
    });
    setList(newArray);
  };

  return (
    <div className="App">
      <Inputs addToList={addToList} />
      <Tasks checkItem={checkItem} removeItem={removeItem} list={list} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import List from "./components/List.jsx";

function App() {
  const [content, setContent] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newListItem = { content: content, deadLine: deadLine };
    setList((list) => [...list, newListItem]);
    setContent("");
    setDeadLine("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="计划内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="截止时间"
          value={deadLine}
          onChange={(e) => setDeadLine(e.target.value)}
        />
        <button>ADD</button>
      </form>

      <div>
        <List list={list} />
      </div>
    </>
  );
}

export default App;

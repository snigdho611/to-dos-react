import Task from "components/Task";

const data = [
  {
    id: 1,
    title: "Get groceries",
    content: "Buy orange juice, flour and salt",
    time: "11:00 AM",
  },
  {
    id: 2,
    title: "Go for a jog",
    content: "Wake up at 5:30 AM and go for a jog",
    time: "05:30 AM",
  },
];

function App() {
  return (
    <div>
      {data.map(({ id, title, content, time }) => {
        return <Task id={id} title={title} content={content} time={time} />;
      })}
      {/* <Task /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

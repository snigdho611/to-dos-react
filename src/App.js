import Task from "components/Task";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Get groceries",
    content: "Buy orange juice, flour and salt",
    time: "11:00 AM",
  },
  {
    id: 2,
    title: "Go for laptop repairs",
    content: "Go to the local computer store for laptop repairs",
    time: "12:00 PM",
  },
  {
    id: 3,
    title: "Go for a jog",
    content: "Wake up at 5:30 AM and go for a jog",
    time: "05:30 AM",
  },
];
function App() {
  const [list, setList] = useState(data);
  useEffect(() => {}, []);

  const completedToDo = (id) => {
    console.log(id);
  };

  const deleteToDo = (id) => {
    console.log(data.filter((element) => element.id !== id));
    setList(list.filter((element) => element.id !== id));
    //
  };

  return (
    <div>
      {list.length > 0 ? (
        list.map(({ id, title, content, time }, i) => {
          return (
            <Task
              key={i}
              id={id}
              title={title}
              content={content}
              time={time}
              completedToDo={completedToDo}
              deleteToDo={deleteToDo}
            />
          );
        })
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            fontWeight: "bold",
            color: "red",
          }}
        >
          No items to show
        </div>
      )}
    </div>
  );
}

export default App;

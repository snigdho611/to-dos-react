import Add from "components/Add";
import Errors from "components/Errors";
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
  const [newItem, setNewItem] = useState({
    title: "",
    desc: "",
    time: null,
  });
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    console.log(newItem);
  }, [newItem]);

  const addToDo = () => {
    setErrors(null);
    if (newItem.title === "") {
      setErrors("Please enter a title");
      return;
    }
    if (newItem.content === "") {
      setErrors("Please enter a description");
      return;
    }
    if (newItem.time === null) {
      setErrors("Please enter a deadline");
      return;
    }

    setList((prevState) => [
      ...prevState,
      { title: newItem.title, content: newItem.content, time: newItem.time },
    ]);
  };

  const completedToDo = (id) => {
    console.log(id);
  };

  const deleteToDo = (id) => {
    console.log(list.filter((element) => element.id !== id));
    setList(list.filter((element) => element.id !== id));
  };

  return (
    <div>
      <Add setNewItem={setNewItem} newItem={newItem} addToDo={addToDo} />
      <Errors message={errors} />
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

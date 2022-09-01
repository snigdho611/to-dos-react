import Add from "components/Add";
import Counter from "components/Counter";
import Errors from "components/Errors";
import Task from "components/Task";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Get groceries",
    content: "Buy orange juice, flour and salt",
    time: "2022-08-31T16:45",
    status: false,
  },
  {
    id: 2,
    title: "Go for laptop repairs",
    content: "Go to the local computer store for laptop repairs",
    time: "2022-08-31T12:30",
    status: false,
  },
  {
    id: 3,
    title: "Go for a jog",
    content: "Wake up at 5:30 AM and go for a jog",
    time: "2022-08-31T05:30",
    status: false,
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
  const [totalCompleted, setTotalCompleted] = useState(0);

  useEffect(() => {
    // console.log(newItem);
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
      {
        id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
        title: newItem.title,
        content: newItem.content,
        time: newItem.time,
        status: false,
      },
    ]);
  };

  const completedToDo = (id) => {
    const newData = list.map((item) => {
      if (item.id === id) {
        item.status = true;
        return item;
      }
      return item;
    });
    setList(newData);
    setTotalCompleted(totalCompleted + 1);
  };

  const deleteToDo = (id) => {
    setList(list.filter((element) => element.id !== id));
  };

  const generateList = () => {
    let counter = 0;
    const renderList =
      list.length > 0 ? (
        list.map(({ id, title, content, time, status }, i) => {
          if (!status) {
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
          } else {
            counter++;
            return null;
          }
        })
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            fontWeight: "bold",
            color: "lime",
          }}
        >
          No tasks to show
        </div>
      );
    if (list.length === counter) {
      return (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            fontWeight: "bold",
            color: "lime",
          }}
        >
          No tasks to show
        </div>
      );
    }
    return renderList;
  };

  return (
    <div>
      <h1 className="header1">To Do List</h1>
      <Add setNewItem={setNewItem} newItem={newItem} addToDo={addToDo} />
      <Errors message={errors} />
      {/* {list.length > 0 ? (
        list.map(({ id, title, content, time, status }, i) => {
          if (!status) {
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
          } else {
            return null;
          }
        })
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            fontWeight: "bold",
            color: "lime",
          }}
        >
          No tasks to show
        </div>
      )} */}
      {generateList()}
      <Counter total={totalCompleted} />
    </div>
  );
}

export default App;

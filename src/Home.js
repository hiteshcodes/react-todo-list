import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";

const Home = ({ isDarkMode, handleLightModeButton, handleDarkModeButton }) => {
  const randomID = Math.floor(Math.random() * 9999999);

  const [list, setList] = useState([
    // {
    //   "id": 495206,
    //   "name": "water the plants",
    //   "done": false,
    //   "edit": false,
    //   "date": "Sun 25 Oct, 2020",
    // },
    // {
    //   "id": 4273363,
    //   "name": "feed the cat",
    //   "done": false,
    //   "edit": false,
    //   "date": "Sun 25 Oct, 2020",
    // },
    // {
    //   "id": 7364656,
    //   "name": "walk the dog",
    //   "done": false,
    //   "edit": false,
    //   "date": "Sun 25 Oct, 2020",
    // }y
  ]);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    todos && setList(JSON.parse(todos));
  }, []);

  // add a todo
  const [input, setInput] = useState("");

  // update the todo
  const [updateInput, setUpdateInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (event) => {
    // to get the current date
    const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    const day = days[date.getDay()];
    const currDate = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const getDate = `${day} ${currDate} ${month}, ${year}`;

    event.preventDefault();

    // check if input field is empty
    if (!input || /^\s*$/.test(input)) {
      return;
    }

    let newTodo = {
      id: randomID,
      name: input,
      date: getDate,
      done: false,
      edit: false,
      delete: false,
    };
    setList([newTodo, ...list]);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const handleDone = (item) => {
    let doneArr = list.map((l) => {
      if (l.id === item.id) {
        l.done = !l.done;
      }
      return l;
    });
    setList(doneArr);
  };

  const handleDelete = (item) => {
    const updatedTodo = list.filter((i) => i.id !== item.id);
    setList(updatedTodo);
  };

  const handleEdit = (item) => {
    setUpdateInput(item.name);
    let doneArr = list.map((l) => {
      if (l.id === item.id) {
        l.edit = !l.edit;
      }
      return l;
    });
    setList(doneArr);
  };

  const handleUpdateInput = (e, item) => {
    setUpdateInput(item.name);
    setUpdateInput(e.target.value);
  };

  const handleSubmitUpdateTodo = (event, item) => {
    event.preventDefault();
    // check if input field is empty
    if (!updateInput || /^\s*$/.test(updateInput)) {
      return;
    }
    let updateTodoArr = list.map((i) => {
      if (i.id === item.id) {
        i.name = updateInput;
      }
      return i;
    });

    setList(updateTodoArr);

    item.edit = !item.edit;

    setUpdateInput("");
  };

  return (
    <div className="home">
      <Form
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        input={input}
        isDarkMode={isDarkMode}
        handleLightModeButton={handleLightModeButton}
        handleDarkModeButton={handleDarkModeButton}
      />
      <TodoList
        list={list}
        handleEdit={handleEdit}
        handleDone={handleDone}
        handleDelete={handleDelete}
        updateInput={updateInput}
        handleUpdateInput={handleUpdateInput}
        handleSubmitUpdateTodo={handleSubmitUpdateTodo}
        isDarkMode={isDarkMode}
      />
      <Footer />
    </div>
  );
};

export default Home;

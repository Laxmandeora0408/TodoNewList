import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoNewList() {
  const [toods, setToods] = useState([
    { task: "sample Test", id: uuidv4(), done: false, editing: false, editedContent: "" },
  ]);
  const [newTood, setNewTood] = useState("");

  const addNewTask = () => {
    const newTask = { task: newTood, id: uuidv4(), done: false, editing: false, editedContent: "" };
    setToods([...toods, newTask]);
    setNewTood("");
  };

  const updateTodoValue = (event, id) => {
    setToods((prevToods) =>
      prevToods.map((tood) =>
        tood.id === id
          ? { ...tood, editedContent: event.target.value }
          : tood
      )
    );
  };

  const deleteTask = (id) => {
    setToods((prevToods) => prevToods.filter((tood) => tood.id !== id));
  };

  const upperCase = () => {
    setToods((toods) =>
      toods.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  const upperCaseOne = (id) => {
    setToods((toods) =>
      toods.map((todo) => ({
        ...todo,
        task: todo.id === id ? todo.task.toUpperCase() : todo.task,
      }))
    );
  };

  const markDone = (id) => {
    setToods((toods) =>
      toods.map((todo) => ({
        ...todo,
        done: todo.id === id ? !todo.done : todo.done,
      }))
    );
  };

  const toggleEdit = (id) => {
    setToods((prevToods) =>
      prevToods.map((tood) =>
        tood.id === id
          ? { ...tood, editing: !tood.editing, editedContent: tood.task }
          : tood
      )
    );
  };

  const saveEditedTask = (id) => {
    setToods((prevToods) =>
      prevToods.map((tood) =>
        tood.id === id
          ? { ...tood, task: tood.editedContent, editing: false, editedContent: "" }
          : tood
      )
    );
  };

  const newValue = (event) => {
    setNewTood(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter the task"
        value={newTood}
        onChange={newValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add</button>
      <br />
      <br />
      <hr />
      <h4>TaskTodo</h4>
      <ul>
        {toods.map((tood) => (
          <li key={tood.id}>
            {tood.editing ? (
              <>
                <input
                  type="text"
                  value={tood.editedContent}
                  onChange={(event) => updateTodoValue(event, tood.id)}
                />
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => saveEditedTask(tood.id)}>Save</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: tood.done ? 'line-through' : 'none' }}>
                  {tood.task}
                </span>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => deleteTask(tood.id)}>Delete</button>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={() => upperCaseOne(tood.id)}>UpperCaseOne</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => toggleEdit(tood.id)}>Edit</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => markDone(tood.id)}>Done</button>
                <br /><br /><br />
              </>
            )}
          </li>
        ))}
      </ul>
      <button onClick={upperCase}>UpperCase</button>
    </div>
  );
}

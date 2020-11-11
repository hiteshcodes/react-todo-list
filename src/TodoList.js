import React from "react";
import check from "./icons/check.svg";
import undo from "./icons/undo.svg";
import remove from "./icons/remove.svg";
import pen from "./icons/pen.svg";

const TodoList = ({
  list,
  handleEdit,
  handleDone,
  handleDelete,
  handleUpdateInput,
  updateInput,
  handleSubmitUpdateTodo,
  isDarkMode,
}) => {
  return (
    <div
      className={
        isDarkMode
          ? "todo-list-main todo-list-dark"
          : "todo-list-main todo-list-light"
      }
    >
      <ul className="ul">
        {list.map((item) => (
          <li className={item.done === true ? "li done" : "li"} key={item.id}>
            {item.edit === true ? (
              // to update the todo
              <form
                className="form-main"
                onSubmit={(event) => handleSubmitUpdateTodo(event, item)}
              >
                <input
                  type="text"
                  onChange={(e) => handleUpdateInput(e, item)}
                  value={updateInput}
                />
                <button>Update</button>
              </form>
            ) : (
              <div className="todo-content">
                <p
                  className={
                    item.done === true ? "todo-name done" : "todo-name"
                  }
                >
                  {item.name}
                </p>
                <small className="date">Added on: {item.date}</small>
              </div>
            )}
            <div className="todo-actions">
              {item.edit === true ? (
                <></>
              ) : (
                <>
                  <button>
                    <img
                      src={item.done === true ? undo : check}
                      title={item.done === true ? "Undo" : "Done"}
                      alt="done"
                      onClick={() => handleDone(item)}
                    />
                  </button>
                  <button>
                    <img
                      src={remove}
                      alt="delete"
                      onClick={() => handleDelete(item)}
                    />
                  </button>
                  {!item.done && (
                    <button>
                      <img
                        src={pen}
                        alt="edit"
                        onClick={() => handleEdit(item)}
                      />
                    </button>
                  )}
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

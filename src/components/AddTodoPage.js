import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { addTodo, updateTodo } from "../api/todoApi";
import GoBackLink from "./GoBackLink";
import { selectUserId } from "../store/userSlice";
import { useSelector } from "react-redux";

function AddTodoPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id, todoTitle, todoDescription } = useParams();
  const userId = useSelector(selectUserId);
  useEffect(() => {
    if (id) {
      setTitle(todoTitle);
      setDescription(todoDescription);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Edit a todo:create a new todo:
    if (id) {
      try {
        const response = await updateTodo(id, title, description);
        if (response.ok) {
          toast.success("todo updated successfully");
          navigate("/");
        }
      } catch (error) {
        toast.error("could't add todo ..please try again");
      }
    }
    try {
      const response = await addTodo(title, description, userId);
      if (response.ok) {
        toast.success("todo created successfully");
        navigate("/");
      } else {
        toast.error("could't add todo ..please try again");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="add-todo-form">
      <GoBackLink />
      <form action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title </label>

          <input
            type="text"
            id="title"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description </label>
          <textarea
            type="text"
            id="description"
            value={description}
            required
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <button type="submit">{id ? "Update Todo" : "Add Todo"}</button>
      </form>
    </div>
  );
}

export default AddTodoPage;

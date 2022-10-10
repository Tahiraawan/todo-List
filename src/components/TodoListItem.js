import React from "react";
import { toast } from "react-hot-toast";
import { removeTodo } from "../api/todoApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmAlert from "./ConfirmAlert";

function TodoListItem({ todo, setRefetch }) {
  const navigate = useNavigate();
  const [confirmAlertOpen, setConfirmAlertOpen] = useState(false);
  const handleDelete = async () => {
    try {
      const response = await removeTodo(todo.id);
      if (response.ok) {
        toast.success("Student Deleted Successfully");
        setRefetch((prevstate) => !prevstate);
      } else {
        toast.error("There is an Error plz try again");
      }
    } catch (error) {
      toast.error("error");
    } finally {
      setConfirmAlertOpen(false);
    }
  };
  const handleEdit = () => {
    navigate(`/edit/${todo.id}/${todo.title}/${todo.description}`); //?query parameter
  };
  return (
    <div>
      <ConfirmAlert
        open={confirmAlertOpen}
        onConfirm={handleDelete}
        onCancel={() => {
          setConfirmAlertOpen(true);
        }}
      />
      <div className="table-container">
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={() => setConfirmAlertOpen(true)}>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default TodoListItem;

import React from "react";
import { getAllToDos } from "../api/todoApi";
import {useEffect,useState} from 'react'
import TodoListItem from "./TodoListItem";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom';
import { selectUserId } from "../store/userSlice";
import { useSelector } from "react-redux";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const userId = useSelector(selectUserId)
  const navigate=useNavigate()
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todoData =await getAllToDos(userId);
        setTodoList(todoData.map(todo=>({
          ...todo,
          id:todo._id
        })));
      } catch (error) {
        toast.error(error.message)

      }
      finally{
        setLoading(false)
      }
    };
    fetchTodos();
  }, [refetch]);
 


  const renderTodoList=()=>{
    if(!todoList.length){
   return <p>No Todo's items Found</p>}
  
  return todoList.map((todo) => {
    return (
      <div key={todo.id}>
        <TodoListItem todo={todo} setRefetch={setRefetch}/>
       
      </div>
    );
  })
}

  return (
    <div className="add-btn-div">
      <button onClick={()=>navigate('/addTodoPage')} className='add-new-btn' >Add New Student</button>
      
      {
        loading? <p>Loading</p>
        :renderTodoList()
      }
    </div>
  );
}

export default TodoList;

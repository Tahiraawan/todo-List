
import TodoList from "./components/TodoList";
import { Route, Routes } from "react-router-dom";
import AddTodoPage from "./components/AddTodoPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import RequireAuth from "./components/RequireAuth";
import PageLayout from "./components/layout/PageLayout";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<RequireAuth><PageLayout /></RequireAuth>}>
          <Route index element={<TodoList />} />
          <Route path="addTodoPage" element={<AddTodoPage />} />
          {/* //todo: refact the following code */}
          <Route
            path="edit/:id/:todoTitle/:todoDescription"
            element={<AddTodoPage />}
          />
        </Route>
        {/* <Route
          path="/"
          element={
            <RequireAuth>
              <TodoList />
            </RequireAuth>
          }
        /> */}
        {/* <Route
          path="/addTodoPage"
          element={
            <RequireAuth>
              <AddTodoPage />
            </RequireAuth>
          }
        /> */}

        {/* <Route
          path="/edit/:id/:todoTitle/:todoDescription"
          element={
            <RequireAuth>
              <AddTodoPage />
            </RequireAuth>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;

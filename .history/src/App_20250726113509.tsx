import { Toaster } from "react-hot-toast";
import { Link, useRoutes } from "react-router-dom";
import TaskList from "./page/TaskList";
import Register from "./page/Register";
import Login from "./page/Login";
import TaskAdd from "./page/TaskAdd";
import TaskEdit from "./page/TaskEdit";

function App() {
  const routes = useRoutes([
    { path: '/', element: <TaskList /> },
    { path: 'register', element: <Register /> },
    { path: 'login', element: <Login /> },
    { path: 'task/list', element: <TaskList /> },
    { path: 'task/add', element: <TaskAdd /> },
    { path: 'task/edit/:id', element: <TaskEdit /> },
  ]);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <span className="navbar-brand">Thi WEB209 React</span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ gap: 3, fontSize: 20 }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product/add">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product/list">
                  List Product
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger">Logout</button>
        </div>
      </nav>
      <div className="container">{routes}</div>
      <Toaster />
    </>
  );
}

export default App;

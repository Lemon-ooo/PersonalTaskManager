import { Toaster } from "react-hot-toast";
import { Link, useRoutes } from "react-router-dom";
import TaskList from "./page/TaskList";
import Login from "./page/Login";
import TaskAdd from "./page/TaskAdd";
import TaskEdit from "./page/TaskEdit";

function App() {
  const routes = useRoutes([
    { path: "/", element: <TaskList /> },
    { path: "login", element: <Login /> },
    { path: "tasks/list", element: <TaskList /> },
    { path: "tasks/add", element: <TaskAdd /> },
    { path: "tasks/edit/:id", element: <TaskEdit /> },
  ]);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <span className="navbar-brand">
            {(() => {
              const stored = localStorage.getItem("user");
              const user = stored ? JSON.parse(stored) : null;
              return `Xin chào, ${user?.username || "Khách"}`;
            })()}
          </span>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ gap: 3, fontSize: 20 }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tasks/add">
                  Add Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tasks/list">
                  List Task
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

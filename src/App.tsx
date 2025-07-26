import { Toaster } from "react-hot-toast";
import { Link, useRoutes } from "react-router-dom";
import TaskList from "./page/TaskList";
import Login from "./page/Login";
import TaskAdd from "./page/TaskAdd";
import TaskEdit from "./page/TaskEdit";
import TaskStatistics from "./page/TaskStatistics";

function App() {
  const routes = useRoutes([
    { path: "/", element: <TaskList /> },
    { path: "login", element: <Login /> },
    { path: "tasks/list", element: <TaskList /> },
    { path: "tasks/add", element: <TaskAdd /> },
    { path: "tasks/edit/:id", element: <TaskEdit /> },
    { path: "tasks/statistics", element: <TaskStatistics /> },
  ]);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container" style={{ gap: 3, fontSize: 20 }}>
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
                  Đăng nhập
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tasks/list">
                  Nhiệm vụ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tasks/add">
                  Thêm nhiệm vụ
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="tasks/statistics">
                  Thống kê
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">{routes}</div>
      <Toaster />
    </>
  );
}

export default App;

import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { handleLogin } = useAuth();
  return;
  <div>
    <h1>Login</h1>
    <AuthForm onSubmit={handleLogin} />
  </div>;
};

export default Login;

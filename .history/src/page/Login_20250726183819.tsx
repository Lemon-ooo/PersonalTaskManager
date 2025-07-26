import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { handleLogin } = useAuth();
  return;
  <div>
    Login
    <AuthForm onSubmit={handleLogin} />
  </div>;
};

export default Login;

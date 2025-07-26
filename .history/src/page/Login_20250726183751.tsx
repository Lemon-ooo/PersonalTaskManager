import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { handleLogin } = useAuth();
  return <div>Login</div>;
};

export default Login;

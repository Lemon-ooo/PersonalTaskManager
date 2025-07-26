import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { handleRegister } = useAuth();
  return (
    <div>
      <div>Register</div>
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;

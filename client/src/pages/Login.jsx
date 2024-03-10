import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignupForm from "../features/authentication/SignupForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  @media (max-width: 810px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--color-grey-900);
`;

function Login() {
  const [setLogin, isSetLogin] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.userToken);
  const navigate = useNavigate();

  const handleToggleForm = () => {
    isSetLogin((prevState) => !prevState);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <LoginLayout>
      <Logo />
      {setLogin ? <LoginForm /> : <SignupForm />}
      <ToggleButton onClick={handleToggleForm}>
        {setLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Log In"}
      </ToggleButton>
    </LoginLayout>
  );
}

export default Login;

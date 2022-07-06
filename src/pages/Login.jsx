import React, { useState } from "react";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import LoginForm from "../components/LoginForm/LoginForm";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const loginUser = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );

      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }

      if (data.token) {
        localStorage.setItem("token", data.token);

        navigate("/home");
      }

      return setError(data.msg);
    } catch (error) {
      return setError(error.msg);
    }
  };

  return (
    <Container>
      <Hero title="Basketball Agent" subtitle="Find your Team or Teammate" />
      <LoginForm handleSubmit={loginUser}>
        {error && <Notification color="danger">{error}</Notification>}
      </LoginForm>
    </Container>
  );
};

export default Login;

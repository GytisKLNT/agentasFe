import React, { useState } from "react";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Notification from "../components/Notification/Notification";

const Register = () => {
  const [error, setError] = useState();

  const registerUser = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/register`,
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

      return setError(data.msg);
    } catch (error) {
      return setError(error.msg);
    }
  };

  return (
    <Container>
      <Hero title="Basketball Agent" subtitle="Find your Team or Teammate" />
      <RegisterForm handleSubmit={registerUser}>
        {error && <Notification>{error}</Notification>}
      </RegisterForm>
    </Container>
  );
};

export default Register;

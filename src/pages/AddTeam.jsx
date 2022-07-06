import React, { useState } from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import Navigation from "../components/Navigation/Navigation";
import TeamForm from "../components/TeamForm/TeamForm";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const AddTeam = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const addPlayer = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/teams/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(inputs),
        }
      );

      const data = await res.json();

      if (!data) {
        return setError(data.err);
      }

      if (data) {
        return navigate("/teams");
      }
    } catch (error) {
      return setError(error.msg);
    }
  };

  return (
    <>
      <Navigation>
        <Button
          type="button"
          handleClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Log Out
        </Button>
      </Navigation>
      <HomeHero
        title="Pridėk savo skelbimą"
        subtitle="Padėk žaidėjams surasti tavo komandą"
      >
        <TeamForm handleSubmit={addPlayer}>
          {error && <Notification color="danger">{error}</Notification>}
        </TeamForm>
      </HomeHero>
    </>
  );
};

export default AddTeam;

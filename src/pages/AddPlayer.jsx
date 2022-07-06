import React, { useState } from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import Navigation from "../components/Navigation/Navigation";
import PlayerForm from "../components/PlayerForm/PlayerForm";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const AddPlayer = (props) => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const addPlayer = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/players/`,
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

      if (!data || data.length === 0) {
        return setError(data.msg);
      }

      return navigate("/players");
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
        subtitle="Padėk komandoms surasti tave"
      >
        <PlayerForm handleSubmit={addPlayer}>
          {error && <Notification color="danger">{error}</Notification>}
        </PlayerForm>
      </HomeHero>
    </>
  );
};

export default AddPlayer;

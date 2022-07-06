import React, { useState } from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import Navigation from "../components/Navigation/Navigation";
import PlayerForm from "../components/PlayerForm/PlayerForm";
import Notification from "../components/Notification/Notification";

const AddPlayer = (props) => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

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

      if (data.err) {
        return setError(data.err);
      }

      return setSuccess(data.msg);
    } catch (error) {
      return setError(error.msg);
    }
  };

  return (
    <>
      <Navigation />
      <HomeHero
        title="Pridėk savo skelbimą"
        subtitle="Padėk komandoms surasti tave"
      >
        <PlayerForm handleSubmit={addPlayer}>
          {error && <Notification color="danger">{error}</Notification>}
          {success && <Notification color="success">{success}</Notification>}
        </PlayerForm>
      </HomeHero>
    </>
  );
};

export default AddPlayer;

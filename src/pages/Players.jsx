import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Section from "../components/Section/Section";
import UserPlayerCard from "../components/UserPlayerCard/UserPlayerCard";
import PlayerCardList from "../components/PlayerCardList/PlayerCardList";
import HomeHeroLinks from "../components/HomeHeroLinks/HomeHeroLinks";
import Notification from "../components/Notification/Notification";

const Players = () => {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [error, updateError] = useState();
  const [allError, updateAllError] = useState();
  const [deleteError, setdeleteError] = useState();
  const [deleteSuccess, setdeleteSuccess] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/players/userplayer`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const resData = await res.json();

      if (resData.length === 0) {
        return updateError("Neturite skelbimų");
      }

      if (!resData) {
        return updateError("Loading...");
      }

      return setData(resData);
    } catch (err) {
      updateError(err.msg);
    }
  };

  const getAllData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/players`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const resAllData = await res.json();

      setAllData(resAllData);

      if (resAllData.length === 0) {
        return updateAllError("Skelbimų nėra");
      }

      if (!resAllData) {
        return updateAllError("Loading...");
      }

      return setAllData(resAllData);
    } catch (err) {
      return updateAllError(err.msg);
    }
  };

  useEffect(() => {
    getData();
    getAllData();
  }, [deleteSuccess]);

  const deleteItem = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/players/delete/${id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const resDeletedData = await res.json();
      console.log(resDeletedData, id);

      return setdeleteSuccess(id);
    } catch (err) {
      return setdeleteError(err.msg);
    }
  };

  return (
    <>
      <Navigation />
      <Section>
        <HomeHeroLinks
          toOne="/addplayers"
          textOne="Pridėk žaidėjo skelbimą"
          toTwo="/addteams"
          textTwo="Pridėk komandos skelbimą"
        />
        <h2>Tavo Skelbimai</h2>
        {error && <div>{error}</div>}
        {deleteError && (
          <Notification color="danger">{deleteError}</Notification>
        )}
        {deleteSuccess && (
          <Notification color="success">Skelbimas Ištrintas</Notification>
        )}
        {data && <UserPlayerCard items={data} handleDelete={deleteItem} />}

        <h2>Visi Skelbimai</h2>
        {allError && <div>{allError}</div>}
        {data && <PlayerCardList players={allData} />}
      </Section>
    </>
  );
};

export default Players;

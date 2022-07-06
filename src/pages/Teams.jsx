import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Section from "../components/Section/Section";
import UserTeamCard from "../components/UserTeamCard/UserTeamCard";
import CardList from "../components/CardList/CardList";
import HomeHeroLinks from "../components/HomeHeroLinks/HomeHeroLinks";
import Notification from "../components/Notification/Notification";

const Teams = () => {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [error, updateError] = useState();
  const [allError, updateAllError] = useState();
  const [deleteError, setdeleteError] = useState();
  const [deleteSuccess, setdeleteSuccess] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/teams/userteam`,
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
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/teams`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const resAllData = await res.json();

      if (resAllData.length === 0) {
        return updateAllError("Skelbimų nėra");
      }

      if (!resAllData) {
        return updateAllError("Loading...");
      }

      return setAllData(resAllData);
    } catch (err) {
      updateAllError(err.msg);
    }
  };

  const deleteItem = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/teams/delete/${id}`,
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

  useEffect(() => {
    getAllData();
    getData();
  }, [deleteSuccess]);

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
        {data && <UserTeamCard items={data} handleDelete={deleteItem} />}
        <h2>Visi Skelbimai</h2>
        {allError && <div>{allError}</div>}
        {allData && <CardList teams={allData} />}
      </Section>
    </>
  );
};

export default Teams;

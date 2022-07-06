import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Section from "../components/Section/Section";
import CardList from "../components/CardList/CardList";
import HomeHeroLinks from "../components/HomeHeroLinks/HomeHeroLinks";
import UserTeamCard from "../components/UserTeamCard/UserTeamCard";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const Teams = () => {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [error, updateError] = useState();
  const [allError, updateAllError] = useState();
  const [deleteError, setDeleteError] = useState();
  const [deleteSuccess, setDeleteSuccess] = useState();

  const navigate = useNavigate();

  const getUserData = async () => {
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
      if (id) {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/v1/teams/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const resDeletedData = await res.json();

        if (!resDeletedData) {
          return setDeleteError(resDeletedData.msg);
        }

        setDeleteSuccess(resDeletedData.msg);
        getUserData();
        getAllData();
      }
    } catch (err) {
      return setDeleteError(err.msg);
    }
  };

  useEffect(() => {
    getUserData();
    getAllData();
  }, []);

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
          <Notification color="success">{deleteSuccess}</Notification>
        )}
        {data && (
          <UserTeamCard items={data} handleDelete={(id) => deleteItem(id)} />
        )}
        <h2>Visi Skelbimai</h2>
        {!allData && <div>{allError}</div>}
        {allData && <CardList teams={allData} />}
      </Section>
    </>
  );
};

export default Teams;

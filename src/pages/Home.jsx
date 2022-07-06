import React from "react";
import Navigation from "../components/Navigation/Navigation";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeHeroLinks from "../components/HomeHeroLinks/HomeHeroLinks";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const Home = () => {
  const navigate = useNavigate();

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
        title="Basketball Agent"
        subtitle="Ieškai naujos komandos, o gal turi komandą, bet ieškai naujų narių? Padėsime jums surasti komandos draugą arba naują komandą."
      >
        <HomeHeroLinks
          toOne="/players"
          textOne="Ieškok žaidėjų"
          toTwo="/teams"
          textTwo="Ieškok komandų"
        />
      </HomeHero>
    </>
  );
};

export default Home;

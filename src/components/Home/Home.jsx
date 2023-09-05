import React from "react";
import Populargames from "../Populargames/Populargames";
import BestGame from "../BestGame/BestGame";
import TopGames from "../TopGames/TopGames";
import Header from "../Header/Header";
import LatestNews from "../LatestNews/LatestNews";
import TeamMembers from "../TeamMembers/TeamMembers";
import RecentWinners from "../RecentWinners/RecentWinners";
import Subscribe from "../Subscribe/Subscribe";
import Players from "../Players/Players";
import BestCompany from "../BestCompany/BestCompany";


const Home = () => {
  return (
    <>
      <Header />
      <Populargames />
      <BestGame />
      <BestCompany />
      <TopGames />
      <LatestNews />
      <RecentWinners />
      <Players />

      <TeamMembers />
      <Subscribe />
    </>
  );
};

export default Home;

import React from "react";
import { useSelector } from "react-redux";
// import TopGamesCards from "../component/top-games/TopGamesCards";
import { Box} from "@chakra-ui/react";
import TopGamesCards from "../component/top-games/TopGamesCards";
import HomeTabs from "../component/HomeTabs";

const TopGames = () => {



  return (
    <Box className="main_page">
      <HomeTabs></HomeTabs>
      <TopGamesCards></TopGamesCards>
    </Box>
  );
};

export default TopGames;

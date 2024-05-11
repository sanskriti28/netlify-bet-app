import React from "react";
import { useSelector } from "react-redux";
import { Box} from "@chakra-ui/react";
import HomeTabs from "../component/HomeTabs";
import RecommendedCards from "../component/recommended/RecommendedCards";

const Recommended = () => {



  return (
    <Box className="main_page">
      <HomeTabs></HomeTabs>
    <RecommendedCards></RecommendedCards>
    </Box>
  );
};

export default Recommended;

import React from "react";
import { Box} from "@chakra-ui/react";
import HomeTabs from "../component/HomeTabs";
import MegaWinCards from "../component/megaWin/MegaWinCards";

const MegaWin = () => {
  return (
    <Box className="main_page">
      <HomeTabs></HomeTabs>
    <MegaWinCards></MegaWinCards>
    </Box>
  );
};

export default MegaWin;

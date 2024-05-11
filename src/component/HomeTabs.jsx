// import React from 'react';
import { RiHome4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { PiSpinnerBallBold } from "react-icons/pi";
import { MdOutlineStarBorder } from "react-icons/md";
import { GiPokerHand } from "react-icons/gi";
import { IoFlashOutline } from "react-icons/io5";

import '../assets/css/style.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
// Images
import Search from "../assets/images/carousel/c1.jpg";
import SpinWin from "../assets/images/carousel/c2.jpg";
import Reward from "../assets/images/home-images/reward.png";
import Games from "../assets/images/carousel/c3.jpg";
import Recommended from "../assets/images/carousel/c3.jpg";
import MegaWin from "../assets/images/carousel/c3.jpg";

import {
    Box,
    HStack,
    Center,
} from '@chakra-ui/react'


function HomeTabs() {
    const {
        bgColor1,
        bgGray,
        PrimaryText,
        secondaryText,
        hoverColor,
        ClickActiveColor,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();
    const TabsStyle={
        width:'auto',
        borderRadius: '10px',
    }
    return (
        <>
            <div className="home-tabs-section">
                <Box className="p-3" overflowX="scroll"  css={{"&::-webkit-scrollbar": { display: "none", },}}>
                    <HStack spacing='15px' className="text-base font-bold">
                    <Box style={{ backgroundColor: bgGray, ...TabsStyle }} width={{base:"auto", xl:"100px"}} className="p-3 home-tab rounded text-center" >
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <CiSearch size={40} />
                            <Link to="/">{t(`Search`)}</Link>
                        </Center>
                    </Box>
                    <Box style={{ backgroundColor: bgGray, ...TabsStyle }} width={{base:"auto", xl:"100px"}} className="p-3 home-tab rounded text-center" >
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <PiSpinnerBallBold size={40} />
                            {/* Correct the path to navigate to the "spin-and-win" page */}
                            <Link to="/spin-and-win">{t(`Spin & Win`)}</Link>
                        </Center>
                    </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} width={{base:"auto", xl:"100px"}} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                                {/* <RiHome4Line size={40} /> */}
                                <img src={Reward} alt="Reward" size={40} style={{width:"40px"}}/>
                                <Link to="/reward-points">{t(`Reward Point`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} width={{base:"auto", xl:"100px"}} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                                <MdOutlineStarBorder size={40} />
                                <Link to="/top-games">{t(`Top Games`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} width={{base:"auto", xl:"100px"}} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                                <GiPokerHand size={40} />
                                <Link to="/Recommended">{t(`Recommended`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} width={{base:"auto", xl:"100px"}} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                                <IoFlashOutline size={40} />
                                <Link to="/mega-win">{t(`Mega Win`)}</Link>
                            </Center>
                        </Box>
                    </HStack>
                </Box>
            </div>
        </>
    )
}


export default HomeTabs

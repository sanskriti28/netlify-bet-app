// import React from 'react';
import { RiHome4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { PiSpinnerBallBold } from "react-icons/pi";

import '../assets/css/style.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// IMages
import Search from "../assets/images/carousel/c1.jpg";
import SpinWin from "../assets/images/carousel/c2.jpg";
import Reward from "../assets/images/home-images/reward.svg";
import Games from "../assets/images/carousel/c3.jpg";
import Recommended from "../assets/images/carousel/c3.jpg";
import MegaWin from "../assets/images/carousel/c3.jpg";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Spacer,
    Box,
    HStack,
    Center,
    Text, 
    Icon 
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

    return (
        <>

            <Box className="p-3">
                <HStack spacing='15px' className="text-base font-bold">
                    <Box style={{ backgroundColor: bgGray }} className="p-3 rounded text-center">
                        <Center className="flex-col">
                            <CiSearch size={40} />
                            <Link to="/">{t(`Search`)}</Link>
                        </Center>
                    </Box>
                    <Box style={{ backgroundColor: bgGray }} className="p-3 rounded text-center">
                        <Center className="flex-col">
                            <PiSpinnerBallBold size={40} />
                            <Link to="/">{t(`Spin & Win`)}</Link>
                        </Center>
                    </Box>
                    <Box style={{ backgroundColor: bgGray }} className="p-3 rounded text-center">
                        <Center className="flex-col">
                            {/* <RiHome4Line size={40} /> */}
                            <img src={Reward} alt="Reward" size={40}/>
                            <Link to="/">{t(`Reward Point`)}</Link>
                        </Center>
                    </Box>
                    <Box style={{ backgroundColor: bgGray }} className="p-3 rounded text-center">
                        <Center className="flex-col">
                            <RiHome4Line size={40} />
                            <Link to="/">{t(`Top Games`)}</Link>
                        </Center>
                    </Box>
                    <Box style={{ backgroundColor: bgGray }} className="p-3 rounded text-center">
                        <Center className="flex-col">
                            <RiHome4Line size={40} />
                            <Link to="/">{t(`Recommended`)}</Link>
                        </Center>
                    </Box>
                    <Box style={{ backgroundColor: bgGray }} className="p-3 rounded text-center">
                        <Center className="flex-col">
                            <RiHome4Line size={40} />
                            <Link to="/">{t(`Mega Win`)}</Link>
                        </Center>
                    </Box>
                </HStack>
            </Box>
        </>
    )
}


export default HomeTabs
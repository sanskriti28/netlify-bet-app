// import React from 'react';
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdCasino } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { TbBrandAppleArcade } from "react-icons/tb";
import { IoGiftOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { CgGames } from "react-icons/cg";
import { AiOutlineAim } from "react-icons/ai";
import '../assets/css/style.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import RightSidebar from "../modal/RightSidebar";
import Login from "../page/Login";
import img1 from "../assets/logo.svg";
import bingo from "../assets/images/Header/bingo.png";
import slots from "../assets/images/Header/slots.png";
import fishing from "../assets/images/Header/fishing.png";
import lottery from "../assets/images/Header/lottery.png";
import cock from "../assets/images/Header/cock.png";
import horse from "../assets/images/Header/horse.png";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Image,
    Box
} from '@chakra-ui/react'
// import Language from "./Language";
import ChangeLanguage from "../modal/ChangeLanguage";


function LoggedInHeader() {
    const {
        bgColor1,
        bgGray,
        bgYellow,
        PrimaryText,
        secondaryText,
        hoverColor,
        ClickActiveColor,
    } = useSelector((state) => state.theme);

    //   const { bgYellow } = useSelector((state) => state.theme);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    return (
        <>
            <div style={{ position: 'fixed', top: '0', zIndex: '999', backgroundColor: bgColor1, width: '100%', }}>
                <div style={{ paddingRight: '10px', }} className='flex justify-between items-center'>
                    <div className="">
                        <Image maxW={{base:"100px",xl:"170px"}} height={{base:"22px",xl:"42px"}} src={img1} alt="Logo" />
                    </div>
                    <Box className="w-full flex justify-end items-center" height={{base:"55px",xl:"85px"}} 
                    gap={{base:"0",xl:"5px"}} 
                    >
                        <Login></Login>
                        <ChangeLanguage></ChangeLanguage>
                        <RightSidebar></RightSidebar>
                    </Box>
                </div>
            </div>
        </>
    )
}


export default LoggedInHeader
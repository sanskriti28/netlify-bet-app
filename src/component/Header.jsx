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
import MobileLeftSideBar from "../modal/MobileLeftSideBar";

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


function Header({ isLoggedIn, setIsLoggedIn}) {
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

    //Authentication
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <div style={{ position: 'fixed', top: '0', zIndex: '999', backgroundColor: bgColor1, width: '100%', }}>
                <div style={{ paddingRight: '10px', }} className='flex justify-between items-center'>
                    <Box className="" display={{base:"block", xl:"none"}}>
                        <MobileLeftSideBar maxW={{base:"100px",xl:"170px"}} height={{base:"22px",xl:"42px"}} />
                    </Box>
                    <div className="">
                        <Image maxW={{base:"100px",xl:"170px"}} height={{base:"22px",xl:"42px"}} src={img1} alt="Logo" />
                    </div>
                    <Box className="w-full flex justify-end items-center" height={{base:"55px",xl:"85px"}} 
                    gap={{base:"0",xl:"5px"}} 
                    >
                        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>
                        <ChangeLanguage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></ChangeLanguage>
                        <RightSidebar display={{base:"none", xl:"block"}}></RightSidebar>
                    </Box>
                </div>
                <Box style={{ backgroundColor: bgGray, gap: '8px', 'msOverflowStyle': 'none', 'scrollbarWidth': 'none', height: "50px,", }} 
                className='sub_Header justify-between overflow-auto whitespace-nowrap'
                display={{base:"none",xl:"flex"}}>
                    <Menu className="flex items-center">
                        <MenuButton
                            className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/') ? 'active-menu' : ''}`}
                            as={NavLink}
                            to="/"
                        >
                            <RiHome4Line size={28} />
                        </MenuButton>
                        <MenuButton
                            className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Sports') ? 'active-menu' : ''}`}
                            as={NavLink}
                            to="/Sports"
                        >
                            <MdOutlineSportsSoccer size={28} />
                            {t(`Sports`)}
                        </MenuButton>
                        <MenuButton
                             className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Casino') ? 'active-menu' : ''}`}
                             as={NavLink}
                             to="/Casino" 
                        >
                            <MdCasino size={28} />
                            {t(`Casino`)}
                        </MenuButton>
                        <MenuButton
                             className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Crash') ? 'active-menu' : ''}`}
                             as={NavLink}
                             to="/Crash" 
                        >
                            <IoRocketOutline size={28} />
                            {t(`Crash`)}
                        </MenuButton>
                        <MenuButton
                             className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Bingo') ? 'active-menu' : ''}`}
                             as={NavLink}
                             to="/Bingo" 
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="28" height="28" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class=""><g><path fill="#000000" d="m30.606 63.057-5.121-6.752-7.81 3.29a1.75 1.75 0 0 1-2.416-1.4L14.21 49.79 5.8 48.741a1.749 1.749 0 0 1-1.52-1.953 1.75 1.75 0 0 1 1.953-1.52L16 46.485a1.75 1.75 0 0 1 1.52 1.52l.93 7.468 6.934-2.921a1.751 1.751 0 0 1 2.074.556L32 59.1l4.547-6a1.751 1.751 0 0 1 2.074-.556l6.934 2.921.93-7.467a1.749 1.749 0 0 1 1.52-1.52l9.762-1.218a1.751 1.751 0 0 1 1.953 1.52 1.75 1.75 0 0 1-1.52 1.953l-8.41 1.057-1.049 8.41a1.75 1.75 0 0 1-2.416 1.4l-7.81-3.29-5.121 6.752a1.749 1.749 0 0 1-2.788-.005zM4.28 17.212a1.75 1.75 0 0 1 1.52-1.953l8.41-1.049 1.049-8.41a1.75 1.75 0 0 1 2.416-1.4l7.81 3.29L30.606.943a1.749 1.749 0 0 1 2.788 0L38.515 7.7l7.81-3.29a1.75 1.75 0 0 1 2.416 1.4l1.049 8.4 8.41 1.049a1.749 1.749 0 0 1 1.52 1.953 1.75 1.75 0 0 1-1.953 1.52l-9.762-1.217A1.75 1.75 0 0 1 46.485 16l-.93-7.468-6.934 2.921a1.751 1.751 0 0 1-2.074-.556L32 4.9l-4.547 6a1.751 1.751 0 0 1-2.074.556l-6.934-2.929-.93 7.467A1.749 1.749 0 0 1 16 17.514l-9.767 1.218a1.751 1.751 0 0 1-1.953-1.52z" opacity="1" data-original="#fa6e96" class=""></path><path fill="#000000" d="M9.558 31.492A5.74 5.74 0 0 0 5 22.25H2A1.75 1.75 0 0 0 .25 24v16A1.75 1.75 0 0 0 2 41.75h4a5.744 5.744 0 0 0 3.558-10.258zM3.75 25.75H5a2.25 2.25 0 0 1 0 4.5H3.75zM6 38.25H3.75v-4.5H6a2.25 2.25 0 0 1 0 4.5zM17 22.25A1.75 1.75 0 0 0 15.25 24v16a1.75 1.75 0 0 0 3.5 0V24A1.75 1.75 0 0 0 17 22.25zM32 22.25A1.751 1.751 0 0 0 30.25 24v8.587l-4.685-9.37A1.75 1.75 0 0 0 22.25 24v16a1.75 1.75 0 0 0 3.5 0v-8.587l4.685 9.37A1.75 1.75 0 0 0 33.75 40V24A1.751 1.751 0 0 0 32 22.25zM58 22.25A5.757 5.757 0 0 0 52.25 28v8a5.75 5.75 0 0 0 11.5 0v-8A5.757 5.757 0 0 0 58 22.25zM60.25 36a2.25 2.25 0 0 1-4.5 0v-8a2.25 2.25 0 0 1 4.5 0zM47 30.25h-2a1.75 1.75 0 0 0 0 3.5h.25V36a2.25 2.25 0 0 1-4.5 0v-8a2.25 2.25 0 0 1 3.841-1.591 1.75 1.75 0 1 0 2.474-2.475A5.749 5.749 0 0 0 37.25 28v8a5.75 5.75 0 0 0 11.5 0v-4A1.75 1.75 0 0 0 47 30.25z" opacity="1" data-original="#646487" class=""></path><g fill="#fff06e"><circle cx="32" cy="47" r="1.75" fill="#fff06e" opacity="0" data-original="#fff06e" class=""></circle><circle cx="25" cy="47" r="1.75" fill="#fff06e" opacity="0" data-original="#fff06e" class=""></circle><circle cx="39" cy="47" r="1.75" fill="#fff06e" opacity="0" data-original="#fff06e" class=""></circle><circle cx="32" cy="17" r="1.75" fill="#fff06e" opacity="0" data-original="#fff06e" class=""></circle><circle cx="25" cy="17" r="1.75" fill="#fff06e" opacity="0" data-original="#fff06e" class=""></circle><circle cx="39" cy="17" r="1.75" fill="#fff06e" opacity="0" data-original="#fff06e" class=""></circle></g></g></svg>

                           {t(`Bingo`)}
                        </MenuButton>
                        <MenuButton
                             className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Slots') ? 'active-menu' : ''}`}
                             as={NavLink}
                             to="/Slots" 
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="28" height="28" x="0" y="0" viewBox="0 0 480 480" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class=""><g><path d="M456.097 222.76V119.418c13.714-3.558 23.871-16.042 23.871-30.854 0-17.574-14.297-31.871-31.871-31.871s-31.871 14.297-31.871 31.871c0 14.812 10.157 27.295 23.871 30.854v103.34h-14.29v-56.807c0-13.233-10.767-24-24-24H24c-13.233 0-24 10.767-24 24v233.355c0 13.233 10.767 24 24 24h377.807c13.233 0 24-10.767 24-24V238.758H456c4.411 0 8 3.589 8 8V318.5c0 4.411-3.589 8-8 8a8 8 0 0 0 0 16c13.233 0 24-10.767 24-24v-71.742c0-13.201-10.714-23.945-23.903-23.998zM24 157.951h377.807c4.411 0 8 3.589 8 8v17.388H49.774a8 8 0 0 0 0 16H276v166.58H149.807V228.178a8 8 0 0 0-16 0v137.741H16V165.951c0-4.411 3.589-8 8-8zm385.807 241.356c0 4.411-3.589 8-8 8H24c-4.411 0-8-3.589-8-8v-17.388h361.258a8 8 0 0 0 0-16H292v-166.58h117.807zm22.419-310.743c0-8.751 7.12-15.871 15.871-15.871s15.871 7.12 15.871 15.871-7.12 15.871-15.871 15.871z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path d="M183.743 251.817c21.878-8.28 27.265 1.965 42.467 3.001-14.472 23.169-25.267 48.351-32.179 75.11-1.312 5.08 2.536 10.003 7.752 10.003a8.004 8.004 0 0 0 7.74-6.001c8.222-31.835 22.283-61.288 41.792-87.541 5.165-6.949-2.944-16.04-10.441-11.688-22.113 12.854-26.399-11.615-62.793 2.151a8 8 0 0 0 5.662 14.965zM377.374 234.701c-22.112 12.853-26.401-11.615-62.793 2.151a8 8 0 0 0 5.662 14.964c21.878-8.28 27.265 1.965 42.467 3.001-14.472 23.169-25.267 48.351-32.179 75.11-1.312 5.08 2.536 10.003 7.752 10.003a8.004 8.004 0 0 0 7.74-6.001c8.222-31.835 22.283-61.288 41.792-87.541 5.166-6.947-2.943-16.038-10.441-11.687zM45.243 251.817c21.953-8.309 27.157 1.958 42.467 3.001-14.472 23.169-25.267 48.351-32.179 75.11a8 8 0 0 0 15.492 4.002c8.222-31.835 22.283-61.288 41.792-87.541 5.165-6.949-2.944-16.04-10.441-11.688-22.113 12.854-26.399-11.615-62.793 2.151a7.999 7.999 0 0 0-4.651 10.313 8 8 0 0 0 10.313 4.652z" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg>

                           {t(`Slots`)}
                        </MenuButton>
                        <MenuButton
                              className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/fishing') ? 'active-menu' : ''}`}
                              as={NavLink}
                              to="/fishing" 
                         >
                            <AiOutlineAim size={28} />
                            {t(`Fishing`)}
                        </MenuButton>
                        <MenuButton
                              className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Table') ? 'active-menu' : ''}`}
                              as={NavLink}
                              to="/Table" 
                         >
                            <CgGames size={28} />
                            {t(`Table`)}
                        </MenuButton>
                        <MenuButton
                                className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Arcade') ? 'active-menu' : ''}`}
                                as={NavLink}
                                to="/Arcade" 
                           >
                            <TbBrandAppleArcade size={28} />
                            {t(`Arcade`)}
                        </MenuButton>
                        <MenuButton
                                 className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Lottery') ? 'active-menu' : ''}`}
                                 as={NavLink}
                                 to="/Lottery" 
                            >
                            <TbBrandAppleArcade size={28} />
                            {/* <img src={lottery} alt="lottery" width={28} /> */}
                            {t(`Lottery`)}
                        </MenuButton>
                        <MenuButton
                                className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Cock-fight') ? 'active-menu' : ''}`}
                                as={NavLink}
                                to="/Cock-fight" 
                           >
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="28" height="28" x="0" y="0" viewBox="0 0 47 60" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve"><g><g fill="#000" fillRule="nonzero"><path d="M36.718 21.345a7.2 7.2 0 0 1-.528-.546 18.92 18.92 0 0 1 1.5-3.6c.972-1.925 1.891-3.744 1.3-5.517a3 3 0 0 0-1.826-2.052 3.384 3.384 0 0 0-2.286.108 10.366 10.366 0 0 0-3.129-6.446c-3.434-3.431-6.177-2.64-7.634-1.726A8.7 8.7 0 0 0 19.04 0a6.468 6.468 0 0 0-6.731 5.123 10.513 10.513 0 0 0-6.971 3.438 5.686 5.686 0 0 0-1.285 4.6 7.445 7.445 0 0 0 1.968 4.21 8.224 8.224 0 0 0-4.692 2.911 6.872 6.872 0 0 0-1.275 4.881.963.963 0 0 0 1.625.6.685.685 0 0 1 .071-.031A7.15 7.15 0 0 0 5.8 27.97c1.45.37 2.918.66 4.4.866a13.715 13.715 0 0 1-2.709 2.332C.462 35.85 0 40.114.973 42.984a8 8 0 0 0 .118 5.332A5.7 5.7 0 0 0 5.9 52.4c.33.043.66.065.993.064 1.375-.027 2.73-.33 3.986-.891a11.32 11.32 0 0 1-.485 4.218 1.5 1.5 0 0 0 1.914 1.841l4.01-1.337a3 3 0 0 1-.5 1.364 1.484 1.484 0 0 0-.013 1.569c.296.492.846.773 1.418.724a16.43 16.43 0 0 0 8.259-3.19c.02.6-.088 1.198-.316 1.753a1 1 0 0 0 1.236 1.412 16.431 16.431 0 0 0 7.083-4.484 13.947 13.947 0 0 1-.182 2.11c-.1.617.2 1.23.746 1.534a1.5 1.5 0 0 0 1.717-.163 17.938 17.938 0 0 0 5.734-9.279l.055.147c.224.62.832 1.017 1.49.974a1.5 1.5 0 0 0 1.373-1.143A45.425 45.425 0 0 0 46.04 39c0-7.525-5.07-13.755-9.322-17.655zM6.894 9.818a8.707 8.707 0 0 1 6.283-2.769 9.562 9.562 0 0 1 6.2 1.829 1 1 0 1 0 1.2-1.6 11.411 11.411 0 0 0-6.158-2.211A4.435 4.435 0 0 1 19.04 2a6.76 6.76 0 0 1 4.423 1.581 9.368 9.368 0 0 1 2.629 3.737 1.001 1.001 0 1 0 1.9-.634A11.432 11.432 0 0 0 25.73 2.99c1.368-.537 2.909.024 4.6 1.717a8.287 8.287 0 0 1 2.579 6.586 9.79 9.79 0 0 1-.19 1.433 1 1 0 0 0 .976 1.204 1 1 0 0 0 .978-.8 11.9 11.9 0 0 0 .177-1.177 2.372 2.372 0 0 1 1.65-.433c.241.084.439.352.588.8.328.982-.374 2.372-1.186 3.981-.395.782-.812 1.632-1.167 2.531l-.006-.008A21.436 21.436 0 0 0 29.64 13.2c-5.561-4.171-9.975-1.743-12.9-.136-.645.383-1.32.713-2.018.987a30.959 30.959 0 0 0-3.888 1.735c-.832.417-1.608.8-2.129.992-1.431-.545-2.338-1.863-2.682-3.943a3.687 3.687 0 0 1 .871-3.017zm11.4 17.564a12.252 12.252 0 0 0-6.394-8.061 5.09 5.09 0 0 0-1.145-1.261c.313-.152.637-.313.983-.486a30.439 30.439 0 0 1 3.537-1.593c6.479-.79 10.946.72 11.953 4.043.776 2.565-.819 5.675-3.631 7.081a21.888 21.888 0 0 0-4.774 2.949 18.851 18.851 0 0 0-.532-2.672zM8.083 19c.452.032 2.584.373 2.914 4a54.96 54.96 0 0 0-8.783.584.9.9 0 0 0-.154.018c.112-.77.411-1.5.872-2.126.989-1.323 2.722-2.156 5.151-2.476zm-3.747 6.3c1.835-.167 4.33-.27 6.7-.294v1.92a35.522 35.522 0 0 1-4.756-.895 8.012 8.012 0 0 1-1.944-.731zm1.828 25.118a3.7 3.7 0 0 1-3.175-2.733 5.962 5.962 0 0 1-.071-4.229 4.846 4.846 0 0 1 2.494-2.526 1 1 0 0 0-.744-1.858A6.554 6.554 0 0 0 2.6 40.45c.129-2.489 2.129-5.042 5.993-7.618a12.933 12.933 0 0 0 4.34-4.385c.047-.146.083-.295.107-.447v-4a12 12 0 0 0-.117-1.639 10.806 10.806 0 0 1 3.441 5.56c1.873 6.7-.678 15.8-3.156 19.524a8.4 8.4 0 0 1-7.044 2.972zM42.843 47.6l-.106-.26a1.5 1.5 0 0 0-2.866.325 16.37 16.37 0 0 1-4.431 8.846c.08-.867.054-1.74-.079-2.6a1.5 1.5 0 0 0-2.691-.617 13.227 13.227 0 0 1-5.2 4.073 5.45 5.45 0 0 0-.2-1.933 1.5 1.5 0 0 0-2.395-.73 14.69 14.69 0 0 1-6.91 3.156 4.012 4.012 0 0 0 .231-2.6 1.509 1.509 0 0 0-1.93-1.06l-3.714 1.238a11.6 11.6 0 0 0 .193-4.875 7.751 7.751 0 0 0 2.128-2.013c2.11-3.175 4.192-9.587 4.13-15.724.827-1.159 1.788-2.088 5.484-3.935 3.72-1.86 5.719-5.923 4.651-9.451-.415-1.369-2.255-5.254-9.495-5.631 2.446-1.132 5.241-1.681 8.8.987a19.467 19.467 0 0 1 4.64 5.146c.388.57.767 1.12 1.171 1.638l.014.016c.334.434.701.841 1.1 1.217C39.322 26.447 44.04 32.2 44.04 39a38.117 38.117 0 0 1-1.197 8.6z"></path><path d="M20.04 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></g></g></svg>
                            {t(`Cock Fight`)}
                        </MenuButton>
                        <MenuButton
                                className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Racing') ? 'active-menu' : ''}`}
                                as={NavLink}
                                to="/Racing" 
                           >
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="28" height="28" x="0" y="0" viewBox="0 0 846.66 846.66" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" fillRule="evenodd" className=""><g transform="matrix(-1,0,0,1,846.656307220459,0)"><path fillRule="nonzero" d="M461.43 794.35c-50.82-115.8-52.26-134.44-48.6-279.82-39.12-9.8-76.83-40.65-91.91-71.64-11.65-23.92 24.69-41.6 36.33-17.69 31.56 64.83 133.17 68.68 185.77 35.99 6.49-4.03 14.38-3.94 20.6-.43 29.68 15.91 81.66 50.89 103.85 58.96 15.33 5.58 27.88 2.87 35.91-19.23 3.64-10.05 14.45-15.43 24.57-12.49 78.4 21.37 44.2-74.97 31.96-82.84-101.28-65.14-215.44-163.47-306.03-214.82-29.08-16.49 20.59-55.17-42.46-95.7-6.06 18.5-7.6 33.41-3.18 53.85 2.45 11.33-4.85 22.29-17.04 24.29-146.98 28.29-156.66 101.7-184.79 232.99-35.7 166.64 2.33 223.78-116.14 375.25zm267.5-377.24c22.25 14.56.13 48.37-22.12 33.81l-10.02-6.56c-22.26-14.57-.13-48.37 22.11-33.81zM548.59 306.24c15.95 21.13-16.29 45.45-32.23 24.32-14.53-19.28-35.94-19.92-50.95-1.48-16.69 20.51-47.96-4.94-31.28-25.44 31.7-38.95 84.4-37.29 114.46 2.6zm-62.91-161.1L617.41 16.62c15.07-14.68 40.74.89 32.7 22.14L582.68 233.8c69.64 58.01 125.16 89.86 199.03 137.4 47.65 30.65 61.54 174.34-47.4 159.11-39.93 76.77-122.42 2.67-179.89-28.79-46.79 27.89-56.9 22.66-101.41 18.11-3.57 143.88-1.1 154.31 57.75 286.76 7.22 15.02-4.16 29.91-18.62 29.39L48.67 819.87c-16.17-.6-25.58-19.9-14.85-32.94 141.05-171.22 92.8-201.47 133.1-389.53 30.36-141.7 48.54-225.95 198.8-260.47-2.06-25.98 5.24-55.53 17.21-80.27 4.97-9.94 17.06-13.97 27.01-9 50.42 25.21 74.92 54.5 75.74 97.48zm63.73 61.63 35.21-101.82-74.66 72.84c13.79 9.36 26.81 19.06 39.45 28.98z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
                            {t(`Racing`)}
                        </MenuButton>
                        <MenuButton
                               className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/Promotion') ? 'active-menu' : ''}`}
                               as={NavLink}
                               to="/Promotion" 
                          >
                            <IoGiftOutline size={28} />
                            {t(`Promotion`)}
                        </MenuButton>
                        <MenuButton
                               className={`text-base font-bold text-uppercase p-3 inline-block ${isActive('/VIP') ? 'active-menu' : ''}`}
                               as={NavLink}
                               to="/VIP" 
                          >
                            <LiaCrownSolid size={28} />
                            {t(`VIP`)}
                        </MenuButton>

                    </Menu>
                </Box>
            </div>
        </>
    )
}


export default Header
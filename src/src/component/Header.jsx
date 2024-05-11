// import React from 'react';
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdCasino } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import '../assets/css/style.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RightSidebar from "../modal/RightSidebar";
import Login from "../page/Login";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'


function Header() {
    const {
        bgColor1,
        bgColor2,
        bgGray,
        PrimaryText,
        secondaryText,
        hoverColor,
        ClickActiveColor,
      } = useSelector((state) => state.theme);
    
    //   const { bgYellow } = useSelector((state) => state.theme);
      const { t, i18n } = useTranslation();
    //   const [activeMenu, setActiveMenu] = useState(null);
  
    //   const handleMenuClick = (menu) => {
    //       setActiveMenu(menu);
    //   }

    return (
        <>
         <Login></Login> 
            <div style={{backgroundColor:bgGray, 'msOverflowStyle': 'none', 'scrollbarWidth': 'none' }} className='sub_Header flex justify-between overflow-auto whitespace-nowrap gap-2'>
                <Menu className="flex items-center">
                    <MenuButton
                        className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}                       
                    >
                        <RiHome4Line size={28}/>
                        <Link to="/">Home</Link>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                         as={Link}
                         to="/Login" 
                     >
                        <MdOutlineSportsSoccer size={28}/>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <MdCasino size={28}/>
                        <span>Casino</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Crash</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Bingo</span>
                    </MenuButton>
                    <MenuButton
                          className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                       <span> Slots</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Fishing</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Table</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Arcade</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Lottery</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Cock Fight</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Racing</span>
                    </MenuButton>
                    <MenuButton
                        className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>Promotion</span>
                    </MenuButton>
                    <MenuButton
                         className={`text-base font-bold h-16 gap-8 text-uppercase px-3 inline-block flex items-center`}
                        as={Link}
                        to="/your-route" >
                        <IoRocketOutline size={28}/>
                        <span>VIP</span>
                    </MenuButton>

                </Menu>
            </div>
        </>
    )
}


export default Header
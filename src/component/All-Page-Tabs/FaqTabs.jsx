// import React from 'react';
import { RiHome4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { PiSpinnerBallBold } from "react-icons/pi";
import { MdOutlineStarBorder } from "react-icons/md";
import { GiPokerHand } from "react-icons/gi";
import { IoFlashOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
// Images
import img1 from "../../assets/images/crash/10008.png";
import img2 from "../../assets/images/crash/10002.png";
import img3 from "../../assets/images/crash/10003.png";
import img4 from "../../assets/images/crash/10004.png";
import img5 from "../../assets/images/crash/10005.png";
import img6 from "../../assets/images/crash/10006.png";
import img7 from "../../assets/images/crash/10007.png";


import {
    Box,
    HStack,
    Center,
    border,
} from '@chakra-ui/react'


function FaqTabs() {
    const {
        bgColor1,
        bgGray,
        PrimaryText,
        secondaryText,
        hoverColor,
        ClickActiveColor,
        activeTabsBorder,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();
    const TabsStyle={
        minWidth:'100px',
        height:'100px',
        width:'auto',
        borderRadius: '5px',
        border:"1px solid #fff",
    }
    const location = useLocation();
    const currentPath = location.pathname;

    // State to store the active link
    const [activeLink, setActiveLink] = useState("");

    // Function to set the active link
    const setActiveLinkPath = (path) => {
        setActiveLink(path);
    };
    useEffect(() => {
        setActiveLink(currentPath);
    }, [currentPath]);
    return (
        <>
          <div className="home-tabs-section all-tabs">
                <Box className="p-3" overflowX="scroll"  css={{"&::-webkit-scrollbar": { display: "none", },}}>
                    <HStack spacing='15px' className="text-base font-bold">
                    <Box 
                     style={{ borderColor: activeLink === "/faq" ? ClickActiveColor : activeTabsBorder, ...TabsStyle }}
                     className="p-3 home-tab rounded text-center"
                     onClick={() => setActiveLinkPath("/faq")}
                    >
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="center" h="100%">
                            <Link to="/faq">{t(`Faq`)}</Link>
                        </Center>
                    </Box>
                    <Box 
                    style={{ borderColor: activeLink === "/terms-and-conditions" ? ClickActiveColor : activeTabsBorder, ...TabsStyle }}
                     className="p-3 home-tab rounded text-center"
                     onClick={() => setActiveLinkPath("/terms-and-conditions")}
                    >
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img1} alt="terms-conditions" size={40} style={{width:"40px"}}/>
                            <Link to="/terms-and-conditions">{t(`Terms & Conditions`)}</Link>
                        </Center>
                    </Box>
                        <Box 
                        style={{ borderColor: activeLink === "/PrivacyPolicy" ? ClickActiveColor : activeTabsBorder, ...TabsStyle }}
                     className="p-3 home-tab rounded text-center"
                     onClick={() => setActiveLinkPath("/PrivacyPolicy")}
                    >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img2} alt="Privacy Policy" size={40} style={{width:"40px"}}/>
                                <Link to="/PrivacyPolicy">{t(`Privacy Policy`)}</Link>
                            </Center>
                        </Box>
                        <Box 
                        style={{ borderColor: activeLink === "/Disconnection-Policy" ? ClickActiveColor : activeTabsBorder, ...TabsStyle }}
                     className="p-3 home-tab rounded text-center"
                     onClick={() => setActiveLinkPath("/Disconnection-Policy")}
                    >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img3} alt="Disconnection Policy" size={40} style={{width:"40px"}}/>
                                <Link to="/Disconnection-Policy">{t(`Disconnection Policy`)}</Link>
                            </Center>
                        </Box>
                        <Box 
                        style={{ borderColor: activeLink === "/Responsible-Gambling" ? ClickActiveColor : activeTabsBorder, ...TabsStyle }}
                     className="p-3 home-tab rounded text-center"
                     onClick={() => setActiveLinkPath("/Responsible-Gambling")}
                    >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img4} alt="bti" size={40} style={{width:"40px"}}/>
                                <Link to="/Responsible-Gambling">{t(`Responsible Gambling`)}</Link>
                            </Center>
                        </Box>
                    </HStack>
                </Box>
            </div>
        </>
    )
}


export default FaqTabs

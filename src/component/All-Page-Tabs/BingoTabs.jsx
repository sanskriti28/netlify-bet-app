// import React from 'react';
import { RiHome4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { PiSpinnerBallBold } from "react-icons/pi";
import { MdOutlineStarBorder } from "react-icons/md";
import { GiPokerHand } from "react-icons/gi";
import { IoFlashOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import img1 from "../../assets/bingo/1.png";
import img2 from "../../assets/bingo/2.png";
import img3 from"../../assets/bingo/3.png";
import img4 from "../../assets/bingo/4.png";
import img5 from "../../assets/bingo/5.jpg";
import img6 from "../../assets/bingo/6.png";
import img7 from "../../assets/bingo/7.png";
import img8 from "../../assets/bingo/8.png";
import img9 from "../../assets/bingo/9.png";
import img10 from "../../assets/bingo/10.png";
import img11 from "../../assets/bingo/11.png";
import img12 from "../../assets/bingo/12.png";
import img13 from "../../assets/bingo/13.png";
import img14 from "../../assets/bingo/14.png";

import BingoAw from "../Bingo/BingoAw";
import BingoCq9 from "../Bingo/BingoCq9";
import BingoJdb from "../Bingo/BingoJdb";
import BingoJili from "../Bingo/BingoJili";
import BingoKm from "../Bingo/BingoKm";
import BingoMg from "../Bingo/BingoMg";
import BingoCards from "../Bingo/BingoCards";
import BingoPng from "../Bingo/BingoPng";
import BingoPp from "../Bingo/BingoPp";
import BingoR88 from "../Bingo/BingoR88";
import BingoYb from "../Bingo/BingoYb";
import BingoZitro from "../Bingo/BingoZitro";
import {
    Box,
    HStack,
    Center,
    Tabs,
    TabList,
    Tab,
    TabIndicator,
    TabPanels,
    TabPanel,
} from '@chakra-ui/react'


function BingoTabs() {
    const {
        bgColor1,
        bgGray,
        PrimaryText,
        secondaryText,
        hoverColor,
        ClickActiveColor,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();
    const TabsStyle = {
        minWidth: '100px',
        height: '100px',
        width: 'auto',
        borderRadius: '5px',
        fontWeight:"700",
        textTransform: 'uppercase',
        border:`2px solid ${bgGray} `,
    }
    return (
        <>
          {/* <div className="home-tabs-section all-tabs">
                <Box className="p-3" overflowX="scroll"  css={{"&::-webkit-scrollbar": { display: "none", },}}>
                    <HStack spacing='15px' className="text-base font-bold">
                    <Box style={{ backgroundColor: bgGray, ...TabsStyle }} className="active p-3 home-tab rounded text-center" >
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="center" h="100%">
                            <Link to="/">{t(`All`)}</Link>
                        </Center>
                    </Box>
                    <Box style={{ backgroundColor: bgGray, ...TabsStyle }} className="p-3 home-tab rounded text-center" >
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img1} alt="wickets" size={40} style={{width:"40px"}}/>
                            <Link to="/wickets">{t(`wickets`)}</Link>
                        </Center>
                    </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img2} alt="we" size={40} style={{width:"40px"}}/>
                                <Link to="/we">{t(`we`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img3} alt="saba" size={40} style={{width:"40px"}}/>
                                <Link to="/saba">{t(`saba`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img4} alt="bti" size={40} style={{width:"40px"}}/>
                                <Link to="/bti">{t(`bti`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img5} alt="ug" size={40} style={{width:"40px"}}/>
                                <Link to="/ug">{t(`ug`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img6} alt="pinnance" size={40} style={{width:"40px"}}/>
                                <Link to="/pinnance">{t(`pinnance`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img7} alt="pinnance" size={40} style={{width:"40px"}}/>
                                <Link to="/pinnance">{t(`pinnance`)}</Link>
                            </Center>
                        </Box>
                    </HStack>
                </Box>
            </div> */}
                  <Tabs  overflowX="auto" className="home-tabs-section all-tabs all_pages_tabsWr" position='relative' variant='unstyled' px="10px">
            <TabList gap="10px">
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    {t(`All`)}
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img1} alt="9wickets" size={40} style={{ width: "40px" }} />
                        {t(`evo`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img2} alt="we" size={40} style={{ width: "40px" }} />
                        {t(`MG`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img3} alt="bti" size={40} style={{ width: "40px" }} />
                        {t(`JILI`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img4} alt="cmd" size={40} style={{ width: "40px" }} />
                        {t(`R88`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img5} alt="pinnancle" size={40} style={{ width: "40px" }} />
                        {t(`AW`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img6} alt="saba" size={40} style={{ width: "40px" }} />
                        {t(`BBin`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img7} alt="sbo" size={40} style={{ width: "40px" }} />
                        {t(`YB`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img8} alt="sbo" size={40} style={{ width: "40px" }} />
                        {t(`JDB`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img9} alt="sbo" size={40} style={{ width: "40px" }} />
                        {t(`KA`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img8} alt="sbo" size={40} style={{ width: "40px" }} />
                        {t(`PP`)}
                    </Center>
                </Tab>
                
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' borderRadius='1px' />
            <TabPanels>
                <TabPanel>
                <BingoCards></BingoCards>
                </TabPanel>
                <TabPanel>
                   <BingoJdb></BingoJdb>
                </TabPanel>
                <TabPanel>
                    <BingoYb></BingoYb>
                </TabPanel>
                <TabPanel>
                    <BingoJili></BingoJili>
                </TabPanel>
                <TabPanel>
                    <BingoR88></BingoR88>
                </TabPanel>
                <TabPanel>
                    <BingoPng></BingoPng>
                </TabPanel>
                <TabPanel>
                    <BingoAw></BingoAw>
                </TabPanel>
                <TabPanel>
                    <BingoCq9></BingoCq9>
                </TabPanel>
                <TabPanel>
                    <BingoKm></BingoKm>
                </TabPanel>
                <TabPanel>
                    <BingoMg></BingoMg>
                </TabPanel>
                <TabPanel>
                    <BingoPp></BingoPp>
                </TabPanel>
                <TabPanel>
                    <BingoZitro></BingoZitro>
                </TabPanel>
            </TabPanels>
        </Tabs >
        </>
    )
}


export default BingoTabs

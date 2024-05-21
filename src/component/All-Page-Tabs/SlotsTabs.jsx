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
import img1 from "../../assets/images/crash/10008.png";
import img2 from "../../assets/images/crash/10002.png";
import img3 from "../../assets/images/crash/10003.png";
import img4 from "../../assets/images/crash/10004.png";
import img5 from "../../assets/images/crash/10005.png";
import img6 from "../../assets/images/crash/10006.png";
import img7 from "../../assets/images/crash/10007.png";


import SlotsFaaChai from "../Slots/SlotsFaaChai";
import SlotsI8 from "../Slots/SlotsI8";
import SlotsJili from "../Slots/SlotsJili";
import SlotsNt from "../Slots/SlotsNt";
import SlotsPng from "../Slots/SlotsPng";
import SlotsR88 from "../Slots/SlotsR88";
import SlotsTabsJdb from "../Slots/SlotsTabsJdb";
import SlotsV8 from "../Slots/SlotsV8";
import SlotsYb from "../Slots/SlotsYb";
import SlotsEvoplay from "../Slots/SlotsEvoplay";
import SlotCards from "../Slots/SlotCards";


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


function SlotsTabs() {
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

            <Tabs overflowX="auto" className="home-tabs-section all-tabs all_pages_tabsWr" position='relative' variant='unstyled' px="10px">
                <TabList gap="10px">
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        {t(`All`)}
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img1} alt="9wickets" size={40} style={{ width: "40px" }} />
                            {t(`Evo`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img2} alt="we" size={40} style={{ width: "40px" }} />
                            {t(`JDB`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img3} alt="bti" size={40} style={{ width: "40px" }} />
                            {t(`YB`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img4} alt="cmd" size={40} style={{ width: "40px" }} />
                            {t(`JILI`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img5} alt="pinnancle" size={40} style={{ width: "40px" }} />
                            {t(`Fa Chaii`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img6} alt="saba" size={40} style={{ width: "40px" }} />
                            {t(`R88`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img7} alt="sbo" size={40} style={{ width: "40px" }} />
                            {t(`V8`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img1} alt="sbo" size={40} style={{ width: "40px" }} />
                            {t(`I8`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img2} alt="sbo" size={40} style={{ width: "40px" }} />
                            {t(`NT`)}
                        </Center>
                    </Tab>
                    <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                        <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img3} alt="sbo" size={40} style={{ width: "40px" }} />
                            {t(`PNG`)}
                        </Center>
                    </Tab>

                </TabList>
                <TabIndicator mt='-1.5px' height='2px' borderRadius='1px' />
                <TabPanels>
                    <TabPanel>
                        <SlotCards></SlotCards>
                    </TabPanel>
                    <TabPanel>
                        <SlotsTabsJdb></SlotsTabsJdb>
                    </TabPanel>
                    <TabPanel>
                        <SlotsYb></SlotsYb>
                    </TabPanel>
                    <TabPanel>
                        <SlotsFaaChai></SlotsFaaChai>
                    </TabPanel>
                    <TabPanel>
                        <SlotsR88></SlotsR88>
                    </TabPanel>
                    <TabPanel>
                        <SlotsV8></SlotsV8>
                    </TabPanel>
                    <TabPanel>
                        <SlotsI8></SlotsI8>
                    </TabPanel>
                    <TabPanel>
                        <SlotsNt></SlotsNt>
                    </TabPanel>
                    <TabPanel>
                        <SlotsPng></SlotsPng>
                    </TabPanel>
                    <TabPanel>
                        <SlotsJili></SlotsJili>
                    </TabPanel>
                    <TabPanel>
                        <SlotsEvoplay></SlotsEvoplay>
                    </TabPanel>
                </TabPanels>
            </Tabs >
        </>
    )
}


export default SlotsTabs

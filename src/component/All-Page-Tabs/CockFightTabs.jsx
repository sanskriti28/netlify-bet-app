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
import CockFightCards from '../CockFight/CockFightCards'
import CockR88 from '../CockFight/CockR88'
import CockYb from '../CockFight/CockYb'
import CockPp from '../CockFight/CockPp'
import CockZitro from '../CockFight/CockZitro'

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


function CockFightTabs() {
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
                 <Tabs className="home-tabs-section all-tabs all_pages_tabsWr" position='relative' variant='unstyled' px="10px">
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
                        {t(`sey`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img3} alt="bti" size={40} style={{ width: "40px" }} />
                        {t(`bbin`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img4} alt="cmd" size={40} style={{ width: "40px" }} />
                        {t(`BetGames`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img5} alt="pinnancle" size={40} style={{ width: "40px" }} />
                        {t(`CQ9`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img6} alt="saba" size={40} style={{ width: "40px" }} />
                        {t(`Dg`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={img7} alt="sbo" size={40} style={{ width: "40px" }} />
                        {t(`Ezugi`)}
                    </Center>
                </Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' borderRadius='1px' />
            <TabPanels>
                <TabPanel>
                <CockFightCards></CockFightCards>
                </TabPanel>
                <TabPanel>
                   <CockZitro></CockZitro>
                </TabPanel>
                <TabPanel>
                    <CockYb></CockYb>
                </TabPanel>
                <TabPanel>
                    <CockR88></CockR88>
                </TabPanel>
            </TabPanels>
        </Tabs >
        </>
    )
}


export default CockFightTabs

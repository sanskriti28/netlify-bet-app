import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CasinoCards from '../Casino/CasinoCards'
import CasinoEvo from "../Casino/CasinoEvo";
import CasinoSexy from "../Casino/CasinoSexy";
import CasinoBBin from "../Casino/CasinoBBin";
import CasinoBetGames from "../Casino/CasinoBetGames";
import CasinoCQ9 from "../Casino/CasinoCQ9";
import CasinoDg from "../Casino/CasinoDg";
import CasinoEzugi from "../Casino/CasinoEzugi";
import CasinoMg from "../Casino/CasinoMg";
import CasinoPp from "../Casino/CasinoPp";
import CasinoPt from "../Casino/CasinoPt";
import CasinoSa from "../Casino/CasinoSa";
import CasinoSaba from "../Casino/CasinoSaba";
import CasinoTvBet from "../Casino/CasinoTvBet";

import evo from "../../assets/images/casino/1.png";
import sey from "../../assets/images/casino/2.png";
import bbin from "../../assets/images/casino/3.png";
import BetGames from "../../assets/images/casino/4.png";
import CQ9 from "../../assets/images/casino/5.png";
import Dg from "../../assets/images/casino/6.png";
import Ezugi from "../../assets/images/casino/7.png";
import Mg from "../../assets/images/casino/8.png";
import Pp from "../../assets/images/casino/9.png";
import pt from "../../assets/images/casino/10.png";
import sa from "../../assets/images/casino/11.png";
import saba from "../../assets/images/casino/12.png";

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


function CasinoTabs() {
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
                            <img src={img2} alt="saba" size={40} style={{width:"40px"}}/>
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
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img8} alt="pinnance" size={40} style={{width:"40px"}}/>
                                <Link to="/pinnance">{t(`pinnance`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img9} alt="pinnance" size={40} style={{width:"40px"}}/>
                                <Link to="/pinnance">{t(`pinnance`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img10} alt="pinnance" size={40} style={{width:"40px"}}/>
                                <Link to="/pinnance">{t(`pinnance`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img11} alt="pinnance" size={40} style={{width:"40px"}}/>
                                <Link to="/pinnance">{t(`pinnance`)}</Link>
                            </Center>
                        </Box>
                        <Box style={{ backgroundColor: bgGray,...TabsStyle }} className="p-3 home-tab rounded text-center" >
                            <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                            <img src={img12} alt="pinnance" size={40} style={{width:"40px"}}/>
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
                        <img src={evo} alt="9wickets" size={40} style={{ width: "40px" }} />
                        {t(`evo`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={sey} alt="we" size={40} style={{ width: "40px" }} />
                        {t(`sey`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={bbin} alt="bti" size={40} style={{ width: "40px" }} />
                        {t(`bbin`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={BetGames} alt="cmd" size={40} style={{ width: "40px" }} />
                        {t(`BetGames`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={CQ9} alt="pinnancle" size={40} style={{ width: "40px" }} />
                        {t(`CQ9`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={Dg} alt="saba" size={40} style={{ width: "40px" }} />
                        {t(`Dg`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={Ezugi} alt="sbo" size={40} style={{ width: "40px" }} />
                        {t(`Ezugi`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={Mg} alt="ug" size={40} style={{ width: "40px" }} />
                        {t(`Mg`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={Pp} alt="ug" size={40} style={{ width: "40px" }} />
                        {t(`Pp`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={pt} alt="ug" size={40} style={{ width: "40px" }} />
                        {t(`pt`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={sa} alt="ug" size={40} style={{ width: "40px" }} />
                        {t(`sa`)}
                    </Center>
                </Tab>
                <Tab style={{ backgroundColor: bgGray, ...TabsStyle }}>
                    <Center className="flex-col" direction="column" alignItems="center" justifyContent="space-between" h="100%">
                        <img src={saba} alt="ug" size={40} style={{ width: "40px" }} />
                        {t(`saba`)}
                    </Center>
                </Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' borderRadius='1px' />
            <TabPanels>
                <TabPanel>
                <CasinoCards></CasinoCards>
                </TabPanel>
                <TabPanel>
                   <CasinoEvo></CasinoEvo>
                </TabPanel>
                <TabPanel>
                    <CasinoSexy></CasinoSexy>
                </TabPanel>
                <TabPanel>
                    <CasinoBBin></CasinoBBin>
                </TabPanel>
                <TabPanel>
                    <CasinoBetGames></CasinoBetGames>
                </TabPanel>
                <TabPanel>
                    <CasinoCQ9></CasinoCQ9>
                </TabPanel>
                <TabPanel>
                    <CasinoDg></CasinoDg>
                </TabPanel>
                <TabPanel>
                    <CasinoEzugi></CasinoEzugi>
                </TabPanel>
                <TabPanel>
                    <CasinoMg></CasinoMg>
                </TabPanel>
                <TabPanel>
                    <CasinoPp></CasinoPp>
                </TabPanel>
                <TabPanel>
                    <CasinoPt></CasinoPt>
                </TabPanel>
                <TabPanel>
                    <CasinoSa></CasinoSa>
                </TabPanel>
                <TabPanel>
                    <CasinoSaba></CasinoSaba>
                </TabPanel>
                <TabPanel>
                    <CasinoTvBet></CasinoTvBet>
                </TabPanel>
            </TabPanels>
        </Tabs >
        </>
    )
}


export default CasinoTabs

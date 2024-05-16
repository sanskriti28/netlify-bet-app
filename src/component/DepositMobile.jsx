import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import upi from "../assets/images/deposit/upi.svg";
import usdt from "../assets/images/deposit/usdt.svg";

import {
    Box,
    Tabs,
    Center,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import Upi from "../component/deposit-component/Upi";
import Usdt from "../component/deposit-component/Usdt";
import Reword from "./deposit-component/Reword";


const DepositMobile = () => {
    const {
        bgColor1,
        bgGray,
        starBg,
        PrimaryText,
    } = useSelector((state) => state.theme);

    const TabsStyle = {
        width: 'auto',
        borderRadius: '10px',
    }
    const { t, i18n } = useTranslation();
    const inputdiv = {
        fontSize: '1rem',
        fontWeight: 700,
        borderRadius: '5px',
        height: '50px',
        padding: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexWrap: 'wrap',
        minWidth: 0,
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px',
        '::placeholder': {
            color: '#000000de',
        },
        outlineColor: '#fbdf13',
    };
    const ListStyle = {
        lineHeight: "30px",
    }
    const listItems = [
        {
            title: "Important Notes",
            listContent: [
                "Deposits are subjected to a 1x wagering requirement.",
                "Please always deposit to the latest bank shown on this page. If you deposit money into an old bank account and cause any delayed or lost, we will not be responsible.",
            ],
        },
    ];
    return (
        <Box className="mainTabs_header">
            <Tabs display={{ base: "block", xl: "none" }}>
                <TabList className="mainTabs_wr" border="0">
                    <Tab fontWeight="700"color={{PrimaryText}}>Deposit</Tab>
                    <Tab fontWeight="700" color={{PrimaryText}}>Withdraw</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel paddingX="0">
                        <Tabs>
                            <TabList  borderBottom="none" gap="10px">
                                <Tab style={{ backgroundColor: bgGray, ...TabsStyle, width: "110px", height: "93px", padding: "10px 6px 6px" }} className={`home-tab rounded text-center `} >
                                    <Center h="100%">
                                        <Link className="flex items-center justify-between flex-col "
                                            flexDirection="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            height="100%"
                                            style={{ height: "100%", }}
                                        >
                                            <img src={upi} alt="" width="40px" />
                                            {/* <FaUser size={28} /> */}
                                            {t(`UPI`)}
                                        </Link>
                                    </Center>
                                </Tab>
                                <Tab style={{ backgroundColor: bgGray, ...TabsStyle, width: "110px", height: "93px", padding: "10px 6px 6px" }} className={`home-tab rounded text-center `} >
                                    <Center h="100%">
                                        <Link className="flex items-center flex-col justify-between"
                                            style={{ height: "100%", }}
                                        >
                                            {/* <MdLock size={28} /> */}
                                            <img src={usdt} alt="" width="40px" />
                                            {t(`USDT`)}
                                        </Link>
                                    </Center>
                                </Tab>
                                <Tab style={{ backgroundColor: bgGray, ...TabsStyle, width: "110px", height: "93px", padding: "10px 6px 6px" }} className={`home-tab rounded text-center `} >
                                    <Center h="100%">
                                        <Link className="flex items-center flex-col justify-between"
                                            style={{ height: "100%", }}
                                        >
                                            <FaStar size={35} style={{ fill: starBg }} />
                                            {t(`Reward Redeem`)}
                                        </Link>
                                    </Center>
                                </Tab>
                            </TabList>

                            <TabPanels padding="0" margin="0">
                                <TabPanel padding="0" margin="0">
                                    <Upi></Upi>
                                </TabPanel>
                                <TabPanel padding="0" margin="0">
                                    <Usdt></Usdt>
                                </TabPanel>
                                <TabPanel padding="0" margin="0">
                                    <Reword></Reword>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default DepositMobile;



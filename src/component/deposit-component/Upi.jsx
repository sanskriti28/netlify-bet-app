import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import upi from "../../assets/images/deposit/upi.svg";
import { FiAlertCircle } from "react-icons/fi";

import {
    Box,
    Flex,
    Button,
    Text,
    FormControl,
    FormLabel,
    OrderedList,
    Heading,
    ListItem,
    Center,
    Input,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";


const Upi = () => {
    const {
        bgColor1,
        bgGray,
        warning,
        greenBtn,
        PrimaryText,
        whiteText
    } = useSelector((state) => state.theme);

    const TabsStyle = {
        width: 'auto',
        borderRadius: '10px',
    }
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
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
        <Box maxW="100%" my={3}>
            <Flex gap="10px" flexDirection="column" style={{ textAlign: 'left' }}>
                <Box className="p-3" width={{ base: "100%", xl: "800px" }} height="auto" padding={{ base: "0", xl: "15px 34px" }} borderRadius="5px" bg={{ base: "transparent", xl: bgGray }}>
                    <Box display="flex" flexDirection="column">
                        <Tabs display="flex" flexDirection={{ base: "column", xl: "column" }}>
                            <Box display="flex" flexDirection={{ base: "column", xl: "row" }}>
                                <Box width="100%" maxWidth="250px" minWidth="250px" margin="5px" fontWeight="700">Payment Channels</Box>

                                <TabList gap="10px" flexWrap="wrap" border="none">
                                    <Tab border="0" padding="0">
                                        <Box bg={{ base: bgGray, xl: bgColor1 }} style={{ ...TabsStyle, width: "95px", height: "85px" }}
                                            className={`home-tab rounded text-center `}
                                            padding="10px 6px 6px"
                                            borderRadius="5px"
                                        >
                                            <Center h="100%">
                                                <Link className="flex items-center justify-between flex-col font-bold"
                                                    flexDirection="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    height="100%"
                                                    style={{ height: "100%" }}
                                                >
                                                    <img src={upi} alt="" width="36px" height="36px" />
                                                    {t(`Gateway 1`)}
                                                </Link>
                                            </Center>
                                        </Box>
                                    </Tab>
                                    <Tab border="0" padding="0">
                                        <Box bg={{ base: bgGray, xl: bgColor1 }} style={{ ...TabsStyle, width: "95px", height: "85px" }}
                                            className={`home-tab rounded text-center `}
                                            padding="10px 6px 6px"
                                            borderRadius="5px"
                                        >
                                            <Center h="100%">
                                                <Link className="flex items-center justify-between flex-col font-bold"
                                                    flexDirection="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    height="100%"
                                                    style={{ height: "100%" }}
                                                >
                                                    <img src={upi} alt="" width="36px" height="36px" />
                                                    {t(`Gateway 1`)}
                                                </Link>
                                            </Center>
                                        </Box>
                                    </Tab>
                                    <Tab border="0" padding="0">
                                        <Box bg={{ base: bgGray, xl: bgColor1 }} style={{ ...TabsStyle, width: "95px", height: "85px" }}
                                            className={`home-tab rounded text-center `}
                                            padding="10px 6px 6px"
                                            borderRadius="5px"
                                        >
                                            <Center h="100%">
                                                <Link className="flex items-center justify-between flex-col font-bold"
                                                    flexDirection="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    height="100%"
                                                    style={{ height: "100%" }}
                                                >
                                                    <img src={upi} alt="" width="36px" height="36px" />
                                                    {t(`Gateway 1`)}
                                                </Link>
                                            </Center>
                                        </Box>
                                    </Tab>
                                    <Tab border="0" padding="0">
                                        <Box bg={{ base: bgGray, xl: bgColor1 }} style={{ ...TabsStyle, width: "95px", height: "85px" }}
                                            className={`home-tab rounded text-center `}
                                            padding="10px 6px 6px"
                                            borderRadius="5px"
                                        >
                                            <Center h="100%">
                                                <Link className="flex items-center justify-between flex-col font-bold"
                                                    flexDirection="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    height="100%"
                                                    style={{ height: "100%" }}
                                                >
                                                    <img src={upi} alt="" width="36px" height="36px" />
                                                    {t(`Gateway 1`)}
                                                </Link>
                                            </Center>
                                        </Box>
                                    </Tab>
                                    <Tab border="0" padding="0">
                                        <Box bg={{ base: bgGray, xl: bgColor1 }} style={{ ...TabsStyle, width: "95px", height: "85px" }}
                                            className={`home-tab rounded text-center `}
                                            padding="10px 6px 6px"
                                            borderRadius="5px"
                                        >
                                            <Center h="100%">
                                                <Link className="flex items-center justify-between flex-col font-bold"
                                                    flexDirection="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    height="100%"
                                                    style={{ height: "100%" }}
                                                >
                                                    <img src={upi} alt="" width="36px" height="36px" />
                                                    {t(`Gateway 1`)}
                                                </Link>
                                            </Center>
                                        </Box>
                                    </Tab>
                                </TabList>
                            </Box>


                            <Box>
                                <TabPanels>
                                    <TabPanel>
                                        <Box display="flex" flexDirection="column">
                                            <Flex flexDirection={{ base: "column", xl: "row" }} position="relative">
                                                <Box width="237px" minWidth="237px"  margin="5px" fontWeight="700" position={{ base: "absolute", xl: "inherit" }}>Amount</Box>
                                                <Box width={{ base: "100%", xl: "calc(100% - 250px)" }}>
                                                    <Box display="flex" flexDirection={{ base: "column-reverse", xl: "column" }}>
                                                        <Box style={{ width: '100%', textAlign: "end", }} >
                                                            <input
                                                                style={{ ...inputdiv, backgroundColor: bgColor1, }}
                                                                className="whteBg_xl inputdiv rounded text-black-700"
                                                                type="text"
                                                            />
                                                        </Box>
                                                        <Box display="flex" justifyContent={{ base: "end", xl: "start" }} gap="10px">
                                                            <FiAlertCircle stroke={warning} size={26} />
                                                            <Text color={warning}>Min/Max Limit: 2,000/50,000</Text>
                                                        </Box>
                                                    </Box>
                                                    <Box paddingTop="10px">
                                                        <Button bg={{ base: greenBtn }} _hover={{ bg: { base: greenBtn } }}
                                                            color={{ base: whiteText, xl: whiteText }}
                                                            fontSize={{ base: ".9rem", xl: "16px" }}
                                                            borderRadius={{ base: "25px", xl: "5px" }}
                                                            minW={{ base: "100%", xl: "100%" }}
                                                            height={{ base: "40px", xl: "50px" }}
                                                            margin={{ base: "5px 0 5px", xl: "5px" }}
                                                            flex="1"
                                                            textShadow="0 2px 3px rgba(0, 0, 0, .3)"
                                                            textTransform="uppercase"
                                                        >
                                                            DEPOSIT
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box display="flex" flexDirection="column">
                                            <Flex flexDirection={{ base: "column", xl: "row" }} position="relative">
                                                <Box width="250px" margin="5px" fontWeight="700" position={{ base: "absolute", xl: "inherit" }}>Amount</Box>
                                                <Box width={{ base: "100%", xl: "calc(100% - 250px)" }}>
                                                    <Box display="flex" flexDirection={{ base: "column-reverse", xl: "column" }}>
                                                        <Box style={{ width: '100%', textAlign: "end", }} >
                                                            <input
                                                                style={{ ...inputdiv, backgroundColor: bgColor1, }}
                                                                className="whteBg_xl inputdiv rounded text-black-700"
                                                                type="text"
                                                            />
                                                        </Box>
                                                        <Box display="flex" justifyContent={{ base: "end", xl: "start" }} gap="10px">
                                                            <FiAlertCircle stroke={warning} size={26} />
                                                            <Text color={warning}>Min/Max Limit: 2,000/50,000</Text>
                                                        </Box>
                                                    </Box>
                                                    <Box paddingTop="10px">
                                                        <Button bg={{ base: greenBtn }} _hover={{ bg: { base: greenBtn } }}
                                                            color={{ base: whiteText, xl: whiteText }}
                                                            fontSize={{ base: ".9rem", xl: "16px" }}
                                                            borderRadius={{ base: "25px", xl: "5px" }}
                                                            minW={{ base: "100%", xl: "100%" }}
                                                            height={{ base: "40px", xl: "50px" }}
                                                            margin={{ base: "5px 0 5px", xl: "5px" }}
                                                            flex="1"
                                                            textShadow="0 2px 3px rgba(0, 0, 0, .3)"
                                                            textTransform="uppercase"
                                                        >
                                                            DEPOSIT
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box display="flex" flexDirection="column">
                                            <Flex flexDirection={{ base: "column", xl: "row" }} position="relative">
                                                <Box width="250px" margin="5px" fontWeight="700" position={{ base: "absolute", xl: "inherit" }}>Amount</Box>
                                                <Box width={{ base: "100%", xl: "calc(100% - 250px)" }}>
                                                    <Box display="flex" flexDirection={{ base: "column-reverse", xl: "column" }}>
                                                        <Box style={{ width: '100%', textAlign: "end", }} >
                                                            <input
                                                                style={{ ...inputdiv, backgroundColor: bgColor1, }}
                                                                className="whteBg_xl inputdiv rounded text-black-700"
                                                                type="text"
                                                            />
                                                        </Box>
                                                        <Box display="flex" justifyContent={{ base: "end", xl: "start" }} gap="10px">
                                                            <FiAlertCircle stroke={warning} size={26} />
                                                            <Text color={warning}>Min/Max Limit: 2,000/50,000</Text>
                                                        </Box>
                                                    </Box>
                                                    <Box paddingTop="10px">
                                                        <Button bg={{ base: greenBtn }} _hover={{ bg: { base: greenBtn } }}
                                                            color={{ base: whiteText, xl: whiteText }}
                                                            fontSize={{ base: ".9rem", xl: "16px" }}
                                                            borderRadius={{ base: "25px", xl: "5px" }}
                                                            minW={{ base: "100%", xl: "100%" }}
                                                            height={{ base: "40px", xl: "50px" }}
                                                            margin={{ base: "5px 0 5px", xl: "5px" }}
                                                            flex="1"
                                                            textShadow="0 2px 3px rgba(0, 0, 0, .3)"
                                                            textTransform="uppercase"
                                                        >
                                                            DEPOSIT
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box display="flex" flexDirection="column">
                                            <Flex flexDirection={{ base: "column", xl: "row" }} position="relative">
                                                <Box width="250px" margin="5px" fontWeight="700" position={{ base: "absolute", xl: "inherit" }}>Amount</Box>
                                                <Box width={{ base: "100%", xl: "calc(100% - 250px)" }}>
                                                    <Box display="flex" flexDirection={{ base: "column-reverse", xl: "column" }}>
                                                        <Box style={{ width: '100%', textAlign: "end", }} >
                                                            <input
                                                                style={{ ...inputdiv, backgroundColor: bgColor1, }}
                                                                className="whteBg_xl inputdiv rounded text-black-700"
                                                                type="text"
                                                            />
                                                        </Box>
                                                        <Box display="flex" justifyContent={{ base: "end", xl: "start" }} gap="10px">
                                                            <FiAlertCircle stroke={warning} size={26} />
                                                            <Text color={warning}>Min/Max Limit: 2,000/50,000</Text>
                                                        </Box>
                                                    </Box>
                                                    <Box paddingTop="10px">
                                                        <Button bg={{ base: greenBtn }} _hover={{ bg: { base: greenBtn } }}
                                                            color={{ base: whiteText, xl: whiteText }}
                                                            fontSize={{ base: ".9rem", xl: "16px" }}
                                                            borderRadius={{ base: "25px", xl: "5px" }}
                                                            minW={{ base: "100%", xl: "100%" }}
                                                            height={{ base: "40px", xl: "50px" }}
                                                            margin={{ base: "5px 0 5px", xl: "5px" }}
                                                            flex="1"
                                                            textShadow="0 2px 3px rgba(0, 0, 0, .3)"
                                                            textTransform="uppercase"
                                                        >
                                                            DEPOSIT
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box display="flex" flexDirection="column">
                                            <Flex flexDirection={{ base: "column", xl: "row" }} position="relative">
                                                <Box width="250px" margin="5px" fontWeight="700" position={{ base: "absolute", xl: "inherit" }}>Amount</Box>
                                                <Box width={{ base: "100%", xl: "calc(100% - 250px)" }}>
                                                    <Box display="flex" flexDirection={{ base: "column-reverse", xl: "column" }}>
                                                        <Box style={{ width: '100%', textAlign: "end", }} >
                                                            <input
                                                                style={{ ...inputdiv, backgroundColor: bgColor1, }}
                                                                className="whteBg_xl inputdiv rounded text-black-700"
                                                                type="text"
                                                            />
                                                        </Box>
                                                        <Box display="flex" justifyContent={{ base: "end", xl: "start" }} gap="10px">
                                                            <FiAlertCircle stroke={warning} size={26} />
                                                            <Text color={warning}>Min/Max Limit: 2,000/50,000</Text>
                                                        </Box>
                                                    </Box>
                                                    <Box paddingTop="10px">
                                                        <Button bg={{ base: greenBtn }} _hover={{ bg: { base: greenBtn } }}
                                                            color={{ base: whiteText, xl: whiteText }}
                                                            fontSize={{ base: ".9rem", xl: "16px" }}
                                                            borderRadius={{ base: "25px", xl: "5px" }}
                                                            minW={{ base: "100%", xl: "100%" }}
                                                            height={{ base: "40px", xl: "50px" }}
                                                            margin={{ base: "5px 0 5px", xl: "5px" }}
                                                            flex="1"
                                                            textShadow="0 2px 3px rgba(0, 0, 0, .3)"
                                                            textTransform="uppercase"
                                                        >
                                                            DEPOSIT
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </TabPanel>
                                </TabPanels>
                            </Box>
                        </Tabs>
                    </Box>

                </Box>

            </Flex>
            <Box>
                <Box p="3px 10px 3px 0">
                    {listItems.map((item, index) => (
                        <OrderedList key={index} ml="0" mb="15px">
                            {item.title && (
                                <Heading as="h6" style={{ ...ListStyle, color: warning }}>
                                    {item.title}
                                </Heading>
                            )}
                            {item.listContent.map((content, idx) => (
                                <ListItem key={idx} style={{ ...ListStyle }} display="list-item" ml="20px"
                                    sx={{
                                        "&::marker": {
                                            textAlign: "left", // Set marker to left align
                                        },
                                    }}
                                >
                                    {content}
                                </ListItem>
                            ))}
                        </OrderedList>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Upi;





import React from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
    Button,
    Progress,
    Text,
    Box,
    Flex,
    Image
} from "@chakra-ui/react";
import {
    HStack,
    Center,
} from '@chakra-ui/react'
import { IoWalletOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { LiaCrownSolid } from "react-icons/lia";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { PiSpinnerBallFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { Link, NavLink, useLocation } from 'react-router-dom';

import Bronze from '../assets/images/vip/Bronze.png';
const InfoAndPayment = () => {
    const {
        bgColor1,
        bgGray,
        progressBar,
        secondaryText,
    } = useSelector((state) => state.theme);
    const TabsStyle = {
        width: 'auto',
        borderRadius: '10px',
    }

    const { t, i18n } = useTranslation();
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <Box style={{ backgroundColor: bgColor1 }} className="infoPayment_sideBar" display={{ base: "none", xl: "block" }}>
            <Box>
                <Flex >
                    <Box>
                        <Box style={{ textAlign: 'left' }} maxW="100%" width={{ base: "100%", xl: "280px" }}>
                            <Flex className="infoTabs" gap="10px" flexDirection={{ base: "row", xl: "column" }} bg={{ base: bgColor1, xl: bgGray }} style={{ textAlign: 'left' }} py="20px">
                                <Button gap="15px" height="auto" minW={{ base: "85px", xl: "100%" }} bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Account" className={`${isActive('/Account') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaRegUser fontSize="28px" />
                                        <Text>Account</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" height="auto" minW={{ base: "85px", xl: "100%" }} bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Deposit" className={`${isActive('/Deposit') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <IoWalletOutline fontSize="28px" />
                                        <Text>Deposit</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" height="auto" minW={{ base: "85px", xl: "100%" }} bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Withdraw" className={`${isActive('/Withdraw') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaRegUser fontSize="28px" />
                                        <Text>Withdraw</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" height="auto" minW={{ base: "85px", xl: "100%" }} bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/BankAccountForm" className={`${isActive('/BankAccountForm') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <CiBank fontSize="28px" />
                                        <Text>Bank</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" height="auto" minW={{ base: "85px", xl: "100%" }} bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Records" className={`${isActive('/Records') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <IoDocumentsOutline fontSize="28px" />
                                        <Text>Records</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" height="auto" minW={{ base: "85px", xl: "100%" }} bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Inbox" className={`${isActive('/Inbox') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaRegEnvelope fontSize="28px" />
                                        <Text>Inbox</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" height="auto" minW={{ base: "85px", xl: "100%" }} bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Wallet" className={`${isActive('/Wallet') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <CiWallet fontSize="28px" />
                                        <Text>Wallet</Text>
                                    </Link>
                                </Button>
                            </Flex>
                            <Flex padding="15px" gap="10px" flexDirection={{ base: "row", xl: "column" }} bg={{ base: bgColor1, xl: bgGray }} style={{ textAlign: 'left' }} mt={4} p="20px 15px">
                                <Box display='flex' gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start" marginBottom="20px">
                                    <Image src={Bronze} alt="Bronze" boxSize="35px"/>
                                    <Text style={{fontWeight:"bold"}} flexShrink={0}>VIP Bronze</Text>
                                </Box>
                                <Box position="relative" className="level_wrap">
                                    <Progress value={0} style={{ backgroundColor: progressBar, height:"8px", width:"100%" }} colorScheme="primary" height="4px" mb="2" />
                                    <Flex align="center" width="100%" flexGrow="100%">
                                        <Box className="first-step" width="100%">
                                            <Box  className="prgoress_star box-outline default-center" 
                                            width="35px" height="35px"
                                            ></Box>
                                            <Text as="span" style={{fontSize:"14px"}} marginTop="10px" display="inline-block">
                                                <span >Bet Amount:</span>
                                                <Text as="span" className="amount font-bold" style={{color:secondaryText}}>0/1,000,000</Text>
                                            </Text>
                                        </Box>
                                        <Box className="step" zIndex="1" right="-15px" position="absolute" top="-15px">
                                            <Image src={Bronze} alt="Bronze" boxSize="50px" mr={2}  width="35px" height="35px"/>
                                            <Text style={{fontSize:"14px"}} as="span">Silver</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>

                            <Flex gap="10px" flexDirection={{ base: "row", xl: "column" }} bg={{ base: bgColor1, xl: bgGray }} style={{ textAlign: 'left' }} mt={4} py="20px">
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Reward-Point" className={`${isActive('/Reward-Point') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaHandsHoldingCircle fontSize="28px" />
                                        <Text>Reward Point</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/VIP" className={`${isActive('/VIP') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <LiaCrownSolid fontSize="28px" />
                                        <Text>VIP</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/spin-win" className={`${isActive('/spin-win') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <PiSpinnerBallFill fontSize="28px" />
                                        <Text>Spin & Win</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Referral" className={`${isActive('/Referral') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaUsers fontSize="28px" />
                                        <Text>Referral</Text>
                                    </Link>
                                </Button>
                            </Flex>

                            <Flex gap="10px" flexDirection={{ base: "row", xl: "column" }} bg={{ base: bgColor1, xl: bgGray }} style={{ textAlign: 'left' }} mt={4} py="20px">
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Terms-Conditions" className={`${isActive('/Terms-Conditions') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaHandsHoldingCircle fontSize="28px" />
                                        <Text>Terms & Conditions</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/faq" className={`${isActive('/faq') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <LiaCrownSolid fontSize="28px" />
                                        <Text>FAQ</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Privacy-Policy" className={`${isActive('/Privacy-Policy') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <PiSpinnerBallFill fontSize="28px" />
                                        <Text>Privacy Policy</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/DisconnectionPolicy" className={`${isActive('/DisconnectionPolicy') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaUsers fontSize="28px" />
                                        <Text>Disconnection Policy</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Responsible" className={`${isActive('/Responsible') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaUsers fontSize="28px" />
                                        <Text>Responsible Gambling</Text>
                                    </Link>
                                </Button>
                                <Button gap="15px" bg="transparent" _hover={{ bg: 'transparent', }} justifyContent="flex-start">
                                    <Link to="/Contact-US" className={`${isActive('/Contact-US') ? 'active-menu' : ''}`}
                                        style={{ display: "flex", gap: "15px", backgroundColor: bgGray }}
                                    >
                                        <FaUsers fontSize="28px" />
                                        <Text>Contact US</Text>
                                    </Link>
                                </Button>
                            </Flex>
                        </Box>

                    </Box>

                </Flex>
            </Box>
        </Box>
    );
};

export default InfoAndPayment;

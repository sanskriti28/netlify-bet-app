import React from 'react';
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Box
} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import InfoAndPayment from "./InfoAndPayment";
import BankTab from '../component/All-Page-Tabs/BankTabs';
//import BankTab from "../component/All-Page-Tabs/BankTab";

const BankAccountForm = () => {


    const banks = [
        'State Bank of India (SBI)',
        'ICICI Bank',
        'HDFC Bank',
        'Axis Bank',
        'Punjab National Bank (PNB)',
        'Bank of Baroda (BOB)',
        'Canara Bank',
        'Union Bank of India',
        'Bank of India (BOI)',
        'IDBI Bank',
        'Central Bank of India',
        'Indian Bank',
        'Bank of Maharashtra',
        'UCO Bank',
        'Indian Overseas Bank (IOB)',
        'Punjab & Sind Bank',
        'Kotak Mahindra Bank',
        'IndusInd Bank',
        'Yes Bank',
        'RBL Bank',
        'Federal Bank',
        'IDFC First Bank',
        'Bandhan Bank',
        'South Indian Bank',
        'DCB Bank',
        'Nainital Bank',
        'Jammu & Kashmir Bank',
        'Karur Vysya Bank',
        'City Union Bank',
        'Dhanlaxmi Bank',
        'Federal Bank',
        'HDFC Bank'
    ];
    const {
        bgColor1,
        bgGray,
        greenBtn,
        PrimaryText,
        whiteText
    } = useSelector((state) => state.theme);


    const TabsStyle = {
        width: 'auto',
        borderRadius: '10px',
    }
    return (
        <Box style={{ backgroundColor: bgColor1 }} className="main_page" paddingTop="155px" px="10px">
            <Box>
                <Flex>
                    <InfoAndPayment />
                    <Box maxW="100%">
                        {/* <UserProfile/> */}
                        <div style={{ backgroundColor: bgColor1 }}>
                            <Flex flexDirection='column'>
                                {/* <BankTab /> */}
                                <BankTab></BankTab>
                                <Box maxW="100%" my={3} mx={3} >
                                    <Flex gap="10px" flexDirection="column" style={{ textAlign: 'left' }}>
                                        <Box className="p-3" width="800px" height="auto" padding="15px 30px" borderRadius="5px" bg={bgGray}>
                                            <Box display="flex" flexDirection="column">

                                                <Box pb={4}>To change your Bank Account please contact our Customer Support</Box>
                                                <Flex width="100%" mb={4} align="center">
                                                    <FormLabel width="30%">Account Name</FormLabel>
                                                    <Input  bg={whiteText} width="70%" />
                                                </Flex>
                                                <Flex width="100%" mb={4} align="center">
                                                    <FormLabel width="30%">Select Bank</FormLabel>
                                                    <Select  bg={whiteText} width="70%" >
                                                        {banks.map((bank, index) => (
                                                            <option key={index} value={bank}>
                                                                {bank}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                </Flex>
                                                <Flex width="100%" mb={4} align="center">
                                                    <FormLabel width="30%">Bank Branch</FormLabel>
                                                    <Input bg={whiteText} width="70%"/>
                                                </Flex>
                                                <Flex width="100%" mb={4} align="center">
                                                    <FormLabel width="30%">Account Number</FormLabel>
                                                    <Input bg={whiteText} width="70%"  />
                                                </Flex>
                                                <Flex width="100%" mb={4} align="center">
                                                    <FormLabel width="30%">IFSC Code</FormLabel>
                                                    <Input  bg={whiteText} width="70%" />
                                                </Flex>
                                                <Flex width="100%" mb={4} align="center">
                                                    <FormLabel width="30%"></FormLabel>
                                                    <Button bg={greenBtn}
                                                        color={whiteText}
                                                        fontSize={{ base: ".9rem", xl: "16px" }}
                                                        width="70%"
                                                        minW={{ base: "85px", xl: "140px" }}
                                                        height={{ base: "40px", xl: "50px" }}
                                                        margin={{ base: "5px 0 5px", xl: "5px" }}
                                                    >
                                                        Add Bank
                                                    </Button>
                                                </Flex>



                                            </Box>
                                        </Box>

                                    </Flex>
                                </Box>
                            </Flex>

                        </div>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default BankAccountForm;




import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
    Box,
    Flex,
    Button,
    Text,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

import {
    HStack,
    Center,
} from '@chakra-ui/react';
import DobModel from "../../../modal/Dob";

const Profile = () => {
    const {
        bgColor1,
        bgGray,
    } = useSelector((state) => state.theme);

    const TabsStyle = {
        width: 'auto',
        borderRadius: '10px',
    }
    return (
        <Box style={{ backgroundColor: bgColor1 }} my={3}>
                <Flex>
                    <Box maxW="100%">
                        <div style={{ backgroundColor: bgColor1 }}>
                            <Flex flexDirection='column'>
                                <Box maxW="100%">
                                    <Flex gap="10px" flexDirection="column" style={{ textAlign: 'left' }}>
                                        <Box className="p-3" width="800px" height="auto" padding="15px 30px" borderRadius="5px" bg={bgGray}>
                                            <Box display="flex" flexDirection="column" gap="10px">
                                                <FormControl display="flex" flexDirection="row" alignItems="center">
                                                    <FormLabel width="130px" fontWeight="700" mb="0">Full Name</FormLabel>
                                                    <Text type="text" >sanskriti dhakad</Text>
                                                </FormControl>
                                                <FormControl display="flex" flexDirection="row" alignItems="center">
                                                    <FormLabel width="130px" fontWeight="700" mb="0">Username</FormLabel>
                                                    <Text type="text" >sanskriti@123</Text>
                                                </FormControl>
                                                <FormControl display="flex" flexDirection="row" alignItems="center">
                                                    <FormLabel width="130px" fontWeight="700" mb="0">Email</FormLabel>
                                                    <Text type="text" >sanskritidhakad@gmail.com</Text>
                                                </FormControl>
                                                <FormControl display="flex" flexDirection="row" alignItems="center">
                                                    <FormLabel width="130px" fontWeight="700" mb="0">Mobile</FormLabel>
                                                    <Text type="text" >9865472145</Text>
                                                </FormControl>
                                                <FormControl display="flex" flexDirection="row" alignItems="center">
                                                    <FormLabel width="130px" fontWeight="700" mb="0">D.O.B</FormLabel>
                                                    <Text type="text" >
                                                       <DobModel></DobModel>
                                                    </Text>
                                                </FormControl>
                                            </Box>
                                        </Box>

                                    </Flex>
                                </Box>
                            </Flex>

                        </div>
                    </Box>
                </Flex>
            </Box>
    );
};

export default Profile;



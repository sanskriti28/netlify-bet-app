
import React from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Text,
    useDisclosure,
    Select,
    InputGroup,
    InputLeftElement,
    Box,
} from "@chakra-ui/react";
import img1 from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import { useState } from 'react';
import { FaMinus } from "react-icons/fa6";

function RegisterUser({ isLoggedIn, setIsLoggedIn }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const style = {
        width: '170px',
        paddingTop: '10px'

    }
    const {
        bgYellow,
        redBtn,
        blackBtn,
        PrimaryText,
        whiteText,
      } = useSelector((state) => state.theme);


    return (
        <>
        {isLoggedIn ?
           <Box display="flex">
            <Button onClick={onOpen} bg={{base:blackBtn, xl:redBtn}} _hover={{ bg:{base:blackBtn, xl:redBtn} }} 
                color={{base:whiteText}} 
                fontSize={{base:".9rem",xl:"16px"}}
                borderRadius={{base:"25px",xl:"5px"}}
                minW={{base:"85px",xl:"140px"}} 
                height={{base:"40px",xl:"50px"}}   
                margin={{base:"5px 0 5px 5px",xl:"5px"}}
                display={{base:"none", xl:"block"}}
                
            >
                {isLoggedIn ? 'Withdraw' : 'Register'}
                </Button>
                <Button backgroundColor={blackBtn} 
                color={whiteText} 
                borderRadius="50%"
                width="40px"
                height="40px"
                display={{base:"flex", xl:"none"}}
                padding="8px"
                >
                  <FaMinus size={24}/>
                </Button>
           </Box>
           :
           <Button onClick={onOpen} bg={{base:blackBtn, xl:redBtn}} _hover={{ bg:{base:blackBtn, xl:redBtn} }} 
                color={{base:whiteText}} 
                fontSize={{base:".9rem",xl:"16px"}}
                borderRadius={{base:"25px",xl:"5px"}}
                minW={{base:"85px",xl:"140px"}} 
                height={{base:"40px",xl:"50px"}}   
                margin={{base:"5px 0 5px 5px",xl:"5px"}}
                
            >
                {isLoggedIn ? 'Withdraw' : 'Register'}
                </Button>
        }
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-center items-center'> <img style={style} src={img1} alt="Logo" /></div>
                    <ModalHeader  style={{ paddingTop: '0' }}   className=' text-base flex justify-center items-center'>Welcome to best Online Casino!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl >
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    fontSize="xl"
                                    children={<FaRegCircleUser color="gray.300" />}
                                />
                                <Input ref={initialRef} placeholder='Username' />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    fontSize="xl"
                                    children={<MdLock color="gray.300" />}
                                />
                                <Input ref={initialRef} placeholder='Password' />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    fontSize="xl"
                                    children={<MdLock color="gray.300" />}
                                />
                                <Input ref={initialRef} placeholder='Confirm Password' />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    fontSize="xl"
                                    children={<FaRegUser color="gray.300" />}
                                />
                                <Input ref={initialRef} placeholder='Full Name' />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    fontSize="xl"
                                    children={<BiPhoneCall color="gray.300" />}
                                />
                                <Input ref={initialRef} placeholder='Mobile Number' />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    fontSize="xl"
                                    children={<MdOutlineEmail color="gray.300" />}
                                />
                                <Input placeholder='Email' />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    fontSize="xl"
                                    children={<RiCouponLine color="gray.300" />}
                                />
                                <Input placeholder='Promo Code' />
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button style={{backgroundColor:bgYellow}}  mr={3} w="500px"> 
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default RegisterUser;


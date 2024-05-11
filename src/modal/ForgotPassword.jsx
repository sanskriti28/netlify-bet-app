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
    Input,
    Text,
    useDisclosure,
    Select,
    InputGroup,
    InputLeftElement
} from "@chakra-ui/react";
import img1 from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { FaUserAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

function ForgotPassword() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const style = {
        width: '170px',
        paddingTop: '10px'
    };
  

    const {
        bgYellow,
      } = useSelector((state) => state.theme);

    return (
        <>
            <Text onClick={onOpen} fontSize=".8rem" fontWeight="normal" className='cursor-pointer' textAlign="end" lineHeight="normal">Forgot Password</Text>
            <Modal 
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-center items-center'> <img style={style} src={img1} alt="Logo" /></div>
                    <ModalHeader  fontSize="sm"  className=' text-base flex justify-center items-center' >Forgot Password ? Reset your password</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<FaUserAlt color="gray.300" />}
                                />
                                <Input ref={initialRef} placeholder='Please enter your username' />
                            </InputGroup>
                        </FormControl>
                        <FormControl mt={4}>
                            <Select placeholder='Select option'>
                                <option value='option1'>Mobile Number</option>
                                <option value='option2'>Email Address</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<FaMobileAlt color="gray.300" />}
                                />
                                <Input placeholder='Please enter your mobile number' />
                            </InputGroup>
                        </FormControl>
                        <FormControl mt={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<FaEnvelope color="gray.300" />}
                                />
                                <Input placeholder='Please enter your email address' />
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button style={{backgroundColor: bgYellow}} mr={3} w="500px"> 
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ForgotPassword;


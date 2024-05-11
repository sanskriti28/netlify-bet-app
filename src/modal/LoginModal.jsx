// import React from 'react';
// import {
//     Button,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalCloseButton,
//     ModalBody,
//     ModalFooter,
//     FormControl,
//     FormLabel,
//     Input,
//     Text,
//     useDisclosure,
//     Select,
//     InputGroup,
//     InputLeftElement
// } from "@chakra-ui/react";
// import img1 from "../assets/logo.svg";
// import { useSelector } from "react-redux";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { MdLock } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";
// import { BiPhoneCall } from "react-icons/bi";
// import { MdOutlineEmail } from "react-icons/md";
// import { RiCouponLine } from "react-icons/ri";

// function LoginModal() {
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     const initialRef = React.useRef(null);
//     const finalRef = React.useRef(null);

//     const style = {
//         width: '170px',
//         paddingTop: '10px'

//     }
//     const { bgGray, PrimaryText, bgYellow, whiteText, bgColor1, bgGray100 } = useSelector((state) => state.theme);
//     return (
//         <>
//             {/* <Button onClick={onOpen} bg={redBtn} _hover={{ bg: redBtn }} color="white" fontSize="base"  rounded="md"   minW="140px" h="50px"  style={{margin:'5px',}}>
//                 Register
//             </Button> */}

//             <Button onClick={onOpen} type="button" style={{ backgroundColor: bgYellow, color: whiteText }} textTransform="uppercase"
//               width={{ base: "100%", xl: "250px" }}
//               height="50px" borderRadius={{ base: "25px", xl: "5px" }}
//               textShadow="0 2px 3px rgba(0, 0, 0, .3)"
//             >
//               Join Now
//             </Button>
//             <Modal
//                 initialFocusRef={initialRef}
//                 finalFocusRef={finalRef}
//                 isOpen={isOpen}
//                 onClose={onClose}
//             >
//                 <ModalOverlay />
//                 <ModalContent>
//                     <div className='flex justify-center items-center'> <img style={style} src={img1} alt="Logo" /></div>
//                     <ModalHeader  style={{ paddingTop: '0' }}   className=' text-base flex justify-center items-center'>Welcome Back, Good Luck !</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody pb={6}>
//                         <FormControl >
//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents="none"
//                                     fontSize="xl"
//                                     children={<FaRegCircleUser color="gray.300" />}
//                                 />
//                                 <Input ref={initialRef} placeholder='Username' />
//                             </InputGroup>
//                         </FormControl>

//                         <FormControl mt={4}>
//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents="none"
//                                     fontSize="xl"
//                                     children={<MdLock color="gray.300" />}
//                                 />
//                                 <Input ref={initialRef} placeholder='Password' />
//                             </InputGroup>
//                         </FormControl>

//                         {/* <FormControl mt={4}>
//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents="none"
//                                     fontSize="xl"
//                                     children={<MdLock color="gray.300" />}
//                                 />
//                                 <Input ref={initialRef} placeholder='Confirm Password' />
//                             </InputGroup>
//                         </FormControl> */}

//                         {/* <FormControl mt={4}>
//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents="none"
//                                     fontSize="xl"
//                                     children={<FaRegUser color="gray.300" />}
//                                 />
//                                 <Input ref={initialRef} placeholder='Full Name' />
//                             </InputGroup>
//                         </FormControl> */}
// {/* 
//                         <FormControl mt={4}>
//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents="none"
//                                     fontSize="xl"
//                                     children={<BiPhoneCall color="gray.300" />}
//                                 />
//                                 <Input ref={initialRef} placeholder='Mobile Number' />
//                             </InputGroup>
//                         </FormControl> */}

//                         {/* <FormControl mt={4}>
//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents="none"
//                                     fontSize="xl"
//                                     children={<MdOutlineEmail color="gray.300" />}
//                                 />
//                                 <Input placeholder='Email' />
//                             </InputGroup>
//                         </FormControl> */}

//                         {/* <FormControl mt={4}>
//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents="none"
//                                     fontSize="xl"
//                                     children={<RiCouponLine color="gray.300" />}
//                                 />
//                                 <Input placeholder='Promo Code' />
//                             </InputGroup>
//                         </FormControl> */}
//                     </ModalBody>

//                     <ModalFooter>
//                         <Button style={{backgroundColor:bgYellow}}  mr={3} w="500px"> 
//                             Login
//                         </Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }

// export default LoginModal;
import React, { useState } from 'react';
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
    Checkbox,
    Text,
    useDisclosure,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    IconButton,
    Link
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import img1 from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLock } from "react-icons/md";

function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const { bgYellow, whiteText } = useSelector((state) => state.theme);
    
    return (
        <>
            <Button onClick={onOpen} type="button" style={{ backgroundColor: bgYellow, color: whiteText }} textTransform="uppercase"
                width={{ base: "100%", xl: "250px" }}
                height="50px" borderRadius={{ base: "25px", xl: "5px" }}
                textShadow="0 2px 3px rgba(0, 0, 0, .3)"
            >
                Join Now
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-center items-center'>
                        <img style={{ width: '170px', paddingTop: '10px' }} src={img1} alt="Logo" />
                    </div>
                    <ModalHeader style={{ paddingTop: '0' }} className='text-base flex justify-center items-center'>
                        Welcome Back, Good Luck!
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
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
                                <Input
                                    placeholder='Password'
                                    type={showPassword ? "text" : "password"}
                                />
                                <InputRightElement width="4.5rem">
                                    <IconButton
                                        h="1.75rem" size="sm"
                                        onClick={togglePasswordVisibility}
                                        icon={showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                        aria-label={'Toggle Password Visibility'}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <Checkbox mt={2}>
                            Remember Password
                        </Checkbox>
                    </ModalBody>

                    <ModalFooter flexDirection="column" alignItems="center">
                        <Button colorScheme="yellow" w="full">Login</Button>
                        <Text mt={4}>
                            Don't have an account?
                            <Link color="blue.500" href="#" onClick={() => console.log("Navigate to register")}>Create Account</Link>
                        </Text>
                        <Text mt={2}>
                            Forgot Password?
                            <Link color="blue.500" href="#" onClick={() => console.log("Handle forgot password")}>Reset Here</Link>
                        </Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default LoginModal;

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
//     Select
// } from "@chakra-ui/react";
// import img1 from "../assets/logo.svg";
// import { useSelector } from "react-redux";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { MdLock } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";
// import { BiPhoneCall } from "react-icons/bi";
// import { MdOutlineEmail } from "react-icons/md";
// import { RiCouponLine } from "react-icons/ri";

// function RegisterUser() {
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     const initialRef = React.useRef(null);
//     const finalRef = React.useRef(null);

//     const style = {
//         width: '170px'

//     }
//     const {
//         bgColor1,
//         bgColor2,
//         bgGray,
//         bgYellow,
//         PrimaryText,
//         secondaryText,
//         hoverColor,
//         ClickActiveColor,
//       } = useSelector((state) => state.theme);
//     return (
//         <>
//             {/* <Button onClick={onOpen}>Open Modal</Button> */}
//             {/* <Text onClick={onOpen} fontSize="sm" fontWeight="bold" className='cursor-pointer'>Forgot Password</Text> */}
//             <button onClick={onOpen}  className=" cursor-pointer flex-shrink-0 bg-green-500 hover:bg-green-700 text-white text-base py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
//                 Register
//               </button>
//             <Modal
//                 initialFocusRef={initialRef}
//                 finalFocusRef={finalRef}
//                 isOpen={isOpen}
//                 onClose={onClose}
//             >
//                 <ModalOverlay />
//                 <ModalContent>
//                     <div className='flex justify-center items-center'> <img style={style} src={img1} alt="Logo" /></div>

//                     <ModalHeader>Welcome to best Online Casino!</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody pb={6}>
//                         <FormControl >
//                         <FaRegCircleUser/>
//                             <Input ref={initialRef} placeholder='Username' />
//                         </FormControl>

//                         <FormControl mt={4}>
//                         <MdLock/>
//                             <Input ref={initialRef} placeholder='Password' />
//                         </FormControl>

//                         <FormControl mt={4}>
//                         <MdLock/>
//                             <Input ref={initialRef} placeholder='Confirm Password' />
//                         </FormControl>

//                         <FormControl mt={4}>
//                         <FaRegUser/>
//                             <Input ref={initialRef} placeholder='Full Name' />
//                         </FormControl>
                        
//                         <FormControl mt={4}>
//                         <BiPhoneCall/>
//                             <Input ref={initialRef} placeholder='Mobile Number' />
//                         </FormControl>
//                         {/* <FormControl mt={4}>
//                             <Select placeholder='Select option'>
//                                 <option value='option1'>Mobile Number</option>
//                                 <option value='option2'>Email Address</option>
//                             </Select>
//                         </FormControl> */}
//                         <FormControl mt={4}>
//                         <MdOutlineEmail/>
//                             <Input placeholder='Email' />
//                         </FormControl>

//                         <FormControl mt={4}>
//                         <RiCouponLine/>
//                             <Input placeholder='Promo Code' />
//                         </FormControl>
//                     </ModalBody>

//                     <ModalFooter>
//                         <Button style={{backgroundColor:bgYellow}}  mr={3} w="500px"> 
//                             Submit
//                         </Button>

//                         {/* <Button onClick={onClose}>Cancel</Button> */}
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }

// export default RegisterUser;
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
    InputLeftElement
} from "@chakra-ui/react";
import img1 from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";

function RegisterUser() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const style = {
        width: '170px',
        paddingTop: '10px'

    }
    const {
        bgYellow,
      } = useSelector((state) => state.theme);
    return (
        <>
            <button onClick={onOpen}  className=" cursor-pointer flex-shrink-0 bg-green-500 hover:bg-green-700 text-white text-base py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
                Register
            </button>
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


import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import hindi from "../assets/images/flags/hi.svg";
import bangladesh from "../assets/images/flags/bangladesh.svg";
import en from "../assets/images/flags/en.svg";
import hi from "../assets/images/flags/hi.svg";
import { useSelector } from "react-redux";
import { useMediaQuery } from '@chakra-ui/react';
import {
    Button,
    Menu,
    MenuButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Box,
    Link,
    Image,
    Text
} from "@chakra-ui/react";

const ChangeLanguage = ({ isLoggedIn, setIsLoggedIn }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const style = {
        width: '170px',
        paddingTop: '10px'

    }
    const {
        bgYellow,
        greenBtn,
        borderLang,
        bgGray,
    } = useSelector((state) => state.theme);
    const langStyle={
        minWidth: '100px',
        fontWeight: '400',
        border: '1px solid #d9dee4',
        padding:"8px 10px",
        display:'flex',
        justifyContent:'center',
        
    }
    const [isXl] = useMediaQuery("(min-width: 1280px)");
    return (
        <>
        {isLoggedIn? 
         <Button 
         marginRight={{ base:"0", xl:'5px'}}
         bg={{ base:"transparent", xl:bgGray}}
         width={{ base:"auto", xl:"85px"}}
         height={{ base:"auto", xl:"50px"}}
         padding={{ base:"0 5px", xl:"0"}}
         display={{base:"none", xl:"block"}}
         onClick={onOpen}>
             <Menu >
                 <MenuButton as={Button} rightIcon={isXl ? <FaCaretDown /> : undefined} 
                 height={{ base:"40px", xl:"50px"}}
                 borderRadius={{ base:"50%", xl:"0"}}
                 padding={{ base:"0 5px", xl:"0"}}
                 >
                     <Image src={hindi} alt='Hindi'
                     height={{ base:"30px", xl:"40px"}}
                     width={{ base:"30px", xl:"40px"}}
                     style={{ borderRadius: '50%', objectFit: 'cover', }} 
                     />
                 </MenuButton>
             </Menu>
         </Button>
         :
         <Button 
         marginRight={{ base:"0", xl:'5px'}}
         bg={{ base:"transparent", xl:bgGray}}
         width={{ base:"auto", xl:"85px"}}
         height={{ base:"auto", xl:"50px"}}
         padding={{ base:"0 5px", xl:"0"}}
         onClick={onOpen}>
             <Menu >
                 <MenuButton as={Button} rightIcon={isXl ? <FaCaretDown /> : undefined} 
                 height={{ base:"40px", xl:"50px"}}
                 borderRadius={{ base:"50%", xl:"0"}}
                 padding={{ base:"0 5px", xl:"0"}}
                 >
                     <Image src={hindi} alt='Hindi'
                     height={{ base:"30px", xl:"40px"}}
                     width={{ base:"30px", xl:"40px"}}
                     style={{ borderRadius: '50%', objectFit: 'cover', }} 
                     />
                 </MenuButton>
             </Menu>
         </Button>
        
    }
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent p='4'>
                    <ModalHeader style={{ paddingTop: '0',paddingBottom:'10px' }} fontSize="1.1rem" className=' flex justify-center items-center'>Select Language</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} pt={10}>
                        <Box className="lang-list-wrapper default-center">
                            <ul>
                                
                                <li style={{ padding: '5px 0'}}>
                                    <Box className="justify-between lang-selection-wrapper" display="flex" alignItems="center" >
                                        <Image src={bangladesh} alt="Country Flag" w="50px" className="flag rounded" />
                                        <Box className="currency" >
                                            <Text className="currency-code">BDT</Text>
                                            <Text className="sign">৳</Text>
                                        </Box>
                                        <Link href="/en-BD" className='rounded' style={{...langStyle}}>
                                            <Box className="lang-bg-wrapper" >
                                                <Text>English</Text>
                                            </Box>
                                        </Link>
                                        <Link href="/bn-BD" className='rounded' style={{...langStyle}}>
                                            <Box className="lang-bg-wrapper" >
                                                <Text>বাংলা</Text>
                                            </Box>
                                        </Link>
                                    </Box>
                                </li>
                                <li style={{ padding: '5px 0'}}>
                                    <Box className="justify-between lang-selection-wrapper" display="flex" alignItems="center" >
                                        <Image src={en} alt="Country Flag" w="50px" className="flag rounded" />
                                        <Box className="currency" >
                                            <Text className="currency-code">BRL</Text>
                                            <Text className="sign">R$</Text>
                                        </Box>
                                        <Link href="/en-BD" className='rounded' style={{...langStyle}}>
                                            <Box className="lang-bg-wrapper" >
                                                <Text>English</Text>
                                            </Box>
                                        </Link>
                                        <Link href="/bn-BD" className='rounded' style={{...langStyle}}>
                                            <Box className="lang-bg-wrapper" >
                                                <Text>Português</Text>
                                            </Box>
                                        </Link>
                                    </Box>
                                </li>
                                <li style={{ padding: '5px 0'}}> 
                                    <Box className="justify-between lang-selection-wrapper" display="flex" alignItems="center" >
                                        <Image src={hi} alt="Country Flag" w="50px" className="flag rounded" />
                                        <Box className="currency" >
                                            <Text className="currency-code">INR</Text>
                                            <Text className="sign">₹</Text>
                                        </Box>
                                        <Link href="/en-BD" className='rounded' style={{...langStyle}}>
                                            <Box className="lang-bg-wrapper" >
                                                <Text>English</Text>
                                            </Box>
                                        </Link>
                                        <Link href="/bn-BD" className='rounded' style={{...langStyle}}>
                                            <Box className="lang-bg-wrapper" >
                                                <Text>हिन्दी</Text>
                                            </Box>
                                        </Link>
                                    </Box>
                                </li>
                            </ul>
                        </Box>
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button style={{backgroundColor:bgYellow}}  mr={3} w="500px"> 
                            Submit
                        </Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ChangeLanguage
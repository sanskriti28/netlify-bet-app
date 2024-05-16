import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  Link,
  Box,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Optional for router
import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { CiMenuBurger } from "react-icons/ci";
import { useSelector } from "react-redux";


function RightSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {
    bgGray,
  } = useSelector((state) => state.theme);
  return (
    <>
    <Box display={{base:"none", xl:"block"}}>
    <Box  style={{backgroundColor: bgGray,}} borderRadius="5px" width="50px" height="50px" padding="13px">
      <CiMenuBurger ref={btnRef} onClick={onOpen} fontSize={"25px"} 
      color="black"
      />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align="start" gap= '20px' fontSize="16px">
              <Link as={RouterLink} to="/Reward-Points" fontSize="base" fontWeight="bold">Reward Points</Link>
              <Link as={RouterLink} to="/vip-page" fontSize="base" fontWeight="bold">VIP</Link>
              <Link as={RouterLink} to="/blog" fontSize="base" fontWeight="bold">Blog</Link>
              <Link as={RouterLink} to="/affiliate-program" fontSize="base" fontWeight="bold">Affiliate Program</Link>
              <Link as={RouterLink} to="/Brand-Ambassador" fontSize="base" fontWeight="bold">Brand Ambassador</Link>
              <Link as={RouterLink} to="/faq" fontSize="base" fontWeight="bold">FAQ</Link>
              <Link as={RouterLink} to="/PrivacyPolicy" fontSize="base" fontWeight="bold">Privacy Policy</Link>
              <Link as={RouterLink} to="/terms-and-conditions" fontSize="base" fontWeight="bold">Terms and Conditions</Link>
              <Link as={RouterLink} to="/Disconnection-Policy" fontSize="base" fontWeight="bold">Disconnection Policy</Link>
              <Link as={RouterLink} to="/Responsible-Gambling" fontSize="base" fontWeight="bold">Responsible Gambling</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
    </>
  );
}

export default RightSidebar;

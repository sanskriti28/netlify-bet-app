import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  Link 
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Optional for router
import React from 'react';
import { IoMenu } from 'react-icons/io5';

function RightSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IoMenu ref={btnRef} onClick={onOpen} fontSize={"30px"} color="black"  display={{base:'none',xl:'block'}}/>

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
            <VStack align="start">
              <Link as={RouterLink} to="/Reward-Points" fontSize="lg" fontWeight="bold">Reward Points</Link>
              <Link as={RouterLink} to="/vip-page" fontSize="lg" fontWeight="bold">VIP</Link>
              <Link as={RouterLink} to="/blog" fontSize="lg" fontWeight="bold">Blog</Link>
              <Link as={RouterLink} to="/AffiliateProgram" fontSize="lg" fontWeight="bold">Affiliate Program</Link>
              <Link as={RouterLink} to="/spin-and-win" fontSize="lg" fontWeight="bold">Brand Ambassador</Link>
              <Link as={RouterLink} to="/faq" fontSize="lg" fontWeight="bold">FAQ</Link>
              <Link as={RouterLink} to="/terms-and-conditions" fontSize="lg" fontWeight="bold">Terms and Conditions</Link>
              <Link as={RouterLink} to="/disconnection-policy" fontSize="lg" fontWeight="bold">Disconnection Policy</Link>
              <Link as={RouterLink} to="/responsible-gambling" fontSize="lg" fontWeight="bold">Responsible Gambling</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default RightSidebar;

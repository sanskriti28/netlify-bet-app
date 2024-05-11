       import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Text, // Import Text component from Chakra UI
  VStack // Import VStack component from Chakra UI
} from '@chakra-ui/react'
import React from 'react'
import { IoMenu } from 'react-icons/io5'


function RightSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <IoMenu ref={btnRef} onClick={onOpen} fontSize={"30px"}  color="black"/>

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
            <VStack align="start"> {/* Use VStack to stack the text vertically */}
              <Text fontSize="lg" fontWeight="bold">Reward Points</Text>
              <Text fontSize="lg" fontWeight="bold">VIP</Text>
              <Text fontSize="lg" fontWeight="bold">Blog</Text>
              <Text fontSize="lg" fontWeight="bold">Affiliate Program</Text>
              <Text fontSize="lg" fontWeight="bold">Brand Ambassadar</Text>
              <Text fontSize="lg" fontWeight="bold">FAQ</Text>
              <Text fontSize="lg" fontWeight="bold">Terms and Condition</Text>
              <Text fontSize="lg" fontWeight="bold">Disconnection Policy</Text>
              <Text fontSize="lg" fontWeight="bold">Responsible Gambling</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default RightSidebar

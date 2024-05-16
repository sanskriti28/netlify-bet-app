import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Link,
  Flex,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { IoMenu, IoSearch } from 'react-icons/io5'
import {
  IoHome,
  IoGift,
  IoStar,
  IoCash,
  IoRefreshCircle,
  IoHelpCircle,
  IoBasketball,
  IoCard,
  IoAlertCircle,
  IoHammer,
  IoChatbubbleEllipses,
  IoListCircle,
  IoGlobeOutline,
  IoCall,
  IoChatboxEllipses,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMail,
  IoArrowDownCircle,
  IoInformationCircle,
  IoLockClosed,
  IoPeopleCircle,
  IoRocket,
  IoReader,
  IoGameControllerOutline,
  IoReaderOutline,
  IoBoat,
  IoCarSport,
} from 'react-icons/io5';
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
      <Box style={{ backgroundColor: bgGray, }} borderRadius="50%" 
      width="40px" height="40px" padding="3px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginLeft="10px"
      >
        <CiMenuBurger ref={btnRef} onClick={onOpen} size={22}
          color="black"
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack align="start">
              <Flex align="center" justify="center" paddingY="4">
                <InputGroup borderRadius="lg">
                  <Input placeholder="Search Games" />
                  <InputRightElement pointerEvents="none">
                    <IoSearch fontSize="20px" color="gray.400" />
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Divider />
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  <Flex align="center" marginY="2" paddingX="2" borderRadius="md" _hover={{ bg: "gray.100" }}>
                    {getIcon(link.label)}
                    <Link as={RouterLink} to={link.to} fontSize="lg" ml={4} fontWeight="bold">{link.label}</Link>
                  </Flex>
                  {(link.label === "Responsible Gambling") && (
                    <Flex justify="center" align="center" marginY="2" gap={3}>
                      <IoLogoFacebook fontSize="36px" color="#3b5998" />
                      <IoLogoInstagram fontSize="36px" color="#bc2a8d" />
                      <IoLogoWhatsapp fontSize="36px" color="#25d366" />
                      {/* <IoLogoTelegram fontSize="36px" color="#0088cc" marginRight="4" /> */}
                      <IoLogoTwitter fontSize="36px" color="#1da1f2" marginRight="4" />
                      <IoMail fontSize="36px" color="#ea4335" marginRight="4" />
                    </Flex>
                  )}
                  {(link.label === "Referral" || link.label === "Racing" || link.label === "Download App" || link.label === "Responsible Gambling") && <Divider />}
                </React.Fragment>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function getIcon(label) {
  switch (label) {
    case 'Home':
      return <IoHome fontSize="lg" color="black" marginRight="4" />;
    case 'Promotions':
      return <IoGift fontSize="lg" color="black" marginRight="4" />;
    case 'VIP':
      return <IoStar fontSize="lg" color="black" marginRight="4" />;
    case 'Reward Point':
      return <IoCash fontSize="lg" color="black" marginRight="4" />;
    case 'Spin & Win':
      return <IoRefreshCircle fontSize="lg" color="black" marginRight="4" />;
    case 'Referral':
      return <IoHelpCircle fontSize="lg" color="black" marginRight="4" />;
    case 'Sports':
      return <IoBasketball fontSize="lg" color="black" marginRight="4" />;
    case 'Casino':
      return <IoCard fontSize="lg" color="black" marginRight="4" />;
    case 'Crash':
      return <IoAlertCircle fontSize="lg" color="black" marginRight="4" />;
    case 'Bingo':
      return <IoHammer fontSize="lg" color="black" marginRight="4" />;
    case 'Slots':
      return <IoChatbubbleEllipses fontSize="lg" color="black" marginRight="4" />;
    case 'Fishing':
      return <IoListCircle fontSize="lg" color="black" marginRight="4" />;
    case 'Table':
      return <IoGlobeOutline fontSize="lg" color="black" marginRight="4" />;
    case 'Arcade':
      return <IoGameControllerOutline fontSize="lg" color="black" marginRight="4" />;
    case 'Lottery':
      return <IoReader fontSize="lg" color="black" marginRight="4" />;
    case 'Cock Fight':
      return <IoReaderOutline fontSize="lg" color="black" marginRight="4" />;
    case 'Racing':
      return <IoBoat fontSize="lg" color="black" marginRight="4" />;
    case 'English':
      return <IoCarSport fontSize="lg" color="black" marginRight="4" />;
    case 'Contact Us':
      return <IoCall fontSize="lg" color="black" marginRight="4" />;
    case 'Blog':
      return <IoChatboxEllipses fontSize="lg" color="black" marginRight="4" />;
    case 'Affiliate':
      return <IoLogoTwitter fontSize="lg" color="black" marginRight="4" />;
    case 'Brand Ambassador':
      return <IoLogoFacebook fontSize="lg" color="black" marginRight="4" />;
    case 'Download App':
      return <IoLogoInstagram fontSize="lg" color="black" marginRight="4" />;
    case 'Term & Conditions':
      return <IoArrowDownCircle fontSize="lg" color="black" marginRight="4" />;
    case 'FAQ':
      return <IoInformationCircle fontSize="lg" color="black" marginRight="4" />;
    case 'Privacy Policy':
      return <IoLockClosed fontSize="lg" color="black" marginRight="4" />;
    case 'Disconnection Policy':
      return <IoPeopleCircle fontSize="lg" color="black" marginRight="4" />;
    case 'Responsible Gambling':
      return <IoRocket fontSize="lg" color="black" marginRight="4" />;
    default:
      return null;
  }
}

const links = [
  { to: "/Reward-Points", label: "Home" },
  { to: "/vip-page", label: "Promotions" },
  { to: "/blog", label: "VIP" },
  { to: "/affiliate-program", label: "Reward Point" },
  { to: "/spin-and-win", label: "Spin & Win" },
  { to: "/faq", label: "Referral" },
  { to: "/terms-and-conditions", label: "Sports" },
  { to: "/disconnection-policy", label: "Casino" },
  { to: "/responsible-gambling", label: "Crash" },
  { to: "/Reward-Points", label: "Bingo" },
  { to: "/vip-page", label: "Slots" },
  { to: "/blog", label: "Fishing" },
  { to: "/affiliate-program", label: "Table" },
  { to: "/spin-and-win", label: "Arcade" },
  { to: "/faq", label: "Lottery" },
  { to: "/terms-and-conditions", label: "Cock Fight" },
  { to: "/disconnection-policy", label: "Racing" },
  { to: "/responsible-gambling", label: "English" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/vip-page", label: "Blog" },
  { to: "/blog", label: "Affiliate" },
  { to: "/affiliate-program", label: "Brand Ambassador" },
  { to: "/spin-and-win", label: "Download App" },
  { to: "/faq", label: "Term & Conditions" },
  { to: "/terms-and-conditions", label: "FAQ" },
  { to: "/disconnection-policy", label: "Privacy Policy" },
  { to: "/responsible-gambling", label: "Disconnection Policy" },
  { to: "/responsible-gambling", label: "Responsible Gambling" }
];

export default RightSidebar;


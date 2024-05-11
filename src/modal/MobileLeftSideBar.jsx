// import {
//     Drawer,
//     DrawerBody,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//     useDisclosure,
//     Button,
//     VStack,
//     Link // Import Link
//   } from '@chakra-ui/react';
//   import { Link as RouterLink } from 'react-router-dom'; // Optional for router
//   import React from 'react';
//   import { IoMenu } from 'react-icons/io5';
  
//   function RightSidebar() {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const btnRef = React.useRef();
  
//     return (
//       <>
//         <IoMenu ref={btnRef} onClick={onOpen} fontSize={"30px"} color="black" />
  
//         <Drawer
//           isOpen={isOpen}
//           placement='left'
//           onClose={onClose}
//           finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerBody>
//               <VStack align="start">
//                 <Link as={RouterLink} to="/Reward-Points" fontSize="lg" fontWeight="bold">Home</Link>
//                 <Link as={RouterLink} to="/vip-page" fontSize="lg" fontWeight="bold">Promotions</Link>
//                 <Link as={RouterLink} to="/blog" fontSize="lg" fontWeight="bold">VIP</Link>
//                 <Link as={RouterLink} to="/affiliate-program" fontSize="lg" fontWeight="bold">Reward Point</Link>
//                 <Link as={RouterLink} to="/spin-and-win" fontSize="lg" fontWeight="bold">Spin & Win</Link>
//                 <Link as={RouterLink} to="/faq" fontSize="lg" fontWeight="bold">Referral</Link>
//                 <Link as={RouterLink} to="/terms-and-conditions" fontSize="lg" fontWeight="bold">Sports</Link>
//                 <Link as={RouterLink} to="/disconnection-policy" fontSize="lg" fontWeight="bold">Casino</Link>
//                 <Link as={RouterLink} to="/responsible-gambling" fontSize="lg" fontWeight="bold">Crash</Link>
//                 <Link as={RouterLink} to="/Reward-Points" fontSize="lg" fontWeight="bold">Bingo</Link>
//                 <Link as={RouterLink} to="/vip-page" fontSize="lg" fontWeight="bold">Slots</Link>
//                 <Link as={RouterLink} to="/blog" fontSize="lg" fontWeight="bold">Fishing</Link>
//                 <Link as={RouterLink} to="/affiliate-program" fontSize="lg" fontWeight="bold">Table</Link>
//                 <Link as={RouterLink} to="/spin-and-win" fontSize="lg" fontWeight="bold">Arcade</Link>
//                 <Link as={RouterLink} to="/faq" fontSize="lg" fontWeight="bold">Lottery</Link>
//                 <Link as={RouterLink} to="/terms-and-conditions" fontSize="lg" fontWeight="bold">Cock Fight</Link>
//                 <Link as={RouterLink} to="/disconnection-policy" fontSize="lg" fontWeight="bold">Racing</Link>
//                 <Link as={RouterLink} to="/responsible-gambling" fontSize="lg" fontWeight="bold">English</Link>
//                 <Link as={RouterLink} to="/Reward-Points" fontSize="lg" fontWeight="bold">Contact Us</Link>
//                 <Link as={RouterLink} to="/vip-page" fontSize="lg" fontWeight="bold">Blog</Link>
//                 <Link as={RouterLink} to="/blog" fontSize="lg" fontWeight="bold">Affiliate</Link>
//                 <Link as={RouterLink} to="/affiliate-program" fontSize="lg" fontWeight="bold">Brand Ambassador</Link>
//                 <Link as={RouterLink} to="/spin-and-win" fontSize="lg" fontWeight="bold">Download App</Link>
//                 <Link as={RouterLink} to="/faq" fontSize="lg" fontWeight="bold">Term & Conditions</Link>
//                 <Link as={RouterLink} to="/terms-and-conditions" fontSize="lg" fontWeight="bold">FAQ</Link>
//                 <Link as={RouterLink} to="/disconnection-policy" fontSize="lg" fontWeight="bold">Privacy Policy</Link>
//                 <Link as={RouterLink} to="/responsible-gambling" fontSize="lg" fontWeight="bold">Disconnection Policy</Link>
//                 <Link as={RouterLink} to="/responsible-gambling" fontSize="lg" fontWeight="bold">ResPonsible Gambling</Link>
//               </VStack>
//             </DrawerBody>
//           </DrawerContent>
//         </Drawer>
//       </>
//     );
//   }
  
//   export default RightSidebar;
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    Link,
    Flex,
  } from '@chakra-ui/react';
  import { Link as RouterLink } from 'react-router-dom';
  import React from 'react';
  import { IoMenu } from 'react-icons/io5';
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
    IoLanguages
  } from 'react-icons/io5';
  
  function MobileLeftSideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <IoMenu ref={btnRef} onClick={onOpen} fontSize={"30px"} color="black" display={{base:'none',xl:'block'}} />
  
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack align="start">
                {links.map((link, index) => (
                  <Flex key={index} align="center" marginY="2" paddingX="2" borderRadius="md" _hover={{ bg: "gray.100" }}>
                    {getIcon(link.label)}
                    <Link as={RouterLink} to={link.to} fontSize="lg" fontWeight="bold">{link.label}</Link>
                  </Flex>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  // Function to map link names to corresponding icons
  function getIcon(label) {
    switch(label) {
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
    { to: "/Reward-Points", label: "Contact Us" },
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
  
  export default MobileLeftSideBar;
  
  
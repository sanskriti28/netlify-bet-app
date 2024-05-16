import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import img2 from '../../assets/images/sport/10001.png'
import img1 from '../../assets/images/sport/10001.png'
import img3 from '../../assets/images/sport/10005.jpeg'
import img4 from '../../assets/images/sport/10006.png'
import img5 from '../../assets/images/sport/10007.png'
import img6 from '../../assets/images/sport/10008.png'
import img7 from '../../assets/images/sport/10009.jpeg'
import img8 from '../../assets/images/sport/10010.jpeg'
import img9 from '../../assets/images/sport/10011.png'

// Mobile
// Images
import wickets from "../../assets/images/sport/9wickets-bg.jpg";
import we from "../../assets/images/sport/we-bg.jpg";
import pinnance from "../../assets/images/sport/pinnacle-bg.jpg";
import saba from "../../assets/images/sport/saba-bg.jpg";
import ug from "../../assets/images/sport/ug-bg.jpg";
import bti from "../../assets/images/sport/bti-bg.jpg";
import cmd from "../../assets/images/sport/cmd-bg.jpg";

// logo
import wicketsLogo from "../../assets/images/sport/9wickets.png";
import weLogo from "../../assets/images/sport/we.png";
import pinnanceLogo from "../../assets/images/sport/pinnance.jpeg";
import sabaLogo from "../../assets/images/sport/saba.png";
import ugLogo from "../../assets/images/sport/ug.png";
import btiLogo from "../../assets/images/sport/bti.png";
import cmdLogo from "../../assets/images/sport/cmd.png";

import { FcLike } from "react-icons/fc";



import { SimpleGrid, Box, Flex, Image, Button, Text } from '@chakra-ui/react';



function SportCards() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9,];
    const Mobileimages = [wickets, we, pinnance, saba, ug, bti,cmd]
    const logoIcon = [wicketsLogo, weLogo, pinnanceLogo, sabaLogo, ugLogo, btiLogo,cmdLogo]


    const MobileCards=[
        {
            image: wickets,
            icon: wicketsLogo,
            heading: "9Wickets",
            mobileBtn: "Mobile",
            desktopBtn: "Desktop",
          },
        {
            image: we,
            icon: weLogo,
            heading: "we",
            mobileBtn: "Mobile",
            desktopBtn: "Desktop",
          },
        {
            image: pinnance,
            icon: pinnanceLogo,
            heading: "pinnance",
            mobileBtn: "Mobile",
            desktopBtn: "Desktop",
          },
        {
            image: saba,
            icon: sabaLogo,
            heading: "saba",
            mobileBtn: "Mobile",
            desktopBtn: "Desktop",
          },
        {
            image: ug,
            icon: sabaLogo,
            heading: "ug",
            mobileBtn: "Mobile",
            desktopBtn: "Desktop",
          },
        {
            image: bti,
            icon: btiLogo,
            heading: "bti",
            mobileBtn: "Mobile",
            desktopBtn: "Desktop",
          },
        {
            image: cmd,
            icon: cmdLogo,
            heading: "cmd",
            mobileBtn: "Mobile",
            desktopBtn: "Desktop",
          },
    ]
    const {
        bgGray,
        bgYellow,
        bgColor1,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();
    const StyleCard = {
        width: "100%",
        position: "absolute",
        paddingTop: "10px",
        bottom: 0,
        left: 0,
        borderRadius: "0 0 5px 5px",
        background: "linear-gradient(0deg, #000, transparent)",
        display: 'flex',
        justifyContent: 'space-between',
    }
    const MobileStyleCard = {
        width: "48%",
        position: "absolute",
        paddingTop: "10px",
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-between',
        height:"100%"
    }
    const cardBTnStyle={
            height: '35px',
            fontSize: '.9rem',
            borderRadius:"25px",
            width: "50%",
    }

    return (
        <>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing="10px" p="3"  >
                {images.map((img, index) => (
                    <Box key={index} rounded="5px" overflow="hidden" position="relative" maxHeight='144px' display={{ base: "none", xl: "flex" }}>
                        <img src={img} alt={`Logo ${index + 1}`} />
                        <div style={{ ...StyleCard }} className='text-white px-2'>
                            <span>9 Wickets</span>
                            <FcLike size={21} />
                        </div>
                    </Box>
                ))}
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing="10px" p="3"  >
                {MobileCards.map((item, index) => (
                    <Box key={index} rounded="5px" overflow="hidden" position="relative" maxHeight='172px' display={{ base: "flex", xl: "none" }}>
                        <img src={item.image} alt={`Logo ${index + 1}`} style={{ width: "100%", objectFit: "cover" }} />
                        <div style={{ ...MobileStyleCard, }} className='text-white px-2 pb-2' >
                            <Flex className="" flexDirection="column" justifyContent="space-between">
                                {/* Platform info */}
                                <Flex alignItems="center" className="platform-info" flex="1" gap="10px" paddingLeft="5px">
                                    <Image
                                        src={item.icon}
                                        alt={item.heading}
                                        boxSize="32px"
                                        mr={2}
                                    />
                                    <Text className="name">{item.heading}</Text>
                                </Flex>

                                {/* Action wrapper */}
                                <Flex className="action-wrapper">
                                    <Button className="jwbtn jwbtn-yellow text-black" mr={2} 
                                    bg={{ base: bgYellow, xl: bgYellow }} 
                                    _hover={{ bg: { base: bgYellow, xl: bgYellow } }}
                                    style={{...cardBTnStyle}}
                                    >
                                        {item.mobileBtn}
                                    </Button>
                                    <Button className="jwbtn jwbtn-white text-black"
                                     bg={{ base: bgColor1, xl: bgColor1 }} 
                                     _hover={{ bg: { base: bgColor1, xl: bgColor1 } }}
                                     style={{...cardBTnStyle}}
                                    >
                                        {item.desktopBtn}
                                    </Button>
                                </Flex>
                            </Flex>
                        </div>
                    </Box>
                ))}
            </SimpleGrid>
        </>
    )
}


export default SportCards
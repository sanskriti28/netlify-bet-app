import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import img1 from "../../assets/images/crash/10009.png";
import img2 from "../../assets/images/crash/10010.png";
import img3 from "../../assets/images/crash/10011.png";
import img4 from "../../assets/images/crash/10012.png";
import img5 from "../../assets/images/crash/10013.png";
import img6 from "../../assets/images/crash/10014.png";
import img7 from "../../assets/images/crash/10015.png";
import img8 from "../../assets/images/crash/10016.jpeg";
import img9 from "../../assets/images/crash/10017.png";
import img10 from "../../assets/images/crash/10018.png";
import img11 from "../../assets/images/crash/10019.png";
import img12 from "../../assets/images/crash/10020.jpeg";
import img13 from "../../assets/images/crash/10021.png";
import img14 from "../../assets/images/crash/10022.png";


// Mobile
// Images
import sv388 from "../../assets/images/cock-fight/sv388-bg.png";
import r88 from "../../assets/images/cock-fight/r88-bg.jpg";

// logo
import r88Logo from "../../assets/images/cock-fight/r88logo.png";
import sv388Logo from "../../assets/images/cock-fight/svlogo.png";


import { FcLike } from "react-icons/fc";
import { SimpleGrid, Box, Flex, Image, Button, Text } from '@chakra-ui/react';

function CockR88() {
    const images = [img1, img2, img3, img4, img9,img10,img11,img12,img13,img14];
    const Mobileimages = [sv388, r88]
    const logoIcon = [sv388Logo, r88Logo, ]

    const MobileCards=[
        {
            image: sv388,
            icon: sv388Logo,
            heading: "sv388",
            mobileBtn: "Mobile",
            desktopBtn: "Desktop",
          },
        {
            image: r88,
            icon: r88Logo,
            heading: "r88",
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
            <SimpleGrid columns={{ base:2, sm: 3, md: 4, lg: 6 }} spacing="10px" p="3" >
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


export default CockR88;
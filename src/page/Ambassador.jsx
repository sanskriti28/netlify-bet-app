import React from "react";
import { useSelector } from "react-redux";
import ambassadorBg from "../assets/images/brand-ambassador/ambassador.jpg";
import person from "../assets/images/brand-ambassador/ambassador-person.png";
import { FaSnapchat } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Image, Box, Text, Heading, Link,Flex, } from "@chakra-ui/react";

const Ambassador = () => {
    const { bgGray, PrimaryText, whatsappiconBg, fbiconBg,SnapiconBg, bgColor1, telegramiconBg, instaiconBg, twittericonBg } = useSelector((state) => state.theme);

    const tableContent = [
        { label: "Daily prizes", value: "INR 8,888" },
        { label: "Free Credits", value: "INR 100 – INR 1,000" },
        { label: "Rewards Points", value: "18 – 5,000" }
    ];
    const tableStyle = {
        commonStyle: {
            fontWeight: '400',
            textAlign: "left",
            width: "50%",
            padding: "15px",
            textTransform: 'uppercase',
        },
        evenRowStyle: {
            backgroundColor: "#FFFFFF",
        },

    };

    const Style = {
        common: {
            borderRadius: '100%',
            color: "#fff",
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
        },
        fb: {
            backgroundColor: fbiconBg,
        },
        insta: {
            background: instaiconBg,
            backgroundImage: 'radial-gradient(circle farthest-corner at 32%, at 106%, #ffe17d 0, #ffcd69 10%, #fa9137 28%, #eb4141 42%, transparent 82%), linear-gradient(135deg, #234bd7 12%, #c33cbe 58%)',
            backgroundImage: 'radial-gradient(circle farthest-corner at 32% 106%, #ffe17d 0, #ffcd69 10%, #fa9137 28%, #eb4141 42%, transparent 82%), linear-gradient(135deg, #234bd7 12%, #c33cbe 58%)',
        },
        whatsapp: {
            backgroundColor: whatsappiconBg,
        },
        telegram: {
            backgroundColor: telegramiconBg,
        },
        snap: {
            backgroundColor: SnapiconBg,
        },
        twitter: {
            backgroundColor: twittericonBg,
        },
    }


    return (
        <Box className="main_page">
            <Box className="spinWin_banner">
                <Image src={ambassadorBg} alt="spin and win" height={{ base: "100%", xl: "480px" }} borderRadius={{ base: "5px", xl: "0" }} objectFit="cover" />
            </Box>
            <Box>
                <Box
                    backgroundColor={{ base: bgColor1, xl: bgGray }}
                    className="page-content introduction-wrapper"
                    p={{ base: "10px", xl: "40px 60px" }}
                    mt="10px"
                    borderRadius="5px"
                    >
                    <Text className="default-title" fontSize="base" fontWeight="bold">
                        <Heading as="h6">Meet our Brand Ambassador</Heading>
                    </Text>
                    <Box className="main_content" display="flex" justifyContent="space-between" mb="25px" flexDirection={{base:"column-reverse", xl:"row"}}>
                        <Box className="desc" padding="10px" width={{ base: "100%", xl: "40%" }} height={{ base: "auto", xl: "700px" }} background={{ base: bgGray, xl: bgColor1 }}>
                            <Text mb="16px">
                                “ I am so excited to introduce BetVisa to all of you. Representing a brand is just like playing soccer, you need to trust your team. I can't wait to share the excitement with all of you! Let's kick off our soccer betting journey together!
                            </Text>
                            <Text>
                                BetVisa has been an absolute pleasure to work with. Our collaboration with BetVisa has been outstanding. Every individual I've met throughout this journey has been a fantastic experience. Analyzing the games and making predictions has been both fun and insightful, and I never anticipated it would be so rewarding. So, let's place our bets and aim for big wins. I look forward to seeing you at the next match. Keep Betting, Keep Winning! ”
                            </Text>
                        </Box>
                        <Box width={{ base: "100%", xl: "40%" }} height={{ base: "auto", xl: "700px" }}>
                            <Image src={person} maxW={{base:"350px", xl:"100%"}} margin="0 auto"/>
                        </Box>
                    </Box>
                    <Box>
                        <Text className="default-title" fontSize="base" fontWeight="bold">
                            <Heading as="h6">Our Journey</Heading>
                        </Text>
                        <Text mb="16px">
                            Welcome to the thrilling world of BetVisa, where access to casinos and sports events is no longer just a rare occasion. We're here to take you on a journey that brings the excitement of casino games, cock fight and sports betting right to your fingertips, all from the convenience of your device.
                        </Text>
                        <Text mb="16px">
                            But our journey took a fascinating turn when we welcomed the one and only Cesc Fabregas as our brand representative. As the discussions unfolded, one thing became clear – a shared commitment to responsible gambling. Cesc's dedication to ensuring that our members enjoy the world of betting responsibly was truly inspiring. And thus, it was a no-brainer for us to have him represent BetVisa.
                        </Text>
                        <Text mb="16px">
                            Cesc Fabregas, a name that resonates with excellence and a true embodiment of sportsmanship, was the perfect choice to be the face of BetVisa. His charismatic personality and undeniable charm make him an ideal ambassador for our brand. In November 2017, we witnessed a moment that will forever be etched in BetVisa's history. Cesc Fabregas signed as BetVisa’s ambassador.
                        </Text>
                        <Text mb="16px" >
                            Since that remarkable day, BetVisa has tirelessly worked to enhance your gaming experience. We've brought you exciting events, enticing promotions, and an ever-expanding collection of games, all designed to keep you at the edge of your seat and ensure that your journey with us is nothing short of extraordinary.
                        </Text>
                        <Text mb="16px">
                            So, whether you're a seasoned gambler or a novice exploring the world of sports betting, BetVisa is here to provide you with real-time, real casino gaming, cock fight and sports betting pleasure. Join us in this unforgettable journey, and let's make every bet a memorable one, with Cesc Fabregas leading the way.
                        </Text>
                    </Box>
                    <Box>
                        <Box style={{ position: 'relative', }}
                            width={{ base: "100%", xl: "550px" }}
                            height={{ base: "auto", xl: "344px" }}
                            paddingTop={{ base: "62%", xl: "0" }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/BHzVM6E-BXQ"
                                title="Betvisa proudly welcomes our Brand Ambassador Cesc Fàbregas"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0' }}
                            ></iframe>
                        </Box>
                    </Box>
                    <Box
                        backgroundColor={{ base: bgGray, xl: bgColor1 }}
                        className="page-content introduction-wrapper"
                        p={{ base: "10px", xl: "20px" }}
                        mb="10px" mt="20px"
                        borderRadius="5px"
                    >
                        <Text className="default-title" fontSize="base" fontWeight="bold">
                            Introducing BetVisa to all my fans
                        </Text>
                        <Text>
                            Just like everyone else, our valued members at BetVisa indulge in exhilarating entertainment and gaming. As your fortunate host, I’m here to ensure that every hand you play is a winning one. Join us now and experience the ultimate online casino in Vietnam, where your luck is in safe hands with me.
                        </Text>
                    </Box>
                    <Box className="social-icon" display="flex" flexDirection="row" gap='2' flexWrap='wrap' justifyContent="center" mt="20px">
                        <Flex flexDirection="column" gap="10px" justifyContent="center" alignItems="center">
                            <Heading as="h6">Follow our Brand Ambassador</Heading>
                            <Box display="flex" flexDirection="row" gap='2' flexWrap='wrap'>
                                <Link href="https://www.facebook.com/" target="_blank" style={{ ...Style.fb, ...Style.common }}
                                    width={{ base: '45px', xl: '45px' }}
                                    height={{ base: '45px', xl: '45px' }}>
                                    <FaFacebook size={28} />
                                </Link>
                                <Link href="https://twitter.com/" target="_blank" style={{ ...Style.twitter, ...Style.common }}
                                    width={{ base: '45px', xl: '45px' }}
                                    height={{ base: '45px', xl: '45px' }}>
                                    <FaTwitter size={28} />
                                </Link>
                                <Link href="https://www.instagram.com/" target="_blank" style={{ ...Style.insta, ...Style.common }}
                                    width={{ base: '45px', xl: '45px' }}
                                    height={{ base: '45px', xl: '45px' }}>
                                    <FaInstagram size={28} />
                                </Link>
                                <Link href="#" target="_blank" style={{ ...Style.snap, ...Style.common, color: PrimaryText }}
                                    width={{ base: '45px', xl: '45px' }}
                                    height={{ base: '45px', xl: '45px' }}>
                                    <FaSnapchat size={28} />
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Ambassador;

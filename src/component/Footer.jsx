import React from 'react'
import { Box, Heading, Text, UnorderedList, ListItem, Link, Flex, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import upi from '../assets/images/footer/footer-payment-upi.svg';
import imps from '../assets/images/footer/footer-payment-imps.svg';
import paytm from '../assets/images/footer/footer-payment-paytm.svg';
import astropay from '../assets/images/footer/footer-payment-astropay.svg';
import usdt from '../assets/images/footer/footer-payment-usdt.svg';
import qrCode from '../assets/images/footer/qr-code.png';
import gc from '../assets/images/footer/gc.svg';
import eighteenPlus from '../assets/images/footer/18+.svg';
import ambassador from '../assets/images/footer/ambassador.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  const {
    bgColor1,
    bgGray,
    gray50,
    PrimaryText,
  } = useSelector((state) => state.theme);
  const images = [upi, imps, paytm, astropay, usdt];
  const Style={
    common:{
      borderRadius: '100%',
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    fb:{
      backgroundColor:"#3b5998",
    },
    insta:{
      background: '#3f729b',
      backgroundImage: 'radial-gradient(circle farthest-corner at 32%, at 106%, #ffe17d 0, #ffcd69 10%, #fa9137 28%, #eb4141 42%, transparent 82%), linear-gradient(135deg, #234bd7 12%, #c33cbe 58%)',
      backgroundImage: 'radial-gradient(circle farthest-corner at 32% 106%, #ffe17d 0, #ffcd69 10%, #fa9137 28%, #eb4141 42%, transparent 82%), linear-gradient(135deg, #234bd7 12%, #c33cbe 58%)',
    },
    whatsapp:{
      backgroundColor:' #00b900',
    },
    telegram:{
      backgroundColor:' #08c',
    },
    email:{
      backgroundColor:' #425563',
    },
  }
  return (
    <Box className='footer-main' >
      <Box display={{ base: "block", xl: "none" }}>
      <img src={ambassador} alt="ambassador" style={{margin:'0 auto'}} />
      </Box>
      <Box display="flex" flexDirection={{ base: "column", xl: "column" }} p={{base: '25px 10px 90px',xl: '10px',}} bg={{ base: bgGray, xl: bgColor1 }}>
        <Box display="flex" flexDirection={{ base: "column", xl: "row" }} justifyContent="space-between" p="3" px="10px" py="50px">
          <Box className="about-wrapper" w={{ base: "100%", xl: "45%" }} mr={{ base: 0, md: "4" }} >
            <Heading as="h6">About BetVisa</Heading>
            <Text color={{ base:PrimaryText , xl: gray50 }} textAlign= 'justify' className="content"
             fontSize={{ base: 'sm', xl: 'md' }} fontWeight={{ base: 'normal', xl: 'bold' }}>
              BetVisa was established in 2017 and operated under a Curacao gaming license with more than 2 million users. One of top Asia's most trusted and leading online casinos and sports betting platforms. BetVisa offers a wide selection of slot games, live casinos, lotteries, sportsbooks, sports exchanges, and e-sports. Offers you a variety of secure and easy payment methods along with 24-hour friendly live customer support to ensure that any queries are dealt with and resolved quickly.</Text>
          </Box>
          <Box display={{ base: "none", xl: "flex" }} className="link-section section" w={{ base: "100%", xl: "45%" }} flexDirection={{ base: "column", md: "row" }} justifyContent="space-between">
            <Box className="about-link-wrapper" mb="4" w="45%">
              <Heading as="h6">About</Heading>
              <UnorderedList listStyleType="none" p={0} m={0} style={{ color: gray50 }} fontWeight="700" lineHeight="30px">
                <ListItem><Link >Reward Points</Link></ListItem>
                <ListItem><Link >VIP</Link></ListItem>
                <ListItem><Link >Blog</Link></ListItem>
                <ListItem><Link >Affiliate Program</Link></ListItem>
                <ListItem><Link >Brand Ambassador</Link></ListItem>
              </UnorderedList>
            </Box>
            <Box w="45%">
              <Heading as="h6">Info</Heading>
              <UnorderedList listStyleType="none" p={0} m={0} style={{ color: gray50 }} fontWeight="700" lineHeight="30px">
                <ListItem><Link >Terms & Conditions</Link></ListItem>
                <ListItem><Link >FAQ</Link></ListItem>
                <ListItem><Link >Privacy Policy</Link></ListItem>
                <ListItem><Link >Disconnection Policy</Link></ListItem>
                <ListItem><Link >Responsible Gambling</Link></ListItem>
                <ListItem><Link >Contact Us</Link></ListItem>
                <ListItem><Link >BetVisa Bangladesh</Link></ListItem>
                <ListItem><Link >Baji</Link></ListItem>
                <ListItem><Link >JeetBuzz</Link></ListItem>
                <ListItem><Link >JeetWin</Link></ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" p="3">
          <Box className="payment-partner-wrapper" w={{ base: "100%", xl: "45%" }}>
            <Heading as="h6" className="default-title">Payment Methods</Heading>
            <Box display="flex" flexDirection={{ base: "row",}} gap='2'>
              {images.map((img, index) => (
                <Box key={index} rounded="5px" overflow="hidden">
                  <img src={img} alt={`Logo ${index + 1}`} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="download-app-qr-wrapper" w={{ base: "100%", xl: "45%" }} display={{ base: "none", xl: "block" }}>
            <Heading as="h6" className="default-title">Download App</Heading>
            <Box className="qr-code-wrapper">
              <Box as="div" level="L" background="#fff" foreground="#000" className="app-download-qr-code">
                <img src={qrCode} style={{ width: '100px' }} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box justifyContent="space-between" p="3" display={{ base: "block", xl: "flex" }}>
          <Box alignItems="center"w={{ base: "100%", xl: "45%" }}>
            <Text as="h6" className="default-title">Follow Us</Text>
            <Box className="social-icon" display="flex" flexDirection="row" gap='2' flexWrap='wrap' >
              <Link href="https://www.facebook.com/" target="_blank" style={{...Style.fb,...Style.common}}  
              width={{ base: '50px', xl: '60px' }}
              height={{ base: '50px', xl: '60px' }}>
                <FaFacebook size={28}/>
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" style={{...Style.insta, ...Style.common}} 
              width={{ base: '50px', xl: '60px' }}
              height={{ base: '50px', xl: '60px' }}>
                <FaInstagram size={28}/>
              </Link>
              <Link href="https://wa.link/" target="_blank" style={{...Style.whatsapp, ...Style.common}} 
              width={{ base: '50px', xl: '60px' }}
              height={{ base: '50px', xl: '60px' }}>
                <FaWhatsapp size={28}/>
              </Link>
              <Link href="https://t.me/" target="_blank" rel="noopener" style={{...Style.telegram, ...Style.common}}
              width={{ base: '50px', xl: '60px' }}
              height={{ base: '50px', xl: '60px' }}>
                <RiTelegramLine size={28}/>
              </Link>
              <Link href="https://twitter.com/" target="_blank" style={{backgroundColor:PrimaryText, ...Style.common}}
               width={{ base: '50px', xl: '60px' }}
               height={{ base: '50px', xl: '60px' }}>
                <RiTwitterXFill size={28}/>
              </Link>
              <Link href="mailto:support.inr@betvisa.com" target="_blank" rel="noopener"  style={{...Style.whatsapp,...Style.common}}
               width={{ base: '50px', xl: '60px' }}
               height={{ base: '50px', xl: '60px' }}>
                <MdEmail size={28}/>
              </Link>
            </Box>
          </Box>
          <Box alignItems="center" w={{ base: "100%", xl: "45%" }}>
            <Text as="h6" className="default-title">Licenses</Text>
            <Box className="licenses-list" display="flex" flexDirection="row">
              <Box className="image-wrapper">
                <img src={gc} alt="gc" style={{ width: '60px' }} />
              </Box>
              <Box className="image-wrapper">
                <img src={eighteenPlus} alt="18+" style={{ width: '60px' }} />
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>
      <Box display={{ base: "none", xl: "block" }} className="footer-copyright-wrapper" textAlign="center" padding="20px">
        <span>Copyright 2024 | BetVisa | All Right Reserved</span>
      </Box>
    </Box>
  )
}

export default Footer
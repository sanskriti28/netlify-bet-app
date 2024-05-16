
import React, { useState } from 'react';
import ForgotPassword from '../modal/ForgotPassword';
import RegisterUser from '../modal/RegisterUser';
import { useSelector } from "react-redux";
import { Button, Stack, Checkbox, Box, Link, Text } from "@chakra-ui/react";
import { BiSolidHide } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { TbCoins } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";


const Login = ({ isLoggedIn, setIsLoggedIn}) => {
  const {
    bgGray,
    greenBtn,
    bgYellow,
    whiteText,
    PrimaryText,
    secondaryText,
  } = useSelector((state) => state.theme);
  const style = {
    width: '170px'
  }
  const inputdiv = {
    fontSize: '1rem',
    fontWeight: 700,
    borderRadius: '5px',
    height: '50px',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexWrap: 'wrap',
    minWidth: 0,
    width: '100%',
    margin: '5px',
    '::placeholder': {
      color: '#000000de',
    },
    outlineColor: '#fbdf13',
  };
  const checkboxStyle = {
    checkAndForgot: {
      display: 'flex',
      position: 'absolute',
      bottom: '-16px',
      right: '0',
      fontSize: '.8rem',
      padding: '0 5px',
      width: '100%',
      zIndex: 10,
      height: '20px',
    },
    inputStyle: {
      maxWidth: '300px',
      margin: '0 5px',
      width: '100%',
      textAlign: 'right'
    }
  }

  const handleLogin = () => {

    setIsLoggedIn(true);
  };
  const loginFont = {
    fontFamily: "Teko, sans-serif",
    fontWeight: "500",
  }
  return (
    <Box className=" flex items-center" gap={{base:"10px", xl:"0"}}>
      <form className="bg-white">
        <div className=" flex justify-center items-center" style={{ gap: '10px', }}>
          {isLoggedIn ?
            (
              <Box className=" flex justify-center relative" style={{ gap: '10px', }}>
                <Box className='indox_Icon_wr flex justify-center' width="50px" height="50px" marginY="5px"
                  display={{ base: "none", xl: "flex" }}
                >
                  <Link to="/inbox" className='justify-flex-center' _hover={{ color: secondaryText }}
                    style={{
                      ...inputdiv, backgroundColor: bgGray,
                      margin: "0", outline: "none", flexFlow: 'initial',
                      alignItems: "center"
                    }}
                    fontSize={{ base: '14px', xl: '1.5rem' }}
                  >
                    <FaRegBell size={28} />
                  </Link>
                </Box>
                <Box className='deposit_icon_wr flex justify-center' minWidth="150px" height="50px" marginY="5px"
                  display={{ base: "none", xl: "flex" }}
                >
                  <Link to="/deposit" className='justify-flex-center'
                    gap="8px" _hover={{ color: secondaryText }}
                    style={{
                      ...inputdiv, backgroundColor: bgGray, margin: "0",
                      outline: "none", flexFlow: 'initial', alignItems: "center"
                    }}
                    fontSize={{ base: '14px', xl: '1.5rem' }}
                  >
                    <IoIosStarOutline size={28} />
                    <Text as="span" style={{ ...loginFont, }}>0</Text>
                  </Link>
                </Box>
                <Box className='deposit_icon_wr flex justify-center'
                  marginY="5px"
                  minWidth={{ base: '85px', xl: '150px' }}
                  minHeight={{ base: '40px', xl: '50px' }}
                  borderRadius={{ base: "25px", xl: "5px" }}
                >
                  <Link to="/deposit" className='justify-flex-center'
                    gap="8px" _hover={{ color: secondaryText }}
                    style={{
                      ...inputdiv, backgroundColor: bgGray,
                      margin: "0", outline: "none", flexFlow: 'initial',
                      alignItems: "center"
                    }}
                    minWidth={{ base: '85px', xl: '150px' }}
                    maxHeight={{ base: '40px !important', xl: '50px !important' }}
                    borderRadius={{ base: "25px !important", xl: "5px !important" }}
                    fontSize={{ base: '14px', xl: '1.5rem' }}
                  >
                    <TbCoins size={28} />
                    <Text as="span" style={{ ...loginFont, }} >0.00</Text>
                    <Box display={{ base: 'none', xl: 'block' }}>
                      <GrUpdate />
                    </Box>
                  </Link>
                </Box>
              </Box>
            ) :
            (
              <Box className=" flex justify-center relative" style={{ gap: '10px', }}
                display={{ base: "none", xl: "flex" }}>
                <div style={{ maxWidth: '200px', textAlign: "end", }} >
                  <input onChange={(e) => { setUserName({ userName: e.target.value }) }}
                    style={{ ...inputdiv, backgroundColor: bgGray, }}
                    className="inputdiv rounded text-black-700"
                    type="text" placeholder="Username"
                  />
                </div>
                <div style={{ maxWidth: '200px', }}>
                  <div className='relative'>
                    <input onChange={(e) => { setUserPassword({ userPassword: e.target.value }) }}
                      style={{ ...inputdiv, backgroundColor: bgGray, }}
                      className="rounded inputdiv " type="password"
                      placeholder="Password"
                    />
                    <BiSolidHide className='absolute' style={{ top: 'calc(50% - 9px)', right: '5px', }} size={24} />
                  </div>
                </div>
                <div style={{ ...checkboxStyle.checkAndForgot }}>
                  <Stack spacing={5} direction='row' justifyContent='end' style={{ ...checkboxStyle.inputStyle }}>
                    <Checkbox
                      colorScheme='custom'
                      defaultChecked
                      sx={{
                        '.chakra-checkbox__control': {
                          bg: 'black',
                        },
                        '.chakra-checkbox__label': {
                          fontSize: '.8rem',
                        },
                      }}
                    >
                      Remember me
                    </Checkbox>
                  </Stack>
                  <div style={{ ...checkboxStyle.inputStyle }}>
                    <ForgotPassword />
                  </div>
                </div>
              </Box>
            )
          }

          <div>

            {isLoggedIn ?
              <Box display="flex">
                <Button bg={{ base: bgYellow, xl: greenBtn }} _hover={{ bg: { base: bgYellow, xl: greenBtn } }}
                  color={{ base: PrimaryText, xl: whiteText }}
                  fontSize={{ base: ".9rem", xl: "16px" }}
                  borderRadius={{ base: "25px", xl: "5px" }}
                  minW={{ base: "85px", xl: "140px" }}
                  height={{ base: "40px", xl: "50px" }}
                  margin={{ base: "5px 0 5px", xl: "5px" }}
                  display={{base:"none", xl:"block"}}
                  onClick={handleLogin}
                >
                  {isLoggedIn ? 'Deposit' : 'Login'}
                </Button>
                <Button backgroundColor={bgYellow} 
                 borderRadius="50%"
                 width="40px"
                 height="40px"
                display={{base:"flex", xl:"none"}}
                padding="8px"
                >
                  <FiPlus size={24}/>
                </Button>
              </Box>
              :
              <Button bg={{ base: bgYellow, xl: greenBtn }} _hover={{ bg: { base: bgYellow, xl: greenBtn } }}
                color={{ base: PrimaryText, xl: whiteText }}
                fontSize={{ base: ".9rem", xl: "16px" }}
                borderRadius={{ base: "25px", xl: "5px" }}
                minW={{ base: "85px", xl: "140px" }}
                height={{ base: "40px", xl: "50px" }}
                margin={{ base: "5px 0 5px", xl: "5px" }}
                onClick={handleLogin}
              >
                {isLoggedIn ? 'Deposit' : 'Login'}
              </Button>
            }

          </div>
        </div>
      </form>
      <RegisterUser isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Box>


  );
}

export default Login;



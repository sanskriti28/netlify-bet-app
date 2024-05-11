
import React from 'react';
import ForgotPassword from '../modal/ForgotPassword';
import RegisterUser from '../modal/RegisterUser';
import { useSelector } from "react-redux";
import { Button, Stack, Checkbox,Box } from "@chakra-ui/react";
import { BiSolidHide } from "react-icons/bi";
import MobileLoginModal from '../modal/MobileLoginModal';


const Login = () => {
  const {
    bgGray,
    greenBtn,
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
  const checkboxStyle={
    checkAndForgot:{
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
    inputStyle:{
      maxWidth: '300px',
      margin: '0 5px',
      width: '100%',
      textAlign: 'right'
    }
  }

  return (
    <div className=" flex items-start">
      <form className="bg-white">
        <div className=" flex justify-center" style={{gap:'10px',}}>
          <Box className=" flex justify-center relative" display={{base:"none"}} style={{gap:'10px',}}>
            <div style={{ maxWidth: '200px', textAlign: "end", }} >
              <input style={{ ...inputdiv, backgroundColor: bgGray, }} className="inputdiv rounded text-black-700" type="text" placeholder="Username" />
            </div>
            <div style={{ maxWidth: '200px', }}>
              <div className='relative'>
                <input style={{ ...inputdiv, backgroundColor: bgGray, }} className="rounded inputdiv " type="password" placeholder="Password" />
                <BiSolidHide className='absolute' style={{ top: 'calc(50% - 9px)', right: '5px', }} size={24} />
              </div>
            </div>
            <div style={{...checkboxStyle.checkAndForgot}}>
              <Stack spacing={5} direction='row' justifyContent='end' style={{...checkboxStyle.inputStyle}}>
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
              <div style={{...checkboxStyle.inputStyle}}>
              <ForgotPassword />
              </div>
            </div>
          </Box>
          <div> 
          <MobileLoginModal />
            {/* <Button bg={greenBtn} _hover={{ bg: greenBtn }} 
            color="white" fontSize={{base:".9rem",xl:"16px"}}
            borderRadius={{base:"25px",xl:"5px"}}
            minW={{base:"85px",xl:"140px"}} 
            height={{base:"40px",xl:"50px"}} 
            style={{margin:'5px',}}>
              Login
            </Button> */}
          </div>
        </div>
      </form>
      <RegisterUser />
    </div>


  );
}

export default Login;



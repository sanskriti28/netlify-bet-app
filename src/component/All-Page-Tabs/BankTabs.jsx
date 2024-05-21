import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import bank from "../../assets/images/deposit/bank.svg";


import {
    Box,
    HStack,
    Center,
} from '@chakra-ui/react'


function BankTab() {
    const {
        bgGray,
        starBg,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();
    const TabsStyle={
        minWidth:'100px',
        height:'100px',
        width:'auto',
        borderRadius: '10px',
    }
    return (
        <>
            <div className="home-tabs-section all-tabs">
                <Box className="px-3 m-0" overflowX="scroll"  css={{"&::-webkit-scrollbar": { display: "none", },}}>
                    <HStack spacing='15px' className="text-base font-bold">
                    <Box style={{ backgroundColor: bgGray, ...TabsStyle,width:"110px", height:"93px" }} className="active home-tab rounded text-center" >
                        <Center  h="100%">
                        <Link  className="flex items-center justify-between flex-col" 
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                        style={{height:"100%", padding:"10px 6px 6px"}}
                        >
                            <img src={bank} alt="" width="40px"/>
                        {/* <FaUser size={28} /> */}
                        {t(`Add Bank `)}
                        </Link>
                        </Center>
                    </Box>
                   
                    </HStack>
                </Box>
            </div>
        </>
    )
}


export default BankTab
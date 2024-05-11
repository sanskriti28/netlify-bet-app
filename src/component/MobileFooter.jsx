import '../assets/css/style.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { IoGiftOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
function MobileFooter() {

    const {
        bgGray,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();

    const Style ={
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center", 
        flexDirection:"column",
    }
    

    return (
        <>
            <Box style={{background:bgGray, borderTop:'1px solid #fff', position:'fixed', bottom:'0', width:'100%'}}
                as="footer"
                className="footer-tab-wrapper py-2"
                display={{ base: "block", xl: "none" }}
            >
                <UnorderedList listStyleType="none" p={0} m={0} display='flex' justifyContent="space-around">
                    <ListItem>
                        <Link style={Style}>
                            <AiFillHome size={28}/>
                            <Text>Home</Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link style={Style}>
                            <IoGiftOutline size={28}/>
                            <Text>Promotion</Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link style={Style}>
                            <IoWalletOutline size={28} />
                            <Text>Deposit</Text>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link style={Style}>
                            <BiSupport size={28}/>
                            <Text>Support</Text>
                        </Link >
                    </ListItem>
                    <ListItem>
                        <Link style={Style}>
                            <FaRegUser size={28}/>
                            <Text>Account</Text>
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Box>
        </>
    )
}


export default MobileFooter
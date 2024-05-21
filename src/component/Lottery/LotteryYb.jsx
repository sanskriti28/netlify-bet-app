import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import img1 from "../../assets/images/lottery/1.png";
import img2 from "../../assets/images/lottery/2.png";
import img3 from "../../assets/images/lottery/3.jpeg";
import img4 from "../../assets/images/lottery/4.png";
import img5 from "../../assets/images/lottery/5.jpeg";
import img6 from "../../assets/images/lottery/6.png";
import img7 from "../../assets/images/lottery/7.jpeg";
import img8 from "../../assets/images/lottery/8.png";
import img9 from "../../assets/images/lottery/9.jpeg";
import img10 from "../../assets/images/lottery/10.png";
import img11 from "../../assets/images/lottery/11.png";
import img12 from "../../assets/images/lottery/12.jpeg";
import img13 from "../../assets/images/lottery/13.png";
import img14 from "../../assets/images/lottery/14.png";
import img15 from "../../assets/images/lottery/15.jpeg";
import img16 from "../../assets/images/lottery/16.png";

import { FcLike } from "react-icons/fc";



import { SimpleGrid, Box } from '@chakra-ui/react';



function LotteryYb() {
    const images = [img1, img2, img3,img8, img9,img10,img11,img12,img13,img14,img15,img16];
    const {
        bgGray,
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

    return (
        <>
            <SimpleGrid columns={{ base:2, sm: 3, md: 4, lg: 6 }} spacing="10px" p="3" >
                {images.map((img, index) => (
                    <Box key={index} rounded="5px" overflow="hidden" position="relative" display="flex" maxHeight='144px'>
                        <img src={img} alt={`Logo ${index + 1}`} />
                        <div style={{ ...StyleCard }} className='text-white px-2'>
                            <span>9 Wickets</span>
                            <FcLike size={21} />
                        </div>
                    </Box>
                ))}
            </SimpleGrid>
        </>
    )
}


export default LotteryYb;
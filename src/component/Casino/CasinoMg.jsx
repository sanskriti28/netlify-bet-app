import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import img2 from '../../assets/images/casino/10001.png'
import img1 from '../../assets/images/casino/10001.png'
import img3 from '../../assets/images/casino/10005.jpeg'
import img4 from '../../assets/images/casino/10006.png'
import img5 from '../../assets/images/casino/10007.png'
import img6 from '../../assets/images/casino/10008.png'
import img7 from '../../assets/images/casino/10009.jpeg'
import img8 from '../../assets/images/casino/10010.jpeg'    
import img9 from '../../assets/images/casino/10011.png'
import { FcLike } from "react-icons/fc";
import { SimpleGrid, Box } from '@chakra-ui/react';



function CasinoMg() {
    const images = [img1,img4, img5, img7, img8, img9];
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
export default CasinoMg
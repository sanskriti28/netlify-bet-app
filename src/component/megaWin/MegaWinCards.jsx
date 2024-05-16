import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import img2 from '../../assets/images/top-games/10001.png'
import img1 from '../../assets/images/top-games/10001.png'
import img3 from '../../assets/images/top-games/10005.jpeg'
import img4 from '../../assets/images/top-games/10006.png'
import img5 from '../../assets/images/top-games/10007.png'
import img6 from '../../assets/images/top-games/10008.png'
import img7 from '../../assets/images/top-games/10009.jpeg'
import img8 from '../../assets/images/top-games/10010.jpeg'
import img9 from '../../assets/images/top-games/10011.png'
import img10 from '../../assets/images/top-games/10012.jpeg'
import img11 from '../../assets/images/top-games/10013.jpeg'
import img12 from '../../assets/images/top-games/10013.jpeg'
import img13 from '../../assets/images/top-games/10013.jpeg'
import img14 from '../../assets/images/top-games/10016.png'
import img15 from '../../assets/images/top-games/10017.jpeg'
import img16 from '../../assets/images/top-games/10018.png'
import img17 from '../../assets/images/top-games/10019.png'
import img18 from '../../assets/images/top-games/10020.jpeg'

import { FcLike } from "react-icons/fc";



import { SimpleGrid, Box, Button } from '@chakra-ui/react';



function MegaWinCards() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];
    const {
        bgYellow,
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
            <Box textAlign='center' pt="20px">
                <Button minW="140px" height="50px" bg={bgYellow} _hover={{ bg: bgYellow }}>
                    Show More
                </Button>
            </Box>
        </>
    )
}


export default MegaWinCards
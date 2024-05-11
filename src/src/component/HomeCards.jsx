import '../assets/css/style.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import img1 from '../assets/images/home-images/10001.png'
import img3 from '../assets/images/home-images/10005.jpeg'
import img4 from '../assets/images/home-images/10006.png'
import img5 from '../assets/images/home-images/10007.png'
import img6 from '../assets/images/home-images/10008.png'
import img7 from '../assets/images/home-images/10009.jpeg'
import img8 from '../assets/images/home-images/10010.jpeg'
import img9 from '../assets/images/home-images/10011.png'
import img10 from '../assets/images/home-images/10012.jpeg'
import img11 from '../assets/images/home-images/10013.jpeg'
import img14 from '../assets/images/home-images/10016.png'
import img15 from '../assets/images/home-images/10017.jpeg'
import img16 from '../assets/images/home-images/10018.png'
import img17 from '../assets/images/home-images/10019.png'
import img18 from '../assets/images/home-images/10020.jpeg'
import img19 from '../assets/images/home-images/10021.png'


import { SimpleGrid, Box } from '@chakra-ui/react';



function HomeCards() {
    const {
        bgGray,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();

    return (
        <>
            <SimpleGrid  minChildWidth='120px' className='p-3' spacing='10px'>
                <Box style={{paddingBottom:'5px'}} ><img src={img1} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img6} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img3} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img4} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img5} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img6} alt="Logo" /></Box>
            </SimpleGrid>
            <SimpleGrid   minChildWidth='120px'  className='p-3'   spacing='10px'>
                <Box style={{paddingBottom:'5px'}}><img src={img7} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img8} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img9} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img10} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img11} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img4} alt="Logo" /></Box>
            </SimpleGrid>
            <SimpleGrid style={{paddingBottom:'5px'}}  className='p-3' minChildWidth='120px' spacing='5px'>
                <Box style={{paddingBottom:'5px'}} ><img src={img9} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img14} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img15} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img16} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img17} alt="Logo" /></Box>
                <Box style={{paddingBottom:'5px'}} ><img src={img18} alt="Logo" /></Box>
            </SimpleGrid>
        </>
    )
}


export default HomeCards
import React from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    useDisclosure,
    Input,
} from "@chakra-ui/react";
import img1 from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { FaUserAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import { BsFillPlusCircleFill } from "react-icons/bs";
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { IoCalendarClearOutline } from "react-icons/io5";


function DobModel() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const style = {
        width: '170px',
        paddingTop: '10px'
    };


    const {
        bgYellow,
        greenBtn,
        PrimaryText,
        whiteText,
        bgGray,
        redBtn
    } = useSelector((state) => state.theme);

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
        <>
            <BsFillPlusCircleFill onClick={onOpen} size={22} fill="#33df72" cursor="pointer" />
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent maxWidth="400px">
                    <div className='flex justify-center items-center'> <img style={style} src={img1} alt="Logo" /></div>
                    <ModalHeader fontSize="sm" className=' text-base flex justify-center items-center' >Add Date of Birth</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl className='dob_field'>
                            {/* <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                placeholderText='Date of Birth'
                            /> */}
                            <Input placeholder='Date of Birth' size='24px' type='datetime-local' />
                            {/* <IoCalendarClearOutline size={24} className='absolute' style={{top:"12px", right:"10px"}}/> */}
                        </FormControl>
                    </ModalBody>

                    <ModalFooter justifyContent="space-between">
                        <Button bg={{ base: greenBtn }} _hover={{ bg: { base: greenBtn } }}
                            color={{ base: PrimaryText, xl: whiteText }}
                            fontSize={{ base: ".9rem", xl: "16px" }}
                            borderRadius={{ base: "25px", xl: "5px" }}
                            minW={{ base: "85px", xl: "140px" }}
                            height={{ base: "40px", xl: "50px" }}
                            margin={{ base: "5px 0 5px", xl: "5px" }}
                            flex="1"
                            textShadow= "0 2px 3px rgba(0, 0, 0, .3)"
                        >
                           Submit
                        </Button>
                        <Button bg={{ base: redBtn }} _hover={{ bg: { base: redBtn } }}
                            color={{ base: PrimaryText, xl: whiteText }}
                            fontSize={{ base: ".9rem", xl: "16px" }}
                            borderRadius={{ base: "25px", xl: "5px" }}
                            minW={{ base: "85px", xl: "140px" }}
                            height={{ base: "40px", xl: "50px" }}
                            margin={{ base: "5px 0 5px", xl: "5px" }}
                            flex="1"
                            textShadow= "0 2px 3px rgba(0, 0, 0, .3)"
                            onClose={onClose}
                        >
                           Cancle
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default DobModel;


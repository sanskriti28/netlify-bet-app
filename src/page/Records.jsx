import React, { useState } from 'react';
import { Flex, Box, Divider, Text, Select, Button, HStack, VStack, } from '@chakra-ui/react';
import { useSelector } from "react-redux";
import InfoAndPayment from "./InfoAndPayment";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

const Records = () => {
    const {
        bgColor1,
        bgGray,
        greenBtn,
        PrimaryText,
        whiteText
    } = useSelector((state) => state.theme);

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleToggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const handleSelectDateRange = (ranges) => {
        setSelectedDateRange([ranges.selection]);
    };

    return (
        <Box style={{ backgroundColor: bgColor1 }} className="main_page">
            <Box>
                <Flex>
                    <InfoAndPayment />
                    <Box maxW="100%" ml={4} mt={4}>
                        <div style={{ backgroundColor: bgGray, paddingTop: '10%' }} >
                            <Flex justifyContent="center" >
                                <VStack spacing="24px" >
                                    <HStack spacing="24px" >
                                        <Select placeholder="Transaction Type" w="170px">
                                            <option value="expense">Payment</option>
                                            <option value="income">Promotion</option>
                                            <option value="income">Cashback</option>
                                            <option value="income">Spin & Win</option>
                                            <option value="income">Referral Bonus</option>
                                        </Select>
                                        <Select placeholder="Record Type" w="170px">
                                            <option value="debit">Debit</option>
                                            <option value="credit">Withdraw</option>
                                        </Select>
                                        <Button bg={greenBtn} color={whiteText} onClick={handleToggleCalendar}>
                                            {isCalendarOpen ? 'Close Calendar' : 'Open Calendar'}
                                        </Button>
                                    </HStack>
                                    {isCalendarOpen && (
                                        <DateRangePicker
                                            ranges={selectedDateRange}
                                            onChange={handleSelectDateRange}
                                        />
                                    )}
                                    <Divider w="100%" />
                                    <Text fontSize="xl">Sorry, No Records found!</Text>
                                </VStack>
                            </Flex>
                        </div>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default Records;

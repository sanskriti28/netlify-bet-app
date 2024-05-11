import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SimpleGrid, Box, Heading, Text, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Image, Table, Thead, Tbody, Tr, Th, Td, List, ListItem } from '@chakra-ui/react';
import img1 from "../../assets/images/promotion/10001.jpeg";
import img2 from "../../assets/images/promotion/10002.jpeg";
import img3 from "../../assets/images/promotion/10003.jpeg";
import img4 from "../../assets/images/promotion/10004.jpeg";
import logo1 from "../../assets/images/promotion/1.png";
import logo2 from "../../assets/images/promotion/2.png";
import logo3 from "../../assets/images/promotion/3.png";
import { FcLike } from "react-icons/fc"

function PromotionCards() {
    const images = [img1, img2, img3, img4];
    const { bgGray, PrimaryText, whiteText, secondaryText } = useSelector((state) => state.theme);
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPromotion, setSelectedPromotion] = useState(null);

    // Extra content for each promotion
    const extraContent = [
        {
            image: img1,
            heading: "1500 Mother’s Day Free Bonus",
            paragraph: "Surprise your Mom on this Mother's Day with Betvisa's special gift of ₹1,500! Claim yours now and make her day unforgettable. Hurry, this offer won't last long!",
            tableHeading: "Promotion Details",
            tableRows: [
                { label: "Bonus", value: "₹1,000" },
                { label: "Max Withdrawal", value: "₹5,000" },
                { label: "Game Type", value: "Slots & Fishing" },
                { label: "Eligible Platform", value: "JDB, PS & CQ9" },
                { label: "Bonus Validity", value: "30 days" },
            ],
            condition: {
                para: "A Daily Deposit amount at least ₹1,000 and Daily Turnover at least 10,000",
                time: "Calculate Period: From 00:00 08/05/2024 to 23:59 11/05/2024 (GMT+7)",
            },
            EligibleHeading: "Eligible Platform:",
            orderListHeading: "Terms & Conditions:",
            orderListPoints: [
                "During the Promotion Day of 8th to 11th  May the Daily deposits were At least 1,000 and the daily turnover at least 10,000.(GMT+7)",
                "Contact Customer Support to apply the Bonus from 01:00am on 12 th May (GMT+7).",
                "If do not contact Customer Support before 23:59pm on 12th May (GMT+7), it will be considered as giving up the reward (the reward will be forfeited).",
                "This promotion cannot be used in conjunction with any other promotion offer.",
                "Only one account per player is allowed. Players opening multiple or fraudulent account will have their accounts locked and deposits forfeited.",
                "Any bet places on two opposite sides, draw results, refunded, voided or cancelled game are all excluded in the wagering calculation.",
                "BetVisa reserves the right to modify, alter, discontinue, cancel, refuse or void this promotion at its sole discretion.",
                "BetVisa’s Terms & Condition applies."
            ]
        },
        
        {
            image: img1,
            heading: "1500 Mother’s Day Free Bonus",
            paragraph: "Surprise your Mom on this Mother's Day with Betvisa's special gift of ₹1,500! Claim yours now and make her day unforgettable. Hurry, this offer won't last long!",
            tableHeading: "Promotion Details",
            tableRows: [
                { label: "Bonus", value: "₹1,000" },
                { label: "Max Withdrawal", value: "₹5,000" },
                { label: "Game Type", value: "Slots & Fishing" },
                { label: "Eligible Platform", value: "JDB, PS & CQ9" },
                { label: "Bonus Validity", value: "30 days" },
            ],
            condition: {
                para: "A Daily Deposit amount at least ₹1,000 and Daily Turnover at least 10,000",
                time: "Calculate Period: From 00:00 08/05/2024 to 23:59 11/05/2024 (GMT+7)",
            },
            EligibleHeading: "Eligible Platform:",
            orderListHeading: "Terms & Conditions:",
            orderListPoints: [
                "During the Promotion Day of 8th to 11th  May the Daily deposits were At least 1,000 and the daily turnover at least 10,000.(GMT+7)",
                "Contact Customer Support to apply the Bonus from 01:00am on 12 th May (GMT+7).",
                "If do not contact Customer Support before 23:59pm on 12th May (GMT+7), it will be considered as giving up the reward (the reward will be forfeited).",
                "This promotion cannot be used in conjunction with any other promotion offer.",
                "Only one account per player is allowed. Players opening multiple or fraudulent account will have their accounts locked and deposits forfeited.",
                "Any bet places on two opposite sides, draw results, refunded, voided or cancelled game are all excluded in the wagering calculation.",
                "BetVisa reserves the right to modify, alter, discontinue, cancel, refuse or void this promotion at its sole discretion.",
                "BetVisa’s Terms & Condition applies."
            ]
        },
        {
            image: img1,
            heading: "1500 Mother’s Day Free Bonus",
            paragraph: "Surprise your Mom on this Mother's Day with Betvisa's special gift of ₹1,500! Claim yours now and make her day unforgettable. Hurry, this offer won't last long!",
            tableHeading: "Promotion Details",
            tableRows: [
                { label: "Bonus", value: "₹1,000" },
                { label: "Max Withdrawal", value: "₹5,000" },
                { label: "Game Type", value: "Slots & Fishing" },
                { label: "Eligible Platform", value: "JDB, PS & CQ9" },
                { label: "Bonus Validity", value: "30 days" },
            ],
            condition: {
                para: "A Daily Deposit amount at least ₹1,000 and Daily Turnover at least 10,000",
                time: "Calculate Period: From 00:00 08/05/2024 to 23:59 11/05/2024 (GMT+7)",
            },
            EligibleHeading: "Eligible Platform:",
            orderListHeading: "Terms & Conditions:",
            orderListPoints: [
                "During the Promotion Day of 8th to 11th  May the Daily deposits were At least 1,000 and the daily turnover at least 10,000.(GMT+7)",
                "Contact Customer Support to apply the Bonus from 01:00am on 12 th May (GMT+7).",
                "If do not contact Customer Support before 23:59pm on 12th May (GMT+7), it will be considered as giving up the reward (the reward will be forfeited).",
                "This promotion cannot be used in conjunction with any other promotion offer.",
                "Only one account per player is allowed. Players opening multiple or fraudulent account will have their accounts locked and deposits forfeited.",
                "Any bet places on two opposite sides, draw results, refunded, voided or cancelled game are all excluded in the wagering calculation.",
                "BetVisa reserves the right to modify, alter, discontinue, cancel, refuse or void this promotion at its sole discretion.",
                "BetVisa’s Terms & Condition applies."
            ]
        },
        {
            image: img1,
            heading: "1500 Mother’s Day Free Bonus",
            paragraph: "Surprise your Mom on this Mother's Day with Betvisa's special gift of ₹1,500! Claim yours now and make her day unforgettable. Hurry, this offer won't last long!",
            tableHeading: "Promotion Details",
            tableRows: [
                { label: "Bonus", value: "₹1,000" },
                { label: "Max Withdrawal", value: "₹5,000" },
                { label: "Game Type", value: "Slots & Fishing" },
                { label: "Eligible Platform", value: "JDB, PS & CQ9" },
                { label: "Bonus Validity", value: "30 days" },
            ],
            condition: {
                para: "A Daily Deposit amount at least ₹1,000 and Daily Turnover at least 10,000",
                time: "Calculate Period: From 00:00 08/05/2024 to 23:59 11/05/2024 (GMT+7)",
            },
            EligibleHeading: "Eligible Platform:",
            orderListHeading: "Terms & Conditions:",
            orderListPoints: [
                "During the Promotion Day of 8th to 11th  May the Daily deposits were At least 1,000 and the daily turnover at least 10,000.(GMT+7)",
                "Contact Customer Support to apply the Bonus from 01:00am on 12 th May (GMT+7).",
                "If do not contact Customer Support before 23:59pm on 12th May (GMT+7), it will be considered as giving up the reward (the reward will be forfeited).",
                "This promotion cannot be used in conjunction with any other promotion offer.",
                "Only one account per player is allowed. Players opening multiple or fraudulent account will have their accounts locked and deposits forfeited.",
                "Any bet places on two opposite sides, draw results, refunded, voided or cancelled game are all excluded in the wagering calculation.",
                "BetVisa reserves the right to modify, alter, discontinue, cancel, refuse or void this promotion at its sole discretion.",
                "BetVisa’s Terms & Condition applies."
            ]
        },
    ];
    const paragraphStyle = {
        fontSize: '13px',
        lineHeight: '22px',
        fontFamily: 'Verdana, sans-serif'
    };
    const tableStyle = {
        evenRowStyle: {
            backgroundColor: "#f2f2f2",
        },
    }

    const openModal = (promotion) => {
        setSelectedPromotion(promotion);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPromotion(null);
        setIsOpen(false);
    };

    return (
        <>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing="10px" p="3" >
                {images.map((img, index) => (
                    <Box key={index} rounded="5px" overflow="hidden" onClick={() => openModal(extraContent[index])}>
                        <img src={img} alt={`Logo ${index + 1}`} style={{ maxHeight: "187px", width: "100%" }} />
                        <div className='px-2' style={{ height: "65px", overflow: 'hiden', padding: '10px', }}>
                            <Heading as="h6">IPL 2024 Turnover Bumper Bonanza</Heading>
                            <Text>Join now for your chance to win big during the IPL season with Betvisa! The more you bet, the bigger your rewards. Don't miss out on this exciting opportunity to boost your winnings!</Text>
                        </div>
                    </Box>
                ))}
            </SimpleGrid>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent maxW={{ base: "100%", xl: "800px" }} maxH={{ base: "100vh", xl: "90%" }} height="100%"  overflow="hidden" position="relative">
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody overflowY="auto" height={{ base: "100%", xl: "calc(100% - 115px)" }}
                        css={{
                            '&::-webkit-scrollbar': { width: '10px', borderRadius: '8px' },
                            '&::-webkit-scrollbar-track': { backgroundColor: '#e3e5e6' },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#fbdf13',
                                borderRadius: '8px',
                                height: '20px !important'
                            }
                        }}
                        p="30px 0 0 0"
                    >
                       <Box  padding="0 30px 150px">
                       <Image borderRadius="5px" src={selectedPromotion?.image} alt="Promotion Image" />
                        <Heading as="h6" mt={4}>{selectedPromotion?.heading}</Heading>
                        <Text>
                            <span style={paragraphStyle}>{selectedPromotion?.paragraph}</span>
                        </Text>
                        <Heading as="h6" mt={5}>{selectedPromotion?.tableHeading}</Heading>
                        <Table variant="striped" mt={2}>
                            {/* <Thead>
                                <Tr>
                                    <Th><Heading  as="h6">{selectedPromotion?.tableHeading}</Heading></Th>
                                </Tr>
                            </Thead> */}
                            <Tbody>
                                {selectedPromotion?.tableRows.map((row, index) => (
                                    <Tr key={index} style={index % 2 === 0 ? tableStyle.evenRowStyle : null}>
                                        <Td style={{ color: PrimaryText }} fontSize=".9rem" fontWeight="700">{row.label}</Td>
                                        <Td style={{ color: PrimaryText }} fontSize=".9rem" fontWeight="700">{row.value}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        <Box mt={8}>
                            {selectedPromotion && selectedPromotion.condition && (
                                <>
                                    <span style={{ display: "inline-block", fontSize: ".9rem" }}>{selectedPromotion.condition.para}</span>
                                    <span style={{ fontWeight: "700", display: "inline-block", fontSize: ".9rem" }}>{selectedPromotion.condition.time}</span>
                                </>
                            )}
                        </Box>
                        <Heading as="h6" mt={4}>{selectedPromotion?.EligibleHeading}</Heading>
                        <Box className='flex'>
                            <Image src={logo1} alt="" width="52px" padding="10px" />
                            <Image src={logo2} alt="" width="52px" padding="10px" />
                            <Image src={logo3} alt="" width="52px" padding="10px" />
                        </Box>
                        <Heading as="h6" mt={8}>{selectedPromotion?.orderListHeading}</Heading>
                        <List styleType="decimal">
                            {selectedPromotion?.orderListPoints.map((point, index) => (
                                <ListItem style={paragraphStyle} mb="8px" key={index}>{point}</ListItem>
                            ))}
                        </List>
                       </Box>
                        <Box  display={{ base: "none", xl: "block" }}  maxW="800px" maxH="90%" overflow="hidden" position="absolute" left="0" bottom="0" width="100%">
                            <Flex align="center" justify="center" minHeight="60px" backgroundColor="#000000">
                                <Text as="div" style={{color:whiteText}} className="promotion-modal-support-footer">
                                    Need assistance? Please contact our{' '}
                                    <Text as="span" style={{color:secondaryText}}>
                                        Customer care
                                    </Text>
                                </Text>
                            </Flex>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default PromotionCards;

import React from "react";
import { useSelector } from "react-redux";
import spinWin from "../assets/images/spin-and-win/spin-win.jpg";
import { Image, Box, Text, Table, Tbody, Tr, Th, Td, Button, UnorderedList, ListItem, Flex,OrderedList } from "@chakra-ui/react";

const SpinAndWin = () => {
  const { bgGray, PrimaryText, bgYellow, whiteText, bgColor1, bgGray100 } = useSelector((state) => state.theme);

  const tableContent = [
    { label: "Daily prizes", value: "INR 8,888" },
    { label: "Free Credits", value: "INR 100 – INR 1,000" },
    { label: "Rewards Points", value: "18 – 5,000" }
  ];
  const tableStyle = {
    commonStyle: {
      fontWeight: '400',
      textAlign: "left",
      width: "50%",
      padding: "15px",
      textTransform: 'uppercase',
    },
    evenRowStyle: {
      backgroundColor: "#FFFFFF",
    },

  };
  
  


  return (
    <Box className="main_page">
      <Box className="spinWin_banner">
        <Image src={spinWin} alt="spin and win" height={{base:"100%", xl:"480px"}} borderRadius={{base:"5px", xl:"0"}} objectFit="cover"/>
      </Box>
      <Box>
        <Box
          backgroundColor={bgGray}
          className="page-content introduction-wrapper"
          p={{ base: "10px", xl: "40px 60px" }}
          mt="10px"
          borderRadius="5px"
        >
          <Text className="default-title" fontSize="base" fontWeight="bold">
            Introduction
          </Text>
          <Text>
            BetVisa rewards players with free spins for achieving a simple goal or
            just playing daily games. Free spins can be used to win real cash, gift
            vouchers, and many other rewards.
          </Text>
        </Box>
        <Box
          className="page-content prize-table"
          backgroundColor={bgGray}
          p={{ base: "10px", xl: "40px 60px" }}
          mt="10px"
          borderRadius="5px"
        >
          <Text className="default-title" fontSize="base" fontWeight="bold">
            Prizes
          </Text>
          <Table className="default-table">
            <Tbody className="without-head">
              {tableContent.map((item, index) => (
                <Tr key={index} style={index % 2 === 0 ? tableStyle.evenRowStyle : null}>
                  <Th style={{ ...tableStyle.commonStyle, color: PrimaryText }} fontSize={{ base: "14px", xl: "16px" }}>{item.label}</Th>
                  <Td style={{ ...tableStyle.commonStyle, color: PrimaryText }}>{item.value}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Box className="login-link-wrapper text-center" style={{ backgroundColor: bgColor1, }} p='15px' mt='10px'>
            <Box className="description">
              <Text>Free Spins</Text>
              <Text>Win 8,888 Credits and more</Text>
            </Box>
            <Button type="button" style={{ backgroundColor: bgYellow, color: whiteText }} textTransform="uppercase"
              width={{ base: "100%", xl: "250px" }}
              height="50px" borderRadius={{ base: "25px", xl: "5px" }}
              textShadow="0 2px 3px rgba(0, 0, 0, .3)"
            >
              Join Now
            </Button>
          </Box>
        </Box>
        <Box className="" style={{ backgroundColor: bgGray, }} p={{ base: "10px", xl: "40px 60px" }} mt='10px'>
          <Box className="page-content free-spin-wrapper">
            <Text className="default-title" fontSize="lg" fontWeight="bold">
              Free Spins
            </Text>
            <UnorderedList m="0" className="free-spin-box" listStyleType="none">
              <ListItem style={{ backgroundColor: bgColor1, }} p="10px" mb="10px">
                <Flex align="center">
                  <Text marginRight="10px" w="50px" height="50px" style={{ backgroundColor: bgGray100, color: whiteText }}
                    className="flex items-center rounded-full justify-center"
                  >1</Text>
                  <Box>
                    <Text style={{ lineHeight: "22px" }}>Completed 10,000 Turnover Per Day</Text>
                    <Text style={{ lineHeight: "22px" }}>5 Tickets</Text>
                  </Box>
                </Flex>
              </ListItem>
              <ListItem style={{ backgroundColor: bgColor1, }} p="10px" mb="10px">
                <Flex align="center">
                  <Text marginRight="10px" w="50px" height="50px" style={{ backgroundColor: bgGray100, color: whiteText }}
                    className="flex items-center rounded-full justify-center"
                  >2</Text>
                  <Box>
                    <Text style={{ lineHeight: "22px" }}>Completed 10,000 Turnover Per Day</Text>
                    <Text style={{ lineHeight: "22px" }}>5 Tickets</Text>
                  </Box>
                </Flex>
              </ListItem>
              <ListItem style={{ backgroundColor: bgColor1, }} p="10px" mb="10px">
                <Flex align="center">
                  <Text marginRight="10px" w="50px" height="50px" style={{ backgroundColor: bgGray100, color: whiteText }}
                    className="flex items-center rounded-full justify-center"
                  >3</Text>
                  <Box>
                    <Text style={{ lineHeight: "22px" }}>Completed 10,000 Turnover Per Day</Text>
                    <Text style={{ lineHeight: "22px" }}>5 Tickets</Text>
                  </Box>
                </Flex>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box className="" style={{ backgroundColor: bgGray, }} p={{ base: "10px", xl: "40px 60px" }} mt='10px'>
          <Box className="page-content free-spin-wrapper">
            <Text className="default-title" fontSize="lg" fontWeight="bold">
            Terms and Conditions
            </Text>
            <OrderedList className="termsCondition">
              <ListItem>
                <Flex align="center">
                    <Text>
                    Free spin tickets must be claimed from Spin and Win. Ticket claim issues should be reported by 23:59 pm (GMT+7) to Customer Support.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    Tickets must be claimed within 24 hours of issuance or they will expire.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    Promotion dates are from 00:00 am to 23:59 pm (GMT+7).
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    Players who meet the requirements must visit the Spin and Win page to redeem tickets.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    Players can only have one account. Multiple or fraudulent accounts will be locked, and deposits forfeited.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    BetVisa reserves the right to modify, alter, discontinue, cancel, refuse, or void Spin and Win at any time.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    BetVisa's Terms and Conditions supersede all Spin and Win Terms and Conditions.
                    </Text>
                </Flex>
              </ListItem>
            </OrderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SpinAndWin;

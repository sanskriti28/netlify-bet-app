import React from "react";
import { useSelector } from "react-redux";
import spinWin from "../assets/images/spin-and-win/spin-win.jpg";
import reward from "../assets/images/reward-points/reward.jpg";
import LoginModal from "../modal/LoginModal";
import { Image, Box, Text, Table, Tbody, Tr, Th, Td, Button, UnorderedList, ListItem, Flex,OrderedList } from "@chakra-ui/react";

const RewardPoints = () => {
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
        <Image src={reward} alt="Reward Points" height={{base:"100%", xl:"480px"}} borderRadius={{base:"5px", xl:"0"}} objectFit="cover"/>
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
          BetVisa Players can earn Reward Points on every valid bet in all of the games. These Reward Points can be exchanged for cash and other rewards with additional incentives to continue playing and enjoying the BetVisa experience.
          </Text>
        </Box>
        <Box
          className="page-content prize-table"
          backgroundColor={bgGray}
          p={{ base: "10px", xl: "40px 60px" }}
          mt="10px"
          borderRadius="5px"
        >
         
          <Box className="login-link-wrapper text-center" style={{ backgroundColor: bgColor1, }} p='15px' mt='10px'>
            <Box className="description">
              <Text>Free Spins</Text>
              <Text>Win 8,888 Credits and more</Text>
            </Box>
            {/* <Button type="button" style={{ backgroundColor: bgYellow, color: whiteText }} textTransform="uppercase"
              width={{ base: "100%", xl: "250px" }}
              height="50px" borderRadius={{ base: "25px", xl: "5px" }}
              textShadow="0 2px 3px rgba(0, 0, 0, .3)"
            >
              Join Now
            </Button> */}
             <LoginModal/>
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
                    BetVisa reserves the right to modify or amend the Terms and Conditions. A notification will be sent to BetVisa players.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    BetVisa's Terms and Conditions supersede all previous BetVisa Loyalty Terms and Conditions.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    Under 18-year-old and players with multiple user IDs at BetVisa are not eligible.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    BetVisa reserves the right to upgrade players based on BetVisa Reward Points. Players must meet tier upgrade point requirements and follow BetVisa terms and conditions.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    Real-money wagers earn Reward Points. Bonus amounts used in games will not accumulate Reward Points. Reward Points are accumulated and updated between 12:00 PM and 1:00 PM GMT +8.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    One Reward Points is earned by wagering INR 50 on Slot, Fishing and Arcade games, INR 200 on Live Casino games and INR 1,000 on Table games.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    Players can exchange Reward Points for cash based on their tier level. Reward Points are non-transferrable.
                    </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                    <Text>
                    BetVisa reserves the right to modify, alter, discontinue, cancel, refuse, or void this BetVisa Loyalty at any time.
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

export default RewardPoints;

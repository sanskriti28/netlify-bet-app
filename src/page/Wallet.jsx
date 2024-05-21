import React from "react";
import InfoAndPayment from "./InfoAndPayment";
import { Box, Flex, Text, Badge, Grid, GridItem } from "@chakra-ui/react";
import Account from "./Account";
import InfoMobileHeader from "../component/InfoMobileHeader";
// import { useSelector } from "react-redux";
import asset4 from "../assets/images/img/asset4.png";
import asset5 from "../assets/images/img/asset5.png";
import asset6 from "../assets/images/img/asset6.png";
import asset7 from "../assets/images/img/asset7.png";
import asset8 from "../assets/images/img/asset8.png";
import asset9 from "../assets/images/img/asset9.png";
import asset10 from "../assets/images/img/asset10.png";
import asset11 from "../assets/images/img/asset11.png";
import asset12 from "../assets/images/img/asset12.png";
import asset13 from "../assets/images/img/asset13.png";
import asset14 from "../assets/images/img/asset14.png";
import asset15 from "../assets/images/img/asset15.png";
import asset16 from "../assets/images/img/asset16.png";
import asset17 from "../assets/images/img/asset17.png";
import asset18 from "../assets/images/img/asset18.png";
import asset19 from "../assets/images/img/asset19.png";
import asset20 from "../assets/images/img/asset20.png";
import asset21 from "../assets/images/img/asset21.png";
import asset22 from "../assets/images/img/asset22.png";
import asset23 from "../assets/images/img/asset23.png";
import asset24 from "../assets/images/img/asset24.png";
import asset25 from "../assets/images/img/asset25.png";
import asset26 from "../assets/images/img/asset26.png";
import asset27 from "../assets/images/img/asset27.png";
import asset28 from "../assets/images/img/asset28.png";
import asset29 from "../assets/images/img/asset29.png";
import asset30 from "../assets/images/img/asset30.png";
import asset31 from "../assets/images/img/asset31.png";
import asset32 from "../assets/images/img/asset32.png";
import asset33 from "../assets/images/img/asset33.png";
import asset34 from "../assets/images/img/asset34.png";
import asset35 from "../assets/images/img/asset35.png";
import asset36 from "../assets/images/img/asset36.png";
import asset37 from "../assets/images/img/asset37.png";
import asset38 from "../assets/images/img/asset38.png";
import asset39 from "../assets/images/img/asset39.png";
import asset40 from "../assets/images/img/asset40.png";
import asset41 from "../assets/images/img/asset41.png";
import asset42 from "../assets/images/img/asset42.png";
import asset43 from "../assets/images/img/asset43.png";
import asset44 from "../assets/images/img/asset44.png";
import asset45 from "../assets/images/img/asset45.png";
import asset46 from "../assets/images/img/asset46.png";
import asset47 from "../assets/images/img/asset47.png";
import asset48 from "../assets/images/img/asset48.png";
import asset49 from "../assets/images/img/asset49.png";
import asset50 from "../assets/images/img/asset50.png";

import { useSelector } from "react-redux";
import autoprefixer from "autoprefixer";

function Wallet() {
  const { bgColor1, bgGray, progressBar, secondaryText } = useSelector(
    (state) => state.theme
  );
  return (
    <Box
      style={{ backgroundColor: bgColor1 }}
      className="main_page"
      paddingTop="155px"
      px="10px"
    >
      <Box>
        <Flex
          style={{ backgroundColor: bgColor1 }}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <InfoAndPayment />
          <InfoMobileHeader></InfoMobileHeader>
          <Box>
            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={2}
              alignItems="center"
              justifyContent="center"
              bg="rgb(242, 242, 242)"
              p={5}
              ml={2}
            >
              <GridItem colSpan={4}>
                <Text fontWeight="bold">Total Balance INR 0.00</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Box bg="white" p={4} borderRadius="sm" boxShadow="sm">
                  <Text fontWeight="bold">Main (Withdraw) Balance</Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>

              <GridItem colSpan={1}>
                <Box bg="white" p={4} borderRadius="sm" boxShadow="sm">
                  <Text fontWeight="bold" color="red.500">
                    Promotion Balance
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
            </Grid>

            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={2}
              alignItems="center"
              justifyContent="center"
              bg="rgb(242, 242, 242)"
              p={5}
              ml={2}
            >
              {/* <GridItem colSpan={4} >
                <Text fontWeight="bold">Total Balance INR 0.00</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Box bg="white" p={4} borderRadius="sm" boxShadow="sm">
                  <Text fontWeight="bold">Main (Withdraw) Balance</Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>

              <GridItem colSpan={2}>
                <Box bg="white" p={4} borderRadius="sm" boxShadow="sm">
                  <Text fontWeight="bold" color="red.500">
                    Promotion Balance
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem> */}

              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset4}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="yellow.500">
                    <img
                      src={asset5}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="blue.500">
                    <img
                      src={asset6}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="yellow.500">
                    <img
                      src={asset7}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset8}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="orange.500">
                    <img
                      src={asset9}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="pink.500">
                    <img
                      src={asset10}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="blue.500">
                    <img
                      src={asset11}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="purple.500">
                    <img
                      src={asset12}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="orange.500">
                    <img
                      src={asset13}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="green.500">
                    <img
                      src={asset14}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset15}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset16}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset17}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset18}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset19}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset20}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset21}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset22}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset23}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset24}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset25}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset26}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset27}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset28}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset29}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset30}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset31}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset32}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset33}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset34}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset35}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset36}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset37}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset38}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset39}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset40}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset41}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset42}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset43}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset44}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset45}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset46}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset47}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset48}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset49}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  bg="white"
                  p={10}
                  pl={12}
                  pr={12}
                  borderRadius="sm"
                  boxShadow="sm"
                >
                  <Text fontWeight="bold" color="gray.600">
                    <img
                      src={asset50}
                      alt="9wickets"
                      size={40}
                      style={{ width: "40px" }}
                    />
                  </Text>
                  <Text>INR 0.00</Text>
                </Box>
              </GridItem>
             
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Wallet;

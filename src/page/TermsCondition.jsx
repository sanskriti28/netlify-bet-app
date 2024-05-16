import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Grid, Link,Text} from "@chakra-ui/react";
import FaqTabs from "../component/All-Page-Tabs/FaqTabs";

const TermConditions = () => {
  return (
   <Box className="main_page">
    <FaqTabs></FaqTabs>
    <Box p="10px">
        <Text>
        Please read the following terms and conditions carefully before using any BetVisa service. They are applicable to all customers or account holders ("you") with an account on the BetVisa website with URL:
        </Text>
        <Text as="b">
            <Link>www.betvisa.com</Link>
        </Text>
    </Box>
    <Box p="10px">
        <Text>
        At any time, BetVisa may amend the terms and conditions (including any documents referred to below). If terms and conditions are amended, you will be notified in advance of the changes, which may require you to reconfirm your acceptance before the changes take effect. A prior notice may not be provided if the amendments are not substantial.
        </Text>
    </Box>
    <Box p="10px">
        <Text>
        Customers will only receive communication from BetVisa via email to their registered email address (the ""Registered Email Address""): Only by email: 
        <Link href="mailto: support.inr@betvisa.com" color="#000000" fontWeight="700">
        support.inr@betvisa.com
    </Link>
        </Text>
    </Box>
    <Grid pt="20px" pb="60px" justifyContent="space-between"
      templateColumns={{ base: "100%", md: "repeat(2, 45%)" }}
      gap={4}
    > 
       <Box className="accordian_wr">
      <Accordion allowToggle>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
              Why BetVisa?
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
              Why BetVisa?
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
              Why BetVisa?
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
              Why BetVisa?
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
              Why BetVisa?
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
       </Box>

        <Box className="accordian_wr" >
      <Accordion allowToggle>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
                Does the BetVisa app work on my device.
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="0" > 
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
                Does the BetVisa app work on my device.
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
                Does the BetVisa app work on my device.
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
                Does the BetVisa app work on my device.
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="0">
          <h6>
            <AccordionButton fontWeight="400" px="10px">
            <Box as='span'>1.</Box>
              <Box as='span' flex='1' textAlign='left'>
                Does the BetVisa app work on my device.
              </Box>
              
              <AccordionIcon />
            </AccordionButton>
          </h6>
          <AccordionPanel p="10px 30px 25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </Box>
    </Grid>
   </Box>
  );
}

export default TermConditions;

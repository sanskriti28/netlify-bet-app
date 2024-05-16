import { ListItem, Box, UnorderedList, OrderedList, Text, Heading } from "@chakra-ui/react";
import FaqTabs from "../component/All-Page-Tabs/FaqTabs";

const Responsible = () => {
    const ListStyle = {
        lineHeight: "30px",
    }
    const listItems = [
        {
            title: "Here are the precautions followed by BetVisa:",
            subTitle:"",
            listContent: [
                "We do not allow persons under 18 to participate in BetVisa or promote our products or services to minors. Our advertising, sponsorship, and marketing activities are not intended to attract persons under the age of 18.",
                "Underage persons should not have access to usernames, passwords, and banking information if you share your computer with them. Software like NetNanny and Cyber Patrol can limit gambling access. www.cybersitter.com",
                "To ensure that all our members are of legal age, we conduct regular checks to determine their age. BetVisa needs to obtain additional information to verify that the member is of legal age.",
                "There is no misrepresentation or misrepresentation of our products or services in our advertising campaigns or ads. The members are informed about the risk and the chances of winning. Even though services are provided for payment, excessive spending is not encouraged.",
                "Our voluntary self-exclusion service allows members who wish to set limits on their gambling to close their accounts or restrict their gambling activities. As soon as your account has been self-excluded, it will be closed until the selected period has passed. After the self-exclusion period ends, you will be able to resume using the website's Services.",
                "Before the self-exclusion period ends, members can request that the restrictions be removed from their account; however, the final decision rests with the Company.",
                "Member must not open a new account during the self-exclusion period and accept that the Company shall not be liable financially or otherwise if the member continues to gamble or use a new Account under a different name or address during the self-exclusion period. An account may be unblocked before the self-exclusion period ends in exceptional circumstances."
            ],
            bottomTile:[
                ""
            ]

        },
        {
            title: "Responsible Gambling Tips",
            subTitle:"The purpose of gambling is to have fun. To keep yourself safe, here are some tips:",
            listContent: [
                "Gambling isn't a way to make money.",
                "You should always gamble with money you can afford to lose.",
                "Do not chase after losses.",
                "Set a time limit and a money limit.",
                "If you are depressed or upset, don't gamble.",
                "Maintain a healthy balance between gambling and other activities.",
                "Alcohol and gambling do not mix well."
            ],
            bottomTile:[
                ""
            ]

        },
        {
            title: "Gambling Problem Warnings",
            subTitle:"An individual with a gambling problem may exhibit the following signs:",
            listContent: [
                "Gambling is constantly in your mind or in your conversation.",
                "Excessive gambling. Spending more money or time than you can afford.",
                "Having difficulty controlling, stopping, or reducing gambling.",
                "Having a sense of emptiness or loss when not gambling.",
                "Losing money and gambling more in an attempt to recover it.",
                "To gain money for gambling, one borrows money, sells things, and commits criminal acts.",
                "Increased debt, unpaid bills, or other financial problems due to gambling. Often gambling until all of your money is gone.",
                "Gambling for longer periods of time or with larger amounts of money to get the same feeling of excitement.",
                "Experiencing extreme highs from gambling wins and extreme lows from gambling losses.",
                "Using gambling to escape personal problems, relieve anxiety, depression, anger, or loneliness.",
                "It is more difficult to deal with normal, everyday activities without getting irritated or losing patience.",
                "Arguments over money and gambling with friends or family.",
                "The refusal to discuss gambling with others or the deception of others to cover up gambling.",
                "Hiding bills, past due notices, winnings, or losses from your partner or family member.",
                "Rather than attending social events with family or friends, you gamble.",
                "Indulging in gambling and neglecting family and household duties.",
                "Suicidal thoughts caused by gambling addiction.",
            ],
            bottomTile:[
                "Reach us anytime through support.inr@betvisa.com or live chat."
            ]

        },

    ];

    return (
        <Box className="main_page">
            <FaqTabs></FaqTabs>
            <Box p="10px">
                <Heading style={{ ...ListStyle, }} as="h6" pb="12px">Responsible Gambling</Heading>
                <Text style={{ ...ListStyle }}>
                    BetVisa wants our members to have fun while adhering to a responsible attitude toward gambling. Occasionally, gambling can become addictive, leading to a variety of problems for a minority of members. Taking part in gambling should be seen as a form of entertainment, not a burden on your life or others. Enjoy BetVisa responsibly and don't let anything get in the way. For further assistance, please contact member support.
                </Text>
            </Box>
            <Box p="3px 10px 3px 0">
                {listItems.map((item, index) => (
                    <OrderedList key={index} ml="0" mb="15px" pl="10px">
                        {item.title && (
                            <Heading as="h6" pb="8px" style={{ ...ListStyle }}>
                                {item.title}
                            </Heading>
                        )}
                        {item.subTitle && <Text mb="15px" style={{ ...ListStyle }}>{item.subTitle}</Text>}
                        {item.listContent.map((content, idx) => (
                            <ListItem key={idx} style={{ ...ListStyle }} display="list-item" ml="20px"
                            sx={{
                                "&::marker": {
                                    textAlign: "left", // Set marker to left align
                                },
                            }}
                            >
                                {content}
                            </ListItem>
                        ))}
                        <Text>{item.bottomTile}</Text>
                    </OrderedList>
                ))}
            </Box>

        </Box>
    );
}

export default Responsible;

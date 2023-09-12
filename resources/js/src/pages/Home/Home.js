import React from "react";
import { Center, Text, Box } from "@chakra-ui/react";
import CommonStrings from "../../locales/Common";

function Home() {
    return (
        <Center width="100%" height="350px">
            <Box>
                <Text>{CommonStrings.common.home}</Text>
            </Box>
        </Center>
    );
}

export default Home;

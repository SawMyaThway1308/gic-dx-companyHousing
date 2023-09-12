import React from "react";
import { Center, Text, Box } from "@chakra-ui/react";
import FooterStrings from "../../locales/Footer";

function Footer() {
    return (
        <Center bg="#e3f2fd">
            <Box
                bottom="0"
                left="0"
                width="100%"
                backgroundColor="#e3f2fd"
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="10px 0"
            >
                <Text>{FooterStrings.common.centerText}</Text>
            </Box>
        </Center>
    );
}

export default Footer;

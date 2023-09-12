import React from "react";
import { Center, Text, Box } from "@chakra-ui/react";

function Header() {
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
                <Text>Header</Text>
            </Box>
        </Center>
    );
}

export default Header;

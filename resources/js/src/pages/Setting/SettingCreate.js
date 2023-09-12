import React from "react";
import { Center, Text, Box } from "@chakra-ui/react";
import CommonStrings from "../../locales/Common";

function SettingCreate() {
    return (
        <Center width="100%" height="350px">
            <Box>
                <Text>{CommonStrings.common.setting}</Text>
            </Box>
        </Center>
    );
}

export default SettingCreate;

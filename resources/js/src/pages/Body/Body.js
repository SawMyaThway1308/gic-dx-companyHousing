import React from "react";
import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react";
import DormitorySupply from "../DormitorySupply/DormitorySupply";

import './Body.scss'

function Body() {
    return (
        <Box className="system-body" width="1200px" height="836px">
            <Box className="body-title">
                <Text>寮の備品｜新規</Text>
            </Box>
            <Box>
                <DormitorySupply />
            </Box>
        </Box>
    );
}

export default Body;

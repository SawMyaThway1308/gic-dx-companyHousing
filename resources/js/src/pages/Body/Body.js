import React from "react";
import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react";
import EmployeeAddressCreate from "../EmployeeAddress/EmployeeAddressCreate";
import './Body.scss'

function Body() {
    return (
        <Box className="system-body" width="1200px" height="836px">
            <Box>
                <EmployeeAddressCreate />
            </Box>
        </Box>
    );
}

export default Body;
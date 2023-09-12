import React from "react";
import { Box, HStack, Img, Text } from "@chakra-ui/react";
import userIconPng from '../../../../../public/images/user.png'
import logoPng from '../../../../../public/images/logo.png'

import './Header.scss'

function Header() {
    return (
        <Box className="common-header">
            {/* system logo & name */}
            <HStack className="system" spacing={10}>
                <Img src={logoPng} className="system-logo" />
                <Text className="system-name">
                    社宅管理
                </Text>
            </HStack>

            {/* logined user */}
            <HStack className="login" spacing={10}>
                <Img src={userIconPng} className="login-user" />
                <Text className="login-name">
                    田中さん
                </Text>
            </HStack>
        </Box>
    );
}

export default Header;

import React from "react";
import { Box, Divider, FormControl, HStack, Img, Select, Text, VStack, Input, Stack } from "@chakra-ui/react";
import dummyData from "../../../src/constants/dummyData"
import './DormitorySupply.scss'
import CommonStrings from "../../locales/Common";

function DormitorySupply() {
    const getDormitoryName = (label, name) => {
        switch(name) {
            case 2: return `${label}-2`
            case 3: return `${label}-3`
            case 4: return `${label}-4`
            case 5: return `${label}-5`
            default: return `${label}`
        }
    }

    return (
        <Box className="dormitory-supply">
                <Box className="dormitory-supply-label">
                {dummyData?.equipment?.map((item, index) => (
                    <>
                        <HStack className={`dormitory-supply-label-${index + 1}`}>
                            <Text className="dormitory-supply-label-name">
                                <span className={getDormitoryName("dormitory-supply-label-name", item.name.length)}>{item.name}</span>
                            </Text>
                            <Text className="dormitory-supply-label-require">
                                <span className="dormitory-supply-label-require-name">{CommonStrings.equipment.required}</span>
                            </Text>
                            {index < dummyData?.equipment?.length -1 &&
                            <Divider className="dormitory-supply-label-divider"/>
                        }
                        </HStack>
                    </>
                ))}
                </Box>
                <Box className="dormitory-supply-data">
                    <FormControl mt={0}>
                        <Box className="equipment-type">
                            <Select placeholder='未設定'>
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                            </Select>
                        </Box>
                        <Box className="equipment-code">
                            <Input />
                        </Box>
                        <Box className="equipment-name">
                            <Input />
                        </Box>
                        <HStack>
                            {/* <CalendarIcon /> */}
                            <Box className="equipment-purchase-option">
                                <Select placeholder='未設定'>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </Box>
                            <Text className="equipment-purchase-year">
                                <span className="name">年</span>
                            </Text>
                        </HStack>
                        <Box className="equipment-maker">
                            <Input />
                        </Box>
                        <Box className="equipment-model">
                            <Input />
                        </Box>
                        <Box className="equipment-address">
                            <Select placeholder='未設定'>
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                            </Select>
                        </Box>
                    </FormControl>
                </Box>
        </Box>
    );
}

export default DormitorySupply;

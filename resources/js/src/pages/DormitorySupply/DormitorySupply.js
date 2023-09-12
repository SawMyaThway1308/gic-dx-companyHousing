import React from "react";
import { Box, Divider, FormControl, HStack, Img, Select, Text, VStack, Input, Stack } from "@chakra-ui/react";
import dummyData from "../../../src/constants/dummyData"
import './DormitorySupply.scss'
import CommonStrings from "../../locales/Common";


function DormitorySupply() {
    const getDormitoryName = (name) => {
        switch(name) {
            case 2: return "dormitory-supply-label-name-2"
            case 3: return "dormitory-supply-label-name-3"
            case 4: return "dormitory-supply-label-name-4"
            case 5: return "dormitory-supply-label-name-5"
            default: return "dormitory-supply-label-name"
        }
    }

    return (
        // <Box className="dormitory-supply">
        //     <HStack className="dormitory-list">
        //         <Box className="dormitory-list-label">
        //             {dummyData?.equipment?.map((item, index) => (
        //                 <HStack className={`equipment-list-${index + 1}`}>
        //                     <Text className={`equipment-list-name`}>{item.name}</Text>
        //                     <Text className="equipment-require">{equipment.required}</Text>
        //                 </HStack>
        //             ))}
        //         </Box>
        //         <Box className="dormitory-list-input-form">
        //             <FormControl>
        //                 <Select placeholder='Select country'>
        //                     <option>United Arab Emirates</option>
        //                     <option>Nigeria</option>
        //                 </Select>
        //                 <Input />
        //             </FormControl>
        //         </Box>
        //     </HStack>
        //     <Divider className="divider" />
        // </Box>
        <Box className="dormitory-supply">
                <Box className="dormitory-supply-label">
                {dummyData?.equipment?.map((item, index) => (
                    <Box key={index}>
                        <HStack className={`dormitory-supply-label-${index + 1}`}>
                            <Text className="dormitory-supply-name">
                                <span className={getDormitoryName(item.name)}>{item.name}</span>
                            </Text>
                            <Text className="dormitory-supply-label-require">
                                <span>{CommonStrings.equipment.required}</span>
                            </Text>
                        </HStack>
                        {index < dummyData?.equipment?.length -1 &&
                            <Divider className="dormitory-supply-label-divider" w={1032} h={0.3}/>
                        }
                    </Box>
                ))}
                </Box>
                <Box className="dormitory-supply-data">
                    <FormControl>
                        <Select placeholder='Select country'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>
                        {/* <Input /> */}
                    </FormControl>
                </Box>
        </Box>
    );
}

export default DormitorySupply;

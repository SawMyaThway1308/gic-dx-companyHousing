import React, { useState } from "react";
import {
    Box,
    Divider,
    FormControl,
    HStack,
    Select,
    Text,
    VStack,
    Input,
    Stack,
    RadioGroup,
    Radio,
    Button
} from "@chakra-ui/react";
import { AiOutlineLeft } from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {FiEdit} from 'react-icons/fi'
import dummyData from "../../../constants/dummyData"
import CommonStrings from "../../../locales/Common";

import './DormitoryEquipmentDetails.scss'

function DormitoryEquipmentDetails() {
    const [statusValue, setStatusValue] = useState('1')
    const [type, setType] = useState('')
    const [num, setNum] = useState('');


    const getDormitoryName = (label, name) => {
        switch (name) {
            case 2: return `${label}-2`
            case 3: return `${label}-3`
            case 4: return `${label}-4`
            case 5: return `${label}-5`
            default: return `${label}`
        }
    }

    const handleOnChange = (e) => {
        setType(e.target.value)
    }

    const handleNumChange = event => {
        const limit = 4;
        setNum(event.target.value.slice(0, limit));
    };

    return (
        <Box className="equipment-detail" width="1200px" height="836px">
            {/* 編集タイトル */}
            <VStack className="detail-header">
                <Box className="detail-header-back-icon"><AiOutlineLeft /></Box>
                <Text className="detail-header-back">{CommonStrings.equipment.back}</Text>
                <Text className="detail-header-title">{CommonStrings.equipment.detailTitle}</Text>
            </VStack>
            <HStack className="detail-action">
                <Box className="detail-action-delete-icon"><RiDeleteBin5Line /></Box>
                <Box className="detail-action-edit-icon"><FiEdit /></Box>
                <Text className="detail-action-delete-title">{CommonStrings.equipment.delete}</Text>
                <Text className="detail-action-edit-title">{CommonStrings.equipment.edit}</Text>
            </HStack>
            {/* データ編集 */}
            <Box className="dormitory-supply">
                <Box className="dormitory-supply-label">
                    {dummyData.equipment.equipment.map((item, index) => (
                        <>
                            <HStack key={index} className={`dormitory-supply-label-${index + 1}`}>
                                <Text className="dormitory-supply-label-name">
                                    <span className={getDormitoryName("dormitory-supply-label-name", item.name.length)}>{item.name}</span>
                                </Text>
                                <Text className="dormitory-supply-label-require">
                                    <span className="dormitory-supply-label-require-name">{CommonStrings.equipment.required}</span>
                                </Text>
                                {index < dummyData.equipment.equipment.length - 1 &&
                                    <Divider className="dormitory-supply-label-divider" />
                                }
                            </HStack>
                        </>
                    ))}
                </Box>
                <Box className="dormitory-supply-data">
                    <FormControl mt={0}>
                        <Box className="equipment-type">
                            <Select onChange={handleOnChange}>
                                {dummyData.equipmentType.equipmentType.map((type) => (
                                    <option key={type.value} value={type.value}>{type.name}</option>
                                ))}
                            </Select>
                        </Box>
                        <Box className="equipment-code">
                            <Input />
                        </Box>
                        <Box className="equipment-name">
                            <Input />
                        </Box>
                        <HStack gap={0} className="equipment-purchase">
                            <Box className="equipment-purchase-value">
                                <Input
                                    value={num}
                                    onChange={handleNumChange}
                                    type="number"
                                />
                            </Box>
                            <Text className="equipment-purchase-year">
                                <span className="name">{CommonStrings.equipment.year}</span>
                            </Text>
                        </HStack>

                        <Box className="equipment-maker">
                            <Input />
                        </Box>
                        <Box className="equipment-model">
                            <Input />
                        </Box>
                        <RadioGroup onChange={setStatusValue} value={statusValue} className="equipment-status">
                            <Stack spacing={5} direction='row'>
                                <Radio
                                    value='1'
                                    _checked={{
                                        bg: '#367DA5',
                                        color: '#D9D9D9',
                                        borderColor: '#367DA5',
                                    }}
                                    _after={{
                                        content: '""',
                                        display: 'inline-block',
                                        position: 'relative',
                                        width: '50%',
                                        height: '50%',
                                        borderRadius: '50%',
                                        background: 'currentColor',
                                    }}
                                >
                                    <span className="equipment-status-enable-name">あり</span>
                                </Radio>
                                <Radio
                                    value='2'
                                    _checked={{
                                        bg: '#367DA5',
                                        color: '#D9D9D9',
                                        borderColor: '#367DA5',
                                    }}
                                    _before={{
                                        content: '""',
                                        display: 'inline-block',
                                        position: 'relative',
                                        width: '50%',
                                        height: '50%',
                                        borderRadius: '50%',
                                        background: 'currentColor',
                                    }}
                                >
                                    <span className="equipment-status-disable-name">なし</span>
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <Box className="equipment-address">
                            <Select onChange={handleOnChange}>
                                {dummyData.equipmentAddress.equipmentAddress.map((type) => (
                                    <option key={type.value} value={type.value}>{type.name}</option>
                                ))}
                            </Select>
                        </Box>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
}

export default DormitoryEquipmentDetails;

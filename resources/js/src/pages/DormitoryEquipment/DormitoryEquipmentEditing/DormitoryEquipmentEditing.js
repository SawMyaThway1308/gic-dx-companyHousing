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
import dummyData from "../../../constants/dummyData"
import CommonStrings from "../../../locales/Common";

import './DormitoryEquipmentEditing.scss'

function DormitoryEquipmentEditing() {
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
        <Box className="edition-equipment" width="1200px" height="836px">
            {/* 編集タイトル */}
            <VStack className="edit-header">
                <Text className="edit-header-status">{CommonStrings.equipment.showStatus}</Text>
                <Text className="edit-header-title">{CommonStrings.equipment.updateTitle}</Text>
            </VStack>
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
            {/* 編集データ動作 */}
            <Box className="edit-equipment-footer">
                <HStack gap={0}>
                    <Button className="equipment-cancel" width="263px" height="53px">
                        {CommonStrings.common.cancel}
                    </Button>
                    <Button className="equipment-save" width="263px" height="53px">
                        {CommonStrings.common.save}
                    </Button>
                </HStack>
            </Box>
        </Box>
    );
}

export default DormitoryEquipmentEditing;

import React, { useState } from "react";
import {
    Box,
    Divider,
    FormControl,
    HStack,
    Select,
    Text,
    Input,
    Stack,
    RadioGroup,
    Radio,
    Button
} from "@chakra-ui/react";
import dummyData from "../../../constants/dummyData"
import CommonStrings from "../../../locales/Common";
import './DormitoryEquipmentRegistration.scss'

function DormitoryEquipmentRegistration() {
    const [value, setValue] = useState('1')
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
        <Box className="equipment-register" width="1200px" height="836px">
            {/* 編集タイトル */}
            <HStack className="equipment-register-title">
                <Text className="equipment-register-title-list">{CommonStrings.equipment.menuList}</Text>
                <Text className="equipment-register-title-new">{CommonStrings.equipment.addTitle}</Text>
                <span className="equipment-register-title-scroll" />
                {/* <Divider w={212} bg="red" borderColor="red" color="red" left="215px" top="400px"/> */}

                {/* <Text>{CommonStrings.equipment.addTitle}</Text> */}
            </HStack>

            {/* データ編集 */}
            <Box className="equipment-register-form">
                <Box className="equipment-register-form-label">
                    {dummyData.equipment.equipment.map((item, index) => (
                        <>
                            <HStack key={index} className={`equipment-register-form-label-${index + 1}`}>
                                <span className="equipment-register-form-line" />
                                <Text className="equipment-register-form-label-name">
                                    <span className={getDormitoryName("equipment-register-form-label-name", item.name.length)}>{item.name}</span>
                                </Text>
                                <Text className="equipment-register-form-label-require">
                                    {CommonStrings.equipment.required}
                                </Text>
                                {index < dummyData.equipment.equipment.length - 1 &&
                                    <Divider className="equipment-register-form-label-divider"/>
                                }
                            </HStack>
                        </>
                    ))}
                </Box>
                <Box className="equipment-register-form-data">
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
                        <RadioGroup onChange={setValue} value={value} className="equipment-status">
                            <Stack spacing={5} direction='row'>
                                <Radio
                                    value='1'
                                    _checked={{
                                        bg: '#367DA5',
                                        color: '#FFF',
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
                                    size='lg'
                                    className="equipment-status-enable-value"
                                >
                                    <span className="equipment-status-enable-name">あり</span>
                                </Radio>
                                <Radio
                                    value='2'
                                    _checked={{
                                        bg: '#367DA5',
                                        color: '#FFF',
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
                                    size='lg'
                                    className="equipment-status-disable-value"
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
            <Box className="register-footer">
                <HStack gap={0}>
                    <Button className="equipment-cancel" width="258px" height="50px">
                        {CommonStrings.common.cancel}
                    </Button>
                    <Button className="equipment-save" width="258px" height="50px">
                        {CommonStrings.common.save}
                    </Button>
                </HStack>
            </Box>
        </Box>
    );
}

export default DormitoryEquipmentRegistration;

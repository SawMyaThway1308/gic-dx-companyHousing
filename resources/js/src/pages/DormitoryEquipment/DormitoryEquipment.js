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
    Button,
    TableContainer,
    Table,
    Thead,
    Tr,
    Tbody,
    Th,
    Td,
    Tfoot,
    Checkbox,
    Img
} from "@chakra-ui/react";
import CommonStrings from "../../locales/Common";
import attachPng from '../../../../../public/images/attachment.png'
import downloadPng from '../../../../../public/images/download.png'
import searchPng from '../../../../../public/images/search.png'
import './DormitoryEquipment.scss'

function DormitoryEquipment() {
    return (
        <Box className="equipment-list" width="1200px" height="836px">
            {/* 編集タイトル */}
            <HStack className="equipment-list-title">
                <Text className="equipment-list-title-list">{CommonStrings.equipment.menuList}</Text>
                <Text className="equipment-list-title-new">{CommonStrings.equipment.addTitle}</Text>
                <span className="equipment-list-title-scroll" />
            </HStack>
            {/* 備品一覧 */}
            <Box className="equipment-list-data">
            <Stack direction="row" className="equipment-list-data-action">
                <Button className="csv-input">
                    <Img src={attachPng} className="csv-input-attachment" />
                    <Text className="csv-input-name">CSV入力</Text>
                </Button>
                <Button className="csv-output">
                    <Img src={downloadPng} className="csv-output-download" />
                    <Text className="csv-output-name">CSV出力</Text>
                </Button>
                <Button className="delete-data">削除</Button>
                <HStack className="search-group">
                    <Input className="search-group-data"/>
                    <Button className="search-group-action">
                        <Img src={searchPng} className="search-group-action-icon" />
                        <Text className="search-group-action-name">検索</Text>
                    </Button>
                </HStack>
            </Stack>
            <TableContainer className="equipment-list-data-table">
                <Table variant="simple">
                    <Thead className="data-table-header">
                        <Tr>
                            <Th className="table-number">
                                番号
                            </Th>
                            <Th >
                                <Checkbox className="table-check" bg= '#FFF'/>
                            </Th>
                            <Th>備品ID</Th>
                            <Th>備品名</Th>
                            <Th>購入年</Th>
                            <Th>メーカー</Th>
                            <Th>モデル</Th>
                            <Th>ステータス</Th>
                            <Th>住所名</Th>
                        </Tr>
                    </Thead>
                    {/* <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                    </Tfoot> */}
                </Table>
                </TableContainer>
            </Box>
            
        </Box>
    );
}

export default DormitoryEquipment;

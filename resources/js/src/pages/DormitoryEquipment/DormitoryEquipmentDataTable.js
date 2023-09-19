import React, { useState } from "react";
import { TableContainer } from "@chakra-ui/react";
import dummyData from "../../constants/dummyData";
import './DormitoryEquipment.scss';
const equipmentData = dummyData.equipmentData.equipmentData
const itemsPerPage = 10;

const DormitoryEquipmentDataTable = ({ currentPage }) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = equipmentData.slice(startIndex, endIndex);

    return (
        <TableContainer className="equipment-list-data-table">
            <Table variant="simple" width="1032px">
                <Thead className="data-table-header">
                    <Tr>
                        <Th width="32px">
                            番号
                            <Checkbox w="16px" h="16px" className="data-table-header-check"/>
                        </Th>
                        <Th width="32px">コード</Th>
                        <Th width="180px">備品</Th>
                        <Th width="100px">購入年</Th>
                        <Th width="120px">メーカー</Th>
                        <Th width="120px">モデル</Th>
                        <Th width="100px">ステータス</Th>
                        <Th width="100px">住所コード</Th>
                    </Tr>
                </Thead>
                <Tbody className="data-table-body">
                    {currentPageData.map((item, index) => (
                        <Tr key={index}>
                            <Td width="106px" textAlign="right">
                                {index + 1}
                                <Checkbox w="16px" h="16px" className="data-table-body-check"/>
                            </Td>
                            <Td width="108px" textAlign="right">{item.column2}</Td>
                            <Td width="165px" textAlign="left">{item.column3}</Td>
                            <Td width="110px" textAlign="right">{item.column4}</Td>
                            <Td width="128px" textAlign="center">{item.column5}</Td>
                            <Td width="110px" textAlign="center">{item.column6}</Td>
                            <Td width="145px" textAlign="right">{item.column7}</Td>
                            <Td width="149px"  textAlign="right">{item.column8}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

  export default DormitoryEquipmentDataTable;
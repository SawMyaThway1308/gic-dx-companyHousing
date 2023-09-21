import React, { useEffect, useRef, useState } from "react";
import {
    TableContainer,
    Table,
    Thead,
    Tr,
    Tbody,
    Th,
    Td,
    Checkbox
} from "@chakra-ui/react";
import { itemsPerPage, equipmentData } from "./DormitoryEquipment";

// テーブルデータを表示
export const DormitoryEquipmentDataTable = ({ currentPage, filteredData, prevPage }) => {

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = filteredData.slice(startIndex, endIndex);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

    const handleCheckboxChange = (id) => {
        setSelectedCheckboxes((prevSelected) => {
            const updatedSelected = { ...prevSelected, [id]: !prevSelected[id] };
            // 少なくとも 1 つのチェックボックスが選択されていないことを確認し、「すべて選択」チェックボックスの選択を解除します。
            const isAtLeastOneUnselected = Object.values(updatedSelected).some((isChecked) => !isChecked);
            setSelectAll(!isAtLeastOneUnselected);

            return updatedSelected;
        });
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        const newSelectedCheckboxes = {};

        currentPageData.forEach((item) => {
            newSelectedCheckboxes[item.id] = !selectAll;
        });
        setSelectedCheckboxes(newSelectedCheckboxes);
    };

    useEffect(() => {
        if(prevPage === currentPage) {
            setSelectAll(false)
            setSelectedCheckboxes({})
        }
    }, [prevPage, currentPage]);

    return (
        <TableContainer className="equipment-list-data-table">
            <Table variant="simple" width="1032px">
                <Thead className="data-table-header">
                    <Tr>
                        <Th width="32px">
                            番号
                            <Checkbox
                                w="16px"
                                h="16px"
                                className="data-table-header-check"
                                isChecked={selectAll} onChange={handleSelectAll}
                            />
                        </Th>
                        <Th width="32px">コード</Th>
                        <Th width="200px">備品</Th>
                        <Th width="100px">購入年</Th>
                        <Th width="130px">メーカー</Th>
                        <Th width="130px">モデル</Th>
                        <Th width="100px">ステータス</Th>
                        <Th width="100px">住所コード</Th>
                    </Tr>
                </Thead>
                <Tbody className="data-table-body">
                    {currentPageData?.map((item, index) => (
                        <Tr key={item.id}>
                            <Td width="102px" textAlign="right">
                                {(currentPage - 1) * itemsPerPage + index + 1}
                                <Checkbox
                                    w="16px"
                                    h="16px"
                                    className="data-table-body-check"
                                    id={item.id}
                                    isChecked={selectedCheckboxes[item.id] || false}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                            </Td>
                            <Td width="107px" textAlign="right">{item.column2}</Td>
                            <Td width="199px" textAlign="left">{item.column3}</Td>
                            <Td width="105px" textAlign="right">{item.column4}</Td>
                            <Td width="131px" textAlign="center">{item.column5}</Td>
                            <Td width="128px" textAlign="center">{item.column6}</Td>
                            <Td width="150px" textAlign="right">{item.column7}</Td>
                            <Td width="149px" textAlign="right">{item.column8}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

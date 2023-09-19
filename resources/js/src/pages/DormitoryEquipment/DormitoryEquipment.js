import React, { useEffect, useRef, useState } from "react";
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
import dummyData from "../../constants/dummyData";
import attachPng from '../../../../../public/images/attachment.png'
import downloadPng from '../../../../../public/images/download.png'
import searchPng from '../../../../../public/images/search.png'
import rightPng from '../../../../../public/images/right.png'
import leftPng from '../../../../../public/images/left.png'
import './DormitoryEquipment.scss'

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
                        <Th width="200px">備品</Th>
                        <Th width="100px">購入年</Th>
                        <Th width="130px">メーカー</Th>
                        <Th width="130px">モデル</Th>
                        <Th width="100px">ステータス</Th>
                        <Th width="100px">住所コード</Th>
                    </Tr>
                </Thead>
                <Tbody className="data-table-body">
                    {currentPageData.map((item, index) => (
                        <Tr key={index}>
                            <Td width="102px" textAlign="right">
                                {index + 1}
                                <Checkbox w="16px" h="16px" className="data-table-body-check"/>
                            </Td>
                            <Td width="107px" textAlign="right">{item.column2}</Td>
                            <Td width="199px" textAlign="left">{item.column3}</Td>
                            <Td width="105px" textAlign="right">{item.column4}</Td>
                            <Td width="131px" textAlign="center">{item.column5}</Td>
                            <Td width="128px" textAlign="center">{item.column6}</Td>
                            <Td width="150px" textAlign="right">{item.column7}</Td>
                            <Td width="149px"  textAlign="right">{item.column8}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

function DormitoryEquipment() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPageCount = Math.ceil(equipmentData.length/ itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    const startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPageCount);
    for (let i = startPage; i <= endPage; i++) {
        pages.push(
        <Button
          key={i}
          className={i === currentPage ? 'paginate-page-active' : 'paginate-page-nonactive'}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  const getPaginateClassName = () => {
  }

    return (
        <Box className="equipment-list" width="1200px" height="auto">
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
                {/* <TableContainer className="equipment-list-data-table">
                    <Table variant="simple" width="1032px">
                        <Thead className="data-table-header">
                            <Tr>
                                <Th width="32px">
                                    番号
                                    <Checkbox w="16px" h="16px" className="data-table-header-check" defaultBgColor="white"/>
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
                            {equipmentData.map((item, index) => (
                                <Tr key={index}>
                                    <Td width="106px" textAlign="right">
                                        {index + 1}
                                        <Checkbox w="16px" h="16px" className="data-table-body-check" defaultBgColor="white"/>
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
                </TableContainer> */}
                <DormitoryEquipmentDataTable currentPage={currentPage} />
                <Stack direction="row" className="equipment-list-data-pagination">
                    <Text>{equipmentData.length}件中1~{itemsPerPage}件を表示</Text>
                    {/* <HStack gap={2} className={`equipment-list-data-pagination-${getPaginateClassName()}`}> */}
                    <HStack gap={2} className="equipment-list-data-pagination-action">

                        <Button
                            className="paginate-left"
                            isDisabled={currentPage <= 1} onClick={handlePrev}
                            >
                            <Img src={leftPng} />
                        </Button>
                        {generatePageNumbers()}
                        <Button
                            className="paginate-right"
                            isDisabled={currentPage >= totalPageCount} onClick={handleNext}
                        >
                            <Img src={rightPng} />
                        </Button>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    );
}

export default DormitoryEquipment;

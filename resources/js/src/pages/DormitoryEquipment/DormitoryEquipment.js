import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    HStack,
    Text,
    Input,
    Stack,
    Button,
    Img
} from "@chakra-ui/react";
import CommonStrings from "../../locales/Common";
import dummyData from "../../constants/dummyData";
import attachPng from '../../../../../public/images/attachment.png'
import downloadPng from '../../../../../public/images/download.png'
import searchPng from '../../../../../public/images/search.png'
import rightPng from '../../../../../public/images/right.png'
import leftPng from '../../../../../public/images/left.png'
import { DormitoryEquipmentDataTable } from "./DormitoryEquipmentDataTable";
import './DormitoryEquipment.scss'

// ダミーデータを取得する
export const equipmentData = dummyData.equipmentData.equipmentData
// 1ページ内の定義データ行数
export const itemsPerPage = 10

function DormitoryEquipment() {
    const [currentPage, setCurrentPage] = useState(1);
    const [prevPage, setPrevPage] = useState(1);

    // ハンドル検索機能
    const [rowData, setRowData] = useState(equipmentData);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        const filteredData = equipmentData.filter((row) =>
            Object.values(row).some((value) =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
        setRowData(filteredData);
    };

    const handleSearchInputChange = (event) => {
        const newSearchQuery = event.target.value;
        setSearchQuery(newSearchQuery);
        setCurrentPage(1); // 検索時に最初のページにリセットする
        handleSearch(newSearchQuery);
    };

    const handleSearchButtonClick = () => {
        handleSearch(searchQuery);
    };

    const totalPageCount = searchQuery === '' ? Math.ceil(equipmentData.length / itemsPerPage) : Math.ceil(rowData.length / itemsPerPage);
    // 次のページに行く
    const handleNext = () => {
        setPrevPage(currentPage);
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
    };
    // 前のページに戻る
    const handlePrev = () => {
        setPrevPage(currentPage);
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const maxVisiblePages = 5;
    const halfMaxVisiblePages = Math.round(maxVisiblePages / 2);
    const startPage = Math.max(1, currentPage - halfMaxVisiblePages - 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPageCount);
    // ページ番号の生成
    const generatePageNumbers = () => {
        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <Button
                    key={i}
                    className={i === currentPage ? 'paginate-page-active' : 'paginate-page-nonactive'}
                    onClick={() =>
                        setCurrentPage(i)
                    }
                >
                    {i}
                </Button>
            );
        }
        return pages;
    };
    // ページ番号生成に応じたハンドル位置
    const handleIncrement = () => {
        const count = endPage + 1 - startPage
        switch (count) {
            case 1: return 'action-1'
            case 2: return 'action-2'
            case 3: return 'action-3'
            case 4: return 'action-4'
            default: return 'action-5'
        };
    }
    useEffect(() => {
        // 現在のページが変更されるたびに前のページを更新します
        setPrevPage(currentPage);
    }, [currentPage]);

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
                        <Input
                            type="text"
                            className="search-group-data"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <Button className="search-group-action" onClick={handleSearchButtonClick}>
                            <Img src={searchPng} className="search-group-action-icon" />
                            <Text className="search-group-action-name">検索</Text>
                        </Button>
                    </HStack>
                </Stack>
                {/* 寮設備表データ一覧 */}
                <DormitoryEquipmentDataTable currentPage={currentPage} filteredData={rowData} prevPage={prevPage} />
                {/* テーブルデータのページネーション */}
                <Stack direction="row" className="equipment-list-data-pagination">
                    <Text>{equipmentData.length}件中1~{itemsPerPage}件を表示</Text>
                    <Box className="equipment-list-data-pagination-action">
                        <HStack gap={2} className={`equipment-list-data-pagination-${handleIncrement()}`}>
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
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default DormitoryEquipment;

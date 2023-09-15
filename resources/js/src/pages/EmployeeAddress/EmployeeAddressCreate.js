import React from "react";
import {
    Box,
    Divider,
    FormControl,
    HStack,
    Select,
    Text,
    Input,
    Stack,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "./EmployeeAddressCreate.scss";
import CommonStrings from "../../locales/Common";
import dummyData from "../../constants/dummyData";
import "react-datepicker/dist/react-datepicker.css";

function EmployeeAddressCreate() {
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());
    const [status, setStatus] = React.useState("1");
    const getEmpAddress = (name) => {
        switch (name) {
            case 1:
                return "emp-address-label-name-1";
            case 2:
                return "emp-address-label-name-2";
            case 3:
                return "emp-address-label-name-3";
            case 4:
                return "emp-address-label-name-4";
            case 5:
                return "emp-address-label-name-5";
            default:
                return "emp-address-label-name";
        }
    };

    return (
        <FormControl isRequired>
            <Box className="emp-address">
                <Text className="emp-address-title">社員住所｜新規</Text>
                <Box className="emp-address-label">
                    {dummyData.dormitory.map((item, index) => (
                        <Box key={index}>
                            <span></span>
                            <HStack
                                className={`emp-address-label-${index + 1}`}
                            >
                                <Text className={`emp-address-name`}>
                                    <span className={getEmpAddress(item.name)}>
                                        {item.name}
                                    </span>
                                </Text>
                                <Text className="emp-address-label-require">
                                    <span>{CommonStrings.common.required}</span>
                                </Text>
                            </HStack>

                            {dummyData?.dormitory?.length - 2 && (
                                <Divider
                                    width={1032}
                                    h="65px"
                                    className="emp-address-label-divider"
                                    borderColor="#F4E8E8"
                                ></Divider>
                            )}
                        </Box>
                    ))}
                </Box>
                <Box className="emp-address-data">
                    <Input maxW={16} maxLength={3} />
                    <Box className="emp-address-select">
                        <Select placeholder="未設定">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>
                    <Input className="emp-address-name" maxLength={3} />
                    <Text className="emp-address-start-date">開始日</Text>
                    <Box className="emp-address-start-date-box">
                        <DatePicker
                            dateFormat="yyyy/MM/dd"
                            className="start-date-picker"
                        />
                    </Box>
                    <Text className="emp-address-end-date">終了日</Text>
                    <Box className="emp-address-end-date-box">
                        <DatePicker
                            // selected={endDate}
                            // onChange={(date) => setEndDate(date)}
                            dateFormat="yyyy/MM/dd"
                            className="end-date-picker"
                        />
                    </Box>
                    <Input className="emp-address-expense" maxLength={8} />
                    <Input
                        className="emp-address-capacity"
                        maxLength={1}
                        maxW={16}
                    />
                    <Box className="emp-address-status">
                        <RadioGroup onChange={setStatus} value={status}>
                            <Stack direction="row">
                                <Radio value="1">あり</Radio>
                                <Radio value="2">なし</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>
        </FormControl>
    );
}

export default EmployeeAddressCreate;

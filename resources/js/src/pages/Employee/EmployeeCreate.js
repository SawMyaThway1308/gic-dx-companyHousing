import React, { useEffect } from "react";
import { Center, Text, Box } from "@chakra-ui/react";
import CommonStrings from "../../locales/Common";
import axios from 'axios';
import RenewalAxiosClient from '../../providers/AxiosClientProviders/RenewalAxiosClient'
import {ACTION} from '../../utils/path'

function EmployeeCreate() {

    const fetchDataFromBackend = async () => {
        try {
            const response = await axios.get(`${RenewalAxiosClient.baseURL}${ACTION.ALL}`);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    useEffect(() => {
        fetchDataFromBackend();
      }, [])

    return (
        <Center width="100%" height="350px">
            <Box>
                <Text>{CommonStrings.common.employeeMange}</Text>
            </Box>
        </Center>
    );
}

export default EmployeeCreate;

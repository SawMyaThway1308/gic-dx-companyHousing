import React from 'react'
import {
  Grid, GridItem
} from '@chakra-ui/react'
import DormitoryEquipmentRegistration from '../pages/DormitoryEquipment/DormitoryEquipmentRegistration'
import Header from '../pages/Header'
import DormitoryEquipmentEditing from '../pages/DormitoryEquipment/DormitoryEquipmentEditing'
import DormitoryEquipmentDetails from '../pages/DormitoryEquipment/DormitoryEquipmentDetails/DormitoryEquipmentDetails'
import DormitoryEquipment from '../pages/DormitoryEquipment/DormitoryEquipment'

function Main() {
  return (
    <Grid
      templateAreas={`"header header""nav main"`}
      gridTemplateRows={'64px 1fr 0px'}
      gridTemplateColumns={'240px 1fr'}
      h='900px'
      w='1440px'
      gap='0'
      // mx="12"
    >
      <GridItem colSpan={2} area={'header'}>
        <Header />
      </GridItem>
      <GridItem rowSpan={2} bg='#F5F5F7' area={'nav'}>
        {/* fix position */}
        {/* Navigation */}
      </GridItem>
      <GridItem rowSpan={2} area={'main'}>
        {/* <DormitoryEquipmentRegistration /> */}
        {/* <DormitoryEquipmentEditing /> */}
        {/* <DormitoryEquipmentDetails /> */}
        <DormitoryEquipment />
      </GridItem>
    </Grid>
  )
}

export default Main

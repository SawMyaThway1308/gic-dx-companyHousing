import React from 'react'
import {
  Grid, GridItem
} from '@chakra-ui/react'
import Body from '../pages/Body'
import Header from '../pages/Header'

function Main() {
  return (
    <Grid
      templateAreas={`"header header""nav main"`}
      gridTemplateRows={'64px 1fr 0px'}
      gridTemplateColumns={'240px 1fr'}
      h='900px'
      w='1440px'
      gap='0'
      mx="12"
    >
      <GridItem colSpan={2} bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <GridItem rowSpan={2} bg='pink.300' area={'nav'}>
        {/* fix position */}
        Nav
      </GridItem>
      <GridItem rowSpan={2} area={'main'}>
        <Body />
      </GridItem>
    </Grid>
  )
}

export default Main

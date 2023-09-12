import React from 'react'
import {
  Flex, Grid, GridItem, Spacer
} from '@chakra-ui/react'
// import Body from './Body'
// import Footer from './Footer'
// import Navigation from './Navigation'
// import './Main.scss'
// import Footer from '../pages/Footer'
// import NavBar from '../pages/NavBar'
import Header from '../pages/Header'

function Main() {
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(false)

  return (
    <Grid
      height="fit-content"
      templateAreas={`"nav main"
                  "nav main"`}
      gridTemplateRows="28px 1fr"
      gridTemplateColumns={isNavCollapsed ? '50px 1fr' : '208px 1fr'}
    >
      <GridItem area="nav">
        {/* <NavBar /> */}
        {/* <Header /> */}
        {/* <Navigation isNavCollapsed={isNavCollapsed} setIsNavCollapsed={setIsNavCollapsed} /> */}
      </GridItem>
      <GridItem area="main" className="main">
        <Flex direction="column">
            
          {/* <Body isNavCollapsed={isNavCollapsed} /> */}
          <Spacer />
          <Header />
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Main

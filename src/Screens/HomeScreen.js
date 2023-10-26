import {View, Text, Box} from "native-base"
import colors from "../color"
import React from 'react'
import HomeSearch from "../Components/HomeSearch"
import HomeProducts from "../Components/HomeProducts"

const HomeScreen = () => {
  return (
    <Box flex={1} bg={colors.subGreen}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  )
}

export default HomeScreen
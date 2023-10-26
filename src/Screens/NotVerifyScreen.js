import { Box, Center, Image, VStack} from "native-base"
import colors from "../color"
import React from 'react'
import Buttone from "../Components/Buttone"

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require("../../assets/favicon.png")} h={200} w={"200"} alt="Logo" />
      </Center>
      <VStack space={6} px={5} alignItems={"center"}>
        <Buttone bg={colors.black} color={colors.white}>REGISTER</Buttone>
        <Buttone bg={colors.white} color={colors.black}>LOGIN</Buttone>
      </VStack>
    </Box>
  )
}

export default NotVerifyScreen
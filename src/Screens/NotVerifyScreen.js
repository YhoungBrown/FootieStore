import { Box, Center, Image, VStack} from "native-base"
import colors from "../color"
import React from 'react'
import Buttone from "../Components/Buttone"
import { useNavigation } from "@react-navigation/native"

const NotVerifyScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} bg={colors.main} justifyContent={"center"} mt={-12}>
      <Center w="full" h={250}>
        <Image source={require("../../assets/favicon.png")} h={200} w={"200"} alt="Logo" />
      </Center>
      <VStack space={6} px={5} alignItems={"center"}>
        <Buttone bg={colors.black} color={colors.white} onPress={() => navigation.navigate("Register")}>REGISTER</Buttone>
        <Buttone bg={colors.white} color={colors.black} onPress={() => navigation.navigate("Login")}>LOGIN</Buttone>
      </VStack>
    </Box>
  )
}

export default NotVerifyScreen
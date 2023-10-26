import { View, Text, Box, Center } from 'native-base';
import React from 'react';
import colors from '../color';
import {FontAwesome} from "@expo/vector-icons";
import Buttone from "../Components/Buttone"

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h={"90%"}>
        <Center h={200} w={200} bg={colors.gray} rounded={"full"}>
            <FontAwesome name="shopping-basket" size={64} color={colors.main} />
        </Center>
        <Text color={colors.main} bold mt={5}>CART IS EMPTY</Text>
      </Center>
      <Buttone bg={colors.black} color={colors.white}>
        START SHOPPING
      </Buttone>
    </Box>
  )
}

export default CartEmpty
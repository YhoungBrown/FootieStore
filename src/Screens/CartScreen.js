import {Text, Box, Center, ScrollView, HStack, Button} from "native-base"
import React from 'react'
import colors from "../color"
import CartEmpty from "../Components/CartEmpty"
import CartItems from "../Components/CartItems"
import {FontAwesome} from "@expo/vector-icons"
import Buttone from "../Components/Buttone"
import { useNavigation } from "@react-navigation/native"

const CartScreen = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={colors.subGreen}>
      {/*Header*/}

      <HStack 
      alignItems={"center"} 
      justifyContent={"center"} 
      space={2} 
      w={"full"} 
      py={3}>
          <Text color={colors.black} fontSize={20} bold>Cart</Text>
          <FontAwesome name="shopping-basket" size={20} color={colors.main} />
      </HStack>
      
      {/**If cart is empty */}
      {/*<CartEmpty />*/}

      {/**Cart Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/**Total */}
        <Center mt={5}>
          <HStack 
          rounded={30} 
          justifyContent={"space-between"} 
          bg={colors.white} 
          shadow={2} 
          w={"90%"} 
          pl={5} 
          h={45} 
          my={3}
          alignItems={"center"}>
            <Text bold>Total</Text>
            <Button 
            px={10} 
            h={45} 
            rounded={50} 
            bg={colors.main} 
            _text={{
              color:colors.white,
              fontWeight: "semibold",
            }}
            _pressed={{
              bg: colors.main,
            }}>
              $356
            </Button>
          </HStack>
        </Center>

        {/**CheckOut */}
        <Center px={5}>
            <Buttone onPress={() => navigation.navigate("Shipping")} bg={colors.black} color={colors.white} mt={10}>
              CHECKOUT
            </Buttone>
        </Center>
      </ScrollView>

    </Box>
  )
}

export default CartScreen
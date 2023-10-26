import {View, Text, Box, Center, ScrollView, VStack, FormControl, Input, HStack, Image, Spacer} from "native-base"
import React from 'react'
import colors from "../color"
import Buttone from "../Components/Buttone"
import {Ionicons, FontAwesome} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";




const paymentMethods = [
  {
    id: "Paypal",
    image: require("../../assets/Paypal.png"),
    alt: "paypal",
    icons: "Ionicons"
  },
  {
    id: "discover",
    image:require("../../assets/Discover.png"),
    alt: "discover",
    icons: "FontAwesome"
  },
  {
    id: "googlepay",
    image: require("../../assets/GPay.png"),
    alt: "googlepay",
    icons: "FontAwesome"
  },
  
]

const PaymentScreen = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={colors.main} py={5}>
      {/**Header */}
      <Center pb={15}>
          <Text color={colors.white} fontSize={14} bold>
            SELECT PAYMENT METHOD 
          </Text>
      </Center>
      {/** Selection */}
      <Box h={"full"} bg={colors.gray} px={4}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
          {paymentMethods.map((i) => (
            <HStack key={i.id}
            alignItems={"center"} 
            bg={colors.white} 
            px={3}
            justifyContent={"space-between"}
            py={1}
            rounded={10}>
              <Box>
                <Image source={i.image}
                  alt={i.alt}
                  resizeMode="contain"
                  w={60}
                  h={50}
                /> 
              </Box>
              {i.icons === "Ionicons" ? (
                <Ionicons 
                name="checkmark-circle" 
                size={30} 
                color={colors.main} /> 
                ): (
                  <FontAwesome 
                  name="circle-thin" 
                  size={30} 
                  color={colors.main}/> )}
              
            </HStack>
          ))}
          <Buttone onPress={() => navigation.navigate("PlaceOrder")} bg={colors.main} color={colors.white} mt={5}>
            CONTINUE
          </Buttone>
          <Text italic textAlign={"center"}>Payment method is
            <Text bold> "Paypal"</Text> by default 
          </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default PaymentScreen
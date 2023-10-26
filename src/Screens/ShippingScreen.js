import {View, Text, Box, Center, ScrollView, VStack, FormControl, Input} from "native-base"
import React from 'react'
import colors from "../color"
import Buttone from "../Components/Buttone"
import { useNavigation } from "@react-navigation/native"



const shippngInputs = [
  {
    id: "city",
    Label: "ENTER CITY",
    type: "text",
  },
  {
    id: "country",
    Label: "ENTER COUNTRY",
    type: "text",
  },
  {
    id: "postalCode",
    Label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    id: "address",
    Label: "ENTER ADDRESS",
    type: "text",
  },
]

const ShippingScreen = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={colors.main} py={5}>
      {/**Header */}
      <Center pb={15}>
          <Text color={colors.white} fontSize={14} bold>
            DELIVERY ADDRESS 
          </Text>
      </Center>
      {/** Inputs */}
      <Box h={"full"} bg={colors.white} px={4}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
          {shippngInputs.map((i) => (
            <FormControl key={i.id}>
              <FormControl.Label 
              _text={{
                fontSize:"12px",
                fontWeight:"bold",
              }}>
              {i.Label}
              </FormControl.Label>
              <Input
              borderWidth={0.2}
              borderColor={colors.main}
              bg={colors.subGreen}
              py={4}
              type={i.type}
              color={colors.main} 
                _focus={{
                  bg: colors.subGreen,
                  borderWidth:1,
                  borderColor: colors.main,
                }}
              />
            </FormControl>
          ))}
          <Buttone onPress={() => navigation.navigate("Checkout")} bg={colors.main} color={colors.white} mt={5}>
            CONTINUE
          </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default ShippingScreen
import {View, Text, Box, Center, ScrollView, VStack, FormControl, Input} from "native-base"
import React from 'react'
import colors from "../color"
import Buttone from "../Components/Buttone"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux";
import { useState } from "react"
import { addDeliveryAdress } from "../../features/deliverySlice"





const ShippingScreen = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");



  const dispatch = useDispatch();

  const deliveringTo = () => {
    const area = {
      city : city,
      country: country,
      postalCode : postalCode,
      address: address,
    }
    //console.log(area)
    dispatch(addDeliveryAdress(area))
  }

  

  const shippngInputs = [
    {
      id: "city",
      Label: "ENTER CITY",
      type: "text",
      State: setCity,
    },
    {
      id: "country",
      Label: "ENTER COUNTRY",
      type: "text",
      State: setCountry,
    },
    {
      id: "postalCode",
      Label: "ENTER POSTAL CODE",
      type: "text",
      State: setPostalCode,
    },
    {
      id: "address",
      Label: "ENTER ADDRESS",
      type: "text",
      State: setAddress,
    },
  ]

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
              onChangeText={(text) => i.State(text)}
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
          <Buttone onPress={() => {
            deliveringTo();
            navigation.navigate("Checkout")}} bg={colors.main} color={colors.white} mt={5}>
            CONTINUE
          </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default ShippingScreen
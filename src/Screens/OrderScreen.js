import {View, Text, Box, ScrollView, Heading} from "native-base";
import React from 'react';
import colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome5, Ionicons} from "@expo/vector-icons";
import OrderItem from "../Components/OrderItem";
import OrderModel from "../Components/OrderModel";

const OrderScreen = () => {
  return (
    <Box bg={colors.deepGray} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>

          <OrderInfo
          title={"SHIPPING INFO"} 
          success
          subTitle={"Shipping: Tanzania"} 
          text={"Pay Method: Paypal"}
            icon={<FontAwesome5 name="shipping-fast" size={30} color={colors.white}/>}
          />
          <OrderInfo
          title={"DELIVER TO"} 
          subTitle={"Address"} 
          danger
          text={"Arusha Tz, Ngaramton Crater, P.O BOX 1234"}
            icon={<Ionicons name="location-sharp" size={30} color={colors.white}/>}
          />
        </ScrollView>
      </Box>
      {/**Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading 
        bold 
        fontSize={15} 
        isTruncated 
        my={4}>
            PRODUCTS
        </Heading>

        <OrderItem />
        {/**Total */}
        <OrderModel />
      </Box>
    </Box>
  )
}

export default OrderScreen
import {View, Text, Box, ScrollView, Image, Heading, HStack, Spacer} from "native-base"
import React, { useState } from 'react'
import colors from "../color"
import Rating from "../Components/Ratings"
import NumericInput from "react-native-numeric-input"
import Buttone from "../Components/Buttone"
import Review from "../Components/Review"
import { useNavigation } from "@react-navigation/native"

const SingleProductScreen = ({route}) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation()
  const product = route.params
  return (
    <Box safeArea flex={1} bg={colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image 
        source={{uri: product.image}}
        alt={product.name}
        w={"full"}
        h={300}
        resizeMode="contain" />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>{product.name}</Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        <HStack space={2} alignItems={"center"} my={5}>
        {
          product.countInStock > 0 ? (
           <>
           <NumericInput 
            value={value} 
            totalWidth={140} 
            totalHeight={40}
              iconSize={25}
              step={1}
              minValue={0}
              maxValue={product.countInStock}
              borderColor={colors.deepGray}
              rounded
              textColor={colors.black}
              iconStyle={{color: colors.white}}
              rightButtonBackgroundColor={colors.main}
              leftButtonBackgroundColor={colors.main}
            />
            
           </>
          ) : (
            <Heading bold color={colors.red} italic fontSize={12}>
              Out of stock
            </Heading>
          )}
            
            <Spacer />
            <Heading bold color={colors.black} fontSize={19}>${product.price}
            </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
        {product.description}
        </Text>
        <Buttone onPress={() => navigation.navigate("Cart")} bg={colors.main} color={colors.white} mt={10}>
        ADD TO CART
        </Buttone>
        {/**Reviews */}
        <Review />
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen
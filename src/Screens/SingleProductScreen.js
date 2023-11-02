import {View, Text, Box, ScrollView, Image, Heading, HStack, Spacer} from "native-base"
import React, { useState } from 'react'
import colors from "../color"
import Rating from "../Components/Ratings"
import NumericInput from "react-native-numeric-input"
import Buttone from "../Components/Buttone"
import Review from "../Components/Review"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import { addFootwear } from "../../features/shoppingBasketSlice"
import Modall from "../Components/Modall"

const SingleProductScreen = ({route}) => {
  const [value, setValue] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  const product = route.params
  const dispatch = useDispatch();

  //console.log(product)


  const addToShoppingBasket = () => {
    if (value > 0) {
      // Create an object with the product details
      const productToAdd = {
        id: product._id,
        name: product.name,
        image: product.image,
        price: product.price , // Initial price
        countInStock: product.countInStock,
        description: product.description,
        rating: product.rating,
        numReviews: product.numReviews,
        quantity: value, // Add the selected quantity
      };
  
      // Dispatch the addFootwear action with the product data
      dispatch(addFootwear(productToAdd));
  
      // Reset the quantity to 0 after adding to the basket
      navigation.navigate("Cart");
      setValue(0);
    } else {
      setShowModel(true);
      setErrorMessage("You haven't selected the number of this product you would like to purchase");
    }
  };

  

  

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
            onChange={value => setValue(value)} 
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
        <Buttone onPress={addToShoppingBasket} bg={colors.main} color={colors.white} mt={10}>
        ADD TO CART
        </Buttone>
        {/**Reviews */}
        <Review />
      </ScrollView>


      {showModel && (
            <Modall showModel={showModel} setShowModel={setShowModel} type="NOTIFICATION" message={errorMessage} />
          )}
    </Box>
  )
}

export default SingleProductScreen
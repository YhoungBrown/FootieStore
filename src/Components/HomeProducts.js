import { View, Text, ScrollView, Flex, Pressable, Image, Box, Heading } from 'native-base'
import React from 'react';
import Products from "../../src/data/Products"
import colors from '../color';
import Ratings from './Ratings';
import { useNavigation } from '@react-navigation/native';

const HomeProducts = () => {
  const navigation = useNavigation()
  return (
    
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex flexWrap={"wrap"} 
        direction='row' 
        justifyContent={"space-between"}
        px={6}>
          {Products.map((product) => (
            <Pressable 
            onPress={() => navigation.navigate("Single", product)}
            key={product._id} 
            w={"47%"} 
            bg={colors.white}
            rounded={"md"}
            shadow={2}
            pt={0.3}
            pb={2}
            my={3}
            overflow={"hidden"}> 
            <Image 
            source={{uri: product.image}} 
            alt='productImage'
              h={24}
              resizeMode='contain'
            />
            <Box px={4} pt={1}>
              <Heading size={"sm"} bold>${product.price}</Heading>
              <Text fontSize={10} mt={1} isTruncated w={"full"}>{product.name}</Text>

              {/**Ratings */}
              <Ratings value={product.rating}/>
            </Box>
              
            </Pressable>
          ))}
        </Flex>
      </ScrollView>
    
  )
}

export default HomeProducts
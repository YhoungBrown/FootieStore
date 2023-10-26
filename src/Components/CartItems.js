import React from 'react'
import { Box, Center, HStack, Pressable, Image, VStack, Text, Button} from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import colors from '../color'
 import {FontAwesome} from "@expo/vector-icons"
 import products from "../data/Products"


const Swiper = () => (
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey={"0"}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0,2)}
    renderHiddenItem={renderHiddenItems}
    renderItem={renderItems}
    showsVerticalScrollIndicator={false}/>
)

const renderItems = (data) => (
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack 
            alignItems={"center"} 
            bg={colors.white} 
            shadow={2}
            mt={2}
            rounded={10}
            overflow={'hidden'}>
                <Center w={"25%"} bg={colors.deepGray}>
                <Image 
                    source={{uri: data.item.image}} 
                    alt={data.item.name}
                    w="full"
                    h={24}
                    /> 
                </Center>
                <VStack w={"60%"} px={2} space={2}>
                    <Text 
                    isTruncated 
                    color={colors.black} 
                    bold
                    fontSize={11}>
                    {data.item.name}
                    </Text>

                    <Text 
                    bold 
                    color={colors.lightBlack}>
                    ${data.item.price}
                    </Text>
                </VStack> 
                <Center>
                    <Button 
                    bg={colors.main}
                    _pressed={{bg:colors.main}}
                    _text={{color: colors.white}}>5</Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>
)

//Hidden Items
const renderHiddenItems = () => (
    <Pressable 
    w={50} 
    mt={2}
    roundedTopRight={10} 
    roundedBottomRight={10} 
    h={"88%"} 
    ml={"auto"} 
    justifyContent={"center"} 
    bg={colors.red}>
        <Center alignItems={"center"} space={2}>
            <FontAwesome 
            name='trash'
            size={24}
            color={colors.white}
            />
        </Center>
    </Pressable>
)

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  )
}

export default CartItems
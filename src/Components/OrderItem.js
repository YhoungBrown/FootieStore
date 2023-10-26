import { View, Text, FlatList, Pressable, Box, HStack, Center, Image, VStack, Button } from 'native-base';
import React from 'react';
import products from "../data/Products"
import colors from '../color';

const OrderItem = () => {
  return (
    <FlatList  
  showsVerticalScrollIndicator={false} 
  data={products.slice(0, 3)}
  keyExtractor={(item) => item._id}
  renderItem={({item}) => (
        <Pressable>
            <Box mb={3}>
                <HStack 
                alignItems={"center"} 
                bg={colors.white}
                shadow={1} 
                rounded={10}
                overflow={"hidden"}>
                    <Center w={"25%"} bg={colors.subGreen}>
                        <Image 
                        source={{uri: item.image}}
                        alt={item.name}
                        w={"full"}
                        h={24}
                        resizeMode='contain'/>
                    </Center>
                    <VStack w={"60%"} px={2}>
                        <Text 
                        isTruncated 
                        color={colors.black}
                        bold 
                        fontSize={12}>
                            {item.name}
                        </Text>
                        <Text 
                        color={colors.lightBlack}
                        mt={2}
                        bold>
                           ${item.price}
                        </Text>
                    </VStack>
                    <Center >
                        <Button 
                        bg={colors.main}
                         _pressed={{bg:colors.main}}
                         _text={{color: colors.white}}>5</Button>
                    </Center>
                </HStack>
            </Box>
        </Pressable>
    )}
    />
  );
};

export default OrderItem
import { Input, Pressable, HStack, Box } from 'native-base'
import React from 'react'
import colors from '../color'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
  const navigation = useNavigation()
  return (
    <HStack 
    space={3}
    w={"full"}
    px={6}
    bg={colors.main}
    py={4}
    alignItems={"center"}
    safeAreaTop>
        <Input placeholder='Nike, Puma, Adidas...' 
        w={"85%"} 
        bg={colors.white} 
        type='search' 
        variant={"filled"}
        h={12} 
        _focus={{
          bg: colors.white
        }}
        borderWidth={0}/>
        
        <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
            <FontAwesome5 name="shopping-basket" size={24} color={colors.white} />
            <Box
            px={1}
            rounded="full"
            position="absolute"
            top={-13}
            left={2}
            bg={colors.red}
            _text={{
              color: colors.white,
              fontsize: "11px"
            }} >
              5
            </Box>
        </Pressable>
    </HStack>
      
    
  )
}

export default HomeSearch
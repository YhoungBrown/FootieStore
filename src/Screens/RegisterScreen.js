import {View, Text, Box, Image, Heading, VStack, Input, Button, Pressable} from "native-base";
import colors from "../color";
import React from 'react';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({navigation}) => {
  return (
    <Box flex={1} bg={colors.black}>
      <Image 
      flex={1} 
      alt='cover' 
      resizeMode='cover'
      size="lg" 
      width='full'
      source={require("../../assets/cover.png")}/>

      <Box width='full' height="full" position="absolute" bottom="250" left="150" px="6" justifyContent="center">
        <Image width="80%" height="100%" alt='whiteLogo' resizeMode="contain" source={require("../../assets/smallWhiteLogo.png")}/>
      </Box>

      <Box width='full' height="full" position="absolute" top="0" px="6" justifyContent="center">
          <Heading>REGISTER</Heading>
          <VStack space={5} pt="6">
          {/**USERNAME */}
          <Input 
            InputLeftElement={
              <FontAwesome name="user" size={20} color={colors.main}/>
            }
            variant="underlined" 
            placeholder='John Doe' 
            w="70%" 
            size="md"
            pl={2}
            type="text"
            color={colors.main} 
            borderBottomColor={colors.underline} />
          {/**Email */}
            <Input 
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={colors.main}/>
            }
            variant="underlined" 
            placeholder='user@gmail.com' 
            w="70%" 
            size="md"
            pl={2}
            type="text"
            color={colors.main} 
            borderBottomColor={colors.underline} />
            {/**Password */}
            <Input 
            InputLeftElement={
              <Ionicons name="eye" size={20} color={colors.main} />
            }
            variant="underlined" 
            placeholder='***********' 
            w="70%" 
            size="md"
            pl={2}
            type="password"
            color={colors.main} 
            borderBottomColor={colors.underline} />
          </VStack>
          <Button 
          _pressed={{bg: colors.main}}
          my={30} 
          w="40%" 
          rounded={50} 
          bg={colors.main}
          onPress={() => navigation.navigate("Bottom")}
          >
            SIGN UP
          </Button>
          <Pressable mt={4} 
          onPress={() => navigation.navigate("Login")}>
            <Text color={colors.deepestGray}>LOGIN</Text>
          </Pressable>
      </Box>

      <StatusBar style='light'/>
    </Box>
  )
}

export default RegisterScreen
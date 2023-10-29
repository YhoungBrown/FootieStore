import {View, Text, Box, Image, Heading, VStack, Input, Button, Pressable, HStack} from "native-base";
import colors from "../color";
import React from 'react';
import { MaterialIcons, Ionicons, FontAwesome, AntDesign  } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import Modall from "../Components/Modall";
import { DotIndicator } from "react-native-indicators";
import { Keyboard } from "react-native";






const RegisterScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")




  const signUp = () => {
    setLoading(true); // Set loading to true
    Keyboard.dismiss()
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        // Successfully signed up
        updateProfile(authUser.user, {
          displayName: name,
        }).then(() => {
          setLoading(false); // Set loading to false on success
          // You can navigate to the home screen or perform other actions here
          // navigation.replace("Bottom");
        });
      })
      .catch((error) => {
        setLoading(false); // Set loading to false on error
        setShowModel(true);
        setErrorMessage(error.message);
      });
  };
  


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
            onChangeText={(text) => setName(text)}
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
            onChangeText={(text) => setEmail(text)}
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
            onChangeText={(text) => setPassword(text)}
            w="70%" 
            size="md"
            pl={2}
            type="password"
            color={colors.main} 
            borderBottomColor={colors.underline} />
          </VStack>

          {loading && (
            <View  mx={3} ml={10} py={10} flexDirection={"row"}>
                <View alignItems={"flex-start"} mx={1}>
                    <DotIndicator size={6} count={4} color = {colors.main}/>
                </View>
            </View>
          )}

          {!loading && (
            <Button 
              _pressed={{bg: colors.ash}}
              my={30} 
              w="40%" 
              rounded={50} 
              bg={colors.main}
                onPress={signUp}
                //onPress={() => navigation.navigate("Bottom")}
                >
                  SIGN UP
            </Button>
          )}

          {showModel && (
            <Modall showModel={showModel} setShowModel={setShowModel} type="ERROR" message={errorMessage} />
          )}
          

          <HStack alignItems={"center"} pb={3}>
            <AntDesign name="arrowdown" size={20} color={colors.ash} />

            <Text fontSize={13} color={colors.ash}>Go back to Login page</Text>
          </HStack>

          <TouchableOpacity activeOpacity={0.5}
          onPress={() => navigation.navigate("Login")}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
      </Box>

      <StatusBar style='light'/>
    </Box>
  )
}

export default RegisterScreen
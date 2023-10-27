import { StatusBar } from 'expo-status-bar';
import {View, Text, Box, Image, Heading, VStack, Input, Button, Pressable, HStack} from "native-base"
import React, { useState } from 'react'
import colors from "../color"
import { MaterialIcons, Ionicons, EvilIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import {auth} from "../../firebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { DotIndicator } from 'react-native-indicators';
import { useEffect } from 'react';
import Modall from '../Components/Modall';




const LoginScreen = ({navigation}) => {
const [loading, setLoading] = useState(false)
const [email, setEmail] = useState(false)
const [password, setPassword] = useState(false)
const [showModel, setShowModel] = useState(false);
const [errorMessage, setErrorMessage] = useState("")





useEffect(() => {
  // Check if a user is already logged in
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          // If a user is already logged in, navigate to the home screen
          navigation.replace("Bottom");
      }
  });

  // Unsubscribe from the listener when the component unmounts
  return unsubscribe;
}, []);


  const signin = () => {
    setLoading(true); // Set loading to true when signing in
    
    signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  // Successfully signed in
                  const user = userCredential.user;
                  // You can navigate to the home screen or perform other actions here
                  //navigation.replace("Bottom")
              })
              .catch((error) => {
                  // Handle sign-in errors
                  setLoading(false); // Set loading to false on error
                  setShowModel(true);
                  setErrorMessage(error.message)
                  
                  //alert(error.message);
              });
          
  }
 
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
          <Heading>LOGIN</Heading>
          <VStack space={5} pt="6">
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
            type='text'
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
            type='password'
            onChangeText={(text) => setPassword(text)}
            size="md"
            pl={2}
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
          onPress={signin}
          >
            LOGIN
          </Button>
          )}

          {showModel && (
            <Modall showModel={showModel} setShowModel={setShowModel} type="ERROR" message={errorMessage} />
          )}
          

            <HStack alignItems={"center"} pb={3}>
              <Text fontSize={13} color={colors.ash}>Don't have an account</Text>

              <EvilIcons name="question" size={20} color={colors.ash} />
            </HStack>

            <TouchableOpacity activeOpacity={0.5}
                onPress={() => navigation.navigate("Register")}>
                <Text>SIGN UP</Text>
              </TouchableOpacity>
          
      </Box>

      <StatusBar style='light'/>
    </Box>
  )
}

export default LoginScreen
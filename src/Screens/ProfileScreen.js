import {View, Text, Center, Image, Heading, Pressable, HStack} from "native-base"
import React from 'react'
import colors from "../color"
import Tabs from "../Components/Profile/Tabs"
import { auth } from "../../firebaseConfig"
import { signOut } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { DotIndicator } from "react-native-indicators"
import { useEffect } from "react"



const ProfileScreen = () => {
const [showModel, setShowModel] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const [loading, setLoading] = useState(false);
const [displayName, setDisplayName] = useState(auth.currentUser?.displayName);


useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user && user.displayName) {
      setDisplayName(user.displayName);
      console.log(user.displayName); // Log the updated displayName
    }
  });

  return () => {
    // Unsubscribe when the component unmounts
    unsubscribe();
  };
}, []);



  const navigation = useNavigation()

  const logout = () => {
    setLoading(true);
   signOut(auth)
      .then(() => {
        // Successfully signed out
        navigation.replace("Login");
      })
      .catch((error) => {
        // Handle sign-out errors
        setLoading(false); // Set loading to false on error
        setShowModel(true);
        setErrorMessage(error.message);
      });
  };
  

  return (
    <>
      {/**Logout */}
      {loading && (
        <Pressable
            activeOpacity={0.5}
            alignItems={'center'}
            position={"absolute"}
            top={0}
            right={0}
            py={9}
            px={3}
            zIndex={50}
          >
              <View  mx={3} ml={10} py={2} alignItems={"center"}>
              <Text fontSize={10} fontWeight="bold" mb={-2} color={colors.white}>Logging Out...</Text>
                <View alignItems={"flex-start"} mx={1}>
                    <DotIndicator size={6} count={4} color = {colors.white}/>
                </View>
            </View>
          </Pressable>
            )}
        
      {!loading && (
        <>
        <Pressable
            activeOpacity={0.5}
            alignItems={'center'}
            position={"absolute"}
            top={0}
            right={0}
            mt={3}
            py={10}
            px={3}
            zIndex={50}
          >
            <TouchableOpacity onPress={logout} activeOpacity={0.5}>
              <HStack>
                <Text fontWeight={"bold"} color={colors.white} mx={0.5}>
                  LogOut
                </Text>
                <MaterialCommunityIcons name="logout" size={20} color={colors.white} />
              </HStack>
            </TouchableOpacity>
  
          </Pressable>
         
        </>
      )}
      
  
      {showModel && (
        <Modall showModel={showModel} setShowModel={setShowModel} type="ERROR" message={errorMessage} />
      )}

      
            {/**Profile stuffs */}
          <Center bg={colors.main} pt={10} pb={6}>
            <Image
              source={require("../../assets/user.png")}
              alt="profile"
              w={24}
              h={24}
              resizeMode="cover"
            />
            <Heading bold fontSize={17} isTruncated my={2} color={colors.white}>
              {displayName}
            </Heading>
            <Text italic fontSize={10} color={colors.white}>
              Joined Oct 21, 2023
            </Text>
          </Center>

           {/**TABS */}
          <Tabs />
    </>
  );
 }  

export default ProfileScreen
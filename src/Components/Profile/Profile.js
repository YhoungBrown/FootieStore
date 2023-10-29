import { View, Text, Box, ScrollView, VStack, FormControl, Input, KeyboardAvoidingView } from 'native-base';
import React, { useState } from 'react';
import colors from '../../color';
import Buttone from "../Buttone";
import { Platform, TouchableOpacity, alert} from 'react-native';
//import { getAuth, updateProfile, reauthenticateWithCredential, updatePassword, EmailAuthProvider } from 'firebase/auth';
import {auth} from "../../../firebaseConfig"
import { useNavigation } from '@react-navigation/native';
import { DotIndicator } from 'react-native-indicators';
import Modall from '../Modall';
import consoleOveride from "../../../consoleOverride/consoleOverride";
import { updateProfile, updateEmail, sendEmailVerification} from "firebase/auth";

const Profile = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState("");

  const navigation = useNavigation();

  const inputs = [
    {
      id: "username",
      label: "UPDATE USERNAME",
      type: "text",
      state: newUsername,
      setState: setNewUsername,
    },
    {
      id: "Email",
      label: "UPDATE EMAIL",
      type: "email",
      state: newEmail,
      setState: setNewEmail,
    },
    {
      id: "NewPassword",
      label: "NEW PASSWORD",
      type: "password",
      state: newPassword,
      setState: setNewPassword,
    },
    {
      id: "ConfirmPassword",
      label: "CONFIRM PASSWORD",
      type: "password",
      state: confirmPassword,
      setState: setConfirmPassword,
    },
  ];

console.log(auth.currentUser)



  update = () => {
    setLoading(true);
    const user = auth.currentUser;
    const inputedEmail = newEmail; 
  
    // Send email change verification to the current email address
    if (user){
      sendEmailVerification(user)
      .then(() => {
        updateEmail(user, inputedEmail)
        // Email verification sent successfully
        console.log('Email verification sent.');
  
        // Add the code for showing a notification for users to see here
        setShowModel(true);
        setType("EMAIL UPDATE")
        setErrorMessage("A verification email has been sent to your current email address. Please check your inbox and follow the instructions to confirm the change.")
        
        //loading false
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error);
        setShowModel(true);
        setType("ERROR")
        setErrorMessage(error.message);
      });} else {
        console.log('User not authenticated');
      }

    {/*updateProfile(auth.currentUser, {
      displayName: newUsername,
    })
      .then(() => {
        // Profile updated successfully
        console.log("Update complete");
      })
      .catch((error) => {
        // An error occurred while updating the profile
        console.error(error);
        alert(error.message); // You can show the error message to the user
      });*/}
  };
  //here up
  
{/* const updateProfile = async () => {
    console.log("Hey beginning here")
    setLoading(true);
    const user = auth.currentUser
    //console.log(user)
    updateProfile(user, { displayName: newUsername });
    {/*const user = auth.currentUser
    if (newUsername) {
      updateProfile(user, { displayName: newUsername });
    }*
    console.log("Hey i got here successfully")
    setLoading(false);
  };*/}
  
  
  
  
  



  return (
    <Box h={"full"} bg={colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text fontSize={11} color={colors.red} justifyContent={'center'}mt={2}>
      Note: You can update a single field without filling the other fields
      </Text>
        <VStack space={10} mt={5} pb={10}>
          {inputs.map((i) => (
            <FormControl key={i.id}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {i.label}
              </FormControl.Label>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={100}
              >
                <Input
                  borderWidth={0.2}
                  bg={colors.deepGray}
                  type={i.type}
                  py={4}
                  //onChangeText={(text) => i.setState(text)}
                  onChangeText={(text) => {
                        i.setState(text);
                        console.log(`${i.label}: ${text}`);
                  }}
                  placeholder=""
                  borderColor={colors.main}
                  _focus={{
                    bg: colors.subGreen,
                    borderColor: colors.main,
                    borderWidth: 1,
                  }}
                  color={colors.black}
                  fontSize={15}
                />
              </KeyboardAvoidingView>
            </FormControl>
          ))}

        {loading && (
          <View pb={3} flexDirection={"row"} justifyContent={"center"}>
            <View alignItems={"center"} mx={1}>
              <DotIndicator size={12} count={4} color={colors.main} />
            </View>
          </View>
        )}

        {!loading && (
          <TouchableOpacity >
            <Buttone onPress={update} bg={colors.main} color={colors.white}>
               UPDATE PROFILE
            </Buttone>
          </TouchableOpacity>  
        )}

          {showModel && (
            <Modall showModel={showModel} setShowModel={setShowModel} type={type} message={errorMessage} />
          )}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;

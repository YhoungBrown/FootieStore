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
import { updateProfile, updateEmail, sendEmailVerification, updatePassword, reauthenticateWithCredential, EmailAuthProvider} from "firebase/auth";

const Profile = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState(""); 
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
      id: "CurrentPassword",
      label: "CURRENT PASSWORD",
      type: "password",
      state: currentPassword,
      setState: setCurrentPassword,
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

//console.log(auth.currentUser)



update = async () => {
  setLoading(true);
  const promises = [];
  const user = auth.currentUser;

  {/*if (!user) {
    setLoading(false);
    setShowModel(true);
    setType('ERROR');
    setErrorMessage('User not authenticated');
    return;
  }*/}

  if (newPassword !== confirmPassword) {
    setLoading(false);
    setShowModel(true);
    setType('ERROR');
    setErrorMessage('Password and Confirm Password do not match');
    return;
  }

  if (newPassword) {
    if (!currentPassword) {
      setLoading(false);
      setShowModel(true);
      setType('ERROR');
      setErrorMessage("Current password is required but you haven't provided your current password");
      return;
    } else {
      const newlySetPassword = newPassword;
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      promises.push(
        reauthenticateWithCredential(user, credential)
          .then(() => {
            return updatePassword(user, newlySetPassword);
          })
          .catch((error) => {
            if (error.code === 'auth/invalid-login-credentials') {
              setShowModel(true);
              setType('ERROR');
              setErrorMessage("Incorrect 'Current Password' entered");
              console.log('Incorrect password entered');
            } else if (error.code === 'auth/user-token-expired') {
              console.log('User token expired - continuing with other promises');
              // Handle the user-token-expired error but continue with other promises
              return true; // Indicate that this part of the promise succeeded
            } else {
              // Handle other errors and prevent Promise.all from rendering
              return Promise.reject(error); // Indicate that this part of the promise failed
            }
          })
      );
    }
  }

  if (newUsername) {
    promises.push(
      updateProfile(auth.currentUser, {
        displayName: newUsername,
      })
    );
  }

  if (newEmail) {
    const inputedEmail = newEmail;
    if (user) {
      promises.push(
        sendEmailVerification(user)
          .then(() => {
            console.log('Email verification sent.');
            setShowModel(true);
            setType('EMAIL UPDATE');
            setErrorMessage('A verification email has been sent to your current email address. Please check your inbox and follow the instructions to verify your email address.');
            return true;
          })
          .then(() => {
            return updateEmail(user, inputedEmail);
          })
          .catch((error) => {
            if (error.code === 'auth/user-token-expired') {
              console.log('User token expired - continuing with other promises');
              // Handle the user-token-expired error but continue with other promises
              return true; // Indicate that this part of the promise succeeded
            } else {
              // Handle other errors and prevent Promise.all from rendering
              return Promise.reject(error); // Indicate that this part of the promise failed
            }
          })
      );
    }
  }

  if (!newUsername && !newEmail && !newPassword) {
    setLoading(false);
    setShowModel(true);
    setType('ERROR');
    setErrorMessage("All fields are empty, and as such, the profile can't be updated with empty fields");
  } else {
    try {
      await Promise.all(promises);
      setShowModel(true);
      setErrorMessage("Profile Update Successful!...before you can make any more change, you need to logOut and Re-login");
      setType('SUCCESSFUL');
      setLoading(false);
      navigation.navigate('Bottom');
      setNewUsername("");
      setNewEmail("");
      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
    } catch (error) {
      // Handle other errors here and display appropriate error message
      setShowModel(true);
      setType('ERROR');
      setErrorMessage(error.message);
    }
  }
};



  
  
  
  
  



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
                  value={i.state}
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

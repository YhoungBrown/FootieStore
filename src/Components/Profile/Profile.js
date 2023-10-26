import { View, Text, Box, ScrollView, VStack, FormControl, Input, KeyboardAvoidingView } from 'native-base'
import React from 'react'
import colors from '../../color'
import Buttone from "../Buttone"
import { Platform } from 'react-native'



const inputs = [
  {
    id:"username",
    label: "USERNAME",
    type:"text",
  },
  {
    id:"Email",
    label: "EMAIL",
    type:"email",
  },
  {
    id:"NewPassword",
    label: "NEW PASSWORD",
    type:"password",
  },
  {
    id:"ConfirmPassword",
    label: "CONFIRM PASSWORD",
    type:"password",
  },
]


const Profile = () => {
  return (
    <Box h={"full"} bg={colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {inputs.map((i) => (
            <FormControl key={i.id}>
            <FormControl.Label
            _text={{
              fontSize: "12px",
              fontWeight: "bold"
            }}>{i.label}</FormControl.Label>
            <KeyboardAvoidingView 
            behavior= {Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}>
            <Input
             borderWidth={0.2} 
             bg={colors.deepGray}
             type={i.type}
             py={4}
             placeholder=''
             borderColor={colors.main}
             _focus={{
                bg: colors.subGreen,
                borderColor: colors.main,
                borderWidth: 1}}
             color={colors.black}
             fontSize={15}/>
            </KeyboardAvoidingView>
          </FormControl>
          ))}
          <Buttone bg={colors.main} color={colors.white}>
            UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  )
}

export default Profile
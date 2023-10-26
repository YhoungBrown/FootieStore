import {View, Text, Center, Image, Heading} from "native-base"
import React from 'react'
import colors from "../color"
import Tabs from "../Components/Profile/Tabs"

const ProfileScreen = () => {
  return (
    <>
      <Center bg={colors.main} pt={10} pb={6}>
      <Image source={require("../../assets/user.png")}
        alt="profile"
        w={24}
        h={24}
        resizeMode="cover"
      />
      <Heading bold fontSize={17} isTruncated my={2} color={colors.white}>
        Admin Doe
      </Heading>
      <Text italic fontSize={10} color={colors.white}>Joind Oct 21, 2023</Text>
      </Center>
      {/**TABS */}

      <Tabs />
      
    </>
  )
}

export default ProfileScreen
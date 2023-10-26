import { View, Text, Box, ScrollView, Pressable, HStack, Button } from 'native-base'
import React from 'react'
import colors from '../../color'

const Orders = () => {
  return (
    <Box h={"full"} bg={colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/**PAid Order */}
        <Pressable>
          <HStack 
          space={4} 
          justifyContent={"space-between"}
          alignItems={"center"}
          bg={colors.deepGray}
          py={5}
          px={2}>
            <Text fontSize={9} color={colors.blue} isTruncated>
              64645383844766557
            </Text>
            <Text fontSize={12} bold color={colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={colors.black} isTruncated>
              Oct 22 2023
            </Text>
            <Button px={7} py={1.5} rounded={50} bg={colors.main}
            _text={{
              color:colors.white,
            }}
            _pressed={{
              bg: colors.main
            }}>
              $456
            </Button>
          </HStack>
        </Pressable>

        {/**Not Paid */}
        <Pressable>
          <HStack 
          space={4} 
          justifyContent={"space-between"}
          alignItems={"center"}
          py={5}
          px={2}>
            <Text fontSize={9} color={colors.blue} isTruncated>
              64645383844766557
            </Text>
            <Text fontSize={12} bold color={colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={colors.black} isTruncated>
              Oct 23 2023
            </Text>
            <Button px={7} py={1.5} rounded={50} bg={colors.red}
            _text={{
              color:colors.white,
            }}
            _pressed={{
              bg: colors.red
            }}>
              $23
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}

export default Orders
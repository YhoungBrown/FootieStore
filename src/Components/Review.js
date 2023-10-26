import { View, Text, Box, Heading, VStack, FormControl, Select, CheckIcon, Center, TextArea } from 'native-base'
import React from 'react'
import colors from '../color'
import Ratings from './Ratings'
import Message from './Notifications/Message'
import { useState } from 'react'
import Buttone from './Buttone'


const Review = () => {
    const [ratings, setRatings] = useState("")
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/**If there is no review */}
      {/*<Message color={colors.main} 
        bg={colors.deepGray} 
        size={10}
        children={"NO NEW REVIEW"}
        bold
            />*/}
      {/**Review */}
      <Box p={3} bg={colors.deepGray} mt={5} rounded={5}>
            <Heading fontSize={15} color={colors.black}>
                User Doe
            </Heading>
            <Ratings value={4}/>
            <Text my={2} fontSize={11}>Oct 20, 2023</Text>
            <Message color={colors.black} bg={colors.white} size={10}
                children={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            />
      </Box> 
      {/**WRITE REVIEW*/}
        {/*<Box mt={6}>
            <Heading fontSize={15} bold mb={4}>
                REVIEW THIS PRODUCT
            </Heading>
            <VStack>
                <FormControl>
                    <FormControl.Label _text={{
                        fontSize:"12px",
                        fontWeight:"bold",
                    }}>
                        Rating
                    </FormControl.Label>
                    <Select 
                    bg={colors.subGreen} 
                    borderWidth={0} 
                    rounded={5} 
                    py={4} 
                    placeholder='Choose Rate' 
                    _selectedItem={{
                        bg: colors.subGreen,
                        endIcon: <CheckIcon size={3} />
                    }}
                    selectedValue={ratings}
                    onValueChange={(e) => setRatings(e)}>
                        <Select.Item label='1 - Poor' value='1' />
                        <Select.Item label='2 - Fair' value='2' />
                        <Select.Item label='3 - Good' value='3' />
                        <Select.Item label='4 - Great!' value='4' />
                        
                    </Select>
                </FormControl>
                <FormControl>
                    <FormControl.Label _text={{
                        fontSize:"12px",
                        fontWeight:"bold",
                    }}>
                        Comment
                    </FormControl.Label>
                    <TextArea 
                    h={24} 
                    w={'full'} 
                    placeholder='This product is good.....' 
                    borderWidth={0} 
                    bg={colors.subGreen} 
                    py={4}
                    _focus={{
                        bg: colors.subGreen
                    }}
                    />
                </FormControl>
                <Buttone bg={colors.main} 
                    color={colors.white}
                    mt={5}
                    my={2}>SUBMIT</Buttone>*

                    {/**If User isnt loged in */}
                {/*<Message 
                color={colors.white} 
                bg={colors.black}     
                children={"Please 'Login' to write a review"}
                />
            </VStack>
            
            </Box>*/}
    </Box>
  )
}

export default Review
import React, { useEffect, useState } from 'react'
import { Box, Center, HStack, Pressable, Image, VStack, Text, Button, View} from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import colors from '../color'
 import {FontAwesome} from "@expo/vector-icons"
 import products from "../data/Products"
 import { useDispatch, useSelector } from 'react-redux';
import { removeFootwear, selectShoppingBasket, setFootwear } from '../../features/shoppingBasketSlice';
import { TouchableOpacity } from 'react-native'
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { selectUser } from '../../features/userSlice'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'




const CartItems = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
   // const shoppingBasket = useSelector((state) => state.shoppingBasket.footwears);
   const shoppingBasket = useSelector(selectShoppingBasket);
   const navigation = useNavigation();
   const [fetchedData, setFetchedData] = useState([]);



   // Firestore document reference
  
  
  const cartDocRef = doc(db, 'shoppingBasket', user.uid);

  useEffect(() => {
    const unsubscribe = onSnapshot(cartDocRef, (doc) => {
      if (doc.exists()) {
        const cartData = doc.data();
        setFetchedData(cartData.items);
        // Optionally, you can also update the Redux store with the fetched data
        dispatch(setFootwear(cartData.items));
        //console.log("fetched Data :", fetchedData);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [])


   const removeFromShoppingBasket = (id) => {
    console.log('CheckOut:', shoppingBasket);
    dispatch(removeFootwear({ id }));
  
    // Use the latest shoppingBasket from Redux
    {/*const updatedShoppingBasket = useSelector(selectShoppingBasket);
  
    // Update the shoppingBasket in Firestore
      const collectionRef = collection(db, 'shoppingBasket');
      const docRef = doc(collectionRef, user.uid);

      // The code to set/update the document should use `docRef`
      setDoc(docRef, { items: updatedShoppingBasket })
      .then(() => {
        console.log('Document set/updated successfully');
      })
      .catch((error) => {
       console.error('Error setting/updating document: ', error);
      });*/}
  };
  
  


    const Swiper = () => (
        <SwipeListView
        rightOpenValue={-50}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={fetchedData}
        renderHiddenItem={renderHiddenItems}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}/>
    )


    const renderItems = (data) => (
        <Pressable>
            <Box ml={6} mb={3}>
                <HStack 
                alignItems={"center"} 
                bg={colors.white} 
                shadow={2}
                mt={2}
                rounded={10}
                overflow={'hidden'}>
                    <Center w={"25%"} bg={colors.deepGray}>
                    <Image 
                        source={{uri: data.item.image}} 
                        alt={data.item.name}
                        w="full"
                        h={24}
                        /> 
                    </Center>
                    <VStack w={"60%"} px={2} space={2}>
                        <Text 
                        isTruncated 
                        color={colors.black} 
                        bold
                        fontSize={11}>
                        {data.item.name}
                        </Text>
    
                        <Text 
                        bold 
                        color={colors.lightBlack}>
                        ${data.item.price}
                        </Text>
                    </VStack> 
                    <Center>
                        <Button 
                        bg={colors.main}
                        _pressed={{bg:colors.main}}
                        _text={{color: colors.white}}>{data.item.quantity}</Button>
                    </Center>
                </HStack>
            </Box>
        </Pressable>
    )


    //Hidden Items
const renderHiddenItems = (data) => (
<TouchableOpacity onPress={() => removeFromShoppingBasket(data.item.id)} activeOpacity={0.5}>
    <View 
    w={50} 
    mt={2}
    roundedTopRight={10} 
    roundedBottomRight={10}
    //onPress={() => removeFromShoppingBasket(data.item.id)} 
    h={"88%"} 
    ml={"auto"} 
    justifyContent={"center"} 
    bg={colors.red}>
        <Center alignItems={"center"} space={2}>
            <FontAwesome 
            name='trash'
            size={24}
            color={colors.white}
            />
        </Center>
    </View>
</TouchableOpacity>
)


  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  )
}

export default CartItems
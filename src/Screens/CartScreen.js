import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  Box,
  Center,
  ScrollView,
  HStack,
  Button,
  Flex,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Buttone from '../Components/Buttone';
import { useNavigation } from '@react-navigation/native';
import {
  selectShoppingBasket,
  selectShoppingBasketTotal,
  setFootwear,
} from '../../features/shoppingBasketSlice';
import colors from '../color';
import CartEmpty from "../Components/CartEmpty";
import CartItems from '../Components/CartItems';
import { useEffect } from 'react';
import { collection, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { selectUser } from '../../features/userSlice';

const CartScreen = () => {
  //const shoppingBasket = useSelector((state) => state.shoppingBasket.footwears);
  const shoppingBasket = useSelector(selectShoppingBasket);
  const shoppingBasketTotal = useSelector(selectShoppingBasketTotal);
  const navigation = useNavigation();
  const user = useSelector(selectUser);
 // const dispatch = useDispatch();
  



  useLayoutEffect(() => {
    const collectionRef = collection(db, 'shoppingBasket');
        const docRef = doc(collectionRef, user.uid);
       setDoc(docRef, { items: shoppingBasket });
        console.log(shoppingBasket);
        console.log('Document set/updated successfully');
  }, [shoppingBasket, navigation])
  

  
  console.log(shoppingBasketTotal)
  console.log(shoppingBasket)
  return (
    <Box flex={1} safeAreaTop bg={colors.subGreen}>
      {/* Header */}
      <HStack
        alignItems={'center'}
        justifyContent={'center'}
        space={2}
        w={'full'}
        py={3}>
        <Text color={colors.black} fontSize={20} bold>
          Cart
        </Text>
        <FontAwesome name="shopping-basket" size={20} color={colors.main} />
      </HStack>

      {shoppingBasket.length === 0 ? (
        // Empty cart
        <CartEmpty />
      ) : (
        // Cart Items
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItems />
          {/* Total */}
          <Center mt={5}>
            <HStack
              rounded={30}
              justifyContent={'space-between'}
              bg={colors.white}
              shadow={2}
              w={'90%'}
              pl={5}
              h={45}
              my={3}
              alignItems={'center'}>
              <Text bold>Total</Text>
              <Button
                px={10}
                h={45}
                rounded={50}
                 bg={colors.main}
                _text={{
                  color: colors.white,
                 fontWeight: 'semibold',
                }}
                _pressed={{
                  bg: colors.main,
                }}>
                {"$" + shoppingBasketTotal}
              </Button>
            </HStack>
          </Center>
          {/* Checkout */}
          <Center px={5}>
            <Buttone
              onPress={() => navigation.navigate('Shipping')}
              bg={colors.black}
              color={colors.white}
              my={10} >
              CHECKOUT
            </Buttone>
          </Center>
        </ScrollView>
      )}
    </Box>
  );
};


export default CartScreen;

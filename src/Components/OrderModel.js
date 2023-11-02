import { View, Text, Center, Modal, VStack, HStack, Button, Pressable, Image} from 'native-base'
import React from 'react'
import { useState } from 'react'
import Buttone from './Buttone'
import colors from '../color'
//import OrderInfo from './OrderInfo'
import "../../consoleOverride/consoleOverride";
import { useNavigation } from '@react-navigation/native'
import { selectShoppingBasketTotal } from '../../features/shoppingBasketSlice';
import { useSelector } from 'react-redux';




const OrderModel = () => {
    const navigation = useNavigation();
    const [showModel, setShowModel] = useState(false);
    const shoppingBasketTotal = useSelector(selectShoppingBasketTotal);


    const OrdersInfos = [
        {
            id: 1,
            title: "Products",
            price: shoppingBasketTotal,
            color: "black"
        },
        {
            id: 2,
            title: "Shipping",
            price: 34.00,
            color: "black"
        },
        {
            id: 3,
            title: "Tax",
            price: 23.34,
            color: "black"
        },
        {
            id: 4,
            title: "Total Amount",
            price: shoppingBasketTotal + 34.00 + 23.34,
            color: "main"
        },
    ]



  return (
    <Center>
      <Buttone onPress={() => setShowModel(true)} bg={colors.main} color={colors.white} mt={5}>
      SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal 
      isOpen={showModel} 
      onClose={() => setShowModel(false)} 
      size={"lg"}>
        <Modal.Content maxWidth={350}>
            <Modal.CloseButton />
            <Modal.Header>Order</Modal.Header>
            <Modal.Body>
                <VStack space={7}>
                {OrdersInfos.map((i) => (
                    <HStack key={i.id} alignItems={"center"} justifyContent={"space-between"}>
                        <Text fontWeight={"medium"}>{i.title}</Text>
                        <Text 
                        color={i.color === "main" ? colors.main : colors.black} bold>
                        ${i.price}
                        </Text>
                    </HStack>
                ))}
                </VStack>
            </Modal.Body>
            <Modal.Footer>
            <Pressable w={"full"} justifyContent={"center"} bg={colors.paypal} h={45} onPress={() => setShowModel(false)} 
            rounded={3} overflow={"hidden"}>
                <Image source={require("../../assets/Paypal.png")}
                alt='Paypal' resizeMode='contain' w={"full"} h={34}
                />
            </Pressable>
                <Button 
                w={"full"}
                mt={2}
                bg={colors.black} 
                h={45}
                _text={{
                    color:colors.white
                }}
                onPress={() => {
                    navigation.navigate("Home")
                    setShowModel(false)}}
                _pressed={{
                    bg: colors.black
                }}>
                    PAY LATER
                </Button>
            </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default OrderModel
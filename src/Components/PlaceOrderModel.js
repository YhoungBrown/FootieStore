import { View, Text, Center, Modal, VStack, HStack, Button } from 'native-base'
import React from 'react'
import { useState } from 'react'
import Buttone from './Buttone'
import colors from '../color'
import { useNavigation } from '@react-navigation/native'

const OrdersInfos = [
    {
        id: 1,
        title: "Products",
        price: 125.77,
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
        price: 3458.00,
        color: "main"
    },
]

const PlaceOrderModel = () => {
    const navigation = useNavigation()

    const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <Buttone onPress={() => setShowModel(true)} bg={colors.black} color={colors.white} mt={5}>
      SHOW TOTAL
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
                <Button 
                flex={1} 
                bg={colors.main} 
                h={45}
                _text={{
                    color:colors.white
                }}
                onPress={() => {
                    navigation.navigate("Order");
                    setShowModel(false)
                }}
                _pressed={{
                    bg: colors.main
                }}>
                    PLACE AN ORDER
                </Button>
            </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default PlaceOrderModel
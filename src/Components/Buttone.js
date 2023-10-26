import { Button } from 'native-base'
import React from 'react'

const Buttone = ({mt, bg, color, children, onPress, my}) => {
  return (
    <Button w="full" my={my} mt={mt}  h={55} rounded="full" bg={bg} _text={{
        color:color, fontWeight:"bold"}} _pressed={{bg:bg}}
            onPress={onPress}
        >
            {children}
        </Button>
  )
}

export default Buttone
import { Button } from 'native-base'
import React from 'react'
import colors from '../color'

const Buttone = ({mt, bg, color, children, onPress, my}) => {
  return (
    <Button w="full" my={my} mt={mt}  h={55} rounded="full" bg={bg} _text={{
        color:color, fontWeight:"bold"}} _pressed={{bg: colors.ash}}
            onPress={onPress}
        >
            {children}
        </Button>
  )
}

export default Buttone
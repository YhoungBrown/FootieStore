import React from 'react';
import { Modal, VStack, Button, Text } from 'native-base';
import colors from '../color';

const Modall = ({ showModel, setShowModel, type, message }) => {
  return (
    <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
      <Modal.Content maxWidth={350}>
        <Modal.CloseButton _icon={{ color: colors.main}} />
        <Modal.Header _text={{ color: colors.main, fontWeight: "600" }}>{type}</Modal.Header>
        <Modal.Body>
          <VStack my={3} space={7}>
            <Text fontWeight="medium">{message}</Text>
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button
            w="full"
            bg={colors.main}
            h={45}
            fontSize={25}
            fontWeight={'bold'}
            _text={{
              color: 'white',
            }}
            onPress={() => {
              setShowModel(false);
            }}
            _pressed={{
                bg: colors.ash
            }}
          >
            OKAY
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default Modall;

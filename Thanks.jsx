import {React, useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Editable, EditableInput, EditablePreview,
    VStack
  } from "@chakra-ui/react"
import RadioButton from './RadioButton';

function Thanks({ pledgeAmount, disableButton, buttonVariant,buttonColor, buttonbg, buttonText, buttonSize, buttonColorScheme, buttonLeftIcon, paddingLeft, paddingRight, bookmarkState }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [searchString, setSearchString] = useState();

    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Editable defaultValue={pledgeAmount} textColor='black' borderColor='teal'>
                <EditablePreview />
                <EditableInput />
            </Editable>
            <Button
                leftIcon={buttonLeftIcon}
                size={buttonSize}
                bg={buttonbg}
                color={buttonColor}
                colorScheme={buttonColorScheme}
                borderRadius='48'
                pl={paddingLeft}
                pr={paddingRight}
                onClick={bookmarkState}
                variant={buttonVariant}
                isDisabled={disableButton}
                onClick={onOpen}
            >
                {buttonText}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
                <ModalOverlay />
                    
                    <ModalContent p='8'>
                        <VStack>
                        <ModalHeader>Thanks for your support!</ModalHeader>
                            <ModalBody textAlign='center'>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                     leftIcon={buttonLeftIcon}
                                     size={buttonSize}
                                     bg={buttonbg}
                                     color={buttonColor}
                                     colorScheme={buttonColorScheme}
                                     borderRadius='48'
                                     pl={paddingLeft}
                                     pr={paddingRight}
                                     onClick={bookmarkState}
                                     variant={buttonVariant}
                                     isDisabled={disableButton}
                                     onClick={onClose}
                                >
                                    Got it!
                                </Button>
                            </ModalFooter>
                            </VStack>
                    </ModalContent>
                    
            </Modal>
        </>
    )
}

export default Thanks

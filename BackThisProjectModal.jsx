import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from "@chakra-ui/react"
import RadioButton from './RadioButton';

function BackThisProjectModal({ disableButton, buttonVariant,buttonColor, buttonbg, buttonText, buttonSize, buttonColorScheme, buttonLeftIcon, paddingLeft, paddingRight, bookmarkState }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
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

            <Modal isOpen={isOpen} onClose={onClose} size='3xl' maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader mt='8'>Back This Project</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Want to support us in bringing Mastercraft Bamboo Monitor rise out in the world?
                    <RadioButton />
                </ModalBody>

                
                </ModalContent>
            </Modal>
        </>
    )
}

export default BackThisProjectModal

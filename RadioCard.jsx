import { Box, Heading, HStack, Spacer, Text, Input  } from '@chakra-ui/react'
import React from 'react'
import StandardButton from './StandardButton'
import {
    useDisclosure
  } from "@chakra-ui/react"
import BackThisProjectModal from './BackThisProjectModal'
import Thanks from './Thanks'


function RadioCard({ pledgeAmount, showValue, cardHeading, cardText, donateData, stockLeft, cardDisabled, disableButton, showCard, opacityValue }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    let borderColorValue = 'gray.500'
    let borderWidthValue = '1px'
    if(showValue === showCard){
        borderWidthValue='3px'
        borderColorValue = 'teal'
    }
    return (
        <Box
            opacity={opacityValue}
            color='white' 
            borderWidth={borderWidthValue}
            borderColor={borderColorValue}
            bg='white' 
            p='4'
            borderRadius='lg'
            mt='8'
            ml='4'
            w='94%'
        >
            <HStack>
                <Heading color='black' size='sm' m='4' display='flex' justifyContent='left' pt='2'>
                    {cardHeading}
                </Heading>
                
                <Text color='teal' ml='4'>
                    {donateData}
                </Text>
                <Spacer />
                <Heading size='lg' color='black' ml='4'>{stockLeft}</Heading> <Text color='gray.500'>left</Text>

            </HStack>
            <Text color='gray.500' m='4' display='flex' justifyContent='left' textAlign='left'>
                {cardText}
            </Text>
            {showValue === showCard && <HStack>
                <Text color='black' ml='4'>Enter your Pledge</Text>
                <Spacer />
                
                <Thanks 
                    // variant='solid' 
                    buttonText='Continue' 
                    buttonSize='lg' 
                    buttonColorScheme='teal'
                    px='16'
                    paddingLeft='8'
                    paddingRight='8'
                    pledgeAmount={pledgeAmount}
                    
                />
                
                </HStack> 
            }
            
        
        </Box>
    )
}

export default RadioCard

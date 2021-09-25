import { Box, Heading, HStack, Spacer, Text,  } from '@chakra-ui/react'
import React from 'react'
import StandardButton from './StandardButton'
import BackThisProjectModal from './BackThisProjectModal'


function Card({ cardHeading, cardText, donateData, stockLeft, cardDisabled, disableButton }) {
    let opacityValue = '100%'
    if(cardDisabled == 'true'){
        opacityValue = '50%'
    }
    return (
        <Box
            opacity={opacityValue}
            color='white' 
            borderWidth='1px'
            borderColor='gray.300'
            bg='white' 
            p='4'
            borderRadius='lg'
            mt='8'
            ml='4'
            w='94%'
            
        >
            <HStack >
                <Heading color='black' size='sm' m='4' display='flex' justifyContent='left' pt='2'>
                    {cardHeading}
                </Heading>
                <Spacer />
                <Text color='teal'>
                    {donateData}
                </Text>
            </HStack>
            <Text color='gray.500' m='4' display='flex' justifyContent='left' textAlign='left'>
                {cardText}
            </Text>

            <HStack>
                <Heading size='lg' color='black' ml='4'>{stockLeft}</Heading> <Text color='gray.500'>left</Text>
                <Spacer />
                {/* <StandardButton 
                    buttonText='Select Reward' 
                    buttonSize='lg' 
                    buttonColorScheme='teal'
                    px='16'
                    paddingLeft='8'
                    paddingRight='8'
                    buttonbg='teal'
                    disableButton={disableButton}
                /> */}
                <BackThisProjectModal 
                    // variant='solid' 
                    buttonText='Select Reward' 
                    buttonSize='lg' 
                    buttonColorScheme='teal'
                    px='16'
                    paddingLeft='8'
                    paddingRight='8'
                    buttonbg='teal'
                />
            </HStack> 
        
        </Box>
    )
}

export default Card

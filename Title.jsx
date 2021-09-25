import { Box, Flex, Heading, VStack, Text, HStack, Spacer } from '@chakra-ui/react'
import { React, useState } from 'react'
import BackThisProjectModal from './BackThisProjectModal'
import StandardButton from './StandardButton'

function Title() {
    
    const onOpen = 'onOpen'
    
    return (
        <VStack>
            <Flex>
                <Box 
                    color='white' 
                    borderWidth='1px' 
                    bg='white' 
                    mt='-100px' 
                    borderRadius='lg'
                    width='40rem'
                >
                    <Heading 
                        color='black' 
                        mt='16px' 
                        p='8' 
                        pb='4' 
                        size='lg'
                        px='16'
                    >
                        Mastercard Bamboo Monitor Riser
                    </Heading>
                    <Text color='gray'>
                        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                    </Text>
                    <HStack p='8' >
                        {/* <StandardButton 
                            // variant='solid' 
                            buttonText='Back this Project' 
                            buttonSize='lg' 
                            buttonColorScheme='teal'
                            px='16'
                            paddingLeft='8'
                            paddingRight='8'
                            buttonbg='teal'
                        /> */}

                        <BackThisProjectModal 
                            // variant='solid' 
                            buttonText='Back this Project' 
                            buttonSize='lg' 
                            buttonColorScheme='teal'
                            px='16'
                            paddingLeft='8'
                            paddingRight='8'
                            buttonbg='teal'
                        />
                        <Spacer />
                        <StandardButton 
                            buttonLeftIcon={<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>}
                            paddingLeft='-8'
                            buttonText= {'bookmark'}
                            buttonSize='lg' 
                            buttonColorScheme='black'
                            px='16'
                            buttonbg='white'
                            buttonColor='black'                      
                        />
                            
                    </HStack>
                </Box>
            </Flex>
        </VStack>
    )
}

export default Title

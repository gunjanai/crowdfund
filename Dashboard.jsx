import { Box, Flex, Heading, HStack, VStack, Stack, Divider, Progress, Text } from '@chakra-ui/react'
import React from 'react'

function Dashboard() {
    return (
        <VStack >
            <Flex>
                <Box 
                    color='white' 
                    borderWidth='1px' 
                    bg='white' 
                    p='8'
                    pt='4'
                    borderRadius='lg'
                    m='8'
                    w='40rem'
                >
                    <HStack>
                        <Stack p='8' pl='4'>
                            <Heading color='black'>
                                $89,914
                            </Heading>
                            <Heading size='sm' color='gray.500'>
                                of $100,000 backed
                            </Heading>
                        </Stack>
                        <Divider orientation="vertical" />
                        <Stack p='8'>
                            <Heading color='black'>
                                5,007
                            </Heading>
                            <Heading size='sm' color='gray.500'>
                                total backers
                            </Heading>
                        </Stack>
                        <Divider orientation="vertical" />
                        <Stack p='4'>
                            <Heading color='black'>
                                56
                            </Heading>
                            <Heading size='sm' color='gray.500'>
                                days left
                            </Heading>
                        </Stack>
                    </HStack>
                    <Progress value={80} borderRadius='lg' colorScheme='teal' bg='gray.100' />
                </Box>
            </Flex>
        </VStack>
    )
}

export default Dashboard

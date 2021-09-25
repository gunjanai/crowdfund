import React from 'react';
import { Box, Flex, Heading, HStack, VStack, Stack, Divider, Progress, Spacer, Text } from '@chakra-ui/react'
import Card from './Card';

function LandingPageDescription() {
    return (
        <VStack>
            <Flex>
                <Box 
                    color='white' 
                    borderWidth='1px' 
                    bg='white' 
                    p='8'
                    pt='4'
                    borderRadius='lg'
                    mb='8'
                    w='40rem'
                >
                    <Heading color='black' size='sm' m='4' display='flex' justifyContent='left' pt='8'>
                        About this Project
                    </Heading>
                    <Text color='gray.500' m='4' display='flex' justifyContent='left' pt='4' textAlign='left'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </Text>

                    <Card 
                        cardText='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                        donateData='Pledge $25 or more'
                        cardHeading='Bamboo Stand'
                        stockLeft='101'
                    />
                    <Card 
                        cardText='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                        donateData='Pledge $75 or more'
                        cardHeading='Black Edition Stand'
                        stockLeft='64'
                    />
                    <Card 
                        cardText='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                        donateData='Pledge $200 or more'
                        cardHeading='Mahogany Special Edition'
                        stockLeft='0'
                        cardDisabled='true'
                        disableButton='true'
                    />
                        
                </Box>
            </Flex>
        </VStack>
    )
}

export default LandingPageDescription

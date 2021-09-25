import { VStack, Flex, Spacer, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import './Header.css';

function Header() {
    return (
        <div>
            <VStack >
                <Flex p='8' w='100%' className='header-container' height={80}>
                    <Heading size='md' ml='32' color='white'>
                        crowdfund
                    </Heading>
                    <Spacer />
                    <div class='header-links' >
                        <Link color='white'>
                            About
                        </Link>
                        <Link ml={8} color='white'>
                            Discover
                        </Link>
                        <Link ml={8} color='white'>
                            Get Started
                        </Link>
                    </div>
                </Flex>
            </VStack>
        </div>
    )
}

export default Header

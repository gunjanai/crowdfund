import { useState, React } from 'react'
import { Radio, RadioGroup, Stack  } from "@chakra-ui/react"
import RadioCard from './RadioCard'

function RadioButton() {
    const [value, setValue] = useState("1")

    return (
        <RadioGroup onChange={setValue} value={value}>
            <Stack spacing={5} direction="column" pb='8'>
                <Radio colorScheme="teal" value="1">
                    <RadioCard 
                        cardHeading='Pledge with no reward'
                        cardText='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'    
                        showCard={value}
                        showValue='1'
                    />
                </Radio>
                <Radio colorScheme="teal" value="2">
                    <RadioCard 
                        cardHeading='Bamboo Stand'
                        cardText='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                        donateData='Pledge $25 or more'
                        stockLeft='101'
                        showCard={value}
                        showValue='2'
                        pledgeAmount='$25'
                    />
                </Radio>
                <Radio colorScheme="teal" value="3">
                    <RadioCard 
                        cardText='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                        donateData='Pledge $75 or more'
                        cardHeading='Black Edition Stand'
                        stockLeft='64'
                        showCard={value}
                        showValue='3'
                        pledgeAmount='$75'
                    />
                </Radio>
                <Radio colorScheme="teal" value="4" isDisabled>
                    <RadioCard 
                        cardText='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                        donateData='Pledge $200 or more'
                        cardHeading='Mahogany Special Edition'
                        stockLeft='0'
                        cardDisabled='true'
                        disableButton='true'
                        showCard={value}
                        showValue='0'
                    />
                </Radio>
            </Stack>
        </RadioGroup>
    )
}

export default RadioButton

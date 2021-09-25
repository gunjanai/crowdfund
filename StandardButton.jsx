import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import BackThisProjectModal from './BackThisProjectModal'

function StandardButton( {  disableButton, buttonVariant,buttonColor, buttonbg, buttonText, buttonSize, buttonColorScheme, buttonLeftIcon, paddingLeft, paddingRight, bookmarkState } ) {
    const [buttonState, setbuttonState] = useState('')

    return (
        <>
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
                // onClick={() => { setbuttonState('onOpen') } }
            >
                {buttonText}
            </Button>
            <div>
                {buttonState === 'onOpen' && <BackThisProjectModal onOpen='onOpen' />}
            </div>
        </>
    )
}

export default StandardButton


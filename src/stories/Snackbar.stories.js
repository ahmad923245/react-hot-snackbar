import React, { useState } from "react";
import { storiesOf } from '@storybook/react'

import { Snackbar } from "../components/Snackbar";

const stories = storiesOf('App Test', module)


stories.add('App', () => {


    const [isActive, setisActive] = useState(false)
    const [message, setmessage] = useState('')

    const showMessage = () => {
        setisActive(true)
        setmessage('This is a message for example')


        setTimeout(() => {
            setisActive(false)
        }, 4000)
    }


    return (
        <>
            <Snackbar
                type={'success'}
                isActive={isActive}
                message={message}
            />

            <button onClick={showMessage}>show</button>
        </>


    )
})
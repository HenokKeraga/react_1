
import React from 'react'

export const UserInput = (props) => {

    return (<div>
        <input
            onChange={props.userNameInput} value={props.currenctName}>

        </input>
    </div>
    )
}
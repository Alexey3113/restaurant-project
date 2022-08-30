import React from "react"
import { IInput } from "../../../types/types"

import "./input.scss"

export const Input: React.FC<IInput> = React.memo(({
    changeValue,
    value,
    type = "text",
    title,
    placeholder=""
}) => {
    return (
        <div className="input">
            <label> {title} </label>
            <input type={type} value={value} onChange={changeValue} placeholder={placeholder} />
        </div>
    )
})

import React from "react"
import { ICheckbox } from "../../../types/types"

import "./checkbox.scss"

console.log("rewtwe")
var tets = "tw"

export const Checkbox: React.FC<ICheckbox> = React.memo(({changeValue, title, value}) => {
    return (
        <div className="checkbox">
            <label className="custom-checkbox">
                <input type="checkbox" name="color-1" onChange={changeValue} checked={value} />
                <span> {title} </span>
            </label>
        </div>
    )
})

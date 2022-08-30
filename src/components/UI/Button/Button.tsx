import React from 'react'

import "./button.scss"

interface IProps  {
    title: string,
    click?: () => void | null, 
    yourClass?: string
}

const Button: React.FC<IProps> = React.memo(({title, yourClass = "", click}) => {
  return (
    <div className={`btn ${yourClass}`} onClick={click}>
        <button> {title} </button>
    </div>
  )
})

export default Button
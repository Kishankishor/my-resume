import React from 'react'
import './pageheader.scss'
export const PageHeader = (props) => {
  const {headerText , icons} = props
  return (
    <div className='wrapper'>
      <h2>{headerText}</h2>
      <span>{icons}</span>
    </div>
  )
}

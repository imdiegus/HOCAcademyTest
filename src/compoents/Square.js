import React from 'react'

export default function Square({children,odd}) {
  return (
    <div className={`square ${children?'':odd?'withOddBackground':'withBackground'}`}>
        {children}
    </div>
  )
}

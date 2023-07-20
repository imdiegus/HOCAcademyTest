import React, {  useMemo } from 'react'
import Square from './Square'

export default function Chessboard() {
    const rows=useMemo(()=>{
        return [
            1,2,3,4,5,6,7,8
        ]
    },[])
    const columns=useMemo(()=>{
        return['A','B','C','D','E','F','G','H']
    },[])
  return (
    <div>
        <div className='chessHeader'>
            {columns.map(item=>(
                <Square key={item+'header'}>
                    <p>{item}</p>
                </Square>
            ))}
        </div>
        <div className='chessBoard'>
            {rows.map((row,index)=>(
                <div className='chessRow' key={row}>
                    <Square >
                        <p>{row}</p>
                    </Square>
                    {columns.map((col)=>(
                        <Square odd={index%2===0} key={`${col}${row}`}/>
                    ))}
                    <Square >
                        <p>{row}</p>
                    </Square>
                </div>
            ))}
        </div>
        <div className='chessHeader'>
            {columns.map(item=>(
                <Square key={item+'footer'}>
                    <p>{item}</p>
                </Square>
            ))}
        </div>
    </div>
  )
}

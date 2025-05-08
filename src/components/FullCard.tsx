import React from 'react'
import Card from './Card'

export default function FullCard() {
  return (
    <div><Card item={{
          title: '',
          hasSub: undefined,
          hasDub: undefined,
          imgSrc: '',
          rate: 0,
          poster: undefined,
          description: undefined
      }}/>  </div>
  )
}

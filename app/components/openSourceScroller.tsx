"use client"

import React, { MouseEventHandler, useState } from 'react'
import Image from 'next/image'

import buttonup from "@/app/assets/svg/buttonup.svg"
import buttondown from "@/app/assets/svg/buttondown.svg"

import textData from "@/app/lib/opensource"

export default function OpenSourceScroller() {
  const [ index, setIndex ] = useState(0)

  function increment(by: number) {
    return (_: unknown) => {
      setIndex(prevIndex => {
        const nextIndex = prevIndex + by

        if (nextIndex == textData.length) {
          return 0
        }

        if (nextIndex == -1) {
          return textData.length - 1
        }

        return nextIndex
      })
    }
  }

  return (
    <div className=" flex gap-x-2 mt-auto">
      <div className='bg-gray-200 rounded-3xl flex-[3] p-5 flex items-center justify-center text-center'>
        <p className="text-black">{textData[index].text}</p>
      </div>
      <menu className="px-5 *:mx-auto my-auto">
        <Image src={buttonup} onClick={increment(+1)} alt="button-up"/>
        <p className="my-2 text-center">{index + 1}/{textData.length}</p>
        <Image src={buttondown} onClick={increment(-1)} alt="button-down"/>
      </menu>
    </div>
  )
}

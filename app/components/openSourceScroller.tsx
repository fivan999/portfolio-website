"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import buttonup from "@/app/assets/svg/buttonup.svg"
import buttondown from "@/app/assets/svg/buttondown.svg"
import eye from "@/app/assets/img/eye.png"

import textData from "@/app/lib/opensource"
import Link from 'next/link'

export default function OpenSourceScroller() {
  const [ index, setIndex ] = useState(() => {
    if (typeof window !== "undefined") {
      const savedIndex = localStorage.getItem("opensource-view-index")
      return parseInt(savedIndex || "0")
    }
    return 0
  })

  function increment(by: number) {
    function calculateIndex(prevIndex: number) {
      const nextIndex = prevIndex + by

      if (nextIndex == textData.length) {
        return 0
      }

      if (nextIndex == -1) {
        return textData.length - 1
      }

      return nextIndex
    }

    return (_: unknown) => {
      setIndex(prevIndex => {
        const newIndex = calculateIndex(prevIndex)
        localStorage.setItem("opensource-view-index", newIndex.toString())
        return newIndex
      })
    }
  }

  return (
    <div className=" flex gap-x-2 mt-auto">
      <div className='bg-gray-200 rounded-3xl flex-[3] p-5 pr-12 flex items-center justify-center text-center relative'>
        <p className="text-black">{textData[index].text}</p>
        {textData[index]?.url &&
        <Link
          title="Посмотреть изменения"
          target="_blank"
          href={textData[index].url}
          className="absolute right-0 bottom-0 rounded-ss-xl rounded-ee-xl px-2 py-1 bg-red-300 filter hover:brightness-110 active:brightness-125"
        >
          <Image width={32} height={32} src={eye} alt="view-button"/>
        </Link>
        }
      </div>
      <menu className="px-5 *:mx-auto my-auto">
        <Image title="Пролистнуть далее" className="filter hover:brightness-75 active:brightness-50" src={buttonup} onClick={increment(+1)} alt="button-up"/>
        <p className="my-2 text-center">{index + 1}/{textData.length}</p>
        <Image title="Пролистнуть обратно" className="filter hover:brightness-75 active:brightness-50" src={buttondown} onClick={increment(-1)} alt="button-down"/>
      </menu>
    </div>
  )
}

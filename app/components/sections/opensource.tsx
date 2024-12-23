"use client"

import React from 'react'
import Image from 'next/image'

import onezeroeight from "@/app/assets/img/onezeroeight.png"
// import OpenSourceScroller from '../openSourceScroller'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import santaHat from "@/app/assets/img/santa-hat.png"
import { IS_CRISTMAS, JOIN_DATE_108 } from '@/app/lib/constants'

const OpenSourceScroller = dynamic(() => import("@/app/components/openSourceScroller"), { ssr: false })

export default function OpenSourceSection() {
  return (
    <section className="bg-blue-800 mx-[-9999px] py-6 px-[9999px] mt-10 relative shadow-2xl">
      <h3 className="header text-center">И ещё, я люблю <span className="text-red-300">OpenSource!</span></h3>
      <article className="mt-3 flex flex-wrap-reverse gap-5 flex-row">
        <aside className="flex-shrink py-7 flex-grow min-w-72 jetbrains flex flex-col gap-y-4 text-2xl basis-2/3">
          <p>
            В Университете Иннополис есть организация "<span className="text-red-300">108</span>", которая делает
            софт для удобства студентов. С <span className="text-red-300">{JOIN_DATE_108}</span> я числюсь в этой организации и уже успел:
          </p>
          <OpenSourceScroller />
        </aside>
        <Link
          title="Перейти на страницу сообщества 108"
          href="https://github.com/one-zero-eight"
          className="flex-shrink-0 flex-grow-0 m-auto relative group"
          target="_blank"
        >
          {IS_CRISTMAS && <Image className="absolute right-0 top-[-10px] rotate-12 z-10 filter group-hover:invert duration-500" src={santaHat} alt="santa-hat"/>}
          <Image
            className="filter hover:invert group-hover:invert transition-[filter] duration-500 max-h-[320px] rounded-3xl"
            src={onezeroeight}
            width={320}
            height={320}
            quality={100}
            alt="one-zero-eight logo"
          />
        </Link>
      </article>
    </section>
  )
}

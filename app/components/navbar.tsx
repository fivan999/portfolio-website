import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import santaHat from "@/app/assets/img/santa-hat.png"
import { IS_CHRISTMAS } from '../lib/constants'

export default function Navbar() {
  return (
    <header className="flex flex-wrap items-center relative rounded-2xl mt-4 px-9 py-4 bg-white text-black font-[family-name:var(--font-manrope)] font-bold">
      {IS_CHRISTMAS && <Image className="absolute z-20 left-7 top-[-12px] -rotate-6" src={santaHat} width={40} alt="santa-hat"/>}
      <h1 className="text-4xl z-10 mr-auto">bebra_dev</h1>
      <nav className="flex gap-x-6 text-2xl z-10 flex-wrap">
        <Link href="/#projects">Проекты</Link>
        <Link href="/#skills">Навыки</Link>
        <Link href="/#achievements">Достижения</Link>
        <Link href="/#contact">Связаться</Link>
      </nav>
      <span>
        {/* Top circles */}
        <div className='circle bottom-0 left-0'></div>
        <div className='circle bottom-0 left-5'></div>
        <div className='circle bottom-0 left-12'></div>
        <div className='circle bottom-0 left-16'></div>
        <div className='circle bottom-0 left-[5.5rem]'></div>
        <div className='circle bottom-0 left-[7.4rem]'></div>
        <div className='circle bottom-0 left-[9rem]'></div>
        <div className='circle bottom-0 left-[10.3rem]'></div>
        <div className='circle bottom-0 left-[12.7rem]'></div>
        <div className='circle bottom-0 left-[15rem]'></div>
        <div className='circle bottom-0 left-[17.2rem]'></div>
        <div className='circle bottom-0 left-[20rem]'></div>
        <div className='circle bottom-0 left-[22rem]'></div>
        <div className='circle bottom-0 left-[25rem]'></div>
        <div className='circle bottom-0 left-[27.4rem]'></div>
        <div className='circle bottom-0 left-[30rem]'></div>
        <div className='circle bottom-0 left-[33rem]'></div>
        <div className='circle bottom-0 left-[35.2rem]'></div>
        <div className='circle bottom-0 left-[36.6rem]'></div>
        <div className='circle bottom-0 left-[39.4rem]'></div>
        <div className='circle bottom-0 left-[41.3rem]'></div>
        <div className='circle bottom-0 left-[44rem]'></div>
        <div className='circle bottom-0 left-[46.4rem]'></div>
        <div className='circle bottom-0 left-[48.8rem]'></div>
        <div className='circle bottom-0 left-[51.1rem]'></div>
        <div className='circle bottom-0 left-[53.1rem]'></div>
        <div className='circle bottom-0 left-[54.9rem]'></div>
        <div className='circle bottom-0 left-[56.3rem]'></div>
        <div className='circle bottom-0 left-[57.7rem]'></div>
        <div className='circle bottom-0 left-[59.2rem]'></div>
        <div className='circle bottom-0 left-[61.5rem]'></div>
        <div className='circle bottom-0 left-[62rem]'></div>
        {/* Bottom circles */}
        <div className='circle top-0 left-0'></div>
        <div className='circle top-0 left-5'></div>
        <div className='circle top-0 left-12'></div>
        <div className='circle top-0 left-16'></div>
        <div className='circle top-0 left-[5.5rem]'></div>
        <div className='circle top-0 left-[7.4rem]'></div>
        <div className='circle top-0 left-[9rem]'></div>
        <div className='circle top-0 left-[10.3rem]'></div>
        <div className='circle top-0 left-[12.7rem]'></div>
        <div className='circle top-0 left-[15rem]'></div>
        <div className='circle top-0 left-[17.2rem]'></div>
        <div className='circle top-0 left-[20rem]'></div>
        <div className='circle top-0 left-[22rem]'></div>
        <div className='circle top-0 left-[25rem]'></div>
        <div className='circle top-0 left-[27.4rem]'></div>
        <div className='circle top-0 left-[30rem]'></div>
        <div className='circle top-0 left-[33rem]'></div>
        <div className='circle top-0 left-[35.2rem]'></div>
        <div className='circle top-0 left-[36.6rem]'></div>
        <div className='circle top-0 left-[39.4rem]'></div>
        <div className='circle top-0 left-[41.3rem]'></div>
        <div className='circle top-0 left-[44rem]'></div>
        <div className='circle top-0 left-[46.4rem]'></div>
        <div className='circle top-0 left-[48.8rem]'></div>
        <div className='circle top-0 left-[51.1rem]'></div>
        <div className='circle top-0 left-[53.1rem]'></div>
        <div className='circle top-0 left-[54.9rem]'></div>
        <div className='circle top-0 left-[56.3rem]'></div>
        <div className='circle top-0 left-[57.7rem]'></div>
        <div className='circle top-0 left-[59.2rem]'></div>
        <div className='circle top-0 left-[61.5rem]'></div>
        <div className='circle top-0 left-[62rem]'></div>
        {/* Aside circles */}
      </span>
    </header>
  )
}

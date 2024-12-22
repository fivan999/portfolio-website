import Image from 'next/image'
import React from 'react'

import ryan from "@/app/assets/img/ryan.jpg"
import locationImage from "@/app/assets/svg/location2.svg"

import codeforces from "@/app/assets/svg/codeforces.svg"
import innopolis from "@/app/assets/svg/innopolis.svg"
import github from "@/app/assets/svg/github.svg"
import leetcode from "@/app/assets/svg/leetcode.svg"
import Link from 'next/link'


export default function HeroSection() {
  return (
    <section className="mt-28">
      <article className="flex gap-x-28">
        <Image className="rounded-3xl hidden sm:block" height={420} src={ryan} quality={100} alt="me"/>
        <main className="font-[family-name:var(--font-jetbrains)] my-auto">
          <h2 className="text-6xl">Иван Филатов</h2>
          <span>
            <Image
                src={locationImage}
                height={27}
                placeholder="blur"
                priority={true}
                loading="eager"
                alt="location-logo"
                className="text-red-500 inline-block"
              />
            <i className="text-xl inline-block ml-1 mt-1">Россия, <span className="text-green-300">Иннополис</span></i>
          </span>
          <p className="text-xl mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore corporis, quasi eum amet vitae culpa aliquam nisi explicabo odit numquam alias.
          </p>
        </main>
      </article>
      <footer className="flex justify-between px-6 py-4 rounded-2xl mt-10 bg-gray-100 w-full">
        <Image height={40} src={innopolis} alt='innopolis'/>
        <Link href="https://leetcode.com/fi_van/" target="_blank"><Image height={40} src={leetcode} alt='leetcode'/></Link>
        <Link href="https://github.com/fivan999" target="_blank"><Image height={40} src={github} alt='github'/></Link>
        <Link href="https://codeforces.com/profile/fi_van" target="_blank"><Image height={40} src={codeforces} alt='codeforces'/></Link>
      </footer>
    </section>
  )
}

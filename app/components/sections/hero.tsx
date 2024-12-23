import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ryan from "@/app/assets/img/ryan.jpg"
import locationImage from "@/app/assets/svg/location2.svg"
import codeforces from "@/app/assets/svg/codeforces.svg"
import innopolis from "@/app/assets/svg/innopolis.svg"
import github from "@/app/assets/svg/github.svg"
import leetcode from "@/app/assets/svg/leetcode.svg"
import santaHat from "@/app/assets/img/santa-hat.png"
import { CODEFORCES_URL, GITHUB_URL, HERO_DESCRIPTION, HERO_NAME, IS_CHRISTMAS, LEETCODE_URL, LOCATION_COUNTRY, LOCATION_TOWN } from '@/app/lib/constants'


export default function HeroSection() {
  return (
    <section className="mt-28">
      <article className="flex gap-x-5 lg:gap-x-28 relative">
        {IS_CHRISTMAS && <Image className="absolute hidden sm:block left-[100px] top-[-30px] -rotate-6" width={90} src={santaHat} alt="santa-hat"/>}
        <Image className="rounded-3xl hidden sm:block" height={420} src={ryan} quality={100} alt="me"/>
        <main className="font-[family-name:var(--font-jetbrains)] my-auto">
          <h2 className="text-6xl">{HERO_NAME}</h2>
          <span>
            <Image
                src={locationImage}
                height={27}
                priority={true}
                loading="eager"
                alt="location-logo"
                className="text-red-500 inline-block"
              />
            <i className="text-xl inline-block ml-1 mt-1">{LOCATION_COUNTRY}, <span className="text-green-300">{LOCATION_TOWN}</span></i>
          </span>
          <p className="text-xl mt-7">{HERO_DESCRIPTION}</p>
        </main>
      </article>
      <footer className="flex flex-col md:flex-row gap-2 items-center justify-between px-6 py-4 rounded-2xl mt-10 bg-gray-100 w-full">
        <Image title="Моё место учёбы" className="flex-shrink" height={40} src={innopolis} alt='innopolis-logo'/>
        <Link
          title="Перейти на мой профиль в LeetCode"
          href={LEETCODE_URL}
          target="_blank"
        ><Image height={40} src={leetcode} alt='leetcode-profile'/></Link>
        <Link
          title="Перейти на мой профиль в GitHub"
          href={GITHUB_URL}
          target="_blank"><Image height={40} src={github} alt='github-profile'/></Link>
        <Link
          title="Перейти на мой профиль на CodeForces"
          href={CODEFORCES_URL}
          target="_blank"><Image height={40} src={codeforces} alt='codeforces-profile'/></Link>
      </footer>
    </section>
  )
}

import Image from 'next/image'
import React from 'react'

import myself from "@/app/assets/img/me.png"

export default function HeroSection() {
  return (
    <section className="mt-28">
      <article className="flex">
        <aside className="shrink-0 w-[325px] h-[420px] relative">
          <Image className="rounded-3xl" fill src={myself} objectFit='cover' alt="me"/>
        </aside>
        <main className="font-[family-name:var(--font-jetbrains)]">
          <h2>Иван Филатов</h2>
          <sub>Россия, Иннополис</sub>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore corporis, quasi eum amet vitae culpa aliquam nisi explicabo odit numquam alias.
          </p>
        </main>
      </article>
      <footer></footer>
    </section>
  )
}

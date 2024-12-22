import Link from 'next/link'
import React from 'react'

export default function ContactSection() {
  return (
    <section className="bg-[#445793] h-48 mx-[-9999px] py-6 px-[9999px] my-[400px] relative shadow-2xl manrope font-bold">
      <div className="absolute top-0 bottom-0 md:translate-y-0 -translate-y-12 text-4xl z-10 flex items-center justify-center">
        <h4 className="select-none">Есть предложения?</h4>
      </div>
      <div className="bg-[#33498C] z-0 flex justify-center items-center absolute w-[582px] h-[582px] top-0 bottom-0 left-0 right-0 -translate-y-1/3 mx-auto rounded-full">
        <Link className="select-none" href="mailto:contact@bebradev.ru"><p className="text-[16rem] hidden lg:block antialiased select-none mb-12">@</p></Link>
      </div>
      <div className="absolute top-0 md:translate-y-0 translate-y-12 bottom-0 right-[9999px] text-4xl z-10 flex items-center justify-center">
        <Link href="mailto:contact@bebradev.ru">
          <h4 className="hover:text-teal-300 transition-all duration-300 hover:scale-110">contact@bebradev.ru</h4>
        </Link>
      </div>
    </section>
  )
}
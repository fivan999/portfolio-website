import React from 'react'
import Image from 'next/image'
import { Skill } from '@/app/lib/skills'

export default function SkillCard(props: Skill) {
  return (
    <li className="max-h-fit bg-slate-800 w-[120px] pl-[0.625rem] pr-[0.625rem] pt-[0.625rem] rounded-[1.25rem] border-black border-[0.375rem]">
      <Image className="w-[100px] h-[100px] filter drop-shadow-2xl" width={100} height={100} src={props.logo} alt={`skill-${props.text.toLowerCase()}`}/>
      <footer className="bg-gray-200 ml-[-0.625rem] mr-[-0.625rem] mt-1 rounded-b-[0.9rem] text-center">{props.text}</footer>
    </li>
  )
}

import React from 'react'

import achievements from '@/app/lib/achievements'
import SkillCard from '@/app/components/skillCard'
import skills from '@/app/lib/skills'
import Link from 'next/link'

export default function SkillsSection() {
  return (
    <section className="flex jetbrains justify-between flex-wrap mt-10 gap-4 *:flex-1 *:rounded-3xl *:p-5 *:bg-gray-200 text-black">
      <aside className="flex-1">
        <h3 className="header text-center" id="skills">Hard скиллы</h3>
        <ul className="flex flex-wrap gap-3 justify-center mt-4">
          {skills.map(skill => <SkillCard key={skill.text} {...skill}/>)}
        </ul>
      </aside>
      <aside className="flex-1">
        <h3 className="header text-center" id="achievements">Достижения</h3>
        <ul className="mt-4 list-decimal pl-12 pr-4 text-2xl">
          {achievements.map(piece => (
            <li className="group" key={piece.text}>
              {piece.text}{piece?.url && <Link target="_blank" href={piece.url} className="filter group-hover:brightness-50">🔗</Link>}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

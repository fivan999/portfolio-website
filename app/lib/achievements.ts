interface Achievement {
  text: string,
  url?: string,
}

const generalAchievements: Achievement[] = [
  {
    text: "Призёр 2 степени заключительного этапа олимпиады “РосАтом”",
    url: "/docs/rosatom.pdf",
  },
  {
    text: "Стал отличником в специализации “Разработка на Django” от Яндекс Лицея",
    url: "/docs/django_web.pdf",
  },
  {
    text: "Закончил годовой курс “Основы программирования Python” на Отлично от Яндекс Лицея",
    url: "/docs/python_1.pdf"
  },
  {
    text: "Закончил годовой курс “Промышленная разработка” на Отлично от Яндекс Лицея",
    url: "/docs/python_2.pdf",
  },
  {
    text: "Победитель научной конференции “Естелий-2023”",
    url: "/docs/conference1.pdf"
  },
  {
    text: "Победитель научной конференции “Ярмарка Идей” в 2023 году",
    url: "/docs/conference2.pdf",
  },
  {
    text: "Призёр в конкурсе цифровых портфолио “Талант НТО” по программированию",
    url: "/docs/talant_nto.pdf"
  },
  {
    text: "Призёр регионального этапа ВСОШ по информатике",
    url: "/docs/regional_informatics.pdf"
  }
] as const

const sportAchievements: Achievement[] = [
  {
    text: "Чемпион Республики Татарстан по спортивному программированию",
  },
  {
    text: "Диплом 3 степени на региональном этапе ICPC по Евразии",
    url: "/docs/icpc.pdf",
  },
  {
    text: "Занял 3 место на финале чемпионата Республики Татарстан по спортивному программированию",
    url: "/docs/final_competitive_tatarstan.pdf",
  },
  {
    text: "Финалист чемпионата RUCODE по алгоритмическому программированию (Дивизион C-D)",
    url: "/docs/rucode.pdf",
  },
] as const

export default generalAchievements
export { sportAchievements }
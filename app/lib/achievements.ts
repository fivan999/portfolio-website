interface Achievement {
  text: string,
  url?: string,
}

const achievements: Achievement[] = [
  {
    text: "Призёр 2 степени заключительного этапа олимпиады “РосАтом”",
    url: "",
  },
  {
    text: "Стал отличником в специализации “Разработка на Django” от Яндекс Лицея",
    url: "",
  },
  {
    text: "Закончил годовой курс “Промышленная разработка” от Яндекс Лицея на отлично",
    url: "",
  },
  {
    text: "Победитель научной конференции “Ярмарка Идей” в г. Саранск",
    url: "",
  },
] as const

export default achievements
interface OpenSourceAchievement {
  text: string,
  url?: string,
}

const openSourceData: OpenSourceAchievement[] = [
  {
    text: "Написал систему уведомлений бронирования музыкальной комнаты в спорткомлексе",
    url: "https://github.com/one-zero-eight/music-room/pull/61"
  },
  {
    text: "Написал микросервис для создания, управления, проведения воркшопов, а также записи на них",
    url: "https://github.com/one-zero-eight/workshops"
  },
  {
    text: "Добавил JWT-аутентификацию для обычных пользователей в сервисе брони музыкальной комнаты",
    url: "https://github.com/one-zero-eight/music-room/pull/66"
  },
  {
    text: "Мигрировал устаревший Django-проект (v3.1) на версию 5.1 и заменил сломавшиеся зависимости",
    url: "https://github.com/one-zero-eight/sport/pull/335"
  },
  {
<<<<<<< HEAD
    text: "Добавил edpoint для аналитики посещаемости студентов в API сайта спорта",
    url: "https://github.com/one-zero-eight/sport/pull/344"
  },
  {
    text: "Реализовал функционал для копирования расписания тренировок с предыдущего семестра",
    url: "https://github.com/one-zero-eight/sport/pull/337"
  },
  {
    text: "Добавил белый и черный списки для отбора студентов при записи на тренировку",
    url: "https://github.com/one-zero-eight/sport/pull/341"
  },
  {
    text: "Разрешил загружать несколько медицинских справок по группам здоровья",
    url: "https://github.com/one-zero-eight/sport/pull/339"
=======
    text: "Запретил использовать музыкального бота пользователям с пустым алиасом в телеграмме",
    url: "https://github.com/one-zero-eight/music-room/pull/58"
  },
  {
    text: "Создал функцию копирования старого расписания тренировок при начале нового семестра",
    url: "https://github.com/one-zero-eight/sport/pull/337"
  },
  {
    text: "Создал функционал для разрешения только определенной группе студентов посещать тренировку",
    url: "https://github.com/one-zero-eight/sport/pull/338"
>>>>>>> c066695d8ff41b4548bfbb12fe5cf28a458c0ea7
  },
]

export default openSourceData
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
    url: "https://github.com/one-zero-eight/music-room/pull/66/files"
  },
  {
    text: "Мигрировал устаревший Django-проект (v3.1) на версию 5.1 и заменил сломавшиеся зависимости",
    url: "https://github.com/one-zero-eight/sport/pull/335"
  },
  {
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
  },
]

export default openSourceData
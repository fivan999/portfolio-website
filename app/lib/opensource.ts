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
  },
]

export default openSourceData
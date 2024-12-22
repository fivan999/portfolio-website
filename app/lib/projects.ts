import { StaticImageData } from "next/image"

import brainforces from "@/app/assets/img/brainforces.png"
import anika from "@/app/assets/img/anika.png"
import jwtauth from "@/app/assets/img/jwtAUTH.png"
import kingspigs from "@/app/assets/img/kingspigs.png"
import mapsapi from "@/app/assets/img/mapsapi.png"
import cinemasystem from "@/app/assets/img/cinemacontrol.png"


export interface ProjectInterface {
  imageURL: StaticImageData
  title: string,
  tags: string[],
  url: string,
}

const projects: ProjectInterface[] = [
  {
    imageURL: brainforces,
    title: "Организатор викторин - BrainForces",
    tags: ["Django", "Микросервисы", "Celery"],
    url: "https://github.com/fivan999/BrainForces",
  },
  {
    imageURL: anika,
    title: "Агрегатор действий клиентов - ANIKA",
    tags: ["Django", "Микросервисы", "Celery"],
    url: "https://github.com/fivan999/ANIKA",
  },
  {
    imageURL: jwtauth,
    title: "API для JWT авторизации на FastAPI",
    tags: ["FastAPI", "Docker"],
    url: "https://github.com/fivan999/fastapi_users_service",
  },
  {
    imageURL: kingspigs,
    title: "Игра мини-рогалик \"Kings and pigs\"",
    tags: ["PyGame"],
    url: "https://github.com/fivan999/Kings-and-Pigs",
  },
  {
    imageURL: mapsapi,
    title: "Приложение для взаимодействия с Maps API",
    tags: ["Geolocation", "Desktop", "API"],
    url: "https://github.com/fivan999/MapsApiApp",
  },
  {
    imageURL: cinemasystem,
    title: "Система управления кинотеатрами",
    tags: ["Desktop", "SQL"],
    url: "https://github.com/fivan999/cinema-controlling-system"
  }
] as const

export default projects;
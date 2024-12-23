import { StaticImageData } from "next/image"

import pythonLogo from "@/app/assets/svg/python-logo.svg"
import dockerLogo from "@/app/assets/svg/docker.svg"
import fastAPILogo from "@/app/assets/svg/fastapi.svg"
import redisLogo from "@/app/assets/svg/redis.svg"
import postgresLogo from "@/app/assets/svg/postgres.svg"
import djangoLogo from "@/app/assets/svg/django.svg"
import djangoRestLogo from "@/app/assets/svg/rest.svg"
import elasticSearchLogo from "@/app/assets/svg/elasticsearch.svg"
import JWTLogo from "@/app/assets/svg/jwt.svg"
import celeryLogo from "@/app/assets/svg/celery.svg"
import pytestLogo from "@/app/assets/svg/pytest.svg"
import smtpLogo from "@/app/assets/svg/smtp.svg"
import gitLogo from "@/app/assets/svg/git.svg"
import pyGameLogo from "@/app/assets/svg/pygame.svg"
import qtLogo from "@/app/assets/svg/pyqt.svg"
import vkLogo from "@/app/assets/svg/vk.svg"
import cppLogo from "@/app/assets/svg/cpp.svg"
import javaLogo from "@/app/assets/svg/java.svg"

export interface Skill {
  text: string
  logo: StaticImageData
}

const skills: Skill[] = [
  {
    text: "Python",
    logo: pythonLogo
  },
  {
    text: "C++",
    logo: cppLogo
  },
  {
    text: "Java",
    logo: javaLogo
  },
  {
    text: "FastAPI",
    logo: fastAPILogo
  },
  {
    text: "Django",
    logo: djangoLogo
  },
  {
    text: "Django REST",
    logo: djangoRestLogo
  },
  {
    text: "SQL",
    logo: postgresLogo
  },
  {
    text: "Redis",
    logo: redisLogo
  },
  {
    text: "Git",
    logo: gitLogo
  },
  {
    text: "Elastic Search",
    logo: elasticSearchLogo
  },
  {
    text: "Docker",
    logo: dockerLogo
  },
  {
    text: "Celery",
    logo: celeryLogo
  },
  {
    text: "SMTP",
    logo: smtpLogo
  },
  {
    text: "PyTest",
    logo: pytestLogo
  },
  {
    text: "JWT",
    logo: JWTLogo
  },
  {
    text: "PyQT",
    logo: qtLogo
  },
  {
    text: "PyGame",
    logo: pyGameLogo
  },
  {
    text: "VKBottle",
    logo: vkLogo
  },
] as const

export default skills
import React from 'react'

import star from "@/app/assets/img/star.png"
import Image from 'next/image'

export default function SportSection() {
  return (
    <section className="bg-blue-800 mx-[-9999px] py-6 px-[9999px] mt-10 relative shadow-2xl">
      <h3 className="text-center header">Спортивные достижения</h3>
      <Image className="absolute left-[9900px] rotate-[-16deg] top-[-60px] drop-shadow-[0_10px_10px_rgb(0_0_0_/_0.75)]" src={star} width={159} height={159} alt="star"/>
      <Image className="absolute right-[9900px] rotate-12 bottom-[-60px] drop-shadow-[0_10px_10px_rgb(0_0_0_/_0.75)]" src={star} width={159} height={159} alt="star"/>
      <article className="flex grow gap-16 mt-10">
        <iframe className="bg-white shrink-0 grow-0" width={500} height={320} src="https://leetcard.jacoblin.cool/fi_van?theme=light&font=Manrope&ext=heatmap">
          Ваш браузер не поддерживает виджеты
        </iframe>
        <ul className="jetbrains text-2xl list-disc">
          <li>Чемпион Республики Татарстан по спортивному программированию</li>
          <li>Участник регионального этапа ICPС по Евразии. Диплом 3 степени</li>
          <li>Призёр чемпионата республики Татарстан по спортивному программированию</li>
          <li>Финалист чемпионата RUCODE по алгоритмическому программированию (Дивизион C-D)</li>
        </ul>
      </article>
    </section>
  )
}

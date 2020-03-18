import React from 'react'

import Sections from '../_common/Sections'
import Info from '../_common/Info'
import Technologies from './Technologies'
import {Title} from '../../utils/enums'

export default function Skills(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          title={Title.SKILLS}
          mainText="Создаю веб-приложения на React + TypeScript. Бизнес-логику пишу на Redux"
          textContent="Для создания обычных страниц использую "
          features={[]}
          extraFeatures={[]}
          color="blue"
        />
      }
      secondSection={<Technologies />}
    />
  )
}

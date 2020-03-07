import React from 'react'

import './Social.scss'
import SocialLinks from '../_common/SocialLinks'
import Pagination from '../_common/Pagination'
import {SOCIAL_LINKS} from '../../utils/data'
import {Route} from '../../utils/enums'

const imgSize = 320

export default function Social() {
  return (
    <section className="Social Section Section_backgroundColor_green">
      <div className="Social-Content">
        <h2 className="VisuallyHidden">Фото и социальные сети</h2>
        <div className="Social-Photo">
          <img
            width={imgSize}
            height={imgSize}
            src="https://placekitten.com/640/640"
            alt="Michael Ananiev | vashstamp"
          />
        </div>
        <SocialLinks links={SOCIAL_LINKS} />
      </div>
      <Pagination prevTo={Route.HOME} nextTo={Route.SKILLS} />
    </section>
  )
}

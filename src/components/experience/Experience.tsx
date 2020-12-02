import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Animate, {EFFECTS} from '../common/Animate'
import Sections from '../common/Sections'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Work from './Work'
import Stepper from './Stepper'
import {ROUTE} from '../../utils/constants'
import {BREAKPOINT, DURATION} from '../../styles/theme'

export default function Experience(): JSX.Element {
  const md: boolean = useMediaQuery(`(max-width: ${BREAKPOINT.md}px)`)

  return (
    <Sections
      firstSection={<Work />}
      secondSection={
        <section className="Section Section_pagination Section_colorful">
          <h2 className="VisuallyHidden">Этапы</h2>
          <Animate
            effect={md ? EFFECTS.bottomSm : EFFECTS.rightSm}
            duration={md ? undefined : DURATION.longer}
          >
            <Stepper />
          </Animate>
          <Pagination prevTo={ROUTE.skills} nextTo={ROUTE.portfolio} />
          <Copyright />
        </section>
      }
    />
  )
}
import cn from 'clsx'
import {TFunction} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Grid, ButtonBase} from '@material-ui/core'

import './ProjectLink.scss'
import {Animate, Tilt, Panel} from '../common'
import {getListDelay, tProjectTypes} from '../../utils/helpers'
import {
  DETECT,
  ROUTE,
  TILT_MAX,
  TILT_SCALE,
  PROJECT_ROUTE,
  PATH_COLOR,
} from '../../utils/constants'
import {
  Effect,
  ProjectName,
  ProjectType,
  TiltOptions,
  Width,
} from '../../utils/types'
import {DURATION} from '../../styles/theme'

interface ProjectLinkProps {
  t: TFunction
  index: number
  width: Width
  name: ProjectName
  title?: string
  types: ProjectType[]
  logo: string[]
}

const tiltOptions: TiltOptions = {
  max: DETECT.safari ? 0 : TILT_MAX,
  scale: TILT_SCALE,
  speed: DURATION.longest,
}

const randomEffects: Effect[] = ['top', 'right', 'bottom', 'left']

const getDelay = (index: number, width: Width): number => {
  if (width.sm) return 0
  const divider = width.md ? 2 : width.lg ? 3 : 4
  return getListDelay(index % divider)
}

export default function ProjectLink({
  t,
  index,
  width,
  name,
  title,
  types,
  logo,
}: ProjectLinkProps): JSX.Element {
  const path = PROJECT_ROUTE[name]

  const projectTitle = title ?? t(`portfolio.project.${name}.title`)

  return (
    <Grid
      item
      component="li"
      className="ProjectLink"
      xs={12}
      md={6}
      lg={4}
      xl={3}
    >
      <Animate
        className={cn(DETECT.mobile && 'ProjectLink-Tilt')}
        effect={
          width.sm ? undefined : randomEffects[Math.floor(Math.random() * 4)]
        }
        delay={getDelay(index, width)}
      >
        <Tilt el="div" className="ProjectLink-Tilt" options={tiltOptions}>
          <ButtonBase
            focusRipple
            component={Link}
            className={`ProjectLink-Item ColorInteract ColorInteract_color_${PATH_COLOR[path]}`}
            to={`${ROUTE.portfolio}${path}`}
          >
            <Panel
              className={`ProjectLink-View ProjectLink-View_name_${name}`}
            />
            <div className="ProjectLink-Content">
              <img src={logo[0]} srcSet={`${logo[1]} 2x`} alt={projectTitle} />
              <h3 className="ProjectLink-Title">{projectTitle}</h3>
              <p className="ProjectLink-Label">{tProjectTypes(t, types)}</p>
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}

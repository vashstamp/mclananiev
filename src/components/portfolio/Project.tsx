import {useState} from 'react'
import {useTranslation, TFunction} from 'react-i18next'
import {RouteChildrenProps} from 'react-router-dom'

import {Sections, Pagination, Copyright} from '../common'
import ProjectDetails from './ProjectDetails'
import Carousel from './Carousel'
import {ROUTE, PROJECT_ROUTE} from '../../utils/constants'
import {Project as ProjectInterface} from '../../utils/types'
import PROJECTS from '../../data/projects'

interface ProjectParams {
  project: string
}

interface ScreenshotsProps {
  t: TFunction
  project: ProjectInterface
}

const Screenshots = ({t, project}: ScreenshotsProps): JSX.Element => {
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  return (
    <div>
      {project.images.desktop && (
        <Carousel
          t={t}
          title={project.title}
          images={project.images.desktop}
          swiper={secondSwiper}
          setSwiper={setFirstSwiper}
        />
      )}
      {project.images.mobile && (
        <Carousel
          mobile
          t={t}
          title={project.title}
          images={project.images.mobile}
          swiper={firstSwiper}
          setSwiper={setSecondSwiper}
        />
      )}
    </div>
  )
}

export default function Project({
  match,
}: RouteChildrenProps<ProjectParams>): JSX.Element {
  const {t} = useTranslation()
  const project: ProjectInterface = PROJECTS.find(
    (project: ProjectInterface): boolean =>
      PROJECT_ROUTE[project.name].slice(1) === match!.params.project
  )!

  return (
    <Sections
      firstSection={
        <ProjectDetails
          title={project.title}
          companyName={project.companyName}
          description={project.description}
          types={project.types}
          features={project.features}
          href={project.href}
        />
      }
      secondSection={
        <section className="Section Section_pagination Section_colorful">
          <h2 className="VisuallyHidden">{t('portfolio.subtitle')}</h2>
          <Screenshots t={t} project={project} />
          <Pagination prevTo={ROUTE.portfolio} />
          <Copyright />
        </section>
      }
    />
  )
}

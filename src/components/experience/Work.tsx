import {useTranslation, Trans} from 'react-i18next'
import {
  ScheduleRounded as ScheduleIcon,
  MyLocationRounded as MyLocationIcon,
  DateRangeRounded as DateRangeIcon,
  RoomRounded as RoomIcon,
} from '@material-ui/icons'

import './Work.scss'
import {Animate} from '../common'
import Job from './Job'
import {Job as JobInterface} from '../../utils/types'
import {COMPANY, TECHNOLOGY_TITLE, FEATURE} from '../../data/common'
import {YEARS_OF_EXPERIENCE, CAREER_START_PARTS} from '../../utils/constants'

const jobs: JobInterface[] = [
  {
    current: true,
    company: COMPANY.t1,
    occupations: ['lead', 'senior'],
    duties: [
      'logicApps',
      'structureApps',
      'responsive',
      {tKey: 'rest', values: [FEATURE.rest]},
      'refactor',
      'scratch',
      'support',
      'tasksTeam',
      'manage',
      'review',
    ],
    achievements: [
      'resultCorporate',
      'pathLead',
      'internship',
      'mentor',
      {
        tKey: 'mobile',
        values: [TECHNOLOGY_TITLE.reactnative],
      },
      'design',
      'interview',
    ],
    features: [
      {
        period: {
          from: {
            tKey: 'april',
            year: 2018,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'remote', Icon: MyLocationIcon},
      {tKey: 'office', Icon: MyLocationIcon, disabled: true},
      {tKey: 'moscow', Icon: RoomIcon},
    ],
  },
  {
    current: true,
    company: COMPANY.sevenGlyphs,
    occupations: ['senior', 'middle'],
    duties: [
      'logicAppsSites',
      'structureProjects',
      'responsive',
      {tKey: 'restSocket', values: [FEATURE.rest, FEATURE.socket]},
      'refactor',
      'scratch',
      'support',
      'tasks',
    ],
    achievements: [
      'resultForeign',
      'technologies',
      {tKey: 'speed', values: [1]},
      'independent',
      'english',
      'testimonials',
    ],
    features: [
      {
        period: {
          from: {
            tKey: 'april',
            year: 2017,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyPart', Icon: ScheduleIcon},
      {tKey: 'busyFull', Icon: ScheduleIcon, disabled: true},
      {tKey: 'remote', Icon: MyLocationIcon},
      {tKey: 'auckland', Icon: RoomIcon},
    ],
  },
  {
    company: COMPANY.everpoint,
    occupations: ['middle', 'junior'],
    duties: [
      'logicModules',
      'responsive',
      {tKey: 'rest', values: [FEATURE.rest]},
      'refactor',
      'tasks',
    ],
    achievements: [
      'resultApp',
      'pathFront',
      {
        tKey: 'technologiesBase',
        values: [
          TECHNOLOGY_TITLE.js,
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.css,
        ],
      },
      'work',
    ],
    features: [
      {
        period: {
          from: {
            tKey: CAREER_START_PARTS[0],
            year: CAREER_START_PARTS[1],
          },
          to: {
            tKey: 'april',
            year: 2017,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'office', Icon: MyLocationIcon},
      {tKey: 'moscow', Icon: RoomIcon},
    ],
  },
  {
    company: COMPANY.mvideo,
    occupations: ['support'],
    duties: [
      {tKey: 'serviceDesk', values: ['Service Desk']},
      'hardwareFix',
      'hardwareInstall',
      'consult',
    ],
    achievements: ['orders', 'hardware', 'softSkills'],
    features: [
      {
        period: {
          from: {
            tKey: 'october',
            year: 2008,
          },
          to: {
            tKey: 'may',
            year: 2010,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'office', Icon: MyLocationIcon},
      {
        tKey: 'moscow',
        Icon: RoomIcon,
      },
    ],
  },
]

const transComponents: JSX.Element[] = [<strong />]

export default function Work(): JSX.Element {
  const {t} = useTranslation()

  return (
    <section className="Section">
      <h1 className="Title">{t('title.experience')}</h1>
      <p className="MainText">
        <Trans
          i18nKey={`experience.text`}
          values={[YEARS_OF_EXPERIENCE]}
          components={transComponents}
        />
      </p>
      <Animate el="ul" className="Work">
        {jobs.map((job: JobInterface, index: number) => (
          <Job key={index} {...job} t={t} index={index} />
        ))}
      </Animate>
    </section>
  )
}

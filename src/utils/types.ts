import {ReactNode, FunctionComponent, SVGProps} from 'react'
import {SvgIconProps} from '@material-ui/core'

export type Route =
  | '/'
  | '/about'
  | '/skills'
  | '/experience'
  | '/portfolio'
  | '/contact'

export type Color =
  | 'alternate'
  | 'white'
  | 'default'
  | 'blue'
  | 'green'
  | 'grass'
  | 'red'
  | 'yellow'
  | 'violet'

export type Effect =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'zoomIn'
  | 'zoomInSm'
  | 'zoomOut'
  | 'zoomOutSm'

export type CompanyName = 't1' | 'sevenGlyphs' | 'everpoint' | 'mvideo'

export type ProjectType = 'app' | 'site' | 'landing' | 'admin'

export type ProjectName =
  | 'ninjal'
  | 'ninja'
  | 'celebration'
  | 'ally'
  | 'presentmel'
  | 'presentmep'
  | 'presentme'
  | 'dropdrone'
  | 'hatched'
  | 'uls'
  | 'proximal'
  | 'embp'
  | 'tmf'
  | 'lite'
  | 'melissa'
  | 'foodp'
  | 'food'
  | 'sds'
  | 'strong'
  | 'glyphs2'
  | 'rogue'
  | 'trucks'
  | 'services'
  | 'fcdc'
  | 'saffron'
  | 'whip'
  | 'lazyazd'
  | 'lazyaz'
  | 'glyphs'
  | 'msp'

export type TKey = string | TKeyObject

export interface Map<T> {
  [key: string]: T
}

export interface TKeyObject {
  tKey?: string
  tKeys?: string[]
  value?: string | number
  values?: string[]
}

export interface SocialLink {
  title: string
  href: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  size: 'xs' | 'sm' | 'md' | 'lg'
}

export interface Feature {
  Icon: (props: SvgIconProps) => JSX.Element
  label?: string
  time?: boolean
  tKey?: TKey
  labelValue?: string | number
  textValue?: string | number
  link?: {
    tKey?: string
    text?: string
    component: ReactNode
  }
}

export interface Technology {
  disabled?: boolean
  name: string
  label: string
  color: Color
  href: string
}

export interface TechnologyGroup {
  tKey: TKey
  technologies: Technology[]
}

export interface Company {
  title: string
  color: Color
  images: string[]
  href: string
}

export interface PeriodPart {
  tKey: string
  year: number | string
}

export interface Period {
  from: PeriodPart
  to?: PeriodPart
}

export interface JobFeature {
  tKey?: string
  period?: Period
  Icon: (props: SvgIconProps) => JSX.Element
  disabled?: boolean
}

export interface Job {
  current?: boolean
  company: Company
  occupations: TKey[]
  duties: TKey[]
  achievements: TKey[]
  features: JobFeature[]
}

export interface Project {
  name: ProjectName
  title?: string
  textValue?: string
  types: ProjectType[]
  companyName: CompanyName
  href?: string
  features: TKey[]
  images: {
    desktop?: string[][]
    mobile?: string[][]
  }
}

export interface TiltOptions {
  reverse?: boolean
  reset?: boolean
  max?: number
  scale?: number
  speed?: number
}

export interface Width {
  lg: boolean
  md: boolean
  sm: boolean
}

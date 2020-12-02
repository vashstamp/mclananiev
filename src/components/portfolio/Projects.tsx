import React, {memo, useState, ChangeEvent} from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import './Projects.scss'
import ProjectLink from './ProjectLink'
import {PROJECT_TYPE} from '../../utils/constants'
import {Map, Project, ProjectType, Width} from '../../utils/types'
import {PROJECT_TYPE_LABELS} from '../../data/common'
import PROJECTS from '../../data/projects'
import {BREAKPOINT} from '../../styles/theme'

type Filter = 'all' | ProjectType

const storageProp: string = 'filter'

const filterAll: Filter = 'all'

const filters: Filter[] = [
  filterAll,
  PROJECT_TYPE.landing,
  PROJECT_TYPE.site,
  PROJECT_TYPE.app,
  PROJECT_TYPE.admin,
]

const filterLabel: Map<string> = {
  [filterAll]: 'Все',
  [PROJECT_TYPE.landing]: PROJECT_TYPE_LABELS.landing,
  [PROJECT_TYPE.site]: PROJECT_TYPE_LABELS.site,
  [PROJECT_TYPE.app]: PROJECT_TYPE_LABELS.app,
  [PROJECT_TYPE.admin]: PROJECT_TYPE_LABELS.admin,
}

const getFilteredProjects = (filter: string): Project[] =>
  filter === filterAll
    ? PROJECTS
    : PROJECTS.filter((project: Project): boolean => project.type === filter)

function Projects(): JSX.Element {
  const [filter, changeFilter] = useState<string>(
    localStorage.getItem(storageProp) || filterAll
  )
  const width: Width = {
    lg: useMediaQuery(`(max-width: ${BREAKPOINT.lg}px)`),
    md: useMediaQuery(`(max-width: ${BREAKPOINT.md}px)`),
    sm: useMediaQuery(`(max-width: ${BREAKPOINT.sm}px)`),
  }

  const handleChange = (e: ChangeEvent<object>, value: string): void => {
    localStorage.setItem(storageProp, value)
    changeFilter(value)
  }

  return (
    <div className="Projects">
      <Tabs
        className="Projects-Filters"
        value={filter}
        variant="scrollable"
        scrollButtons="off"
        onChange={handleChange}
      >
        {filters.map((type: string) => (
          <Tab key={type} value={type} label={filterLabel[type]} />
        ))}
      </Tabs>
      <Grid container component="ul" spacing={2}>
        {getFilteredProjects(filter).map(
          (
            {name, title, type, color, company, path}: Project,
            index: number
          ) => (
            <ProjectLink
              key={`${name}-${filter}`}
              width={width}
              index={index}
              title={title}
              name={name}
              type={type}
              color={color}
              company={company}
              path={path}
            />
          )
        )}
      </Grid>
    </div>
  )
}

// it's avoiding reanimation items if several times click on the navlink
export default memo(Projects)
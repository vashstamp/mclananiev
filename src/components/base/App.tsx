import React from 'react'
import {Switch, Route, Redirect, useLocation} from 'react-router-dom'
import cn from 'classnames'

import './App.scss'
import Sidebar from './Sidebar'
import Home from '../home/Home'
import About from '../about/About'
import Skills from '../skills/Skills'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Project from '../portfolio/Project'
import Contact from '../contact/Contact'
import {PATHS, PATH_COLORS} from '../../utils/constants'

export default function App(): JSX.Element {
  const {pathname} = useLocation()
  const lastSlashIndex: number = pathname.lastIndexOf('/')
  const AppClassName: string = cn(
    `App App_page_${pathname.slice(1, lastSlashIndex || undefined) ||
      'home'} App_color_${PATH_COLORS[pathname.slice(lastSlashIndex)]}`,
    {
      App_background_blue: pathname === PATHS.PORTFOLIO,
      App_background_green: pathname === PATHS.CONTACT,
    }
  )

  return (
    <div className={AppClassName}>
      <Sidebar />
      <main className="App-Main">
        <Switch>
          <Route exact path={PATHS.HOME} component={Home} />
          <Route exact path={PATHS.ABOUT} component={About} />
          <Route exact path={PATHS.SKILLS} component={Skills} />
          <Route exact path={PATHS.EXPERIENCE} component={Experience} />
          <Route exact path={PATHS.PORTFOLIO} component={Portfolio} />
          <Route
            exact
            path={`${PATHS.PORTFOLIO}/:project`}
            component={Project}
          />
          <Route exact path={PATHS.CONTACT} component={Contact} />
          <Redirect to={PATHS.HOME} />
        </Switch>
      </main>
    </div>
  )
}

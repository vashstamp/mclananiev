import React, {MouseEvent} from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Tooltip from '@material-ui/core/Tooltip'
import Chip from '@material-ui/core/Chip'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Job.scss'
import {BLANK_LINK_PROPS} from '../../utils/data'
import {IJob, IFeature, IPosition} from '../../utils/types'

interface IJobProps extends IJob {
  index: number
}

const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>): void => {
  e.stopPropagation()
}

const renderPosition = (positions: IPosition[]): JSX.Element[] =>
  positions.map(({occupation, duties}: IPosition, index: number) => (
    <li key={index} className="Job-Position">
      <h3 className="Job-Occupation Subtitle Subtitle_size_small">
        {occupation}
      </h3>
      <ul className="Job-Duties">
        {duties.map(
          (duty: string, index: number): JSX.Element => (
            <li key={index} className="Job-Duty">
              {duty}
            </li>
          )
        )}
      </ul>
    </li>
  ))

const renderFeatures = (features: IFeature[]): JSX.Element[] =>
  features.map(
    ({label, Icon}: IFeature, index: number): JSX.Element => (
      <Chip key={index} className="Chip" icon={<Icon />} label={label} />
    )
  )

export default function Job({company, positions, features, index}: IJobProps) {
  return (
    <ExpansionPanel
      component="li"
      className="Job"
      defaultExpanded={index === 0}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Tooltip title={company.title} placement="right">
          <ButtonBase
            {...BLANK_LINK_PROPS}
            focusRipple
            className={`Job-Company ColorInteractive ColorInteractive_color_${company.color}`}
            component="a"
            href={company.href}
            onClick={handleLinkClick}
          >
            <img
              height={36}
              src={company.logo}
              srcSet={`${company.logo2x} 2x`}
              alt={company.title}
            />
          </ButtonBase>
        </Tooltip>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="Job-Content">
        <ul className="Job-Positions">{renderPosition(positions)}</ul>
        <div className="Job-Features">{renderFeatures(features)}</div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
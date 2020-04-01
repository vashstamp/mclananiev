import React from 'react'
import {Link} from 'react-router-dom'
import WebIcon from '@material-ui/icons/WebRounded'
import MailIcon from '@material-ui/icons/MailRounded'

import './Greeting.scss'
import {ReactComponent as HelloIcon} from '../../assets/icons/hello.svg'
import ColorButton from '../_common/ColorButton'
import {Title, Path} from '../../utils/enums'

export default function Greeting(): JSX.Element {
  return (
    <section className="Greeting Section">
      <h1 className="VisuallyHidden">{Title.HOME}</h1>
      <p className="Greeting-Title Title">
        <b>
          Привет!
          <HelloIcon className="Greeting-Icon" />
        </b>
      </p>
      <p className="Greeting-Text Title">
        <b>Меня зовут</b>
      </p>
      <p className="Greeting-Text Title">
        <b>
          <span className="Greeting-Letter">M</span>ichael{' '}
          <span className="Greeting-Letter">A</span>naniev,
        </b>
      </p>
      <p className="Greeting-Text Title">
        <b>я фронтенд-разработчик</b>
      </p>
      <div className="Actions">
        <ColorButton
          component={Link}
          to={Path.PORTFOLIO}
          color="blue"
          variant="contained"
          size="large"
          endIcon={<WebIcon />}
        >
          {Title.PORTFOLIO}
        </ColorButton>
        <ColorButton
          component={Link}
          to={Path.CONTACT}
          color="green"
          variant="contained"
          size="large"
          endIcon={<MailIcon />}
        >
          {Title.CONTACT}
        </ColorButton>
      </div>
    </section>
  )
}

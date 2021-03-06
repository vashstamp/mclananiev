import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Button} from '@material-ui/core'
import {
  WebRounded as WebIcon,
  MailRounded as MailIcon,
} from '@material-ui/icons'

import './Greeting.scss'
import frontEndImg from '../../assets/img/pictures/frontend.png'
import frontEndImg2x from '../../assets/img/pictures/frontend@2x.png'
import {ReactComponent as HelloIcon} from '../../assets/icons/hello.svg'
import {ROUTE} from '../../utils/constants'

export default function Greeting(): JSX.Element {
  const {t} = useTranslation()

  return (
    <section className="Greeting Section">
      <div className="Greeting-Block">
        <p className="Greeting-Text Greeting-First Title">{t('home.hi')}!</p>
        <div className="Greeting-Second">
          <HelloIcon className="Greeting-Icon" />
        </div>
      </div>
      <h1 className="Greeting-Text Title">
        <span className="Greeting-Part Greeting-Text Greeting-Third Title">
          {t('home.iam')}
        </span>{' '}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_second">
          <span className="Greeting-Main">Michael</span>
        </span>{' '}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_third">
          <span className="Greeting-Main">Any</span>
          <span className="Greeting-Part Greeting-Fourth">,</span>
        </span>
      </h1>
      <p className="Greeting-Text Greeting-Fifth Title">
        <strong>
          {t('home.occupation.part1')}
          <br />
          <span className="Greeting-Word">
            {t('home.occupation.part2')}
            <Link className="Greeting-Extra" to={ROUTE.skills}>
              <img
                className="Greeting-ExtraImg"
                width={60}
                height={68}
                src={frontEndImg}
                srcSet={`${frontEndImg2x} 2x`}
                alt="Frontend"
              />
            </Link>
          </span>
        </strong>
      </p>
      <p className="Greeting-SubText Greeting-Sixth MainText">
        {t('about.feature.position.label')}
      </p>
      <div className="Greeting-Actions Actions">
        <Button
          className="Greeting-Button Greeting-Seventh Button Button_color_blue"
          component={Link}
          to={ROUTE.portfolio}
          size="large"
          endIcon={<WebIcon />}
        >
          {t('title.portfolio')}
        </Button>
        <Button
          className="Greeting-Button Greeting-Eighth Button Button_color_green"
          component={Link}
          to={ROUTE.contact}
          size="large"
          endIcon={<MailIcon />}
        >
          {t('title.contact')}
        </Button>
      </div>
    </section>
  )
}

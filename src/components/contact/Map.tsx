import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Map as GoogleMap, Marker, GoogleApiWrapper} from 'google-maps-react'
import {CircularProgress} from '@material-ui/core'

import './Map.scss'
import markerIcon from '../../assets/icons/marker.svg'
import {ROUTE} from '../../utils/constants'
import STYLES from '../../styles/map'

interface InitialCenter {
  lat: number
  lng: number
}

const initialCenter: InitialCenter = {
  lat: 43.412428,
  lng: 39.957504,
}

const LoadingContainer = (): JSX.Element => (
  <div className="Map Map_loading">
    <CircularProgress />
  </div>
)

function Map(): JSX.Element {
  const {t, i18n} = useTranslation()
  const history = useHistory()

  const handleMarkerClick = (): void => {
    history.push(ROUTE.about)
  }

  return (
    <div className="Map">
      <GoogleMap
        disableDefaultUI
        google={window.google}
        initialCenter={initialCenter}
        zoom={6}
        styles={STYLES as any}
      >
        <Marker
          key={i18n.language}
          title={`${t('contact.marker')} 🏠`}
          icon={markerIcon}
          onClick={handleMarkerClick}
        />
      </GoogleMap>
    </div>
  )
}

export default GoogleApiWrapper({
  LoadingContainer,
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
})(Map)

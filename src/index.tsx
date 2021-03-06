import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
  Theme,
} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'

import './styles/index.scss'
import './utils/i18n'
import ScrollToTop from './components/base/ScrollToTop'
import App from './components/App'
import {logConsoleWelcomeMessage} from './utils/base'
import {ROOT} from './utils/constants'
import THEME from './styles/theme'
import {register as registerServiceWorker} from './utils/serviceWorkerRegistration'

const theme: Theme = createMuiTheme(THEME as object)

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <CssBaseline />
        <ScrollToTop />
        <App />
      </HashRouter>
    </ThemeProvider>
  </StylesProvider>,
  ROOT
)

logConsoleWelcomeMessage()
registerServiceWorker()

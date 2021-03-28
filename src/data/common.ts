import {AlternateEmailRounded as AlternateEmailIcon} from '@material-ui/icons'

import {ReactComponent as SevenGlyphsIcon} from '../assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '../assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '../assets/icons/vk.svg'
import {ReactComponent as FacebookIcon} from '../assets/icons/facebook.svg'
import {ReactComponent as TelegramIcon} from '../assets/icons/telegram.svg'
import {ReactComponent as SkypeIcon} from '../assets/icons/skype.svg'
import {SocialLink, Company, TechnologyGroup} from '../utils/types'

interface Title {
  home: string
  about: string
  skills: string
  experience: string
  portfolio: string
  contact: string
}

interface CompanyTitle {
  mvideo: string
  everpoint: string
  sevenGlyphs: string
  tsftd: string
}

interface ContactLink {
  gitHub: SocialLink
  linkedIn: SocialLink
  sevenGlyphs: SocialLink
  instagram: SocialLink
  vk: SocialLink
  facebook: SocialLink
  email: SocialLink
  telegram: SocialLink
  skype: SocialLink
}

interface CompanyInterface {
  tsftd: Company
  sevenGlyphs: Company
  everpoint: Company
  mvideo: Company
}

interface ProjectTypeLabel {
  app: string
  site: string
  admin: string
  landing: string
}

export const TITLE: Title = {
  home: 'Главная',
  about: 'Обо мне',
  skills: 'Навыки',
  experience: 'Опыт',
  portfolio: 'Портфолио',
  contact: 'Контакты',
}

export const COMPANY_TITLE: CompanyTitle = {
  mvideo: 'М.Видео',
  everpoint: 'Эверпоинт',
  sevenGlyphs: '7 glyphs Ltd.',
  tsftd: 'ТехноСофт Диджитал',
}

export const CONTACT_LINK: ContactLink = {
  gitHub: {
    title: 'GitHub',
    href: 'https://github.com/vashstamp',
    Icon: GitHubIcon,
    size: 'lg',
  },
  linkedIn: {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/mclananiev',
    Icon: LinkedInIcon,
    size: 'sm',
  },
  sevenGlyphs: {
    title: `${COMPANY_TITLE.sevenGlyphs} Team`,
    href: 'https://7glyphs.com/agency/team',
    Icon: SevenGlyphsIcon,
    size: 'xs',
  },
  instagram: {
    title: 'Instagram',
    href: 'https://www.instagram.com/mclananiev/',
    Icon: InstagramIcon,
    size: 'md',
  },
  vk: {
    title: 'VK',
    href: 'https://vk.com/mclananiev',
    Icon: VKIcon,
    size: 'md',
  },
  facebook: {
    title: 'Facebook',
    href: 'https://www.facebook.com/mclananiev',
    Icon: FacebookIcon,
    size: 'sm',
  },
  email: {
    title: 'Email',
    href: 'mailto:mclananiev@gmail.com',
    Icon: AlternateEmailIcon,
    size: 'lg',
  },
  telegram: {
    title: 'Telegram',
    href: 'https://t.me/mclananiev',
    Icon: TelegramIcon,
    size: 'md',
  },
  skype: {
    title: 'Skype',
    href: 'skype:live:bd80acb1b9083867?chat',
    Icon: SkypeIcon,
    size: 'md',
  },
}

export const COMPANY: CompanyInterface = {
  tsftd: {
    title: COMPANY_TITLE.tsftd,
    images: [
      require('../assets/img/companies/tsftd.png').default,
      require('../assets/img/companies/tsftd@2x.png').default,
    ],
    color: 'red',
    href: 'http://www.tsft.ru',
  },
  sevenGlyphs: {
    title: COMPANY_TITLE.sevenGlyphs,
    images: [
      require('../assets/img/companies/7glyphs.png').default,
      require('../assets/img/companies/7glyphs@2x.png').default,
    ],
    color: 'default',
    href: 'https://7glyphs.com',
  },
  everpoint: {
    title: COMPANY_TITLE.everpoint,
    images: [
      require('../assets/img/companies/everpoint.png').default,
      require('../assets/img/companies/everpoint@2x.png').default,
    ],
    color: 'grass',
    href: 'https://www.everpoint.ru',
  },
  mvideo: {
    title: COMPANY_TITLE.mvideo,
    images: [
      require('../assets/img/companies/mvideo.png').default,
      require('../assets/img/companies/mvideo@2x.png').default,
    ],
    color: 'red',
    href: 'https://www.mvideo.ru',
  },
}

export const PROJECT_TYPE_LABEL: ProjectTypeLabel = {
  app: 'Приложение',
  site: 'Сайт',
  admin: 'Админка',
  landing: 'Лендинг',
}

export const TECHNOLOGY_TITLE = {
  js: 'JavaScript',
  ts: 'TypeScript',
  react: 'React',
  redux: 'Redux',
  mobx: 'MobX',
  preact: 'Preact',
  vue: 'Vue.js',
  svelte: 'Svelte',
  apollo: 'Apollo Client',
  jquery: 'jQuery',
  html: 'HTML',
  svg: 'SVG',
  jsx: 'JSX',
  pug: 'Pug',
  handlebars: 'Handlebars',
  markdown: 'Markdown',
  blade: 'Blade',
  css: 'CSS',
  sass: 'Sass',
  bem: 'BEM',
  modules: 'CSS Modules',
  styled: 'styled-components',
  mui: 'Material-UI',
  reactstrap: 'reactstrap',
  ant: 'Ant Design',
  materialize: 'Materialize',
  bootstrap: 'Bootstrap',
  semantic: 'Semantic UI',
  emails: 'Foundation for Emails',
  npm: 'npm',
  yarn: 'Yarn',
  webpack: 'webpack',
  gulp: 'Gulp',
  gatsby: 'Gatsby',
  next: 'Next.js',
  nuxt: 'Nuxt.js',
  git: 'Git',
  babel: 'Babel',
  prettier: 'Prettier',
  eslint: 'ESLint',
  jest: 'Jest',
  item: 'iTerm2',
  vscode: 'Visual Studio Code',
  phpstorm: 'PhpStorm',
  devtools: 'Chrome DevTools',
  zeplin: 'Zeplin',
  sketch: 'Sketch',
  figma: 'Figma',
  photoshop: 'Photoshop',
  optim: 'ImageOptim',
  mac: 'macOS Big Sur',
  reactnative: 'React Native',
  node: 'Node.js',
  mongo: 'MongoDB',
  mysql: 'MySQL',
  php: 'PHP',
  laravel: 'Laravel',
}

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    title: 'Логика',
    technologies: [
      {
        name: 'js',
        label: TECHNOLOGY_TITLE.js,
        color: 'yellow',
        href:
          'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        name: 'ts',
        label: TECHNOLOGY_TITLE.ts,
        color: 'blue',
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.react,
        color: 'blue',
        href: 'https://reactjs.org',
      },
      {
        name: 'redux',
        label: TECHNOLOGY_TITLE.redux,
        color: 'violet',
        href: 'https://redux.js.org',
      },
      {
        name: 'mobx',
        label: TECHNOLOGY_TITLE.mobx,
        color: 'red',
        href: 'https://mobx.js.org',
      },
      {
        name: 'preact',
        label: TECHNOLOGY_TITLE.preact,
        color: 'violet',
        href: 'https://preactjs.com',
      },
      {
        name: 'vue',
        label: TECHNOLOGY_TITLE.vue,
        color: 'grass',
        href: 'https://vuejs.org',
      },
      {
        disabled: true,
        name: 'svelte',
        label: TECHNOLOGY_TITLE.svelte,
        color: 'red',
        href: 'https://svelte.dev',
      },
      {
        disabled: true,
        name: 'apollo',
        label: TECHNOLOGY_TITLE.apollo,
        color: 'blue',
        href: 'https://www.apollographql.com/docs/react',
      },
      {
        name: 'jquery',
        label: TECHNOLOGY_TITLE.jquery,
        color: 'blue',
        href: 'https://jquery.com',
      },
    ],
  },
  {
    title: 'Разметка',
    technologies: [
      {
        name: 'html',
        label: TECHNOLOGY_TITLE.html,
        color: 'red',
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        name: 'svg',
        label: TECHNOLOGY_TITLE.svg,
        color: 'yellow',
        href: 'https://www.w3.org/Graphics/svg',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.jsx,
        color: 'blue',
        href: 'https://reactjs.org/docs/introducing-JSX.html',
      },
      {
        name: 'pug',
        label: TECHNOLOGY_TITLE.pug,
        color: 'yellow',
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        name: 'handlebars',
        label: TECHNOLOGY_TITLE.handlebars,
        color: 'default',
        href: 'https://handlebarsjs.com',
      },
      {
        name: 'markdown',
        label: TECHNOLOGY_TITLE.markdown,
        color: 'default',
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLE.blade,
        color: 'red',
        href: 'https://laravel.com/docs/5.6/blade#introduction',
      },
    ],
  },
  {
    title: 'Стили',
    technologies: [
      {
        name: 'css',
        label: TECHNOLOGY_TITLE.css,
        color: 'blue',
        href: 'https://www.w3.org/style/css',
      },
      {
        name: 'sass',
        label: TECHNOLOGY_TITLE.sass,
        color: 'red',
        href: 'https://sass-lang.com',
      },
      {
        name: 'bem',
        label: TECHNOLOGY_TITLE.bem,
        color: 'default',
        href: 'https://bem.info',
      },
      {
        name: 'modules',
        label: TECHNOLOGY_TITLE.modules,
        color: 'default',
        href: 'https://github.com/css-modules/css-modules',
      },

      {
        name: 'styled',
        label: TECHNOLOGY_TITLE.styled,
        color: 'yellow',
        href: 'https://styled-components.com',
      },
      {
        name: 'mui',
        label: TECHNOLOGY_TITLE.mui,
        color: 'blue',
        href: 'https://material-ui.com',
      },
      {
        name: 'reactstrap',
        label: TECHNOLOGY_TITLE.reactstrap,
        color: 'default',
        href: 'https://reactstrap.github.io/',
      },
      {
        disabled: true,
        name: 'ant',
        label: TECHNOLOGY_TITLE.ant,
        color: 'blue',
        href: 'https://ant.design',
      },
      {
        name: 'materialize',
        label: TECHNOLOGY_TITLE.materialize,
        color: 'red',
        href: 'https://materializecss.com',
      },
      {
        name: 'bootstrap',
        label: TECHNOLOGY_TITLE.bootstrap,
        color: 'violet',
        href: 'https://getbootstrap.com',
      },
      {
        name: 'semantic',
        label: TECHNOLOGY_TITLE.semantic,
        color: 'green',
        href: 'https://semantic-ui.com',
      },
      {
        name: 'emails',
        label: TECHNOLOGY_TITLE.emails,
        color: 'red',
        href: 'https://get.foundation/emails.html',
      },
    ],
  },
  {
    title: 'Утилиты',
    technologies: [
      {
        name: 'git',
        label: TECHNOLOGY_TITLE.git,
        color: 'red',
        href: 'https://git-scm.com',
      },
      {
        name: 'npm',
        label: TECHNOLOGY_TITLE.npm,
        color: 'red',
        href: 'https://www.npmjs.com',
      },
      {
        name: 'yarn',
        label: TECHNOLOGY_TITLE.yarn,
        color: 'blue',
        href: 'https://yarnpkg.com',
      },
      {
        name: 'webpack',
        label: TECHNOLOGY_TITLE.webpack,
        color: 'blue',
        href: 'https://webpack.js.org',
      },
      {
        name: 'gulp',
        label: TECHNOLOGY_TITLE.gulp,
        color: 'red',
        href: 'https://gulpjs.com',
      },
      {
        name: 'babel',
        label: TECHNOLOGY_TITLE.babel,
        color: 'yellow',
        href: 'https://babeljs.io',
      },
      {
        name: 'prettier',
        label: TECHNOLOGY_TITLE.prettier,
        color: 'default',
        href: 'https://prettier.io',
      },
      {
        name: 'eslint',
        label: TECHNOLOGY_TITLE.eslint,
        color: 'violet',
        href: 'https://eslint.org',
      },
      {
        disabled: true,
        name: 'next',
        label: TECHNOLOGY_TITLE.next,
        color: 'default',
        href: 'https://nextjs.org',
      },
      {
        disabled: true,
        name: 'gatsby',
        label: TECHNOLOGY_TITLE.gatsby,
        color: 'violet',
        href: 'https://www.gatsbyjs.org',
      },
      {
        disabled: true,
        name: 'jest',
        label: TECHNOLOGY_TITLE.jest,
        color: 'red',
        href: 'https://jestjs.io',
      },
      {
        disabled: true,
        name: 'nuxt',
        label: TECHNOLOGY_TITLE.nuxt,
        color: 'grass',
        href: 'https://ru.nuxtjs.org',
      },
    ],
  },
  {
    title: 'Инструменты',
    technologies: [
      {
        name: 'iterm',
        label: TECHNOLOGY_TITLE.item,
        color: 'grass',
        href: 'https://iterm2.com',
      },
      {
        name: 'vscode',
        label: TECHNOLOGY_TITLE.vscode,
        color: 'blue',
        href: 'https://code.visualstudio.com',
      },
      {
        name: 'phpstorm',
        label: TECHNOLOGY_TITLE.phpstorm,
        color: 'violet',
        href: 'https://www.jetbrains.com/phpstorm',
      },
      {
        name: 'devtools',
        label: TECHNOLOGY_TITLE.devtools,
        color: 'default',
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        name: 'zeplin',
        label: TECHNOLOGY_TITLE.zeplin,
        color: 'yellow',
        href: 'https://zeplin.io',
      },
      {
        name: 'sketch',
        label: TECHNOLOGY_TITLE.sketch,
        color: 'yellow',
        href: 'https://www.sketch.com',
      },
      {
        disabled: true,
        name: 'figma',
        label: TECHNOLOGY_TITLE.figma,
        color: 'red',
        href: 'https://www.figma.com/',
      },
      {
        name: 'photoshop',
        label: TECHNOLOGY_TITLE.photoshop,
        color: 'blue',
        href: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      {
        name: 'optim',
        label: TECHNOLOGY_TITLE.optim,
        color: 'default',
        href: 'https://imageoptim.com',
      },
      {
        name: 'mac',
        label: TECHNOLOGY_TITLE.mac,
        color: 'default',
        href: 'https://www.apple.com/macos/big-sur-preview',
      },
    ],
  },
  {
    title: 'Другое',
    technologies: [
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.reactnative,
        color: 'blue',
        href: 'https://reactnative.dev',
      },
      {
        disabled: true,
        name: 'node',
        label: TECHNOLOGY_TITLE.node,
        color: 'grass',
        href: 'https://nodejs.org',
      },
      {
        disabled: true,
        name: 'mongo',
        label: TECHNOLOGY_TITLE.mongo,
        color: 'grass',
        href: 'https://www.mongodb.com',
      },
      {
        disabled: true,
        name: 'mysql',
        label: TECHNOLOGY_TITLE.mysql,
        color: 'blue',
        href: 'https://www.mysql.com',
      },
      {
        name: 'php',
        label: TECHNOLOGY_TITLE.php,
        color: 'violet',
        href: 'https://www.php.net',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLE.laravel,
        color: 'red',
        href: 'https://laravel.com',
      },
    ],
  },
]

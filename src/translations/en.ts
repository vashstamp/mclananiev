const common = {
  title: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    portfolio: 'Portfolio',
    contact: 'Contact',
    language: 'English',
  },
  occupation: {
    lead: 'Frontend Team Lead',
    senior: 'Senior Frontend Developer',
    middle: 'Frontend Developer',
    junior: 'Junior Frontend Developer',
    support: 'Technical Support Engineer',
  },
  portfolio: {
    scratchDevelopment: 'Frontend development from scratch',
  },
}

const EN = {
  title: common.title,
  month: {
    september: 'september',
    october: 'october',
    november: 'november',
    december: 'december',
    january: 'january',
    february: 'february',
    april: 'april',
    march: 'march',
    may: 'may',
    june: 'june',
    july: 'july',
    august: 'august',
  },
  home: {
    hi: 'Hi',
    iam: "I'm",
    occupation: {
      part1: 'a frontend',
      part2: 'developer',
    },
    subtitle: 'Banner',
  },
  about: {
    text:
      "I'm engaged in <0>frontend development</0>. I create projects of any complexity from scratch, bringing {{0}} ideas to life",
    feature: {
      projects: {
        label: 'Developed {{0}} commercial projects',
        text: `My portfolio includes foreign and domestic commercial projects - from one-page landing pages to large web applications. Most of them can be viewed in <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Senior developer & mentor',
        text: `I develop projects from scratch, write business logic, create layout, optimize and maintain the code. I plan and evaluate tasks, make code reviews and teach. More in <0>${common.title.skills}</0>`,
      },
      experience: {
        label: '{{0}} years of experience',
        text: `Made my first website at the age of {{0}}. I went from a junior coder to a frontend team lead. I work for a domestic IT company and collaborate with a New Zealand studio. More in <0>${common.title.experience}</0>`,
      },
      organizing: {
        label: 'Organized & standalone',
        text:
          'Most of the projects were developed by me independently. I like to take over the entire client part of the project from discussing the concept to the final implementation and support in production',
      },
      programming: {
        label: 'Love to code',
        text:
          'Frontend is my main hobby. I like to experiment with {{0}} and {{1}}. I am interested in cross-platform and back-end development. I plan to launch my own blog',
      },
      growing: {
        label: 'Constantly learning',
        text:
          'I regularly "sharpen the saw", study new technologies, documentation, articles, courses, books and reports. I am looking for new methods and tools to improve efficiency',
      },
      perfect: {
        label: 'Prone to perfectionism',
        text:
          'High quality is my main principle. I put all of myself into every project. The strength of the deadline, the experience and the thought of "all is well in moderation" help me focus on speed and result',
      },
      education: {
        label: 'Two higher educations',
        text:
          'Graduated from the Moscow Technological University and Russian State University of Cinematography {{0}}. Studying in the latter boosted my soft skills well',
      },
      sport: {
        label: 'Sports lover',
        text:
          'Physical activity is especially relevant for the developer and every day I go in for sports. I like calisthenics, cycling, running and hiking. I discovered standup paddleboarding this summer',
      },
      travel: {
        label: 'Traveler',
        text:
          'Visited {{0}} countries. Love Japan and New Zealand. Climbed to the top of Fujiyama, visited Hobbiton and survived after meeting with the Ural bear on the Dyatlov Pass {{1}}',
      },
      love: {
        label: 'Happy husband',
        text:
          "<0>She</0> is my main source of inspiration and best friend. We've been together for {{0}} years. I once developed a progressive web application to offer her a hand and heart {{1}}",
      },
      coffee: {
        label: 'Coffee lover',
        text:
          '"Programmer is an organism that turns coffee into code" {{0}}. I start my working day with a cup of aromatic coffee. After a trip to Japan, I fell in love with matcha tea',
      },
    },
    subtitle: 'Avatar and social',
  },
  skills: {
    text:
      'I develop applications, admin panels, landing pages & multi-page sites. My main stack is <0>{{0}}</0> + <0>{{1}}</0> + <0>{{2}}</0>',
    feature: {
      interface: {
        label: 'Create reliable & well-functioning interfaces',
        text:
          'I implement a system of interface elements with convenient interaction and well-thought-out business logic. I care about cross-browser compatibility, security and handle possible errors',
      },
      performance: {
        label: 'Write modern & productive code',
        text:
          'I use {{0}} standards, {{1}} , {{2}}, {{3}}... Optimize heavy computations. I avoid unnecessary operations and memory leaks. Applying productivity techniques',
      },
      efficient: {
        label: 'Choose a simple way to solve the problem',
        text:
          'For any task, I find an optimal and understandable solution. I understand in which cases it is necessary to use a particular method, pattern, library or tool',
      },
      markup: {
        label: 'Create semantic, cross-browser & {{0}} markup',
        text:
          'I make pixel-by-pixel layouts. I use semantic tags and don\'t suffer from "divatosis" {{0}}. I test in all modern browsers, care about accessibility and also build HTML emails',
      },
      patterns: {
        label: 'Use a lot of patterns & techniques',
        text:
          'Memoization, virtualization, lazy loading, destructuring, decorator, currying, delegation, recursion, module, factory, observer, proxy, mixin, throttling, debounce..',
      },
      modules: {
        label: 'Build a modular & optimal project architecture',
        text:
          'I avoid over-nesting, follow the principle of separation of concerns, {{0}} and {{1}}. Each module / class / component is responsible for one functionality type. Configuring the project build system',
      },
      tools: {
        label: 'Use modern frameworks, libraries, and tools',
        text:
          'I regularly follow the technology updates and in constant search for new ones. In addition to <0>basic</0> I use many auxiliary libraries and tools',
      },
      responsive: {
        label: 'Implement responsive interface & animations',
        text:
          'I use {{0}} approaches, test the interface at every pixel from the minimum to the maximum screen width, create productive {{1}}, {{2}} and {{3}} animations',
      },
      code: {
        label: 'Follow a consistent code style',
        text:
          'I write self-documenting and declarative code, apply popular style guides practices, actively use {{0}} and {{1}}. Human-readable code is more important than the fast one',
      },
      test: {
        label: 'Refactor, optimize & test',
        text:
          'I check the performance of the project in various browsers / devices. Refactoring the code. I measure and speed up the loading of resources. Minify and optimize files / images',
      },
      tasks: {
        label: 'Planning, decomposing & documenting',
        text:
          'I plan the backlog, group, decompose, and evaluate tasks. I use {{0}} and {{1}} methodologies. I use task managers. Writing documentation',
      },
      mentor: {
        label: 'Make code reviews & teach',
        text:
          "I'm mentoring, giving feedback on pull requests and sharing my experience with colleagues. Developed a corporate internship program. Have experience in interviewing",
      },
    },
    subtitle: 'Technologies',
    technologyGroup: {
      logic: 'Logic',
      markup: 'Markup',
      styles: 'Styles',
      utils: 'Utils',
      tools: 'Tools',
      other: 'Other',
    },
    learn: 'Exploring',
  },
  experience: {
    text:
      "I've been professionally engaged in frontend development for more than {{0}} years. <0>Senior Developer</0> & <0>Team Lead</0>. Working remotely",
    duties: 'Responsibilities',
    achievements: 'Achievements',
    current: 'Current position',
    occupation: common.occupation,
    job: {
      duty: {
        logicApps: 'Application business logic development',
        logicAppsSites:
          'Development of business logic for applications and websites',
        logicModules: 'Developing the business logic of application components',
        structureApps: 'Application architecture creation',
        structureProjects: 'Creation of projects architecture',
        responsive: 'Cross-browsing and responsive markup',
        rest: 'Working with {{0}}',
        restSocket: 'Working with {{0}} and {{1}}',
        refactor: 'Code refactoring and maintenance',
        scratch: 'Developing projects from scratch',
        support: 'Projects support',
        tasks: 'Decomposition and evaluation of tasks',
        tasksTeam: 'Planning, decomposing and evaluating team tasks',
        manage: 'Team management and development',
        review: 'Making code reviews and interviews',
        serviceDesk: 'Registration and processing of requests in {{0}}',
        hardwareFix: 'Solving software and hardware issues',
        hardwareInstall: 'Installing, configuring software and hardware',
        consult: 'Advising employees on technical issues',
      },
      achievement: {
        resultCorporate:
          'Successfully completed several large-scale projects for large customers',
        resultForeign:
          'Has successfully implemented a large number of different foreign projects from scratch',
        resultApp:
          'Successfully implemented many components and sections for a large application',
        pathLead: 'Passed the way from an ordinary developer to a team lead',
        pathFront: 'Grew from junior to a middle frontend developer',
        internship: 'Developed a corporate internship program',
        mentor: 'Became a mentor and trained several juniors',
        mobile:
          'In addition to web applications, I develop mobile applications on {{0}}',
        design: 'Periodically doing design and prototyping',
        interview: 'Conducted dozens of interviews',
        technologies:
          'Studied and applied in practice many technologies and libraries',
        technologiesBase: 'Pumped the {{0}}, {{1}} and {{2}} very well',
        speed:
          'Set a personal record for the speed of completion of a project - {{0}} day',
        independent: 'Reached a high level of autonomy and organization',
        english: 'Improved English, cooperating with foreign customers',
        testimonials:
          'Received many complimentary reviews from colleagues / customers',
        work: 'Improved teamwork skills',
        orders: 'Processed thousands of requests',
        hardware: 'Gained extensive experience with software and hardware',
        softSkills: 'Improved soft skills',
      },
      feature: {
        busyFull: 'full-time',
        busyPart: 'part-time',
        remote: 'remotely',
        office: 'office',
        moscow: 'Moscow, Russia',
        auckland: 'Auckland, New Zealand',
      },
    },
    subtitle: 'Steps',
    next: 'Next',
    back: 'Back',
    refresh: 'Reset',
    continue: 'To be continued ✌️',
    stepper: {
      step1: `Worked as a <0>${common.occupation.support}</0> in the {{0}} company`,
      step2: 'Expanded my horizons in other areas of activity {{0}}',
      step3:
        'In parallel with my study at the university, I created pet projects in the process of learning web development',
      step4: `Passed the interview. Completed the test tasks and I was invited to work as a <0>${common.occupation.junior}</0> in the {{0}} company`,
      step5: `Worked as a <0>${common.occupation.junior}</0> in the {{0}}`,
      step6: `As a result of successful work, I was promoted to a <0>${common.occupation.middle}</0> in the {{0}} company`,
      step7: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}. In my spare time I did a commercial project for the {{1}} company`,
      step8: `As a result of the successful completion of the project, I was invited to the company {{0}} for the position of a <0>${common.occupation.middle}</0>. Made a decision to move from {{1}} to {{2}}`,
      step9: `Worked as a <0>${common.occupation.senior}</0> in the {{0}}`,
      step10: `Agreed with the {{0}} to continue working on projects in part-time mode. Received several offers for the position of a <0>${common.occupation.senior}</0>, chose the {{1}} company`,
      step11: `Worked as a <0>${common.occupation.senior}</0> in the {{0}}`,
      step12: `As a result of the successful implementation of several projects and the expansion of the area of responsibility, I was promoted to <0>${common.occupation.lead}</0> in the {{0}} company`,
      step13: `Working as a <0>${common.occupation.lead}</0> in the {{0}}. Continue to collaborate on projects with the {{1}}`,
    },
  },
  portfolio: {
    limit:
      "Here are some of my favourite projects I've worked on that can be shown",
    developed: 'Developed in',
    filter: {
      all: 'All',
      app: 'Application',
      site: 'Website',
      landing: 'Landing page',
      admin: 'Admin panel',
    },
    feature: {
      wholeDevelopment: `${common.portfolio.scratchDevelopment}, project progress & support`,
      scratchGrowthDevelopment: `${common.portfolio.scratchDevelopment}, project support`,
      scratchDevelopment: common.portfolio.scratchDevelopment,
      growthSupportDevelopment: 'Project progress & support',
      markupBusinessLogic: 'Markup & development of a part of business logic',
      jqueryReact: 'Rewriting the codebase from {{0}} to {{1}}',
      leadWork: 'Frontend development team lead',
      teamWork: 'Frontend development team member',
      soloWork: 'Standalone frontend development',
      responsive: 'Responsive interface',
      emails: 'email markup',
      design: 'prototyping & design',
      animations: 'Animations',
      businessLogic: 'Extensive business logic',
      pwa: 'Progressive Web Application',
      firstProject: 'First commercial project',
      firstScratchProject:
        'The first commercial project developed from scratch',
      spa: 'Turned the site into a Single Page Application',
      tryTwo: `Worked with {{0}}, & {{1}}`,
      tryThree: `Worked with {{0}}, {{1}} & {{2}}`,
      tryOneGraph: `Worked with {{0}} & charts`,
      sellHouse: 'House sold successfully',
      formsTables: 'Many forms & tables',
      darkTheme: 'Dark theme',
      dynamicFormsRouting: 'Dynamic forms, own routing',
    },
    project: {
      ninjal: {
        text: 'Landing page for a New Zealand truck drivers hire service',
      },
      ninja: {
        text: 'New Zealand truck drivers hire service',
      },
      celebration: {
        text:
          "New Year's mini-application for congratulating company employees",
      },
      ally: {
        text:
          'Landing page for a mobile application for interactive figures {{0}}',
      },
      presentmel: {
        text:
          'Landing page for a New Zealand jobseeker profile creation service',
      },
      presentmep: {
        text:
          'Admin panel of the New Zealand service for creating a job seeker profile',
      },
      presentme: {
        text: 'New Zealand service for creating a job seeker profile',
      },
      dropdrone: {
        text: 'New Zealand agricultural startup website',
      },
      hatched: {
        text:
          'Landing page for a mobile application tracker for newborn babies',
      },
      uls: {
        title: 'United Login System',
        text: '{{0}} single user account',
      },
      proximal: {
        text: 'Landing page for an Australian coffee shop',
      },
      embp: {
        title: 'EMBP',
        text: 'Admin panel of the biometric platform for VTB Bank',
      },
      tmf: {
        text: 'New Zealand construction company website',
      },
      lite: {
        text: 'Landing page for a New Zealand digital agency service',
      },
      melissa: {
        text: 'Fitness blogger landing page',
      },
      foodp: {
        text:
          'Portal of the New Zealand discount food ordering service in restaurants',
      },
      food: {
        text:
          'Landing page of a New Zealand service for ordering discount food in restaurants',
      },
      sds: {
        text: 'Enterprise service for work with {{0}} document flow',
      },
      strong: {
        text: 'Mobile fitness application website',
      },
      glyphs2: {
        text: 'Home website of a New Zealand digital agency',
      },
      rogue: {
        text: 'New Zealand flight & hotel group booking service',
      },
      trucks: {
        text: 'New Zealand truck traffic monitoring service',
      },
      services: {
        text:
          '{{0}} New Zealand digital agency service description landing page',
      },
      fcdc: {
        text: 'Event management service admin panel',
      },
      saffron: {
        text: 'Landing page for sale of a private home in New Zealand',
      },
      whip: {
        text: 'New Zealand vehicle inspection service',
      },
      lazyazd: {
        text: 'Admin panel of a New Zealand delivery service',
      },
      lazyaz: {
        text: 'Web platform for a New Zealand delivery service',
      },
      glyphs: {
        text: 'Home site of a New Zealand digital agency',
      },
      msp: {
        title: 'Business navigator MSP',
        text:
          'Service for entrepreneurs who want to open or expand their business',
      },
    },
    subtitle: 'Screenshots',
    screenshot: 'Screenshot',
    mobile: 'mobile',
    screen: 'project screen',
  },
  contact: {
    text: {
      part1: 'Do you need my <0>help</0>',
      part2: 'Or have a <0>suggestion</0> for me',
      part3: 'Send me a <0>message</0> to <1>{{0}}</1> or use the form',
    },
    marker: "I'm living here now",
    form: {
      name: 'Name',
      message: 'Message',
      send: 'Send',
    },
    success: {
      thank: 'Message sent. Thank you',
      sent: 'Message sent',
      callback: 'I will contact you shortly',
      ok: 'Good',
    },
  },
  copyright: {
    crafted: 'Crafted by',
    me: 'me',
    with: 'with',
  },
  other: {
    more: 'Details',
    see: 'See it live',
    error: 'Server connection error',
  },
}

export default EN

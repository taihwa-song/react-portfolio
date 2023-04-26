import {Contact, makeContact} from './Contact'
import {Experience, makeExperience} from './Experience'
import {Principals, makePrincipal, makePrincipals} from './Principals'
import {Profile, makeAbout, makeProfile} from './Profile'
import {Project, makeProject} from './Project'

export type PortfolioData = {
  experiences: Experience[]
  projects: Project[]
  contact: Contact
  profile: Profile
  principals: Principals
}
const data: PortfolioData = {
  experiences: [
    makeExperience(
      'Index Exchange',
      'Index Exchange: Engineering Lead Manager',
      'Engineering Lead Manager',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2022-03-01'),
      new Date('2023-02-01'),
      [
        'Leading an ML & Optimization team increasing the efficiency of platform dynamics together with teams abroad',
        'Skills: AWS, PySpark, Jupyter'
      ]
    ),
    makeExperience(
      'Index Exchange',
      'Index Exchange: Principal Software Engineer',
      'Data Scientist',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2021-03-01'),
      new Date('2022-03-01'),
      [
        'Developed a request optimization solution via a machine learning solution with a group of five engineers',
        'Introduced and instantiated components of MLOps into the company which allowed management of a training pipeline via DAG.',
        'Skills: GoLang, Python, AWS, PySpark, Jupyter'
      ]
    ),
    makeExperience(
      'Index Exchange',
      'Index Exchange: MLOps',
      'MLOps',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2019-07-01'),
      new Date('2021-03-01'),
      ['point 1', 'point 2']
    ),
    makeExperience(
      'Index Exchange',
      'Index Exchange: Backend Engineer',
      'Backend Engineer',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2016-01-01'),
      new Date('2019-07-01'),
      [
        'Building an ad exchange system handling 300 billion requests every day',
        'Building CI/CD pipelines for development and deployment automations',
        'Skills: GoLang'
      ]
    ),
    makeExperience(
      'Index Exchange',
      'Casale Media: Testing',
      'Software Developer In Test',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2014-11-01'),
      new Date('2016-01-01'),
      [
        'Planning and designing test strategies',
        'Executing tests and analyzing results',
        'Skills: Perl, Unit Testing, Regression Testing'
      ]
    )
  ],
  projects: [
    makeProject(
      'Project Name 1',
      'description 1',
      'https://dummyimage.com/600x200/000/fff',
      'https://www.linkedin.com/feed/'
    ),
    makeProject(
      'Project Name 2',
      'description 2',
      'https://dummyimage.com/600x200/000/fff',
      'https://www.linkedin.com/feed/'
    )
  ],
  contact: makeContact(
    "Write your 'contact' section here",
    'taihwa.song@gmail.com',
    'https://www.linkedin.com/in/taihwasong/',
    'https://github.com/taihwa-song'
  ),
  profile: makeProfile(
    'Taihwa',
    'According to Pareto Principle, 80% of consequences come from 20% of causes. I desire to attain "many" 20% done to help growing busineses.',
    [
      'Eng Lead Manager',
      'Data Scientist',
      'ML Engineer',
      'Backend Engineer',
      'Quality Assurer'
    ],
    ['Frontend Engineer'],
    'https://www.linkedin.com/in/taihwasong/',
    'https://i.ibb.co/qMNjHhf/square.png',
    [
      makeAbout('What I did', [
        '🧑‍💼️ Eng Lead Manager',
        '🧑‍🔧️ Backend Principal Engineer',
        '🧠 Machine Learning Engineer',
        '📊 Data scientist',
        '✅ Quality Assurer'
      ]),
      makeAbout('A STORY BEHIDE THE ROLES', [
        'It\'s a little bit of "many" needed for creativity and innovation.'
      ]),
      makeAbout('NEXT MILESTONE', ['🎨 Frontend Engineering'])
    ]
  ),
  principals: makePrincipals(
    '3 Principals, I follow',
    'When making decisions, whether it being life or busineses, I follow the 3 principals to expedite the outcome or to fail and learn in a meaningful way.',
    [
      makePrincipal('PARETO PRINCIPLE', '80% of consequences come from 20% of causes'),
      makePrincipal(
        "PETER THIEL'S BOOK, “ZERO TO ONE”",
        'Today’s “best practices” lead to dead ends; the best paths are new and untried.'
      ),
      makePrincipal(
        'STEVE JOBS',
        'Your time is limited, so don’t waste it living someone else’s life.'
      )
    ]
  )
}

export default data

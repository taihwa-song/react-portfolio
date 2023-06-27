import {Contact, makeContact} from './Contact'
import {Experience, makeExperience} from './Experience'
import {Principals, makePrincipal, makePrincipals} from './Principals'
import {Profile, makeAbout, makeProfile} from './Profile'
import {Project, makeProject} from './Project'
import project1logo from '../images/project1.png'
import project2logo from '../images/project2.gif'
import project3logo from '../images/project3.png'
import project4logo from '../images/project4.jpg'

export type PortfolioData = {
  experiences: Experience[]
  projects: Project[]
  contact: Contact
  profile: Profile
  principals: Principals
}
const data: PortfolioData = {
  profile: makeProfile(
    'Taihwa',
    'According to the Pareto Principle, 80% of consequences come from 20% of causes. I desire to attain "many" 20% done to help growing businesses.',
    [
      'Eng Lead Manager',
      'Data Scientist',
      'ML Engineer',
      'Backend Engineer',
      'Quality Assurer'
    ],
    ['Software Engineer'],
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
      makeAbout('NEXT MILESTONE', ['🧑🏻‍💻️ Software Engineering'])
    ]
  ),
  principals: makePrincipals(
    '3 Principals, I follow',
    'To Expedite outcomes or to fail-and-learn meaningfully.',
    [
      makePrincipal('PARETO PRINCIPLE', '80% of consequences come from 20% of causes'),
      makePrincipal(
        "PETER THIEL'S BOOK, “ZERO TO ONE”",
        'Today’s “best practices” lead to dead ends; the best paths are new and untried.'
      ),
      makePrincipal(
        'Taihwa Song',
        "Collecting the dots. Then connect them; it'll become a line. That makes you YOU"
      )
    ]
  ),
  experiences: [
    makeExperience(
      'Index Exchange',
      'Index Exchange: Engineering Lead Manager',
      'Engineering Lead Manager',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2022-03-01'),
      new Date('2023-02-01'),
      [
        '🧑‍💼️ Leading 2 teams: a team building a MLOps platform and another solving optimization problems.',
        '📢 Cross-team communication: Worked with backend engineers, data team, and non-technical audiences to solve business problems.',
        '📊 Data Science: proving uncertainties using big data',
        '☁️ AWS (Cloud): automated continuous model training using apache airflow',
        '🛠️ Skills: AWS, Airflow, S3, Docker, PySpark, Jupyter, CI/CD'
      ]
    ),
    makeExperience(
      'Index Exchange',
      'Index Exchange: Principal  Engineer',
      'Principal Software Engineer & Data Scientist',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2021-03-01'),
      new Date('2022-03-01'),
      [
        '🏗 MLOps platform: building an in-house MLOps platform using MLFlow (model registry), DVC (DAGs & data versioning), Feast (feature store), and K8s',
        '📈 Traffic Optimization: Ad partner side traffic optimization yielding up to 2x higher spends using the MLOps platform above.',
        '✨ Perl to Go platform revamp: Re-building the entire platform from a legacy language, Perl, to a cutting edge language, GoLang.',
        '🛠️ Skills: Golang, K8s, MLFlow, DVC'
      ]
    ),
    makeExperience(
      'Index Exchange',
      'Index Exchange: Engineer IV - Backend & ML',
      'MLOps',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2019-08-01'),
      new Date('2021-03-01'),
      [
        '🔬 From a personal project to a business product: Initiated a project to optimize the inbound traffic to reduce server pressures using a machine-learning solution. The project reduced the server pressure by 40% with a marginal revenue loss.',
        '🚅 Code Optimization: reduced the overall processing time by 65% through profiling.',
        '🛠️ Skills: K8s, Docker, Jupyter, Tensorflow, CatBoast'
      ]
    ),
    makeExperience(
      'Index Exchange',
      'Index Exchange: Engineer II & III - Backend ',
      'Backend Engineer',
      'https://www.indexexchange.com/tachyon/2021/11/cropped-Index_LogoSuite-10.png',
      new Date('2016-01-01'),
      new Date('2019-08-01'),
      [
        '🌐 Globalization project: multi language (UTF-8) and multi currency support',
        '🧑‍🏭️ Low latency platform development: Building an ad exchange system handling 300 billion requests every day',
        '🔄 CI/CD: Building CI/CD pipelines for development and deployment automations',
        '🛠️ Skills: GoLang, Gitlab CI/CD, K8s, Docker, profiling'
      ]
    ),
    makeExperience(
      'Casale Media',
      'Casale Media: Testing',
      'Software Developer In Test',
      'https://seeklogo.com/images/C/casale-media-logo-D707A8CE51-seeklogo.com.png',
      new Date('2014-11-01'),
      new Date('2016-01-01'),
      [
        '🎨 Planning and designing test strategies',
        '🥼 Test Analysis: Executing tests and analyzing results',
        '🛠️ Skills: Perl, SVN, Unit Testing, Regression Testing'
      ]
    )
  ],
  projects: [
    makeProject(
      'Machine Learning: Inbound Traffic Optimization (From a personal project to business product)',
      'Initiated a project to optimize the inbound traffic to reduce server pressures using a machine-learning solution. The project reduced the server pressure by 40%.',
      project1logo,
      'https://www.indexexchange.com/2020/08/06/introduction-machine-learning/'
    ),
    makeProject(
      'Insta GPT',
      'Created an instagram influencer making daily posts using chatGPT and Facebook API. Currently 4 InstaGPT influencers are available and one of them made hundreds of followers within a month.',
      project4logo,
      'https://www.instagram.com/midnight_inspiration_foryou/'
    ),
    makeProject(
      'Portfolio in React',
      'Building a portfolio website using React with typescript and Chakra UI. The website is CI/CDed using Netlify pipelines.',
      project2logo,
      'https://github.com/taihwa-song/react-portfolio'
    ),
    makeProject(
      'Platform revamp with GoLang',
      'Rebuilt from the ground up, our new exchange architecture provides increased efficiency and an ability to scale and innovate in new channels and formats, resulting in improved margins for media owners and additional working media dollars for marketers.',
      project3logo,
      'https://www.indexexchange.com/2021/11/16/new-platform-increased-efficiency-across-channels/'
    )
  ],
  contact: makeContact(
    '',
    'taihwa.song@gmail.com',
    'https://www.linkedin.com/in/taihwasong/',
    'https://github.com/taihwa-song'
  )
}

export default data

import {Experience, makeExperience} from './Experience'

export type PortfolioData = {
  experiences: Experience[]
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
  ]
}

export default data

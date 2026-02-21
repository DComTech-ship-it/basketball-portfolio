import { Link } from '@chakra-ui/react'

export type Company = 'HighSchool' | 'College' | 'AmateurLeague' | 'TrainingCamp'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  HighSchool: {
    name: 'Mawuli School',
    longName: 'Mawuli Senior High School Basketball',
    subDetail: 'Inter-House Competition Captain',
    url: 'https://example.com/mawuli-school',
    position: '6\'1 Point Guard / Team Captain',
    duration: '2022 - 2024',
    logo: {
      light: '/worked_at_logos/deloitte/Deloitte_logo.png',
      dark: '/worked_at_logos/deloitte/Deloitte_logo_black.png',
    },
    roles: [
      <>
        Led team to victory in Inter-House Competition 2024
        Won all games including championship final by 1 point
        Known as "hooper" throughout school since first year
      </>,
      <>
        Trained team members at Ho polytechnic with childhood friend KOBBY SAVIOR AMAGLO
        Organized team practices and strategic planning
        Maintained team chemistry and leadership as captain
      </>,
      <>
        Overcame height challenges to excel as point guard
        Recognized for outstanding performance and clutch plays
        Selected to represent school in various competitions
      </>,
    ],
  },
  College: {
    name: 'State University',
    longName: 'State University Basketball Program',
    subDetail: 'NCAA Division I',
    url: 'https://example.com/state-university',
    position: 'Shooting Guard',
    duration: '2020 - 2024',
    logo: {
      light: '/worked_at_logos/ivp/blotocol-logo-white.png',
      dark: '/worked_at_logos/ivp/blotocol_logo-dark.png',
    },
    roles: [
      <>
        Started 85 of 120 games during college career
        Averaged 12.3 points, 3.8 assists, 2.9 rebounds per game
        Helped team reach March Madness Tournament twice
      </>,
      <>
        Named to Conference All-Academic Team
        Led team in 3-point shooting percentage (42.1%)
        Won Conference Championship in 2022
      </>,
      <>
        Served as Team Vice-Captain in senior year
        Graduated with Bachelor's in Sports Management
        Received team's Leadership Award
      </>,
    ],
  },
  AmateurLeague: {
    name: 'Campus Basketball',
    longName: 'School Campus Basketball League',
    subDetail: 'Early Development Years',
    url: 'https://example.com/campus-league',
    position: 'Ball Chaser to Team Captain',
    duration: '2016 - 2021',
    logo: {
      light: '/worked_at_logos/amateur/campus_basketball.png',
      dark: '/worked_at_logos/amateur/campus_basketball_dark.png',
    },
    roles: [
      <>
        Started playing football with friends EDWIN ELORM AGBOBLI, EPHRAIM WORLANYO AMAGLO, and SAVIOR KOBBY AMAGLO
        Transitioned from football to basketball around age 9-10
        Began by chasing balls out of bounds and observing games
      </>,
      <>
        Developed basketball skills during pandemic lockdown
        Trained consistently with childhood friends on school court
        Took basketball seriously to reach next level
      </>,
      <>
        Learned from brother's experience against Keta Senior High (2019)
        Motivated by friends' success at Sogakope Senior High
        Dedicated to improving skills and game knowledge
      </>,
    ],
  },
  TrainingCamp: {
    name: 'Self-Development',
    longName: 'Basketball Skills Development',
    subDetail: 'Personal Training & Development',
    url: 'https://example.com/self-development',
    position: 'Dedicated Athlete',
    duration: '2020 - Present',
    logo: {
      light: '/worked_at_logos/scg/SCG.png',
      dark: '/worked_at_logos/scg/SCG.png',
    },
    roles: [
      <>
        Intensive training during pandemic to elevate game
        Focused on fundamental skills and basketball IQ
        Trained with brother and friends for mutual improvement
      </>,
      <>
        Overcame setbacks: illness during 2023 inter-house games
        Persisted despite being told "not tall enough" for zonals
        Continued training and preparation for opportunities
      </>,
      <>
        Breakthrough final year at Mawuli School (2024)
        Led team to undefeated inter-house competition record
        Proved doubters wrong with exceptional performance
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.HighSchool,
  Experiences.College,
  Experiences.AmateurLeague,
  Experiences.TrainingCamp,
]

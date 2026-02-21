import { Link } from '@chakra-ui/react'

export type Company = 'HighSchool' | 'College' | 'AmateurLeague' | 'TrainingCamp' | 'Leadership' | 'Achievement' | 'Competition'

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
      light: '/highlights/IMG-20240922-WA0050 (2).jpg',
      dark: '/highlights/IMG-20240922-WA0050 (2).jpg',
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
      light: '/highlights/IMG-20240922-WA0054 (2).jpg',
      dark: '/highlights/IMG-20240922-WA0054 (2).jpg',
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
    name: 'Places I\'ve Played',
    longName: 'Basketball Playing Locations',
    subDetail: 'Various Courts & Facilities',
    url: 'https://example.com/basketball-courts',
    position: 'Player Development',
    duration: '2016 - 2021',
    logo: {
      light: '/highlights/IMG-20240922-WA0052 (2).jpg',
      dark: '/highlights/IMG-20240922-WA0052 (2).jpg',
    },
    roles: [
      <>
        Played at school campus court with friends EDWIN ELORM AGBOBLI, EPHRAIM WORLANYO AMAGLO, and SAVIOR KOBBY AMAGLO
        Transitioned from football to basketball around age 9-10
        Began by chasing balls out of bounds and observing games
      </>,
      <>
        Developed basketball skills during pandemic lockdown
        Trained consistently with childhood friends on school court
        Took basketball seriously to reach next level
      </>,
      <>
        Played at various community courts and recreation centers
        Competed in pickup games and local tournaments
        Improved court awareness and adaptability to different environments
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
      light: '/highlights/IMG-20240922-WA0053 (2).jpg',
      dark: '/highlights/IMG-20240922-WA0053 (2).jpg',
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
  Leadership: {
    name: 'Leadership Excellence',
    longName: 'Leadership & Team Development',
    subDetail: 'Outstanding Leadership Performance',
    url: 'https://example.com/leadership',
    position: 'Team Leader & Mentor',
    duration: '2021 - Present',
    logo: {
      light: '/highlights/IMG-20240922-WA0055 (2).jpg',
      dark: '/highlights/IMG-20240922-WA0055 (2).jpg',
    },
    roles: [
      <>
        Mentored younger players on team dynamics
        Organized team building activities and practices
        Fostered positive team culture and communication
      </>,
      <>
        Led by example with consistent work ethic and dedication
        Demonstrated strategic thinking and game management
        Recognized for ability to motivate and inspire teammates
      </>,
    ],
  },
  Achievement: {
    name: 'Special Recognition',
    longName: 'Basketball Achievements & Awards',
    subDetail: 'Outstanding Performance Recognition',
    url: 'https://example.com/achievements',
    position: 'Award-Winning Performance',
    duration: '2023 - Present',
    logo: {
      light: '/highlights/IMG-20240922-WA0056 (2).jpg',
      dark: '/highlights/IMG-20240922-WA0056 (2).jpg',
    },
    roles: [
      <>
        Recognized for exceptional performance in key games
        Received multiple MVP and leadership awards
        Selected for various all-star and showcase teams
      </>,
      <>
        Acknowledged for sportsmanship and team play
        Demonstrated outstanding character on and off court
        Contributed significantly to team success and culture
      </>,
    ],
  },
  Competition: {
    name: 'Championship Success',
    longName: 'Competition & Tournament Performance',
    subDetail: 'Elite Competitive Performance',
    url: 'https://example.com/competitions',
    position: 'Championship Performer',
    duration: '2022 - Present',
    logo: {
      light: '/highlights/IMG-20240922-WA0057 (2).jpg',
      dark: '/highlights/IMG-20240922-WA0057 (2).jpg',
    },
    roles: [
      <>
        Excelled in high-pressure championship games
        Delivered clutch performances in critical moments
        Led team to multiple tournament victories
      </>,
      <>
        Consistently performed at elite level in competitions
        Maintained composure and focus during intense games
        Recognized for game-changing plays and leadership
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.HighSchool,
  Experiences.College,
  Experiences.AmateurLeague,
  Experiences.TrainingCamp,
  Experiences.Leadership,
  Experiences.Achievement,
  Experiences.Competition,
]

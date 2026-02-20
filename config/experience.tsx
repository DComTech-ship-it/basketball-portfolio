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
    name: 'Springfield High',
    longName: 'Springfield High School Basketball',
    subDetail: 'Varsity Team',
    url: 'https://example.com/springfield-hs',
    position: 'Starting Point Guard',
    duration: '2016 - 2020',
    logo: {
      light: '/worked_at_logos/highschool/springfield_logo.png',
      dark: '/worked_at_logos/highschool/springfield_logo_dark.png',
    },
    roles: [
      <>
       Led team to State Championship appearance in 2019
       Averaged 18.5 points, 7.2 assists, 4.3 rebounds per game
       Named Team MVP and All-Conference First Team
      </>,
      <>
        Selected as Team Captain in junior and senior years
        Maintained 3.8 GPA while balancing athletics and academics
        Won District Championship in 2018
      </>,
      <>
        Set school record for most 3-pointers in a season (78)
        Participated in National High School Basketball Tournament
        Received All-State Honorable Mention
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
      light: '/worked_at_logos/college/state_university_logo.png',
      dark: '/worked_at_logos/college/state_university_logo_dark.png',
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
    name: 'City Elite',
    longName: 'City Elite Amateur Basketball League',
    subDetail: 'Premier Division',
    url: 'https://example.com/city-elite',
    position: 'Team Captain',
    duration: '2024 - Present',
    logo: {
      light: '/worked_at_logos/amateur/city_elite_logo.png',
      dark: '/worked_at_logos/amateur/city_elite_logo_dark.png',
    },
    roles: [
      <>
        Leading team in scoring with 22.4 points per game
        Organizing team practices and strategic planning
        Maintaining team chemistry and morale
      </>,
      <>
        Selected as League All-Star in 2024
        Leading team to playoff contention
        Mentoring younger players on the team
      </>,
    ],
  },
  TrainingCamp: {
    name: 'Elite Skills Academy',
    longName: 'Elite Skills Basketball Training Academy',
    subDetail: 'Advanced Training Program',
    url: 'https://example.com/elite-academy',
    position: 'Student Athlete',
    duration: 'Summer 2023',
    logo: {
      light: '/worked_at_logos/training/elite_academy_logo.png',
      dark: '/worked_at_logos/training/elite_academy_logo_dark.png',
    },
    roles: [
      <>
        Completed intensive 8-week training program
        Improved shooting accuracy by 15%
        Trained with former professional players
      </>,
      <>
        Participated in showcase tournaments
        Received certification in Advanced Basketball Analytics
        Networked with scouts and coaches
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

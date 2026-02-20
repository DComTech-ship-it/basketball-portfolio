import { IconType } from 'react-icons'
import {
  GiBasketballBall,
  GiTargeted,
  GiFootprint,
  GiTrophy,
  GiWhistle,
  GiBasketballJersey,
  GiBiceps,
  GiRunningShoe,
  GiStopwatch,
  GiMagnetism,
  GiShield,
  GiHeartBeats,
} from 'react-icons/gi'
import { BsQuestionSquare } from 'react-icons/bs'

export type SkillCategory =
  | 'offensive skills'
  | 'defensive skills'
  | 'physical attributes'
  | 'basketball iq'
  | 'shooting'
  | 'playmaking'
  | 'leadership'
  | 'achievements'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  'offensive skills': [
    {
      name: '3-Point Shooting',
      icon: GiBasketballBall,
    },
    {
      name: 'Mid-Range Game',
      icon: GiTargeted,
    },
    {
      name: 'Driving to Basket',
      icon: GiFootprint,
    },
    {
      name: 'Post Moves',
      icon: GiBiceps,
    },
    {
      name: 'Transition Offense',
      icon: GiRunningShoe,
    },
  ],
  'defensive skills': [
    {
      name: 'Perimeter Defense',
      icon: GiShield,
    },
    {
      name: 'Shot Blocking',
      icon: GiBasketballJersey,
    },
    {
      name: 'Steals & Deflections',
      icon: GiWhistle,
    },
    {
      name: 'Rebounding',
      icon: GiTrophy,
    },
    {
      name: 'Help Defense',
      icon: GiMagnetism,
    },
  ],
  'physical attributes': [
    {
      name: 'Speed & Agility',
      icon: GiRunningShoe,
    },
    {
      name: 'Vertical Jump',
      icon: GiFootprint,
    },
    {
      name: 'Stamina',
      icon: GiHeartBeats,
    },
    {
      name: 'Strength',
      icon: GiBiceps,
    },
    {
      name: 'Quick Reflexes',
      icon: GiStopwatch,
    },
  ],
  'basketball iq': [
    {
      name: 'Court Vision',
      icon: GiWhistle,
    },
    {
      name: 'Game Awareness',
      icon: GiTargeted,
    },
    {
      name: 'Strategic Thinking',
      icon: GiMagnetism,
    },
    {
      name: 'Adaptability',
      icon: GiFootprint,
    },
    {
      name: 'Decision Making',
      icon: GiStopwatch,
    },
  ],
  shooting: [
    {
      name: 'Free Throw Accuracy',
      icon: GiTargeted,
    },
    {
      name: 'Clutch Shooting',
      icon: GiTrophy,
    },
    {
      name: 'Shooting Form',
      icon: GiBasketballBall,
    },
    {
      name: 'Quick Release',
      icon: GiStopwatch,
    },
    {
      name: 'Range Shooting',
      icon: GiFootprint,
    },
  ],
  playmaking: [
    {
      name: 'Passing Skills',
      icon: GiBasketballBall,
    },
    {
      name: 'Assist Creation',
      icon: GiWhistle,
    },
    {
      name: 'Pick & Roll',
      icon: GiMagnetism,
    },
    {
      name: 'Ball Handling',
      icon: GiTargeted,
    },
    {
      name: 'Court Leadership',
      icon: GiBasketballJersey,
    },
  ],
  leadership: [
    {
      name: 'Team Captain',
      icon: GiBasketballJersey,
    },
    {
      name: 'Motivation',
      icon: GiHeartBeats,
    },
    {
      name: 'Communication',
      icon: GiWhistle,
    },
    {
      name: 'Leading by Example',
      icon: GiTrophy,
    },
    {
      name: 'Mentorship',
      icon: GiTargeted,
    },
  ],
  achievements: [
    {
      name: 'Championship Titles',
      icon: GiTrophy,
    },
    {
      name: 'MVP Awards',
      icon: GiBasketballJersey,
    },
    {
      name: 'All-Star Selections',
      icon: GiBasketballBall,
    },
    {
      name: 'Records Broken',
      icon: GiStopwatch,
    },
    {
      name: 'Team Achievements',
      icon: GiMagnetism,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}

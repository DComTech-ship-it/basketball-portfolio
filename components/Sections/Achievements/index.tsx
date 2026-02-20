import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import {
  GiTrophy,
  GiMedal,
  GiBasketballJersey,
  GiTargeted,
  GiStairs,
  GiTeamUpgrade,
} from 'react-icons/gi'
import { FaGraduationCap } from 'react-icons/fa'

const Achievements = () => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

  const achievements = [
    {
      title: 'All-Academic Team',
      description: 'Named to Conference All-Academic Team',
      icon: FaGraduationCap,
      year: '2023',
    },
    {
      title: 'League All-Star Selection',
      description: 'Selected to Premier Division All-Star Team',
      icon: GiStairs,
      year: '2024',
    },
    {
      title: 'Career High 30 Points',
      description: 'First 30+ point game of career',
      icon: GiTargeted,
      year: '2023',
    },
    {
      title: 'Conference Championship',
      description: 'Won NCAA Conference Championship',
      icon: GiTrophy,
      year: '2022',
    },
    {
      title: 'District Championship',
      description: 'Won high school district championship',
      icon: GiTrophy,
      year: '2021',
    },
    {
      title: 'All-State Honorable Mention',
      description: 'Recognized as one of top 50 players in state',
      icon: GiBasketballJersey,
      year: '2021',
    },
    {
      title: 'Team MVP',
      description: 'Named Most Valuable Player',
      icon: GiMedal,
      year: '2021',
    },
    {
      title: 'Team Captain',
      description: 'Named captain of varsity team',
      icon: GiTeamUpgrade,
      year: '2021',
    },
  ]

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Achievements & Awards
      </Heading>
      <Text variant="description">
        Throughout my basketball journey, I've been fortunate to earn various awards and recognition for my performance on and off the court.
      </Text>

      <List spacing={4}>
        {achievements.map((achievement, index) => (
          <ListItem key={index} fontSize="small" display="flex" alignItems="flex-start">
            <Icon
              as={achievement.icon}
              color={emphasis}
              fontSize="1.5em"
              mr={3}
              mt={1}
            />
            <Stack spacing={1}>
              <Text fontWeight="bold">
                {achievement.title} ({achievement.year})
              </Text>
              <Text fontSize="smaller" color="gray.600">
                {achievement.description}
              </Text>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default memo(Achievements)

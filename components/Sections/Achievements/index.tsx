import { memo } from 'react'
import {
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  Divider,
  Icon,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import {
  GiTrophy,
  GiMedal,
  GiBasketballJersey,
  GiTargeted,
  GiFootprint,
  GiStairs,
  GiAcademicCap,
  GiTeamUpgrade,
} from 'react-icons/gi'
import { FaGraduationCap } from 'react-icons/fa'

const Achievements = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const emphasis = useColorModeValue('orange.500', 'orange.300')

  // Sample achievements - replace with real data
  const achievements = [
    {
      id: 1,
      date: '2024-03-15',
      title: 'City Championship Winner',
      description: 'Hit game-winning shot with 0.3 seconds remaining',
      category: 'Championship',
      icon: GiTrophy,
      color: 'yellow',
      stats: '22 points, 8 assists, 5 rebounds',
      team: 'City Elite',
    },
    {
      id: 2,
      date: '2024-02-10',
      title: 'League All-Star Selection',
      description: 'Selected to Premier Division All-Star Team',
      category: 'All-Star',
      icon: GiStairs,
      color: 'purple',
      stats: '18.5 PPG season average',
      team: 'City Elite',
    },
    {
      id: 3,
      date: '2023-12-20',
      title: 'Career High 30 Points',
      description: 'First 30+ point game of career',
      category: 'Milestone',
      icon: GiTargeted,
      color: 'blue',
      stats: '30 points, 6 assists, 4 rebounds',
      team: 'City Elite',
    },
    {
      id: 4,
      date: '2023-11-15',
      title: 'Team Captain Appointment',
      description: 'Named captain of City Elite',
      category: 'Leadership',
      icon: GiTeamUpgrade,
      color: 'green',
      stats: 'Leading team to 12-2 record',
      team: 'City Elite',
    },
    {
      id: 5,
      date: '2023-05-20',
      title: 'Conference Championship',
      description: 'Won NCAA Conference Championship',
      category: 'Championship',
      icon: GiTrophy,
      color: 'yellow',
      stats: '15 points in championship game',
      team: 'State University',
    },
    {
      id: 6,
      date: '2023-04-10',
      title: 'All-Academic Team',
      description: 'Named to Conference All-Academic Team',
      category: 'Academic',
      icon: GiStairs,
      color: 'red',
      stats: '3.8 GPA',
      team: 'State University',
    },
    {
      id: 7,
      date: '2022-12-15',
      title: '1000 Career Points',
      description: 'Reached 1000 career points milestone',
      category: 'Milestone',
      icon: GiTargeted,
      color: 'blue',
      stats: '1000+ career points',
      team: 'State University',
    },
    {
      id: 8,
      date: '2022-03-25',
      title: 'District Championship',
      description: 'Won high school district championship',
      category: 'Championship',
      icon: GiTrophy,
      color: 'yellow',
      stats: '25 points in final',
      team: 'Springfield High',
    },
    {
      id: 9,
      date: '2021-11-20',
      title: 'Team MVP',
      description: 'Named Most Valuable Player',
      category: 'Award',
      icon: GiMedal,
      color: 'orange',
      stats: '18.5 PPG, 7.2 APG',
      team: 'Springfield High',
    },
    {
      id: 10,
      date: '2021-06-15',
      title: 'All-State Honorable Mention',
      description: 'Recognized as one of top players in state',
      category: 'Recognition',
      icon: GiBasketballJersey,
      color: 'cyan',
      stats: 'State top 50 ranking',
      team: 'Springfield High',
    },
  ]

  const achievementStats = {
    totalChampionships: achievements.filter(a => a.category === 'Championship').length,
    totalAwards: achievements.filter(a => a.category === 'Award' || a.category === 'All-Star').length,
    totalMilestones: achievements.filter(a => a.category === 'Milestone').length,
    totalAchievements: achievements.length,
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Championship':
        return 'yellow'
      case 'All-Star':
        return 'purple'
      case 'Milestone':
        return 'blue'
      case 'Leadership':
        return 'green'
      case 'Academic':
        return 'red'
      case 'Award':
        return 'orange'
      case 'Recognition':
        return 'cyan'
      default:
        return 'gray'
    }
  }

  const sortedAchievements = achievements.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <VStack spacing={8} align="stretch" w="100%">
      <Heading
        as="h2"
        size="2xl"
        letterSpacing={1.8}
        style={{ fontVariantCaps: 'small-caps' }}
        textAlign="center"
      >
        Achievements & Awards
      </Heading>

      {/* Achievement Stats */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Trophy Case
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          <Stat textAlign="center">
            <StatLabel display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Icon as={GiTrophy} color="yellow.500" /> Championships
            </StatLabel>
            <StatNumber fontSize="3xl">{achievementStats.totalChampionships}</StatNumber>
            <StatHelpText>Titles Won</StatHelpText>
          </Stat>
          <Stat textAlign="center">
            <StatLabel display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Icon as={GiMedal} color="orange.500" /> Awards
            </StatLabel>
            <StatNumber fontSize="3xl">{achievementStats.totalAwards}</StatNumber>
            <StatHelpText>Individual Honors</StatHelpText>
          </Stat>
          <Stat textAlign="center">
            <StatLabel display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Icon as={GiTargeted} color="blue.500" /> Milestones
            </StatLabel>
            <StatNumber fontSize="3xl">{achievementStats.totalMilestones}</StatNumber>
            <StatHelpText>Career Firsts</StatHelpText>
          </Stat>
          <Stat textAlign="center">
            <StatLabel display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Icon as={GiTrophy} color="purple.500" /> Total
            </StatLabel>
            <StatNumber fontSize="3xl">{achievementStats.totalAchievements}</StatNumber>
            <StatHelpText>All Achievements</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Box>

      {/* Timeline */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Achievement Timeline
        </Heading>
        <VStack spacing={6} align="stretch">
          {sortedAchievements.map((achievement, index) => (
            <Box key={achievement.id}>
              <HStack spacing={4} align="start">
                <Box
                  w={12}
                  h={12}
                  borderRadius="full"
                  bg={`${getCategoryColor(achievement.category)}.100`}
                  borderWidth={2}
                  borderColor={`${getCategoryColor(achievement.category)}.500`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon
                    as={achievement.icon}
                    color={`${getCategoryColor(achievement.category)}.600`}
                    fontSize="xl"
                  />
                </Box>
                <VStack align="start" spacing={2} flex={1}>
                  <HStack justify="space-between" w="100%" align="start">
                    <VStack align="start" spacing={1}>
                      <Heading size="md">{achievement.title}</Heading>
                      <Text color="gray.600">{achievement.description}</Text>
                    </VStack>
                    <VStack align="end" spacing={1}>
                      <Badge colorScheme={getCategoryColor(achievement.category)}>
                        {achievement.category}
                      </Badge>
                      <Text fontSize="sm" color="gray.500">
                        {new Date(achievement.date).toLocaleDateString()}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack spacing={4} fontSize="sm" color="gray.600">
                    <Text>
                      <strong>Team:</strong> {achievement.team}
                    </Text>
                    <Text>•</Text>
                    <Text>
                      <strong>Stats:</strong> {achievement.stats}
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
              {index < sortedAchievements.length - 1 && (
                <Box ml={6} mt={2}>
                  <Divider borderColor={borderColor} />
                </Box>
              )}
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Recent Achievements */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Recent Highlights
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {sortedAchievements.slice(0, 4).map((achievement) => (
            <Box
              key={achievement.id}
              p={4}
              borderWidth={1}
              borderColor={borderColor}
              borderRadius="md"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
            >
              <HStack spacing={3} mb={3}>
                <Box
                  w={10}
                  h={10}
                  borderRadius="full"
                  bg={`${getCategoryColor(achievement.category)}.100`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    as={achievement.icon}
                    color={`${getCategoryColor(achievement.category)}.600`}
                    fontSize="lg"
                  />
                </Box>
                <VStack align="start" spacing={0} flex={1}>
                  <Heading size="sm">{achievement.title}</Heading>
                  <Text fontSize="xs" color="gray.500">
                    {new Date(achievement.date).toLocaleDateString()}
                  </Text>
                </VStack>
                <Badge colorScheme={getCategoryColor(achievement.category)} fontSize="xs">
                  {achievement.category}
                </Badge>
              </HStack>
              <Text fontSize="sm" color="gray.600" mb={2}>
                {achievement.description}
              </Text>
              <Text fontSize="xs" color="gray.500">
                <strong>{achievement.team}</strong> • {achievement.stats}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  )
}

export default memo(Achievements)

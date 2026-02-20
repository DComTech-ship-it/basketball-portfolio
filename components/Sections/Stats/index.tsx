import { memo } from 'react'
import {
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Box,
  VStack,
  HStack,
  Progress,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { GiBasketballBall, GiTrophy, GiTargeted, GiFootprint } from 'react-icons/gi'

const StatsSection = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const emphasis = useColorModeValue('orange.500', 'orange.300')

  // Sample career stats - replace with real data
  const careerStats = {
    pointsPerGame: 18.5,
    assistsPerGame: 7.2,
    reboundsPerGame: 4.3,
    stealsPerGame: 2.1,
    fieldGoalPercentage: 48.5,
    threePointPercentage: 42.1,
    freeThrowPercentage: 85.3,
    gamesPlayed: 120,
  }

  const seasonStats = [
    { season: '2023-24', ppg: 22.4, apg: 8.1, rpg: 5.2, team: 'City Elite' },
    { season: '2022-23', ppg: 15.8, apg: 6.3, rpg: 3.9, team: 'State University' },
    { season: '2021-22', ppg: 12.3, apg: 5.1, rpg: 2.8, team: 'State University' },
    { season: '2020-21', ppg: 8.9, apg: 3.2, rpg: 2.1, team: 'State University' },
  ]

  return (
    <VStack spacing={8} align="stretch" w="100%">
      <Heading
        as="h2"
        size="2xl"
        letterSpacing={1.8}
        style={{ fontVariantCaps: 'small-caps' }}
        textAlign="center"
      >
        Career Statistics
      </Heading>

      {/* Career Averages */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Career Averages
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          <Stat>
            <StatLabel display="flex" alignItems="center" gap={2}>
              <GiBasketballBall color={emphasis} /> Points
            </StatLabel>
            <StatNumber>{careerStats.pointsPerGame}</StatNumber>
            <StatHelpText>Per Game</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel display="flex" alignItems="center" gap={2}>
              <GiTargeted color={emphasis} /> Assists
            </StatLabel>
            <StatNumber>{careerStats.assistsPerGame}</StatNumber>
            <StatHelpText>Per Game</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel display="flex" alignItems="center" gap={2}>
              <GiFootprint color={emphasis} /> Rebounds
            </StatLabel>
            <StatNumber>{careerStats.reboundsPerGame}</StatNumber>
            <StatHelpText>Per Game</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel display="flex" alignItems="center" gap={2}>
              <GiTrophy color={emphasis} /> Steals
            </StatLabel>
            <StatNumber>{careerStats.stealsPerGame}</StatNumber>
            <StatHelpText>Per Game</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Box>

      {/* Shooting Percentages */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Shooting Percentages
        </Heading>
        <VStack spacing={4}>
          <HStack w="100%" justify="space-between">
            <Text minW="120px">Field Goal %</Text>
            <Box flex={1}>
              <Progress
                value={careerStats.fieldGoalPercentage}
                colorScheme="orange"
                borderRadius="full"
              />
            </Box>
            <Text minW="60px" textAlign="right">
              {careerStats.fieldGoalPercentage}%
            </Text>
          </HStack>
          <HStack w="100%" justify="space-between">
            <Text minW="120px">3-Point %</Text>
            <Box flex={1}>
              <Progress
                value={careerStats.threePointPercentage}
                colorScheme="green"
                borderRadius="full"
              />
            </Box>
            <Text minW="60px" textAlign="right">
              {careerStats.threePointPercentage}%
            </Text>
          </HStack>
          <HStack w="100%" justify="space-between">
            <Text minW="120px">Free Throw %</Text>
            <Box flex={1}>
              <Progress
                value={careerStats.freeThrowPercentage}
                colorScheme="blue"
                borderRadius="full"
              />
            </Box>
            <Text minW="60px" textAlign="right">
              {careerStats.freeThrowPercentage}%
            </Text>
          </HStack>
        </VStack>
      </Box>

      {/* Season by Season */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Season by Season
        </Heading>
        <VStack spacing={4} align="stretch">
          {seasonStats.map((season, index) => (
            <Box key={season.season}>
              <HStack justify="space-between" mb={2}>
                <Text fontWeight="bold">{season.season}</Text>
                <Text color="gray.500">{season.team}</Text>
              </HStack>
              <SimpleGrid columns={3} spacing={4}>
                <Stat>
                  <StatLabel fontSize="sm">PPG</StatLabel>
                  <StatNumber fontSize="xl">{season.ppg}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel fontSize="sm">APG</StatLabel>
                  <StatNumber fontSize="xl">{season.apg}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel fontSize="sm">RPG</StatLabel>
                  <StatNumber fontSize="xl">{season.rpg}</StatNumber>
                </Stat>
              </SimpleGrid>
              {index < seasonStats.length - 1 && <Divider my={4} />}
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Career Totals */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Career Totals
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          <Stat>
            <StatLabel>Games Played</StatLabel>
            <StatNumber>{careerStats.gamesPlayed}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Total Points</StatLabel>
            <StatNumber>
              {Math.round(careerStats.pointsPerGame * careerStats.gamesPlayed)}
            </StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Total Assists</StatLabel>
            <StatNumber>
              {Math.round(careerStats.assistsPerGame * careerStats.gamesPlayed)}
            </StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Total Rebounds</StatLabel>
            <StatNumber>
              {Math.round(careerStats.reboundsPerGame * careerStats.gamesPlayed)}
            </StatNumber>
          </Stat>
        </SimpleGrid>
      </Box>
    </VStack>
  )
}

export default memo(StatsSection)

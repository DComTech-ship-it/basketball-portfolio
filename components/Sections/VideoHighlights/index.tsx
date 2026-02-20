import { memo } from 'react'
import {
  Heading,
  Text,
  SimpleGrid,
  Box,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  AspectRatio,
  Link,
  Icon,
} from '@chakra-ui/react'
import { FaYoutube, FaPlay, FaEye } from 'react-icons/fa'
import { GiTrophy, GiBasketballBall, GiTargeted } from 'react-icons/gi'

const VideoHighlights = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const emphasis = useColorModeValue('orange.500', 'orange.300')

  // Sample video highlights - replace with real YouTube videos
  const highlights = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Game Winning Shot - Championship 2024',
      description: 'Buzzer beater to win the city championship',
      thumbnail: '/highlights/championship_winner.jpg',
      duration: '0:45',
      views: '15.2K',
      category: 'Clutch Plays',
      date: '2024-03-15',
      tags: ['game-winner', 'championship', 'clutch'],
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Best Plays of the Season 2023-24',
      description: 'Top 10 plays from my best season yet',
      thumbnail: '/highlights/season_highlights.jpg',
      duration: '3:22',
      views: '8.7K',
      category: 'Season Highlights',
      date: '2024-02-28',
      tags: ['highlights', 'season-2024', 'top-plays'],
    },
    {
      id: 'dQw4w9WgXcQ',
      title: '30 Point Game - Career High',
      description: 'First 30+ point game of my career',
      thumbnail: '/highlights/career_high.jpg',
      duration: '2:15',
      views: '12.1K',
      category: 'Career Milestones',
      date: '2024-01-20',
      tags: ['career-high', 'scoring', 'milestone'],
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Defensive Highlights - Steals & Blocks',
      description: 'Best defensive plays of the season',
      thumbnail: '/highlights/defensive_plays.jpg',
      duration: '1:48',
      views: '5.3K',
      category: 'Defense',
      date: '2023-12-10',
      tags: ['defense', 'steals', 'blocks'],
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Training Session - Shooting Drills',
      description: 'Behind the scenes of my shooting practice',
      thumbnail: '/highlights/training_session.jpg',
      duration: '4:30',
      views: '3.8K',
      category: 'Training',
      date: '2023-11-15',
      tags: ['training', 'shooting', 'drills'],
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'All-Star Game Performance',
      description: 'Representing in the league all-star game',
      thumbnail: '/highlights/all_star_game.jpg',
      duration: '2:55',
      views: '9.4K',
      category: 'All-Star',
      date: '2023-10-22',
      tags: ['all-star', 'recognition', 'performance'],
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Clutch Plays':
        return <GiTrophy color={emphasis} />
      case 'Season Highlights':
        return <GiBasketballBall color={emphasis} />
      case 'Career Milestones':
        return <GiTargeted color={emphasis} />
      default:
        return <GiBasketballBall color={emphasis} />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Clutch Plays':
        return 'red'
      case 'Season Highlights':
        return 'blue'
      case 'Career Milestones':
        return 'green'
      case 'Defense':
        return 'purple'
      case 'Training':
        return 'orange'
      case 'All-Star':
        return 'yellow'
      default:
        return 'gray'
    }
  }

  return (
    <VStack spacing={8} align="stretch" w="100%">
      <Heading
        as="h2"
        size="2xl"
        letterSpacing={1.8}
        style={{ fontVariantCaps: 'small-caps' }}
        textAlign="center"
      >
        Video Highlights
      </Heading>

      {/* Featured Video */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Featured Play
        </Heading>
        <AspectRatio ratio={16 / 9} mb={4}>
          <Box
            as="iframe"
            src={`https://www.youtube.com/embed/${highlights[0].id}`}
            allowFullScreen
            borderRadius="md"
            borderWidth={0}
          />
        </AspectRatio>
        <VStack align="start" spacing={2}>
          <HStack justify="space-between" w="100%">
            <Heading size="md">{highlights[0].title}</Heading>
            <Badge colorScheme={getCategoryColor(highlights[0].category)}>
              {highlights[0].category}
            </Badge>
          </HStack>
          <Text color="gray.600">{highlights[0].description}</Text>
          <HStack spacing={4} color="gray.500" fontSize="sm">
            <HStack>
              <Icon as={FaEye} />
              <Text>{highlights[0].views} views</Text>
            </HStack>
            <Text>•</Text>
            <Text>{highlights[0].duration}</Text>
            <Text>•</Text>
            <Text>{new Date(highlights[0].date).toLocaleDateString()}</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Video Grid */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          More Highlights
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {highlights.slice(1).map((video) => (
            <Box
              key={video.id}
              borderWidth={1}
              borderColor={borderColor}
              borderRadius="md"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
              cursor="pointer"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
            >
              <Box position="relative">
                <AspectRatio ratio={16 / 9}>
                  <Box
                    bgImage={`url(${video.thumbnail})`}
                    bgSize="cover"
                    bgPosition="center"
                    position="relative"
                  >
                    <Box
                      position="absolute"
                      inset={0}
                      bg="blackAlpha.600"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      opacity={0}
                      transition="opacity 0.3s"
                      _hover={{ opacity: 1 }}
                    >
                      <Icon as={FaPlay} color="white" fontSize="3xl" />
                    </Box>
                  </Box>
                </AspectRatio>
                <Badge
                  position="absolute"
                  top={2}
                  right={2}
                  colorScheme="blackAlpha"
                  fontSize="xs"
                >
                  {video.duration}
                </Badge>
                <Badge
                  position="absolute"
                  top={2}
                  left={2}
                  colorScheme={getCategoryColor(video.category)}
                  fontSize="xs"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  {getCategoryIcon(video.category)}
                  {video.category}
                </Badge>
              </Box>
              <VStack align="start" p={4} spacing={2}>
                <Heading size="sm" noOfLines={2}>
                  {video.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" noOfLines={2}>
                  {video.description}
                </Text>
                <HStack spacing={4} color="gray.500" fontSize="xs">
                  <HStack>
                    <Icon as={FaEye} />
                    <Text>{video.views}</Text>
                  </HStack>
                  <Text>•</Text>
                  <Text>{new Date(video.date).toLocaleDateString()}</Text>
                </HStack>
                <HStack flexWrap="wrap" gap={1}>
                  {video.tags.map((tag) => (
                    <Badge key={tag} variant="outline" fontSize="xs">
                      #{tag}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* YouTube Channel Link */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Icon as={FaYoutube} color="red.500" fontSize="4xl" />
          <Heading as="h3" size="lg">
            Watch More on YouTube
          </Heading>
          <Text color="gray.600">
            Subscribe to my channel for weekly highlights, training videos, and game analysis
          </Text>
          <Link
            href="https://www.youtube.com/channel/basketball_highlights"
            isExternal
            colorScheme="red"
            bg="red.500"
            color="white"
            px={6}
            py={3}
            borderRadius="md"
            fontWeight="bold"
            _hover={{ bg: 'red.600' }}
          >
            Visit YouTube Channel
          </Link>
        </VStack>
      </Box>
    </VStack>
  )
}

export default memo(VideoHighlights)

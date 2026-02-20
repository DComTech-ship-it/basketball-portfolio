import { memo, useState } from 'react'
import {
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  Link,
  Icon,
  Badge,
  AspectRatio,
  Image,
} from '@chakra-ui/react'
import {
  FaGraduationCap,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaRulerVertical,
  FaWeight,
  FaCalendarAlt,
  FaFilePdf,
  FaPlay,
} from 'react-icons/fa'
import {
  GiBasketballJersey,
  GiTargeted,
  GiFootprint,
  GiTrophy,
  GiWhistle,
} from 'react-icons/gi'

const Recruitment = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const emphasis = useColorModeValue('orange.500', 'orange.300')

  const [showVideo, setShowVideo] = useState(false)

  // Player profile data - replace with real data
  const playerProfile = {
    name: 'John Basketball Player',
    position: 'Shooting Guard / Point Guard',
    height: "6'3\"",
    weight: '185 lbs',
    age: 22,
    graduationYear: '2024',
    gpa: '3.8',
    sat: '1250',
    act: '28',
    email: 'player@basketball.com',
    phone: '+1 (555) 123-4567',
    highSchool: 'Springfield High School',
    college: 'State University',
    major: 'Sports Management',
    recruitmentStatus: 'Open for opportunities',
  }

  const recruitmentStats = {
    pointsPerGame: 18.5,
    assistsPerGame: 7.2,
    reboundsPerGame: 4.3,
    stealsPerGame: 2.1,
    fieldGoalPercentage: 48.5,
    threePointPercentage: 42.1,
    freeThrowPercentage: 85.3,
    gamesPlayed: 120,
  }

  const academicInfo = [
    {
      label: 'GPA',
      value: playerProfile.gpa,
      icon: FaGraduationCap,
      description: 'Cumulative GPA',
    },
    {
      label: 'SAT Score',
      value: playerProfile.sat,
      icon: FaGraduationCap,
      description: 'Total SAT Score',
    },
    {
      label: 'ACT Score',
      value: playerProfile.act,
      icon: FaGraduationCap,
      description: 'Composite ACT Score',
    },
    {
      label: 'Major',
      value: playerProfile.major,
      icon: FaGraduationCap,
      description: 'Field of Study',
    },
  ]

  const physicalAttributes = [
    {
      label: 'Height',
      value: playerProfile.height,
      icon: FaRulerVertical,
      description: 'Without shoes',
    },
    {
      label: 'Weight',
      value: playerProfile.weight,
      icon: FaWeight,
      description: 'Playing weight',
    },
    {
      label: 'Age',
      value: playerProfile.age,
      icon: FaCalendarAlt,
      description: 'Current age',
    },
    {
      label: 'Position',
      value: playerProfile.position,
      icon: GiBasketballJersey,
      description: 'Primary position',
    },
  ]

  const coachTestimonials = [
    {
      name: 'Coach Michael Johnson',
      title: 'Head Coach, State University',
      quote: 'One of the most dedicated players I\'ve coached. Excellent work ethic and natural leadership abilities.',
      contact: 'coach.johnson@stateuniversity.edu',
    },
    {
      name: 'Coach Sarah Williams',
      title: 'AAU Coach, Elite Warriors',
      quote: 'Outstanding court vision and clutch performance. Always rises to the occasion in big moments.',
      contact: 'coach.williams@elitewarriors.com',
    },
    {
      name: 'Coach David Brown',
      title: 'High School Coach, Springfield High',
      quote: 'Transformed from a role player to team captain. Incredible improvement over four years.',
      contact: 'coach.brown@springfieldhigh.edu',
    },
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
        Recruitment Hub
      </Heading>

      {/* Player Profile Overview */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <VStack spacing={6} align="stretch">
          <HStack justify="space-between" align="start">
            <VStack align="start" spacing={2}>
              <Heading size="lg">{playerProfile.name}</Heading>
              <Text color="gray.600">{playerProfile.position}</Text>
              <Badge colorScheme="green" fontSize="md">
                {playerProfile.recruitmentStatus}
              </Badge>
            </VStack>
            <VStack align="end" spacing={2}>
              <Button
                leftIcon={<FaDownload />}
                colorScheme="blue"
                onClick={() => window.open('/player-profile.pdf', '_blank')}
              >
                Download Profile PDF
              </Button>
              <Button
                leftIcon={<FaEnvelope />}
                colorScheme="orange"
                onClick={() => window.open(`mailto:${playerProfile.email}`, '_blank')}
              >
                Contact Player
              </Button>
            </VStack>
          </HStack>

          <Divider />

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
            {physicalAttributes.map((attr) => (
              <Stat key={attr.label}>
                <StatLabel display="flex" alignItems="center" gap={2}>
                  <Icon as={attr.icon} color={emphasis} />
                  {attr.label}
                </StatLabel>
                <StatNumber fontSize="2xl">{attr.value}</StatNumber>
                <StatHelpText fontSize="xs">{attr.description}</StatHelpText>
              </Stat>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Basketball Stats */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Basketball Performance
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          <Stat textAlign="center">
            <StatLabel display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Icon as={GiTargeted} color={emphasis} /> PPG
            </StatLabel>
            <StatNumber fontSize="2xl">{recruitmentStats.pointsPerGame}</StatNumber>
            <StatHelpText>Points Per Game</StatHelpText>
          </Stat>
          <Stat textAlign="center">
            <StatLabel display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Icon as={GiWhistle} color={emphasis} /> APG
            </StatLabel>
            <StatNumber fontSize="2xl">{recruitmentStats.assistsPerGame}</StatNumber>
            <StatHelpText>Assists Per Game</StatHelpText>
          </Stat>
          <Stat textAlign="center">
            <StatLabel display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Icon as={GiFootprint} color={emphasis} /> RPG
            </StatLabel>
            <StatNumber fontSize="2xl">{recruitmentStats.reboundsPerGame}</StatNumber>
            <StatHelpText>Rebounds Per Game</StatHelpText>
          </Stat>
          <Stat textAlign="center">
            <StatLabel display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Icon as={GiTrophy} color={emphasis} /> FG%
            </StatLabel>
            <StatNumber fontSize="2xl">{recruitmentStats.fieldGoalPercentage}%</StatNumber>
            <StatHelpText>Field Goal %</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Box>

      {/* Academic Information */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Academic Excellence
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          {academicInfo.map((academic) => (
            <Stat key={academic.label}>
              <StatLabel display="flex" alignItems="center" gap={2}>
                <Icon as={academic.icon} color={emphasis} />
                {academic.label}
              </StatLabel>
              <StatNumber fontSize="2xl">{academic.value}</StatNumber>
              <StatHelpText fontSize="xs">{academic.description}</StatHelpText>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>

      {/* Coach Testimonials */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Coach Testimonials
        </Heading>
        <VStack spacing={6} align="stretch">
          {coachTestimonials.map((testimonial, index) => (
            <Box key={index} p={4} borderWidth={1} borderColor={borderColor} borderRadius="md">
              <VStack align="start" spacing={3}>
                <HStack justify="space-between" w="100%">
                  <VStack align="start" spacing={0}>
                    <Heading size="md">{testimonial.name}</Heading>
                    <Text color="gray.600" fontSize="sm">{testimonial.title}</Text>
                  </VStack>
                  <Button
                    leftIcon={<FaEnvelope />}
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`mailto:${testimonial.contact}`, '_blank')}
                  >
                    Contact
                  </Button>
                </HStack>
                <Text fontStyle="italic" color="gray.700">
                  "{testimonial.quote}"
                </Text>
              </VStack>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Recruitment Video */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Skills Video
        </Heading>
        <AspectRatio ratio={16 / 9} mb={4}>
          {showVideo ? (
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allowFullScreen
              borderRadius="md"
            />
          ) : (
            <Box
              position="relative"
              bgImage="url('/highlights/recruitment_video_thumbnail.jpg')"
              bgSize="cover"
              bgPosition="center"
              borderRadius="md"
              cursor="pointer"
              onClick={() => setShowVideo(true)}
            >
              <Box
                position="absolute"
                inset={0}
                bg="blackAlpha.600"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="md"
              >
                <VStack spacing={4}>
                  <Icon as={FaPlay} color="white" fontSize="4xl" />
                  <Text color="white" fontSize="xl" fontWeight="bold">
                    Watch Recruitment Video
                  </Text>
                  <Text color="white" fontSize="md">
                    Click to play full skills showcase
                  </Text>
                </VStack>
              </Box>
            </Box>
          )}
        </AspectRatio>
      </Box>

      {/* Contact Information */}
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        borderWidth={1}
        borderColor={borderColor}
        shadow="md"
      >
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Contact Information
        </Heading>
        <VStack spacing={4} align="center">
          <HStack spacing={6}>
            <Button
              leftIcon={<FaEnvelope />}
              colorScheme="blue"
              size="lg"
              onClick={() => window.open(`mailto:${playerProfile.email}`, '_blank')}
            >
              {playerProfile.email}
            </Button>
            <Button
              leftIcon={<FaPhone />}
              colorScheme="green"
              size="lg"
              onClick={() => window.open(`tel:${playerProfile.phone}`, '_blank')}
            >
              {playerProfile.phone}
            </Button>
          </HStack>
          <Text color="gray.600" textAlign="center">
            For recruitment inquiries, please use the contact methods above or download the complete profile PDF
          </Text>
        </VStack>
      </Box>
    </VStack>
  )
}

export default memo(Recruitment)

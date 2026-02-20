import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  useColorModeValue,
  Icon,
  Link,
  Button,
} from '@chakra-ui/react'
import {
  FaGraduationCap,
  FaEnvelope,
  FaPhone,
  FaRulerVertical,
  FaWeight,
  FaCalendarAlt,
  FaFilePdf,
} from 'react-icons/fa'
import {
  GiBasketballJersey,
  GiTargeted,
  GiFootprint,
  GiTrophy,
} from 'react-icons/gi'

const Recruitment = () => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

  const playerProfile = {
    name: 'AGBOBLI ELLIOT EDEM',
    position: 'Shooting Guard / Point Guard',
    height: "6'3\"",
    weight: '185 lbs',
    age: 22,
    graduationYear: '2024',
    gpa: '3.8',
    email: 'agbobli.edem@email.com',
    phone: '+1 (555) 123-4567',
  }

  const recruitmentStats = [
    {
      label: 'Points Per Game',
      value: '18.5',
      icon: GiTargeted,
    },
    {
      label: 'Assists Per Game',
      value: '7.2',
      icon: GiTargeted,
    },
    {
      label: 'Rebounds Per Game',
      value: '4.3',
      icon: GiFootprint,
    },
    {
      label: 'Field Goal %',
      value: '48.5%',
      icon: GiTrophy,
    },
  ]

  const academicInfo = [
    {
      label: 'GPA',
      value: playerProfile.gpa,
      icon: FaGraduationCap,
    },
    {
      label: 'Graduation Year',
      value: playerProfile.graduationYear,
      icon: FaCalendarAlt,
    },
  ]

  const physicalAttributes = [
    {
      label: 'Height',
      value: playerProfile.height,
      icon: FaRulerVertical,
    },
    {
      label: 'Weight',
      value: playerProfile.weight,
      icon: FaWeight,
    },
    {
      label: 'Age',
      value: playerProfile.age,
      icon: FaCalendarAlt,
    },
    {
      label: 'Position',
      value: playerProfile.position,
      icon: GiBasketballJersey,
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
        Recruitment Hub
      </Heading>
      <Text variant="description">
        Currently open for opportunities at collegiate and professional levels. Here's my complete player profile and contact information.
      </Text>

      {/* Player Profile Overview */}
      <Stack spacing={4}>
        <Text fontWeight="bold" fontSize="lg">
          {playerProfile.name}
        </Text>
        <Text color="gray.600">{playerProfile.position}</Text>
      </Stack>

      {/* Basketball Stats */}
      <Stack spacing={3}>
        <Text fontWeight="bold">Basketball Performance</Text>
        <List spacing={3}>
          {recruitmentStats.map((stat, index) => (
            <ListItem key={index} fontSize="small" display="flex" alignItems="center">
              <Icon as={stat.icon} color={emphasis} fontSize="1.5em" mr={3} />
              <Text><strong>{stat.label}:</strong> {stat.value}</Text>
            </ListItem>
          ))}
        </List>
      </Stack>

      {/* Academic Information */}
      <Stack spacing={3}>
        <Text fontWeight="bold">Academic Excellence</Text>
        <List spacing={3}>
          {academicInfo.map((academic, index) => (
            <ListItem key={index} fontSize="small" display="flex" alignItems="center">
              <Icon as={academic.icon} color={emphasis} fontSize="1.5em" mr={3} />
              <Text><strong>{academic.label}:</strong> {academic.value}</Text>
            </ListItem>
          ))}
        </List>
      </Stack>

      {/* Physical Attributes */}
      <Stack spacing={3}>
        <Text fontWeight="bold">Physical Attributes</Text>
        <List spacing={3}>
          {physicalAttributes.map((attr, index) => (
            <ListItem key={index} fontSize="small" display="flex" alignItems="center">
              <Icon as={attr.icon} color={emphasis} fontSize="1.5em" mr={3} />
              <Text><strong>{attr.label}:</strong> {attr.value}</Text>
            </ListItem>
          ))}
        </List>
      </Stack>

      {/* Contact Information */}
      <Stack spacing={4}>
        <Text fontWeight="bold">Contact Information</Text>
        <Stack spacing={2}>
          <Button
            leftIcon={<FaFilePdf />}
            colorScheme="blue"
            onClick={() => window.open('/LawingcoMarcJhon2021v2.pdf', '_blank')}
          >
            Download Profile PDF
          </Button>
          <Button
            leftIcon={<FaEnvelope />}
            colorScheme="orange"
            onClick={() => window.open(`mailto:${playerProfile.email}`, '_blank')}
          >
            {playerProfile.email}
          </Button>
          <Button
            leftIcon={<FaPhone />}
            colorScheme="green"
            onClick={() => window.open(`tel:${playerProfile.phone}`, '_blank')}
          >
            {playerProfile.phone}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default memo(Recruitment)

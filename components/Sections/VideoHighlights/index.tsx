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
} from '@chakra-ui/react'
import { FaYoutube } from 'react-icons/fa'
import { GiTrophy, GiBasketballBall, GiTargeted } from 'react-icons/gi'

const VideoHighlights = () => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

  const highlights = [
    {
      title: 'Game Winning Shot - Championship 2024',
      description: 'Buzzer beater to win the city championship',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Clutch Plays',
    },
    {
      title: 'Best Plays of the Season 2023-24',
      description: 'Top 10 plays from my best season yet',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Season Highlights',
    },
    {
      title: '30 Point Game - Career High',
      description: 'First 30+ point game of my career',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Career Milestones',
    },
    {
      title: 'Defensive Highlights',
      description: 'Best defensive plays of the season',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Defense',
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
        Video Highlights
      </Heading>
      <Text variant="description">
        Check out some of my best plays, game-winning shots, and basketball highlights from recent seasons.
      </Text>

      <List spacing={4}>
        {highlights.map((highlight, index) => (
          <ListItem key={index} fontSize="small">
            <Link
              href={highlight.url}
              target="_blank"
              rel="noreferrer"
              color="currentcolor"
              _hover={{ textDecoration: 'none' }}
              display="flex"
              alignItems="center"
            >
              <Icon
                as={
                  highlight.category === 'Clutch Plays'
                    ? GiTrophy
                    : highlight.category === 'Season Highlights'
                    ? GiBasketballBall
                    : GiTargeted
                }
                color={emphasis}
                fontSize="1.5em"
                mr={3}
              />
              <Stack spacing={1}>
                <Text fontWeight="bold">{highlight.title}</Text>
                <Text fontSize="smaller" color="gray.600">
                  {highlight.description}
                </Text>
                <Text fontSize="smaller" color="gray.500">
                  {highlight.category}
                </Text>
              </Stack>
            </Link>
          </ListItem>
        ))}
      </List>

      <Stack spacing={2} align="center" mt={4}>
        <Icon as={FaYoutube} color="red.500" fontSize="2xl" />
        <Link
          href="https://www.youtube.com/channel/basketball_highlights"
          target="_blank"
          rel="noreferrer"
          variant="emphasis"
        >
          Watch more on YouTube
        </Link>
      </Stack>
    </Stack>
  )
}

export default memo(VideoHighlights)

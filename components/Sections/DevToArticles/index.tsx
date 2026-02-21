import { memo } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { Article } from 'types/article'
import { GiBasketballBall, GiTrophy, GiMedal } from 'react-icons/gi'

const DevToArticles = ({ articles }: { articles: Article[] }) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')
  const alphaHover = useColorModeValue(
    'rgba(49, 151, 149, 0.06)',
    'rgba(157, 236, 249, 0.06)',
  )

  const basketballArticles = [
    {
      id: 'training-tips',
      type_of: 'Training',
      title: 'Basketball Training Tips',
      description: 'Essential drills and exercises to improve your basketball skills',
      url: 'https://example.com/basketball-training',
      readable_publish_date: '2024-03-15',
      tag_list: ['training', 'basketball', 'skills', 'development'],
      social_image: '/highlights/IMG-20240922-WA0053 (2).jpg',
    },
    {
      id: 'game-analysis',
      type_of: 'Analysis',
      title: 'Game Performance Analysis',
      description: 'Breaking down game footage and performance metrics to improve strategy',
      url: 'https://example.com/game-analysis',
      readable_publish_date: '2024-02-20',
      tag_list: ['analysis', 'basketball', 'performance', 'strategy'],
      social_image: '/highlights/IMG-20240922-WA0054 (2).jpg',
    },
    {
      id: 'strength-conditioning',
      type_of: 'Training',
      title: 'Strength & Conditioning Guide',
      description: 'Comprehensive workout routines for basketball players at all levels',
      url: 'https://example.com/strength-guide',
      readable_publish_date: '2024-01-10',
      tag_list: ['training', 'fitness', 'basketball', 'conditioning'],
      social_image: '/highlights/IMG-20240922-WA0055 (2).jpg',
    },
    {
      id: 'nutrition-guide',
      type_of: 'Training',
      title: 'Basketball Nutrition Guide',
      description: 'Optimal diet and nutrition strategies for peak basketball performance',
      url: 'https://example.com/nutrition-guide',
      readable_publish_date: '2023-12-05',
      tag_list: ['nutrition', 'diet', 'basketball', 'performance'],
      social_image: '/highlights/IMG-20240922-WA0056 (2).jpg',
    },
    {
      id: 'mental-game',
      type_of: 'Psychology',
      title: 'Mental Game Preparation',
      description: 'Psychological strategies for maintaining focus and confidence during high-pressure games',
      url: 'https://example.com/mental-game',
      readable_publish_date: '2024-02-10',
      tag_list: ['psychology', 'mental-game', 'basketball', 'performance'],
      social_image: '/highlights/IMG-20240922-WA0057 (2).jpg',
    },
    {
      id: 'recruiting-insights',
      type_of: 'Career',
      title: 'Basketball Recruiting Process',
      description: 'Understanding the college recruitment landscape and how to get noticed by scouts',
      url: 'https://example.com/recruiting',
      readable_publish_date: '2024-01-25',
      tag_list: ['recruiting', 'college', 'basketball', 'career'],
      social_image: '/highlights/IMG-20240922-WA0058 (2).jpg',
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
        Basketball player and you're saying dev to blog
      </Heading>
      <Text variant="description">
        I share my basketball journey, training insights, and game analysis through technical articles and development updates.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
        {basketballArticles.map((article) => (
          <Link
            aria-label={article.title}
            target="_blank"
            rel="noreferrer"
            key={article.id}
            href={article.url}
            color="currentcolor"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.5s ease"
            role="group"
          >
            <Stack
              spacing={3}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="1em"
              padding={{ base: '1em', '2xl': '1.5em' }}
              height="100%"
              transition="all 0.2s ease-in-out"
              backgroundColor={bg}
              _hover={{
                background: alphaHover,
              }}
              as="article"
            >
              <Stack spacing={1}>
                <Heading fontSize="larger" paddingX={2}>
                  {article.title}
                </Heading>
                <Divider borderColor="#A6A6A6" width="95%" />
                <Stack spacing={1}>
                  <Heading fontSize="small" variant="accentAlternative" paddingX={2}>
                    {article.type_of}
                  </Heading>
                  <Text fontSize="smaller" variant="description" paddingX={2}>
                    {article.description}
                  </Text>
                </Stack>
              </Stack>
              <Text fontSize="smaller" variant="description" paddingX={2}>
                {article.readable_publish_date}
              </Text>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(DevToArticles)

import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  HStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { GiTrophy, GiTargeted, GiFootprint } from 'react-icons/gi'

const StatsSection = () => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

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
        Career Statistics
      </Heading>
      <Text variant="description">
        Here are my career basketball stats and performance metrics throughout my journey.
      </Text>

      <List spacing={4}>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <Icon as={GiTargeted} color={emphasis} fontSize="1.5em" mr={3} />
          <Text><strong>Points Per Game:</strong> 18.5</Text>
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <Icon as={GiFootprint} color={emphasis} fontSize="1.5em" mr={3} />
          <Text><strong>Assists Per Game:</strong> 7.2</Text>
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <Icon as={GiFootprint} color={emphasis} fontSize="1.5em" mr={3} />
          <Text><strong>Rebounds Per Game:</strong> 4.3</Text>
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <Icon as={GiTargeted} color={emphasis} fontSize="1.5em" mr={3} />
          <Text><strong>Steals Per Game:</strong> 2.1</Text>
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <Icon as={GiTrophy} color={emphasis} fontSize="1.5em" mr={3} />
          <Text><strong>Field Goal %:</strong> 48.5%</Text>
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <Icon as={GiTargeted} color={emphasis} fontSize="1.5em" mr={3} />
          <Text><strong>3-Point %:</strong> 42.1%</Text>
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <Icon as={GiTrophy} color={emphasis} fontSize="1.5em" mr={3} />
          <Text><strong>Free Throw %:</strong> 85.3%</Text>
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <Icon as={GiTrophy} color={emphasis} fontSize="1.5em" mr={3} />
          <Text><strong>Games Played:</strong> 120</Text>
        </ListItem>
      </List>
    </Stack>
  )
}

export default memo(StatsSection)

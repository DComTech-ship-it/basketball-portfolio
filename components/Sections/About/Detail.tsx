import { memo } from 'react'

import {

  Heading,

  Text,

  List,

  ListItem,

  ListIcon,

  Icon,

  SimpleGrid,

  Box,

  Tooltip,

  Stack,

  useColorModeValue,

} from '@chakra-ui/react'

import {

  GiBasketballBall,

  GiBasketballJersey,

  GiTrophy,

  GiWhistle,

  GiTargeted,

  GiFootprint,

} from 'react-icons/gi'

import { IoMdOpen } from 'react-icons/io'



type ISkillSetModal = {

  onOpen(): void

}



const Detail = ({ onOpen }: ISkillSetModal) => {

  const emphasis = useColorModeValue('teal.500', 'cyan.200')

  const currentYear = new Date().getFullYear()

  const playingYears = currentYear - 2016



  return (

    <Stack

      width={{ base: '100%', lg: '70%' }}

      spacing={{ base: 6, xl: 8 }}

      as="section"

    >

      <Heading

        as="h4"

        size="2xl"

        letterSpacing={1.8}

        style={{

          fontVariantCaps: 'small-caps',

        }}

      >

        My Basketball Journey

      </Heading>

      <Text variant="description">

        I`ve been playing basketball competitively for {playingYears} years now and

        currently playing as a <b>Shooting Guard</b> that focuses on{' '}

        <b>scoring</b>, <b>playmaking</b>,{' '}

        <Tooltip

          label="Ha!. Or more accurately CLUTCH PLAYS"

          aria-label="Clutch Plays?"

          hasArrow

        >

          <Text as="span" variant="emphasis">

            <b>game-winning shots</b>

          </Text>

        </Tooltip>{' '}

        and even <b>defensive stops</b> when needed, how time flies!

        <br /> <br />

        Here are few skills that are my{' '}

        <Tooltip

          label="I only take breaks if I needed too!"

          aria-label="No breaks!"

          hasArrow

        >

          <Text as="span" variant="emphasis" textDecorationLine="line-through">

            breaks

          </Text>

        </Tooltip>{' '}

        specialty <Icon as={GiBasketballBall} color={emphasis} />.

      </Text>



      <SimpleGrid columns={2} spacing={4}>

        <List spacing={3}>

          <ListItem fontSize="small" display="flex" alignItems="center">

            <ListIcon as={GiBasketballBall} color={emphasis} fontSize="2em" />

            3-Point Shooting

          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">

            <ListIcon as={GiTargeted} color={emphasis} fontSize="2em" />

            Ball Handling

          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">

            <ListIcon as={GiFootprint} color={emphasis} fontSize="2em" />

            Quick Footwork

          </ListItem>



          <ListItem fontSize="small" display="flex" alignItems="center">

            <ListIcon as={GiWhistle} color={emphasis} fontSize="2em" />

            Court Vision

          </ListItem>

        </List>

        <List spacing={3}>

          <ListItem fontSize="small" display="flex" alignItems="center">

            <ListIcon as={GiTrophy} color={emphasis} fontSize="2em" />

            Clutch Performance

          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">

            <ListIcon as={GiBasketballJersey} color={emphasis} fontSize="2em" />

            Team Leadership

          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">

            <ListIcon as={GiTargeted} color={emphasis} fontSize="2em" />

            Free Throw Accuracy

          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">

            <ListIcon as={GiFootprint} color={emphasis} fontSize="2em" />

            Defensive Stance

          </ListItem>

        </List>

        <Box>

          <Text

            as="button"

            variant="emphasis"

            fontSize="smaller"

            textAlign="left"

            onClick={onOpen}

          >

            See my full skillset <Icon as={IoMdOpen} />

          </Text>

        </Box>

      </SimpleGrid>

    </Stack>

  )

}



export default memo(Detail)


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
        My basketball journey began when I was a kid growing up on a school campus. 
        In my early 6s, my brother <b>EDWIN ELORM AGBOBLI</b> and I played football with friends 
        <b>EPHRAIM WORLANYO AMAGLO</b> and <b>SAVIOR KOBBY AMAGLO</b>. We'd come home with wounds every day!
        
        Around age 9-10, my brother and friends switched to basketball while I stayed with football. 
        They started by chasing balls out of bounds and observing the game. When I finally joined them, 
        I began the same way - retrieving balls for the players.
        
        The pandemic was my turning point. I decided to take basketball seriously. 
        My brother got selected for high school but our dad removed his name to focus on studies. 
        He played against Keta Senior High in 2019 and told me "bro, you've got a lot of work to do" 
        after seeing opponents block shots due to height advantages.
        
        My two friends represented Sogakope Senior High, which motivated me - I couldn't be left behind. 
        I rejected Sogakope Senior High (despite my dad's efforts) and chose Mawuli School in 2022.
        
        COVID meant no freshers games in 2022. In 2023, I was ill during inter-house games. 
        During zonals training, I was told I wasn't tall enough for competition.
        
        My final year was when it all began! Though known as a "hooper" since first year, 
        I finally got my chance. I gathered friends from my school house, trained together, 
        and even went to Ho polytechnic where my childhood friend <b>KOBBY SAVIOR AMAGLO</b> trained us.
        
        I became captain of my team as a <b>6'1 point guard</b>. We won our first game, second game, 
        and third game by just one point against high school team co-players! The final game was pure showtime 
        because they knew they'd be defeated.
        
        Now I'm playing as a <b>Shooting Guard</b> that focuses on{' '}
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
        and even <b>defensive stops</b> when needed.
        
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

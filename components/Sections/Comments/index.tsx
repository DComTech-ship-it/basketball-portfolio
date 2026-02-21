import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import Giscus from '@giscus/react'

const Comments = () => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')

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
        Comments & Feedback
      </Heading>
      <Text variant="description">
        Share your thoughts about my basketball journey, training insights, or ask questions about my experience. I'd love to hear from fellow players, coaches, and basketball enthusiasts!
      </Text>

      <Stack
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="1em"
        padding={{ base: '1em', '2xl': '1.5em' }}
        backgroundColor={bg}
        spacing={4}
      >
        <Giscus
          id="comments"
          repo="DComTech-ship-it/basketball-portfolio"
          repoId="R_kgDOJxJqw"
          category="General"
          categoryId="DIC_kwDOJxJqw84CZ7X"
          mapping="pathname"
          term="Welcome to my basketball portfolio!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
        />
      </Stack>
    </Stack>
  )
}

export default memo(Comments)

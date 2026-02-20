/* eslint-disable react/no-multi-comp */
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Text,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Skill, Skills, splitSkills } from 'config/skills'

type ISkillSetModal = {
  isOpen: boolean
  onClose(): void
}

const SkillList = ({
  title,
  columns,
}: {
  title: string
  columns: Skill[][]
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const [colOne, colTwo = []] = columns
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  )
}
const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const offensiveCols = splitSkills(Skills['offensive skills'])
  const defensiveCols = splitSkills(Skills['defensive skills'])
  const physicalCols = splitSkills(Skills['physical attributes'])
  const basketballIqCols = splitSkills(Skills['basketball iq'])
  const shootingCols = splitSkills(Skills.shooting)
  const playmakingCols = splitSkills(Skills.playmaking)
  const leadershipCols = splitSkills(Skills.leadership)
  const achievementsCols = splitSkills(Skills.achievements)
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Offensive Skills" columns={offensiveCols} />
          <SkillList title="Defensive Skills" columns={defensiveCols} />
          <SkillList title="Physical Attributes" columns={physicalCols} />
          <SkillList title="Basketball IQ" columns={basketballIqCols} />
          <SkillList title="Shooting" columns={shootingCols} />
          <SkillList title="Playmaking" columns={playmakingCols} />
          <SkillList title="Leadership" columns={leadershipCols} />
          <SkillList title="Achievements" columns={achievementsCols} />
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">*Some micro frameworks not included </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SkillSetModal

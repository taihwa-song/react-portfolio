import {
  Container,
  Text,
  Stack,
  HStack,
  Divider,
  Center,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Image,
  Box,
  List,
  ListItem,
  ListIcon,
  VStack
} from '@chakra-ui/react'
import {useState} from 'react'
import data from '../data/PortfolioData'
import {Fade} from 'react-awesome-reveal'
import {ChevronRightIcon} from '@chakra-ui/icons'

const allSelected = 'All'

export default function Experience({color}: {color: string}) {
  const experiences = data.experiences
  const [selected, setSelected] = useState(experiences[0].shortSummary)

  const handleSelected = (value: string) => {
    setSelected(value)
  }

  return (
    <Container maxW={'xl'} id="experiences">
      <Stack
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        pb={{base: 20, md: 36}}
        pt={{base: 15, md: 30}}>
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>Experience</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Center>
          <ButtonGroup variant="outline">
            <VStack spacing={0} align="stretch">
              {experiences.map(exp => (
                <Button
                  colorScheme={selected === exp.shortSummary ? `${color}` : 'gray'}
                  onClick={() => handleSelected(exp.shortSummary)}>
                  {exp.shortSummary}
                </Button>
              ))}
            </VStack>
          </ButtonGroup>
        </Center>
        <Stack px={4} spacing={4}>
          {experiences
            .filter(
              exp => exp.shortSummary.includes(selected) || selected === allSelected
            )
            .map(exp => (
              <Fade direction="up" triggerOnce={true}>
                <Card key={exp.company} size="sm">
                  <CardHeader>
                    <Flex justifyContent="space-between">
                      <HStack>
                        <Image src={exp.image} h={50} />
                        <Box px={2}>
                          <Text fontWeight={600} align="left">
                            {exp.company}
                          </Text>
                          <Text align="left">{exp.role}</Text>
                        </Box>
                      </HStack>
                      <Text px={2} fontWeight={300}>
                        {exp.getWorkPeriod()}
                      </Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <List textAlign="left" spacing={3}>
                      {exp.points.map((item, index) => (
                        <ListItem key={index}>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </CardBody>
                </Card>
              </Fade>
            ))}
        </Stack>
      </Stack>
    </Container>
  )
}

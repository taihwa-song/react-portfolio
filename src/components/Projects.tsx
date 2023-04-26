import {
  Container,
  Text,
  Stack,
  HStack,
  Divider,
  Card,
  Image,
  CardBody,
  Heading,
  Button
} from '@chakra-ui/react'
import data from '../data/PortfolioData'
import {Fade} from 'react-awesome-reveal'

export default function Projects({color}: {color: string}) {
  const projects = data.projects

  return (
    <Container maxW={'xl'} id="projects">
      <Stack
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        pb={{base: 20, md: 36}}
        pt={{base: 15, md: 30}}>
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              04
            </Text>
            <Text fontWeight={800}>Projects</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4}>
          {projects.map(project => (
            <Fade direction="up" triggerOnce={true}>
              <Card
                key={project.name}
                direction={{
                  base: 'column'
                }}
                overflow="hidden">
                <Image objectFit="cover" src={project.image} />
                <Stack>
                  <CardBody textAlign="left">
                    <Heading size="md">{project.name}</Heading>
                    <Text py={2}>{project.description}</Text>
                    {project.link == null ? (
                      <div />
                    ) : (
                      <a key={project.link} href={project.link}>
                        <Button color={`${color}.400`}>link</Button>
                      </a>
                    )}
                  </CardBody>
                </Stack>
              </Card>
            </Fade>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

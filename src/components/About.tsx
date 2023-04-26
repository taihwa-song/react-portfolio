import {
  Container,
  Text,
  Stack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  StackDivider,
  Box,
  HStack,
  Divider,
  Image,
  List,
  ListItem
} from '@chakra-ui/react'
import data from '../data/PortfolioData'

export default function About({color}: {color: string}) {
  const profile = data.profile

  return (
    <Container maxW={'xl'} id="about">
      <Stack
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        pb={{base: 20, md: 36}}
        pt={{base: 15, md: 30}}>
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              01
            </Text>
            <Text fontWeight={800}>About</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Card>
          <CardHeader>
            <Stack spacing="4" align="center">
              <Heading size="md">About Me</Heading>
              <Image
                borderRadius="3xl"
                objectFit="cover"
                boxSize="50%"
                src="https://i.ibb.co/qMNjHhf/square.png"
                alt="Taihwa Song"
              />
            </Stack>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider borderWidth={2} />} spacing="4">
              {profile.abouts.map(about => (
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    {about.key}
                  </Heading>
                  <List spacing={3}>
                    {about.messages.map(message => (
                      <ListItem>{message}</ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Container>
  )
}

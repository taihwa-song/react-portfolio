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
  ListItem,
  ListIcon,
  UnorderedList
} from '@chakra-ui/react'
import {
  FcManager,
  FcBarChart,
  FcMindMap,
  FcFilingCabinet,
  FcDam,
  FcCloseUpMode,
  FcBusinessman
} from 'react-icons/fc'

export default function About({color}: {color: string}) {
  return (
    <Container id="about">
      <Stack
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        pb={{base: 20, md: 36}}
        pt={{base: 36, md: 52}}>
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
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      What I did
                    </Heading>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={FcManager} color="green.500" />
                        Eng Lead Manager
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FcBarChart} color="green.500" />
                        Data scientist
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FcMindMap} color="green.500" />
                        Machine Learning Engineer
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FcFilingCabinet} color="green.500" />
                        Backend Engineer
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FcDam} color="green.500" />
                        Quality Assurer
                      </ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Why so many roles?
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      It's a little bit of "many" needed for creativity and innovation.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      What's next?
                    </Heading>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={FcCloseUpMode} color="green.500" />
                        Frontend Engineering (Technical)
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FcBusinessman} color="green.500" />
                        Marketing (Non-Technical)
                      </ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Why "frontend engineering"?
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      "Frontend engineering" enables the creation of visually appealing
                      and user-friendly interfaces for websites and applications. In
                      addition, they sit closest to the end users.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Why "marketing"?
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      One shall not sell good products without good marketing. Marking and
                      engineering should coexist.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Stack>
          </CardHeader>
        </Card>
      </Stack>
    </Container>
  )
}

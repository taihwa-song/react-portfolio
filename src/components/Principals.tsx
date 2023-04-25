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
  Divider
} from '@chakra-ui/react'

export default function Principals({color}: {color: string}) {
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
              02
            </Text>
            <Text fontWeight={800}>Principals</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>

        <Card>
          <CardHeader>
            <Heading size="md">Principals, I believe in</Heading>
            <Text>
              When making decisions, whether it being life or busineses, I follow these
              principals to expedite the outcome or to fail and learn in a meaningful way.
            </Text>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Pareto Principle
                </Heading>
                <Text pt="2" fontSize="sm">
                  80% of consequences come from 20% of causes
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  PETER THIEL’S BOOK, “ZERO TO ONE”
                </Heading>
                <Text pt="2" fontSize="sm">
                  Today’s “best practices” lead to dead ends; the best paths are new and
                  untried.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Steve Jobs
                </Heading>
                <Text pt="2" fontSize="sm">
                  Your time is limited, so don’t waste it living someone else’s life.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Container>
  )
}

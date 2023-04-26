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
import data from '../data/PortfolioData'

export default function Principals({color}: {color: string}) {
  const prins = data.principals
  return (
    <Container maxW={'xl'} id="principals">
      <Stack
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        pb={{base: 20, md: 36}}
        pt={{base: 15, md: 30}}>
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
            <Heading size="md">{prins.header}</Heading>
            <Text>{prins.desc}</Text>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider borderWidth={2} />} spacing="4">
              {prins.principals.map(p => (
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    {p.title}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {p.content}
                  </Text>
                </Box>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Container>
  )
}

import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import {Fade} from 'react-awesome-reveal'
import {TiArrowBackOutline} from 'react-icons/ti'
import data from '../data/PortfolioData'

export default function Header({color}: {color: string}) {
  const profile = data.profile
  const go2linkedin = () => {
    window.open(profile.linkedin, '_blank', 'noreferrer,noopener')
  }

  return (
    <Container maxW={'xl'} id="header">
      <Stack
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        pb={{base: 20, md: 36}}
        pt={{base: 36, md: 52}}>
        <Heading fontSize="4xl" fontWeight={600}>
          <Fade delay={500} duration={2000} triggerOnce={true}>
            <Text fontSize={{base: 'lg', sm: 'xl', md: '2xl'}}>
              Hi, my name is {profile.name} <br />
            </Text>
          </Fade>
          <Fade delay={1000} duration={2000} triggerOnce={true}>
            {' '}
            <HStack pt="20" fontSize={{base: 'lg', sm: 'xl', md: '2xl'}}>
              <Box flex="1">
                <Text color={`${color}.400`}>I'm a</Text>
              </Box>
              <VStack flex="3">
                {profile.pastRoles.map(role => (
                  <Box>
                    <Text color={`${color}.300`}>{role}</Text>
                  </Box>
                ))}
              </VStack>
            </HStack>
            <HStack pt="20" fontSize={{base: 'lg', sm: 'xl', md: '2xl'}}>
              <Box flex="1">
                <Text color={`${color}.500`}>I'll be a</Text>
              </Box>
              <VStack flex="3">
                {profile.futureRoles.map(role => (
                  <Box>
                    <Text color={`${color}.300`}>{role}</Text>
                  </Box>
                ))}
              </VStack>
            </HStack>
          </Fade>
        </Heading>
        <Fade delay={1500} duration={2000} triggerOnce={true}>
          {' '}
          <Text
            color={'gray.400'}
            fontSize={'xl'}
            px={4}
            fontFamily={'Apple Chancery, cursive'}>
            According to Pareto Principle,{' '}
            <b>80% of consequences come from 20% of causes.</b> I desire to attain{' '}
            <b>"many" 20% done</b> to help growing busineses.
          </Text>
        </Fade>

        <Stack
          direction={'row'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
          <Fade delay={2000} duration={2000} triggerOnce={true}>
            <Button
              colorScheme={color}
              bg={`${color}.400`}
              rounded={'full'}
              _hover={{
                bg: `${color}.500`
              }}
              onClick={go2linkedin}>
              Let's connect!
            </Button>
            <Icon
              as={TiArrowBackOutline}
              color={useColorModeValue('gray.800', 'gray.300')}
              fontSize="5xl"
              position={'absolute'}
              right={-30}
              top={-6}
              transform={'rotate(-20deg)'}
            />
            <Text
              fontSize={'lg'}
              fontFamily={'Caveat'}
              position={'absolute'}
              right={'-80px'}
              top={'1px'}
              transform={'rotate(-60deg)'}>
              Click me!
            </Text>
          </Fade>
        </Stack>
      </Stack>
    </Container>
  )
}

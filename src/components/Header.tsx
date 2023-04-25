import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import {TiArrowBackOutline} from 'react-icons/ti'
import {GiStairsGoal} from 'react-icons/gi'

export default function Header({color}: {color: string}) {
  const go2linkedin = () => {
    window.open(
      'https://www.linkedin.com/in/taihwasong/',
      '_blank',
      'noreferrer,noopener'
    )
  }
  return (
    <Container id="header">
      <Stack
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        pb={{base: 20, md: 36}}
        pt={{base: 36, md: 52}}>
        <Heading fontSize="4xl" fontWeight={600}>
          <Text>
            Hi, my name is Taihwa <br />
          </Text>
          <HStack pt="20">
            <Box flex="1">
              <Text color={`${color}.400`}>I'm a</Text>
            </Box>
            <VStack flex="3">
              <Box>
                <Text color={`${color}.300`}>Eng Lead Manager</Text>
              </Box>
              <Box>
                <Text color={`${color}.300`}>Data Scientist</Text>
              </Box>
              <Box>
                <Text color={`${color}.300`}>ML Engineer</Text>
              </Box>
              <Box>
                <Text color={`${color}.300`}>Backend Engineer</Text>
              </Box>
              <Box>
                <Text color={`${color}.200`} textDecor="line-through">
                  Froneend Engineer
                </Text>
                <Stack align={'center'} alignSelf={'center'} position={'relative'}>
                  <Icon
                    as={TiArrowBackOutline}
                    color={useColorModeValue('gray.800', 'gray.300')}
                    fontSize="5xl"
                    position={'absolute'}
                    right={-65}
                    top={-12}
                    transform={'rotate(-20deg)'}
                  />
                  <Text
                    fontSize={'lg'}
                    fontFamily={'Caveat'}
                    position={'absolute'}
                    right={'-130px'}
                    top={'-30px'}
                    transform={'rotate(-60deg)'}>
                    New Goal <Icon as={GiStairsGoal}></Icon>
                  </Text>
                </Stack>
              </Box>
              <Box>
                <Text color={`${color}.300`}>Quality Assurer</Text>
              </Box>
            </VStack>
          </HStack>
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'} px={4}>
          According to Pareto Principle,{' '}
          <b>80% of consequences come from 20% of causes.</b> I desire to attain{' '}
          <b>"many" 20% done</b> to help growing busineses.
        </Text>
        <Stack
          direction={'row'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
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
            right={-65}
            top={-6}
            transform={'rotate(-20deg)'}
          />
          <Text
            fontSize={'lg'}
            fontFamily={'Caveat'}
            position={'absolute'}
            right={'-110px'}
            top={'1px'}
            transform={'rotate(-60deg)'}>
            Click me!
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}

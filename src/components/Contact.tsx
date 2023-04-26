import {Container, Text, Stack, HStack, Divider, Heading, Center} from '@chakra-ui/react'
import data from '../data/PortfolioData'
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'

export default function Contact({color}: {color: string}) {
  const contact = data.contact
  const linkedin = () => {
    window.open(`${contact.linkedin}`, '_blank', 'noreferrer,noopener')
  }
  const github = () => {
    window.open(`${contact.github}`, '_blank', 'noreferrer,noopener')
  }
  const email = () => {
    window.open(`mailto:${contact.email}`, '_blank', 'noreferrer,noopener')
  }

  return (
    <Container maxW={'xl'} id="contact">
      <Stack
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        pb={{base: 20, md: 36}}
        pt={{base: 15, md: 30}}>
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              05
            </Text>
            <Text fontWeight={800}>Contact</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Let's stay in touch!</Heading>
          <Text color={'gray.600'} fontSize={'xl'} px={4}>
            {contact.text}
          </Text>
          <Text color={`${color}.500`} fontWeight={600} fontSize={'lg'} px={4}>
            {contact.email}
          </Text>
          <Center>
            <HStack pt={4} spacing={4}>
              <FaLinkedin onClick={linkedin} size={28} />
              <FaGithub onClick={github} size={28} />
              <FaEnvelope onClick={email} size={28} />
            </HStack>
          </Center>
        </Stack>
      </Stack>
    </Container>
  )
}

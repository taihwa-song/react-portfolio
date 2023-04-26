import {
  Button,
  useColorMode,
  Flex,
  Box,
  useColorModeValue,
  Stack,
  HStack,
  useMediaQuery,
  Container,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody
} from '@chakra-ui/react'
import {HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'

export default function Navigation({color}: {color: string}) {
  const {colorMode, toggleColorMode} = useColorMode()
  const scrollToHead = () => {
    const headSection = document.querySelector('#header')
    if (headSection) headSection.scrollIntoView({behavior: 'smooth'})
  }
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) aboutSection.scrollIntoView({behavior: 'smooth'})
  }
  const scrollToPrincipals = () => {
    const principalsSection = document.querySelector('#principals')
    if (principalsSection) principalsSection.scrollIntoView({behavior: 'smooth'})
  }
  const scrollToExperience = () => {
    const experienceSection = document.querySelector('#experiences')
    if (experienceSection) experienceSection.scrollIntoView({behavior: 'smooth'})
  }
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects')
    if (projectsSection) projectsSection.scrollIntoView({behavior: 'smooth'})
  }
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) contactSection.scrollIntoView({behavior: 'smooth'})
  }
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)')
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      justifyContent={'space-between'}
      w="100%"
      position="fixed"
      zIndex="sticky">
      <HStack>
        <Button variant="ghost" fontSize="sm" onClick={scrollToHead}>
          Home
        </Button>
      </HStack>

      <Flex alignItems={'center'}>
        {isLargerThanMD ? (
          <Container>
            <Stack direction={'row'} spacing={0}>
              <Button variant="ghost" fontSize="sm" onClick={scrollToAbout}>
                About
              </Button>
              <Button variant="ghost" fontSize="sm" onClick={scrollToPrincipals}>
                Principals
              </Button>
              <Button variant="ghost" fontSize="sm" onClick={scrollToExperience}>
                Experience
              </Button>
              <Button variant="ghost" fontSize="sm" onClick={scrollToProjects}>
                Projects
              </Button>
              <Button variant="ghost" fontSize="sm" onClick={scrollToContact}>
                Contact
              </Button>
            </Stack>
          </Container>
        ) : (
          <></>
        )}
        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Box>
        {isLargerThanMD ? (
          <></>
        ) : (
          <Container>
            <Button as={IconButton} icon={<HamburgerIcon />} onClick={onOpen}></Button>
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerBody>
                  <Button variant="ghost" onClick={scrollToAbout}>
                    About
                  </Button>
                  <Button variant="ghost" onClick={scrollToPrincipals}>
                    Principals
                  </Button>
                  <Button variant="ghost" onClick={scrollToExperience}>
                    Experience
                  </Button>
                  <Button variant="ghost" onClick={scrollToProjects}>
                    Projects
                  </Button>
                  <Button variant="ghost" onClick={scrollToContact}>
                    Contact
                  </Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Container>
        )}
      </Flex>
    </Flex>
  )
}

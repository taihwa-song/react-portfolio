import {
  Button,
  useColorMode,
  Flex,
  Box,
  useColorModeValue,
  Stack,
  HStack
} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

export default function Navigation({color}: {color: string}) {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      justifyContent={'space-between'}
      w="100%"
      position="fixed"
      zIndex="sticky">
      <HStack>
        <Box>Taihwa Song</Box>
      </HStack>

      <Flex alignItems={'center'}>
        <Stack direction={'row'} spacing={0}>
          <Button variant="ghost" fontSize="sm">
            About
          </Button>
          <Button variant="ghost" fontSize="sm">
            Experience
          </Button>
          <Button variant="ghost" fontSize="sm">
            Projects
          </Button>
          <Button variant="ghost" fontSize="sm">
            Contact
          </Button>
        </Stack>
        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

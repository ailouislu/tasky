import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack justifyContent="flex-end">
      <Text whiteSpace='nowrap'>Dark Mode</Text>
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </HStack>
  )
}

export default ColorModeSwitch
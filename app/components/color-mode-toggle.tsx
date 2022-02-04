import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface ColorModeToggleProps {}

export const ColorModeToggle: FunctionComponent<ColorModeToggleProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      variant="ghost"
      borderRadius="full"
    />
  )
}

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface ColorModeToggleProps {}

export const ColorModeToggle: FunctionComponent<ColorModeToggleProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const colorModeTarget = colorMode === 'light' ? 'dark' : 'light'
  const label = `Toggle to ${colorModeTarget} mode`

  return (
    <Tooltip label={label}>
      <IconButton
        onClick={toggleColorMode}
        aria-label={label}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        variant="ghost"
        borderRadius="full"
      />
    </Tooltip>
  )
}

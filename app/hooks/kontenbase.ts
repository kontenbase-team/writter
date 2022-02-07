import React from 'react'

import { KontenbaseContext } from '~/context'

export const useKontenbase = () => {
  const context = React.useContext(KontenbaseContext)

  if (context === undefined) {
    throw new Error('useKontenbase must be used within a KontenbaseProvider')
  }

  return context.kontenbase
}

export const useUser = () => {
  const context = React.useContext(KontenbaseContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a KontenbaseProvider')
  }

  return context.user
}

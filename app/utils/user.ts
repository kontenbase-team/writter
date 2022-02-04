import type { TUser } from '~/types'

export const getUserName = (user: TUser) =>
  `${user?.firstName} ${user?.lastName}`

export const getUserHandle = (user: TUser) => user?.handle

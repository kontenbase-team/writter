/* eslint-disable no-else-return */
import type { TUser } from '~/types'

export const getUserHandle = (user: TUser) => user.handle

export const getUserName = (user: TUser) => {
  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`
  } else if (user.firstName) {
    return user.firstName
  } else if (user.lastName) {
    return user.lastName
  } else {
    return `No first name`
  }
}

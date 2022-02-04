import { getUserHandle } from '.'

import { TWreet } from '~/types'

export const getWreetURL = (wreet: TWreet) =>
  `/${getUserHandle(wreet?.createdBy)}/${wreet?._id}`

export const getTrimmedWreet = (content: string) => content.substring(0, 42)

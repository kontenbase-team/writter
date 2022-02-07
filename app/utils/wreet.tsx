import { TWreet } from '~/types'
import { getUserHandle } from '~/utils'

export const getWreetURL = (wreet: TWreet) =>
  `/${getUserHandle(wreet?.createdBy)}/${wreet?._id}`

export const getTrimmedWreet = (content: string) =>
  content?.length ? content?.substring(0, 42) : ''

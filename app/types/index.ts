export type TWreet = {
  _id: string
  content: string
  createdAt: string
  createdBy: TUser
}

export type TUser = {
  _id: string
  firstName?: string
  lastName?: string
  name?: string
  handle?: string
}

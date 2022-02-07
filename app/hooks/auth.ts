/* eslint-disable no-console */
import { useEffect } from 'react'
import { useNavigate } from 'remix'

import { useUser } from '~/hooks'

export const useAuth = () => {
  const user = useUser()

  useEffect(() => {
    console.log(user)
  }, [user])
}

export const useNotAuthorized = () => {
  const user = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/signin', { replace: true })
    }
  }, [user])
}

export const useAuthorized = () => {
  const user = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/home', { replace: true })
    }
  }, [user])
}

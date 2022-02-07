import { createContext, FunctionComponent, useEffect, useState } from 'react'

export const KontenbaseContext = createContext({
  kontenbase: null,
  user: null,
})

export const KontenbaseProvider: FunctionComponent<{
  client: any
}> = ({ children, client }) => {
  const [globalUser, setGlobalUser] = useState(null)

  useEffect(() => {
    async function getUser() {
      const result = await client.auth.user()
      console.log({ result })

      const { user } = await client.auth.user()

      if (user) {
        setGlobalUser(user)
      } else {
        setGlobalUser(null)
      }
    }
    getUser()
  }, [])

  return (
    <KontenbaseContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ kontenbase: client, user: globalUser }}
    >
      {children}
    </KontenbaseContext.Provider>
  )
}

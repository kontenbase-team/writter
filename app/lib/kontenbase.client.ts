import { KontenbaseClient } from '@kontenbase/sdk'

export const kontenbaseClient = new KontenbaseClient({
  // @ts-ignore
  apiKey: String(window.ENV.KONTENBASE_API_KEY),
})

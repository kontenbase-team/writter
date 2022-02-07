import { KontenbaseClient } from '@kontenbase/sdk'

export const kontenbaseServer = new KontenbaseClient({
  apiKey: String(process.env.KONTENBASE_API_KEY),
})

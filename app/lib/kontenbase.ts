import { KontenbaseClient } from '@kontenbase/sdk'

const KONTENBASE_API_KEY = String(process.env.KONTENBASE_API_KEY)

export const kontenbase = new KontenbaseClient({
  apiKey: KONTENBASE_API_KEY,
})

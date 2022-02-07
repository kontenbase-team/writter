/* eslint-disable react/no-danger */
import { Box, ChakraProvider, Heading } from '@chakra-ui/react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from 'remix'

import type { MetaFunction } from 'remix'
import { theme } from '~/chakra-ui'
import { KontenbaseProvider } from '~/context'
import { kontenbaseClient } from '~/lib'

export const meta: MetaFunction = () => ({
  title: 'Writter Root',
})

export async function loader() {
  return {
    ENV: {
      KONTENBASE_API_KEY: process.env.KONTENBASE_API_KEY,
    },
  }
}

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <KontenbaseProvider client={kontenbaseClient}>
          <Outlet />
        </KontenbaseProvider>
      </ChakraProvider>
    </Document>
  )
}

export function Document({
  title,
  children,
}: {
  title?: string
  children: any
}) {
  const data = useLoaderData()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ChakraProvider theme={theme}>
        <Box>
          <Heading as="h1">There was an error</Heading>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider theme={theme}>
        <Box>
          <Heading as="h1">
            {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

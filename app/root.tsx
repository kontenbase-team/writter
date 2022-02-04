import { Box, ChakraProvider, Heading } from '@chakra-ui/react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'

import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => ({
  title: 'Writter',
})

export default function App() {
  return (
    <Document title="Writter">
      <ChakraProvider>
        <Outlet />
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
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title || 'Writter'}</title>
        <Meta />
        <Links />
      </head>

      <body>
        {children}

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
      <ChakraProvider>
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
      <ChakraProvider>
        <Box>
          <Heading as="h1">
            {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

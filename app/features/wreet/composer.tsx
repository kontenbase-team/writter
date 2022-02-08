/* eslint-disable no-nested-ternary */
import { Button, Stack, Textarea } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Form } from 'remix'

interface WreetComposerProps {
  transition: any
}

export const WreetComposer: FunctionComponent<WreetComposerProps> = ({
  transition,
}) => (
  <Form method="post" action="/wreet">
    <Stack p={5} align="flex-end">
      <Textarea
        name="content"
        isRequired
        placeholder="What's happening?"
        variant="unstyled"
        fontSize="2xl"
        minHeight="150px"
      />
      <Button
        type="submit"
        colorScheme="red"
        borderRadius="full"
        isLoading={transition.state === 'submitting'}
        loadingText={
          transition.state === 'submitting'
            ? 'Wreeting...'
            : transition.state === 'loading'
            ? 'Wreeted!'
            : 'Wreet'
        }
      >
        Wreet
      </Button>
    </Stack>
  </Form>
)

import { Button, Stack, Textarea } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Form } from 'remix'

interface WreetComposerProps {}

export const WreetComposer: FunctionComponent<WreetComposerProps> = () => (
  <Form>
    <Stack p={5} align="flex-end">
      <Textarea
        isRequired
        placeholder="What's happening?"
        variant="unstyled"
        fontSize="2xl"
        minHeight="150px"
      />
      <Button type="submit" colorScheme="red" borderRadius="full">
        Wreet
      </Button>
    </Stack>
  </Form>
)

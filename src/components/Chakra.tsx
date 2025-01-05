import { Button } from "@/components/ui/button";
import { HStack, Stack, Input, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

type ChakraProps = {};

export default function Chakra({}: ChakraProps) {
  return (
    <VStack spacing={2}>
      <HStack colorPalette="blue">
        <Button variant="subtle" raddii="sm">
          Click me
        </Button>
        <Button variant="surface">Click me</Button>
      </HStack>
      <Stack gap="8" maxW="sm" css={{ "--field-label-width": "96px" }}>
        <Field orientation="horizontal" label="Name">
          <Input placeholder="John Doe" flex="1" />
        </Field>
        <Field orientation="horizontal" label="Email">
          <Input placeholder="me@example.com" flex="1" />
        </Field>
        <Field orientation="horizontal" label="Hide email">
          <Switch />
        </Field>
      </Stack>
    </VStack>
  );
}

import { Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react";

export const SearchCheckBox = () => {
  return (
    <CheckboxGroup colorScheme="blue">
      <Stack spacing={2} direction="column">
        <Checkbox value="naruto">Naruto</Checkbox>
        <Checkbox value="sasuke">Sasuke</Checkbox>
        <Checkbox value="kakashi">Kakashi</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};

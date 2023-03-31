import { Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Whisky } from "../hooks/useWhisky";

interface Props {}

export const SearchCheckBox = ({}: Props) => {
  //const [category, setCategory] = useState(whisky)
  return (
    <CheckboxGroup colorScheme="blue">
      <Stack spacing={2} direction="column">
        <Checkbox value="naruto">{}</Checkbox>
        <Checkbox value="sasuke">Sasuke</Checkbox>
        <Checkbox value="kakashi">Kakashi</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};

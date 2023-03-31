import { Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useState } from "react";
import useWhiskies from "../hooks/useWhisky";

export const SearchCheckBox = () => {
  const { data } = useWhiskies();
  const [checkedItems, setCheckedItems] = useState([false, false]);

  return (
    <CheckboxGroup colorScheme="blue" onChange={(event) => console.log(event)}>
      {data.map((menuItem) => (
        <Stack spacing={2} direction="column">
          <Checkbox key={menuItem.id} value={menuItem.id} defaultChecked>
            {menuItem.destillery}
          </Checkbox>
        </Stack>
      ))}
    </CheckboxGroup>
  );
};

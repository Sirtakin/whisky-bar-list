import { Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Whisky } from "../hooks/useWhisky";

interface Props {
  category: string;
  dropdowItem: Whisky;
}

export const SearchCheckBox = ({ category, dropdowItem }: Props) => {
  let destill = new Set<string>([dropdowItem.destillery]);
  //console.log(destill);

  return (
    <CheckboxGroup colorScheme="blue" onChange={(event) => console.log(event)}>
      <Stack spacing={2} direction="column">
        {category === "Destillery" && (
          <Checkbox defaultChecked>{destill}</Checkbox>
        )}
        {category === "Edition" && (
          <Checkbox defaultChecked>{dropdowItem.edition}</Checkbox>
        )}
        {category === "Country" && (
          <Checkbox defaultChecked>{dropdowItem.country}</Checkbox>
        )}
        {category === "Area" && (
          <Checkbox defaultChecked>{dropdowItem.area}</Checkbox>
        )}
        {category === "Age" && (
          <Checkbox defaultChecked>{dropdowItem.age}</Checkbox>
        )}
        {category === "Barrel" && (
          <Checkbox defaultChecked>{dropdowItem.barrel}</Checkbox>
        )}
        {category === "Smoke" && (
          <Checkbox defaultChecked>{dropdowItem.smoke}</Checkbox>
        )}
        {category === "Price" && (
          <Checkbox defaultChecked>{dropdowItem.price}</Checkbox>
        )}
      </Stack>
    </CheckboxGroup>
  );
};

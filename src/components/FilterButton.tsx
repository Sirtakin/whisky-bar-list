import { Button, Checkbox, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Whisky } from "../hooks/useWhisky";
import { SearchCheckBox } from "./SearchCheckBox";
import { SearchInput } from "./SearchInput";
import { SortPrice } from "./SortPrice";

interface Props {
  onSearch: (searchText: string) => void;
  category: string;
  whiskyData: Whisky[];
}

export const FilterButton = ({ onSearch, category, whiskyData }: Props) => {
  const placeholderText = "Search " + category;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {category}
      </MenuButton>
      {category !== "Price" && (
        <MenuList padding="5px">
          <SearchInput onSearch={onSearch} placeholderText={placeholderText} />
          <SearchCheckBox categories={category} dropdowItem={whiskyData} />
          <Button>Filter on selected</Button>
        </MenuList>
      )}

      {category === "Price" && (
        <MenuList padding="5px">
          <SortPrice />
        </MenuList>
      )}
    </Menu>
  );
};

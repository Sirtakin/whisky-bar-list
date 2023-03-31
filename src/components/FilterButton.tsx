import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useWhiskies, { Whisky } from "../hooks/useWhisky";
import { SearchCheckBox } from "./SearchCheckBox";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  category: string;
  placeholder: string;
}

export const FilterButton = ({ onSearch, category, placeholder }: Props) => {
  const placeholderText = "Search " + placeholder;
  const { data } = useWhiskies();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {category}
      </MenuButton>
      <MenuList padding="5px">
        <SearchInput onSearch={onSearch} placeholderText={placeholderText} />
        <SearchCheckBox />
      </MenuList>
    </Menu>
  );
};

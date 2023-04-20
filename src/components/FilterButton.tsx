import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useWhiskies from "../hooks/useWhisky";
import { SearchCheckBox } from "./SearchCheckBox";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  category: string;
}

export const FilterButton = ({ onSearch, category }: Props) => {
  const placeholderText = "Search " + category;
  const { data } = useWhiskies();

  const whiskies = data.map((whisky) => {
    whisky.destillery;
  });

  console.log(whiskies);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {category}
      </MenuButton>
      <MenuList padding="5px">
        <SearchInput onSearch={onSearch} placeholderText={placeholderText} />
        {data.map((whisky) => (
          <SearchCheckBox
            category={category}
            key={whisky.id}
            dropdowItem={whisky}
          />
        ))}
        <Button>Filter on selected</Button>
      </MenuList>
    </Menu>
  );
};

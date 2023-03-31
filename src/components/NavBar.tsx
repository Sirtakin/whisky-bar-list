import { HStack, Image } from "@chakra-ui/react";
import { ColormodeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import logo from "../assets/glencairn_whisky.webp";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" borderRadius="50%" /> *
      <SearchInput onSearch={onSearch} placeholderText="Search Whiskies..." />
      <ColormodeSwitch></ColormodeSwitch>
    </HStack>
  );
};

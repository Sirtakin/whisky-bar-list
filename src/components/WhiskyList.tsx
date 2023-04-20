import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import { FilterButton } from "./FilterButton";
import categories from "../data/categories";
import { WhiskyItems } from "./WhiskyItems";
import useWhiskies, { Whisky } from "../hooks/useWhisky";

interface Props {
  onSearch: (searchText: string) => void;
}

export const WhiskyList = ({ onSearch }: Props) => {
  const { data } = useWhiskies();

  return (
    <TableContainer whiteSpace="pre-wrap">
      <Table variant="simple" colorScheme={"blackAplpha"} maxWidth="100%">
        <Thead>
          <Tr>
            {categories.map((category, index) => (
              <Th key={index}>
                <FilterButton onSearch={onSearch} category={category} />
              </Th>
            ))}
          </Tr>
        </Thead>
        {data.map((whisky) => (
          <WhiskyItems key={whisky.id} whisky={whisky} />
        ))}
      </Table>
    </TableContainer>
  );
};

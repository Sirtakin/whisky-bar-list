import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import { FilterButton } from "./FilterButton";
import categories from "../data/categories";
import { WhiskyMap } from "./WhiskyMap";

interface Props {
  onSearch: (searchText: string) => void;
}

export const WhiskyList = ({ onSearch }: Props) => {
  return (
    <TableContainer whiteSpace="pre-wrap">
      <Table variant="simple" colorScheme={"blackAplpha"} maxWidth="100%">
        <Thead>
          <Tr>
            {categories.map((category, index) => (
              <Th key={index}>
                <FilterButton
                  onSearch={onSearch}
                  category={category}
                  placeholder={category}
                />
              </Th>
            ))}
          </Tr>
        </Thead>
        <WhiskyMap />
      </Table>
    </TableContainer>
  );
};

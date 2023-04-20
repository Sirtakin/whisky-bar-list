import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import { FilterButton } from "./FilterButton";
import categories from "../data/categories";
import { WhiskyItems } from "./WhiskyItems";
import { Whisky } from "../hooks/useWhisky";

interface Props {
  onSearch: (searchText: string) => void;
  whiskyData: Whisky[];
}

export const WhiskyList = ({ onSearch, whiskyData }: Props) => {
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
                  whiskyData={whiskyData}
                />
              </Th>
            ))}
          </Tr>
        </Thead>
        {whiskyData.map((whisky) => (
          <WhiskyItems key={whisky.id} whisky={whisky} />
        ))}
      </Table>
    </TableContainer>
  );
};

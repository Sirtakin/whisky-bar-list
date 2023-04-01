import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FilterButton } from "./FilterButton";
import useWhiskies from "../hooks/useWhisky";
import categories from "../data/categories";
import { WhiskyMap } from "./WhiskyMap";

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
                <FilterButton
                  onSearch={onSearch}
                  category={category}
                  placeholder={category}
                />
              </Th>
            ))}
          </Tr>
        </Thead>
        {data.map((whisky) => (
          <WhiskyMap whisky={whisky} />
          //   <Tbody key={whisky.id}>
          //     <Tr>
          //       <Td>{whisky.destillery}</Td>
          //       <Td>{whisky.edition}</Td>
          //       <Td>{whisky.country}</Td>
          //       <Td>{whisky.area}</Td>
          //       <Td>{whisky.age}</Td>
          //       <Td>{whisky.barrel}</Td>
          //       <Td>{whisky.smoke}</Td>
          //       <Td>{whisky.price}</Td>
          //     </Tr>
          //   </Tbody>
        ))}
      </Table>
    </TableContainer>
  );
};

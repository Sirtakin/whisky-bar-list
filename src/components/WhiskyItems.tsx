import { Tbody, Tr, Td } from "@chakra-ui/react";
import { Whisky } from "../hooks/useWhisky";

interface Props {
  whisky: Whisky;
}

export const WhiskyItems = ({ whisky }: Props) => {
  return (
    <>
      <Tbody key={whisky.id}>
        <Tr>
          <Td>{whisky.destillery}</Td>
          <Td>{whisky.edition}</Td>
          <Td>{whisky.country}</Td>
          <Td>{whisky.area}</Td>
          <Td>{whisky.age}</Td>
          <Td>{whisky.barrel}</Td>
          <Td>{whisky.smoke}</Td>
          <Td>{whisky.price}</Td>
        </Tr>
      </Tbody>
    </>
  );
};

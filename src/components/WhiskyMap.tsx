import { Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import useWhiskies, { Whisky } from "../hooks/useWhisky";

interface Props {
  whiskies: Whisky;
}

//{ whiskies }: Props

export const WhiskyMap = () => {
  const { data } = useWhiskies();

  return (
    <>
      {data.map((whisky) => (
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
      ))}
    </>
  );
};

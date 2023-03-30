import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const WhiskyList = () => (
  <TableContainer>
    <Table variant="striped" colorScheme="teal">
      <Thead fontSize="lg">
        <Tr>
          <Th>Destillery</Th>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Country</Th>
          <Th>Barrel</Th>
          <Th>Smoke</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Th>Laphroaig</Th>
          <Th>Lore</Th>
          <Th>NAS</Th>
          <Th>Scotland</Th>
          <Th>Bourbon</Th>
          <Th>Heavy</Th>
          <Th>120kr</Th>
        </Tr>
        <Tr>
          <Th>Kavalan</Th>
          <Th>Soloist</Th>
          <Th>NAS</Th>
          <Th>Taiwan</Th>
          <Th>Sherry</Th>
          <Th>Light</Th>
          <Th>200kr</Th>
        </Tr>
        <Tr>
          <Th>Glenmorangie</Th>
          <Th>Signet</Th>
          <Th>NAS</Th>
          <Th>Scotland</Th>
          <Th>Bourbon</Th>
          <Th>None</Th>
          <Th>190kr</Th>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Dalmore</Th>
          <Th>Single Malt</Th>
          <Th>15</Th>
          <Th>Scotland</Th>
          <Th>Sherry</Th>
          <Th>Light</Th>
          <Th>150kr</Th>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
);

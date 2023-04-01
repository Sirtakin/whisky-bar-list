import { Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import useWhiskies, { Whisky } from "../hooks/useWhisky";

interface Props {
  whisky: Whisky;
}

export const WhiskyMap = ({ whisky }: Props) => {
  return <TableContainer></TableContainer>;
};

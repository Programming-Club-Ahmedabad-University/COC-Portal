import React from "react";
import styles from "./ScoreCard.module.css";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";

function ScoreCard() {
  return (
    <div className={styles.whole}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sr. </Th>
              <Th>Team1</Th>
              <Th isNumeric>Points 1</Th>
              <Th isNumeric>Points 2</Th>
              <Th>Team2</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>India</Td>
              <Td isNumeric>100</Td>
              <Td isNumeric>200</Td>
              <Td>England</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>India</Td>
              <Td isNumeric>100</Td>
              <Td isNumeric>200</Td>
              <Td>England</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>India</Td>
              <Td isNumeric>100</Td>
              <Td isNumeric>200</Td>
              <Td>England</Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>India</Td>
              <Td isNumeric>100</Td>
              <Td isNumeric>200</Td>
              <Td>England</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ScoreCard;

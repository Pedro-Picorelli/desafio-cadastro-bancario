import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

let width = 500;

export default function CustomizedTables({cadastrado}) {
  return (
    <TableContainer sx={{ maxWidth: width ,  margin: 'auto' }} component={Paper}>
      <Table sx={{ minWidth: width }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Agencia</StyledTableCell>
            <StyledTableCell align="right">Conta bancaria</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cadastrado.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.agencia}
              </StyledTableCell>
              <StyledTableCell align="right">{row.contaBacaria}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

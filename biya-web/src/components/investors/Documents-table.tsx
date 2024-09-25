import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import FileDownloadIcon from '@mui/icons-material/FileDownload';


function createData(
  name: string,
  fileLink: string,
) {
  return { name, fileLink};
}

const rows = [
  createData('The Code of Ethics', 'Frozen yoghurt'),
  createData('The Charter of the Audit Committee','Frozen yoghurt'),
  createData('The Charter of the Nomination Committee', 'Frozen yoghurt'),
  createData('The Charter of the Compensation Committee', 'Frozen yoghurt'),
  createData('Whistleblower Policy of China Ceramics', 'Frozen yoghurt'),
];

export default function DocumentsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell align="right">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><Button variant="text" color="info">
                <FileDownloadIcon/>
              </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
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
  createData('The Code of Ethics', '/documents/code-of-ethics.pdf'),
  createData('The Charter of the Audit Committee', '/documents/charter-audit-committee.pdf'),
  createData('The Charter of the Nomination Committee', '/documents/charter-nomination-committee.pdf'),
  createData('The Charter of the Compensation Committee', '/documents/charter-compensation-committee.pdf'),
  createData('Whistleblower Policy of China Ceramics', '/documents/whistleblower-policy.pdf'),
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
              <TableCell align="right">
                <Button
                  variant="text"
                  color="info"
                  component="a"
                  href={row.fileLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDownloadIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
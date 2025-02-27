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

function createData(
    name: string,
    // position: string,
    audit: string,
    compensation: string,
    nominating: string,
) {
    // return { name, position, audit, compensation, nominating };
    return { name, audit, compensation, nominating };
}

const rows = [
    // createData('Weilai Zhang', "", "", ""),
    // createData('Siyu Yang', "", "", ""),
    // createData('Bin Tan', "", "", ""),
    // createData('Dian Zhang', "", "", ""),
    createData('Zicen Liao', "(1) (2) (3)", "(1)", "(1)"),
    createData('Xiaoyue Zhang', "(1) ", "(1) (2)", "(1) "),
    createData('Huashu Yuan', "(1) ", "(1) ", "(1) (2)"),
];

const CommitteeComposition: React.FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <caption>
                    (1) Committee member
                    <br />
                    (2) Committee chairperson
                    <br />
                    (3) Audit committee financial expert
                </caption>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Director</StyledTableCell>
                        {/* <StyledTableCell align="right">Position</StyledTableCell> */}
                        <StyledTableCell align="right">Audit Committee</StyledTableCell>
                        <StyledTableCell align="right">Compensation Committee</StyledTableCell>
                        <StyledTableCell align="right">Nominating and Corporate Governance Committee</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            {/* <StyledTableCell align="right">{row.position}</StyledTableCell> */}
                            <StyledTableCell align="right">{row.audit}</StyledTableCell>
                            <StyledTableCell align="right">{row.compensation}</StyledTableCell>
                            <StyledTableCell align="right">{row.nominating}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CommitteeComposition;
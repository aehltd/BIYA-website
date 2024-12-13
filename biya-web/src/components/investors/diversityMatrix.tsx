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

function createBoardDiversityMatrix(
    name: string,
    info: string,
) {
    return { name, info };
}

const boardDiversityMatrix = [
    createBoardDiversityMatrix('Country of Principal Executive Officers', "China"),
    createBoardDiversityMatrix('Foreign Private Issuer', "Yes"),
    createBoardDiversityMatrix('Disclosure Prohibited Under Home Country Law', "No"),
    createBoardDiversityMatrix('Number of Directors', "7"),
];

function createGenderIdentity(
    name: string,
    female: number,
    male: number,
    nonBinary: number,
    notDisclosed: number,
) {
    return { name, female, male, nonBinary, notDisclosed };
}

const genderIdentity = [
    createGenderIdentity('Country of Principal Executive Officers', 4, 3, 0, 0),
];

function createDemographicBackground(
    name: string,
    info: string,
) {
    return { name, info };
}

const demographicBackground = [
    createDemographicBackground('Underrepresented Individual at Home Country Jurisdiction', "0"),
    createDemographicBackground('LGBTQ+', "0"),
    createDemographicBackground('Did Not Disclose Demographic Background', "0"),
];



const DiversityMatrix: React.FC = () => {
    return (
        <TableContainer component={Paper}>
            {/* Table 1 */}
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} align="center">Board Diversity Matrix</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {boardDiversityMatrix.map((boardDiversityMatrix) => (
                        <StyledTableRow key={boardDiversityMatrix.name}>
                            <StyledTableCell component="th" scope="row">
                                {boardDiversityMatrix.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{boardDiversityMatrix.info}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            {/* Table 2 */}
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={1} align="center">Gender Identity</StyledTableCell>
                        <StyledTableCell align="right" className=' capitalize'>female</StyledTableCell>
                        <StyledTableCell align="right" className=' capitalize'>male</StyledTableCell>
                        <StyledTableCell align="right" className=' capitalize'>non-Binary</StyledTableCell>
                        <StyledTableCell align="right" className=' capitalize'>not-Disclosed</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {genderIdentity.map((genderIdentity) => (
                        <StyledTableRow key={genderIdentity.name}>
                            <StyledTableCell component="th" scope="row">
                                {genderIdentity.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{genderIdentity.female}</StyledTableCell>
                            <StyledTableCell align="right">{genderIdentity.male}</StyledTableCell>
                            <StyledTableCell align="right">{genderIdentity.nonBinary}</StyledTableCell>
                            <StyledTableCell align="right">{genderIdentity.notDisclosed}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Table 3 */}
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} align="center">Demographic Background</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {demographicBackground.map((demographicBackground) => (
                        <StyledTableRow key={demographicBackground.name}>
                            <StyledTableCell component="th" scope="row">
                                {demographicBackground.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{demographicBackground.info}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>


        </TableContainer>
    );
};

export default DiversityMatrix;
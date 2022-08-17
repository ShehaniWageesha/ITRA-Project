import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(Avatar, Name, Role, Action) {
    return { Avatar, Name, Role, Action };
}
const theme = createTheme({
    typography: {
        fontFamily: "'Roboto', sans-serif !important"
    }
});

const rows = [
    createData('', 'Niraj Appuhami', 'Owner'),
    createData('', 'Niraj Appuhami', 'Owner'),
    createData('', 'Niraj Appuhami', 'Owner'),
    createData('', 'Niraj Appuhami', 'Owner')
];

export default function AvatarTable() {
    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, backgroundColor: '#E3F2FD' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.Name}>
                                <TableCell component="th" scope="row">
                                    {row.Avatar}
                                </TableCell>
                                <TableCell sx={{ minWidth: 0, backgroundColor: 'red' }} align="right">
                                    {row.Name}{' '}
                                </TableCell>
                                <TableCell align="right">{row.Role}</TableCell>
                                <TableCell align="right">
                                    {row.Action}
                                    <IconButton color="primary" aria-label="delete" component="span">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}

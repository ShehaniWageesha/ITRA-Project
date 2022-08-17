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
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function createData(PackageName, Campaigns, Channels, ShortURls, Validity) {
    return { PackageName, Campaigns, Channels, ShortURls, Validity };
}
const theme = createTheme({
    typography: {
        fontFamily: "'Roboto', sans-serif !important"
    }
});

const rows = [
    createData('Free', 30, 26, 780, '60 Days'),
    createData('Basic', 1800, 26, 46800, 'Lifetime'),
    createData('Advanced', 3500, 26, 91000, 'Lifetime'),
    createData('Custom', 'Custom', 'Custom', 'Custom', 'Lifetime')
];

export default function BasicTable() {
    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, backgroundColor: '#E3F2FD' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Package Name</TableCell>
                            <TableCell align="right">Campaigns</TableCell>
                            <TableCell align="right">Channels</TableCell>
                            <TableCell align="right">Short URls</TableCell>
                            <TableCell align="right">Validity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.PackageName}
                                </TableCell>
                                <TableCell align="right">{row.Campaigns}</TableCell>
                                <TableCell align="right">{row.Channels}</TableCell>
                                <TableCell align="right">{row.ShortURls}</TableCell>
                                <TableCell align="right">{row.Validity}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            color: '#fff !important',
                                            letterSpacing: '1px !important',
                                            width: '120px !important',
                                            fontSize: '0.7rem !important',
                                            fontWeight: 'bold !important',
                                            fontFamily: "'Roboto', sans-serif !important",
                                            display: 'block !important',
                                            marginLeft: '100px',
                                            padding: '10px 20px !important',
                                            borderRadius: '50px !important',
                                            backgroundColor: '#1E88E5 !important',
                                            '&:hover': {
                                                backgroundColor: '#212121 !important',
                                                color: '#fff !important'
                                            }
                                        }}
                                    >
                                        Upgrade
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}

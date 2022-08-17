import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';

function getNameProperly(value) {
    if (value instanceof Date) {
        return moment(value).format('ll');
    }
    return value;
}
function DataTable() {
    const useStyles = makeStyles(() => ({
        a: {
            color: '#fff !important',
            textDecoration: 'unset'
        },
        menu: {
            '& .MuiPaper-root': {
                backgroundColor: '#fff'
            }
        },
        thaiTextFieldInputProps: {
            padding: '0'
        }
    }));

    const classes = useStyles();

    const theme = createTheme({
        typography: {
            fontFamily: "'Roboto', sans-serif !important"
        }
    });

    function tagStyle(allTags) {
        if (allTags) {
            const sepTags = allTags.split(',');
            const letters = sepTags.map(
                (tag) =>
                    `<div style="background-color: #1E88E5;
                    border: none;
                    color: white;
                    padding: 1px 12px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 12px;
                    border-radius: 30%;">${tag}</div>`
            );
            return letters.join('');
        }
        return '';
    }
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = 'primary';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name)
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
        };
    }

    const columns = [
        {
            field: 'avatar',
            headerName: <b>avatar</b>,
            width: 200,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Avatar {...stringAvatar('John Doe')} color="primary" />
                </Stack>
            )
        },
        {
            field: 'Name',
            headerName: <b>Name</b>,
            width: 350,
            editable: true
        },
        {
            field: 'Role',
            headerName: <b>Role</b>,
            width: 200
        },
        {
            field: 'actions',
            headerName: <b>Actions</b>,
            width: 200,
            renderCell: (params) => (
                <Stack direction="row" spacing={1}>
                    <IconButton color="primary" aria-label="delete" component="span">
                        <DeleteIcon />
                    </IconButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Stack>
            )
        }
    ];

    const rows = [
        {
            id: 1,
            Avatar: 'Campaign001',
            Name: 'Niraj Appuhamy',
            Role: 'Owner'
        },
        {
            id: 2,
            Avatar: 'Campaign002',
            Name: 'Sachini Nisansala',
            Role: 'Project Manager'
        },
        {
            id: 3,
            Avatar: 'Campaign003',
            Name: 'Shehani Wageesha',
            Role: 'Intern'
        },
        {
            id: 4,
            Avatar: 'Campaign004',
            Name: 'Chapa Tharushi',
            Role: 'Intern'
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <main className={classes.mainTwo}>
                <Container maxWidth="lg">
                    <h2>All Users</h2>
                    <Box
                        sx={{
                            height: '50vh',
                            width: '100%'
                        }}
                    >
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={4}
                            rowsPerPageOptions={[4]}
                            checkboxSelection
                            enableSelectionOnClick
                        />
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    );
}

export default DataTable;

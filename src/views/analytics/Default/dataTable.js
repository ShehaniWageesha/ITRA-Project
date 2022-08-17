// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import ChevronRight from '@mui/icons-material/ChevronRight';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactTooltip from 'react-tooltip';

function getNameProperly(value) {
    if (value instanceof Date) {
        return moment(value).format('ll');
    }
    return value;
}
function DataTable(campaigns) {
    const useStyles = makeStyles((theme) => ({
        bgBlue: {
            backgroundColor: '#F8F8F8 !important',
            boxShadow: 'unset !important'
        },
        defaultBtnTwo: {
            color: '#fff !important',
            letterSpacing: '2px !important',
            width: '150px !important',
            fontSize: '0.8rem !important',
            fontWeight: 'bold !important',
            fontFamily: "'Roboto', sans-serif !important",
            display: 'block !important',
            margin: 'auto !important',
            padding: '10px 20px !important',
            borderRadius: '50px !important',
            border: '1px solid black !important',
            backgroundColor: 'black !important',
            '&:hover': {
                backgroundColor: 'black !important',
                color: '#fff !important'
            }
        },
        defaultBtnDelete: {
            color: '#fff !important',
            letterSpacing: '2px !important',
            width: '150px !important',
            fontSize: '0.8rem !important',
            fontWeight: 'bold !important',
            fontFamily: "'Roboto', sans-serif !important",
            display: 'block !important',
            marginTop: '-125px',
            padding: '10px 20px !important',
            borderRadius: '50px !important',
            border: '1px solid red !important',
            backgroundColor: 'red !important',
            '&:hover': {
                backgroundColor: 'red !important',
                color: '#fff !important'
            }
        },
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
            const letters = sepTags.map((tag) => `<button class='btn btn-info btn-sm'>${tag}</button>`);
            return letters.join('');
        }
        return '';
    }

    const columns = [
        {
            field: 'title',
            headerName: <b>Title</b>,
            width: 300
        },
        {
            field: 'shortUrl',
            headerName: <b>Short URL</b>,
            width: 400
        },
        {
            field: 'actions',
            headerName: <b>Actions</b>,
            width: 280,
            renderCell: (params) => (
                <Stack direction="row" spacing={1}>
                    <IconButton
                        color="primary"
                        aria-label="copy"
                        component="span"
                        // onClick={() => {
                        //     alert('Do you want Copy');
                        // }}
                    >
                        <FileCopyIcon />
                    </IconButton>
                    <ReactTooltip />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton
                        color="primary"
                        aria-label="QR"
                        component="span"
                        onClick={() => {
                            ReactTooltip.show();
                        }}
                    >
                        <QrCodeIcon />
                    </IconButton>
                    <ReactTooltip />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton color="primary" aria-label="delete" component="span">
                        <DeleteIcon />
                    </IconButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton color="primary" aria-label="ChevronRight" component="span">
                        <ChevronRight />
                    </IconButton>
                </Stack>
            )
        }
    ];

    const rows = [
        {
            id: 1,
            title: 'General',
            shortUrl: 'https://itr.ac/ZXLr3O6na',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 2,
            title: 'Facebook',
            shortUrl: 'https://itr.ac/ZXLr3O6nb',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 3,
            title: 'Instagram',
            shortUrl: 'https://itr.ac/ZXLr3O6nc',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 4,
            title: 'YouTube',
            shortUrl: 'https://itr.ac/ZXLr3O6nd',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 5,
            title: 'LinkedIn',
            shortUrl: 'https://itr.ac/ZXLr3O6ne',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 6,
            title: 'Pinterest',
            shortUrl: 'https://itr.ac/ZXLr3O6nf',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 7,
            title: 'Twitter',
            shortUrl: 'https://itr.ac/ZXLr3O6ng',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 8,
            title: 'Tumblr',
            shortUrl: 'https://itr.ac/ZXLr3O6nh',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 9,
            title: 'Snapchat',
            shortUrl: 'https://itr.ac/ZXLr3O6ni',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        },
        {
            id: 10,
            title: 'TikTok',
            shortUrl: 'https://itr.ac/ZXLr3O6nj',
            copy: '',
            qr: '',
            delete: '',
            viewMore: ''
        }
    ];

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            {/* <SecondaryHeader /> */}
            <main className={classes.mainTwo}>
                <Container maxWidth="xl">
                    <Box sx={{ height: '60vh', width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            // checkboxSelection
                            disableSelectionOnClick
                        />
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    );
}

export default DataTable;

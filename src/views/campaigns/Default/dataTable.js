import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import DeleteIcon from '@mui/icons-material/Delete';

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

    const columns = [
        {
            field: 'campaignName',
            headerName: <b>Campaign Name</b>,
            width: 150,
            editable: true,
            headerAlign: 'center',
            valueGetter: (params) => params.row.campaignName,
            renderCell: (params) => <div>{getNameProperly(params.row.campaignName)}</div>
        },
        {
            field: 'description',
            headerName: <b>Description</b>,
            width: 180,
            headerAlign: 'center'
        },
        {
            field: 'CampaignTags',
            headerName: <b>Tags</b>,
            width: 100,
            headerAlign: 'center',
            valueGetter: (params) => params.row.campaignTags,
            renderCell: (params) => (
                <div
                    dangerouslySetInnerHTML={{
                        __html: tagStyle(params.row.campaignTags)
                    }}
                />
            )
        },
        {
            field: 'createdBy',
            headerName: <b>Created By</b>,
            width: 170,
            headerAlign: 'center'
        },
        {
            field: 'createdAt',
            headerName: <b>Created At</b>,
            width: 200,
            headerAlign: 'center',
            valueGetter: (params) => params.row.createdAt,
            renderCell: (params) => <div>{moment(params.row.createdAt).format('LLL')}</div>
        },
        {
            field: 'actions',
            headerName: <b>Actions</b>,
            width: 120,
            headerAlign: 'center',
            renderCell: (params) => (
                <Stack direction="row" spacing={1}>
                    <IconButton color="primary" aria-label="compare" component="span">
                        <CompareArrowsIcon />
                    </IconButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            campaignName: 'Campaign001',
            description: 'Sample Description',
            campaignTags: 'IFS, INM',
            createdBy: 'Niraj Appuhamy',
            createdAt: 'June 24, 2022'
        },
        {
            id: 2,
            campaignName: 'Campaign002',
            description: 'Sample Description',
            campaignTags: 'IFS',
            createdBy: 'Yahan kalhara',
            createdAt: 'July 24, 2022'
        },
        {
            id: 3,
            campaignName: 'Campaign003',
            description: 'Sample Description',
            campaignTags: 'IFS',
            createdBy: 'Sachini Dissanayake',
            createdAt: 'August 24, 2022'
        },
        {
            id: 4,
            campaignName: 'Campaign004',
            description: 'Sample Description',
            campaignTags: 'IFS, INM',
            createdBy: 'Chapa Tharushi',
            createdAt: 'August 20, 2022'
        },
        {
            id: 5,
            campaignName: 'Campaign005',
            description: 'Sample Description',
            campaignTags: 'IFS',
            createdBy: 'Shehani Wageesha',
            createdAt: 'August 27, 2022'
        },
        {
            id: 6,
            campaignName: 'Campaign006',
            description: 'Sample Description',
            campaignTags: 'IFS, INM',
            createdBy: 'Niraj Appuhamy',
            createdAt: 'June 24, 2022'
        },
        {
            id: 7,
            campaignName: 'Campaign007',
            description: 'Sample Description',
            campaignTags: 'IFS',
            createdBy: 'Yahan kalhara',
            createdAt: 'July 24, 2022'
        },
        {
            id: 8,
            campaignName: 'Campaign008',
            description: 'Sample Description',
            campaignTags: 'IFS',
            createdBy: 'Sachini Dissanayake',
            createdAt: 'August 24, 2022'
        },
        {
            id: 9,
            campaignName: 'Campaign009',
            description: 'Sample Description',
            campaignTags: 'IFS, INM',
            createdBy: 'Chapa Tharushi',
            createdAt: 'August 20, 2022'
        },
        {
            id: 10,
            campaignName: 'Campaign010',
            description: 'Sample Description',
            campaignTags: 'IFS',
            createdBy: 'Shehani Wageesha',
            createdAt: 'August 27, 2022'
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <main className={classes.mainTwo}>
                <Container maxWidth="xl">
                    <h2>All Campaigns</h2>
                    <Box
                        sx={{
                            height: '100vh',
                            width: '100%'
                        }}
                    >
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
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

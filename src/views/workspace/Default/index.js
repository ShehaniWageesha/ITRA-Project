// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

// project imports
import PackageName from './PackageName';
import UserQuantity from './UserQuantity';
import { gridSpacing } from 'store/constant';
import Table from './Table';
// import AvatarTable from './Avatar Table';
import Coupon from './Cupon';
import Email from './email';
import DataTable from './dataTable';

// ==============================|| DEFAULT WORKSPACE||============================== //

const Analytics = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    const useStyles = makeStyles((theme) => ({
        bgBlue: {
            backgroundColor: '#F8F8F8 !important',
            boxShadow: 'unset !important'
        },
        defaultBtnTwo: {
            color: '#fff !important',
            letterSpacing: '2px !important',
            width: '130px !important',
            fontSize: '0.8rem !important',
            fontWeight: 'bold !important',
            fontFamily: "'Roboto', sans-serif !important",
            display: 'block !important',
            marginLeft: '770px',
            marginTop: '-70px',
            padding: '10px 20px !important',
            borderRadius: '50px !important',
            border: '1px #1E88E5 !important',
            backgroundColor: '#1E88E5 !important',
            '&:hover': {
                backgroundColor: '#1E88E5 !important',
                color: '#fff !important'
            }
        },
        defaultBtnDelete: {
            color: '#fff !important',
            letterSpacing: '2px !important',
            width: '130px !important',
            fontSize: '0.8rem !important',
            fontWeight: 'bold !important',
            fontFamily: "'Roboto', sans-serif !important",
            display: 'block !important',
            marginTop: '-70px',
            marginLeft: '740px',
            padding: '10px 20px !important',
            borderRadius: '50px !important',
            border: '1px solid #5E35B1 !important',
            backgroundColor: '#5E35B1 !important',
            '&:hover': {
                backgroundColor: '#5E35B1 !important',
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

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <PackageName isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <UserQuantity isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <Coupon />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <Table />
                    </Grid>
                </Grid>
            </Grid>
            <br />
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <DataTable />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <Email />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Analytics;

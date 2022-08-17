// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffect, useState } from 'react';

// material-ui
import { Grid, Button } from '@mui/material';
// import { Box, Container } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

// project imports
import LongUrl from './LongURL';
import CampaignTags from './CampaignTags';
import CampaignName from './CampaignName';
import CampaignDescription from './CampaignDescription';
import TotalClicksByDate from './TotalClicksByDate';
import TotalClicksByChannel from './TotalClicksByChannel';
import ClicksByChannelandDate from './ClicksByChannelandDate';
import Browser from './Browser';
import Country from './Country';
import City from './City';
import Language from './Language';
import { gridSpacing } from 'store/constant';
import DataTable from './dataTable';

// ==============================|| DEFAULT ANALYTICS ||============================== //

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
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <CampaignName isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <CampaignDescription isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <CampaignTags isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={8} md={6} sm={6} xs={12}>
                        <LongUrl isLoading={isLoading} />
                    </Grid>
                    <Grid item sm={3} md={2}>
                        <Button variant="contained" className={classes.defaultBtnTwo}>
                            SAVE
                        </Button>
                    </Grid>
                    <Grid item sm={3} md={2}>
                        <Button variant="contained" className={classes.defaultBtnDelete}>
                            Delete
                        </Button>
                    </Grid>
                    {/* <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid> */}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <DataTable />
                    </Grid>
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <TotalClicksByDate isLoading={isLoading} />
                    </Grid>
                    {/* <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid> */}
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <TotalClicksByChannel isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <ClicksByChannelandDate isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Country isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <City isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Browser isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Language isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Analytics;

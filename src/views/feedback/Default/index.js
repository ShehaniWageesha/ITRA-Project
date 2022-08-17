// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import logo from './logo.jpg';

// project imports
import CommentBox from './CommentBox';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} xl={12} xs={12} style={{ marginTop: '50px' }}>
                        <img src={logo} alt="Logo" style={{ width: '15rem' }} />
                    </Grid>
                    <Grid item lg={12} md={12} xl={12} xs={12} style={{ marginTop: '-300px' }}>
                        <CommentBox />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;

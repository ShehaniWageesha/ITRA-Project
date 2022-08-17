// eslint-disable-next-line import/no-extraneous-dependencies
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const CampaignsDefault = Loadable(lazy(() => import('views/campaigns/Default')));
const AnalyticsDefault = Loadable(lazy(() => import('views/analytics/Default')));
const WorkspaceDefault = Loadable(lazy(() => import('views/workspace/Default')));
const SupportDefault = Loadable(lazy(() => import('views/support/Default')));
const FeedbackDefault = Loadable(lazy(() => import('views/feedback/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/campaigns/default',
            element: <CampaignsDefault />
        },
        {
            path: '/analytics/default',
            element: <AnalyticsDefault />
        },
        {
            path: '/workspace/default',
            element: <WorkspaceDefault />
        },
        {
            path: '/support/default',
            element: <SupportDefault />
        },
        {
            path: '/feedback/default',
            element: <FeedbackDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;

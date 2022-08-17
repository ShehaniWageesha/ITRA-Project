// assets
import { IconDashboard, IconHelp, IconUser, IconBusinessplan, IconMessages, IconLogout } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconHelp, IconUser, IconBusinessplan, IconMessages, IconLogout };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'drawer',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'campaigns',
            title: 'Campaigns',
            type: 'item',
            url: '/campaigns/default',
            icon: icons.IconBusinessplan,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

// assets
import { IconKey, IconHelp, IconUser, IconBusinessplan, IconMessages, IconLogout } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconHelp,
    IconUser,
    IconBusinessplan,
    IconMessages,
    IconLogout
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'analytics',
            title: 'Analytics',
            type: 'item',
            url: '/analytics/default',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'workspace',
            title: 'Workspace',
            type: 'item',
            url: '/workspace/default',
            icon: icons.IconUser,
            breadcrumbs: false
        },

        {
            id: 'support',
            title: 'Support',
            type: 'item',
            url: '/support/default',
            icon: icons.IconHelp,
            breadcrumbs: false
        },
        {
            id: 'feedback',
            title: 'Feedback',
            type: 'item',
            url: '/feedback/default',
            icon: icons.IconMessages,
            breadcrumbs: false
        },
        {
            id: 'logout',
            title: 'Logout',
            type: 'item',
            url: '/logout/default',
            icon: icons.IconLogout,
            breadcrumbs: false
        }
    ]
};

export default pages;

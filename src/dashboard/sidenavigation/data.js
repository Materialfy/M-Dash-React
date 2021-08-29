import HomeIcon from './icons/home';
import StatusIcon from './icons/status';
import CreditsIcon from './icons/credits';
import ArchivesIcon from './icons/archives';
import SettingsIcon from './icons/settings';
import TableIcon from './icons/documentation';
import LoginIcon from './icons/login'


const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Status & Updates',
    icon: <StatusIcon />,
    link: '/admin/status',
  },
  {
    title: 'User Page',
    icon: <ArchivesIcon />,
    link: '/admin/userpage',
  },
  {
    title: 'Inbox',
    icon: <CreditsIcon />,
    link: '/admin/inbox',
  },
  {
    title: 'Data Tables',
    icon: <TableIcon />,
    link: '/admin/datatables',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Login',
    icon: <LoginIcon />,
    link: '/login'
  }
];

export default data;

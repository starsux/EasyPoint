import MenuBar from "@/app/MenuBar";

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StorageIcon from '@mui/icons-material/Storage';

import {NavigationItemType} from "@/app/MenuBar";

const NAVIGATION: NavigationItemType[] = [
  {
    kind: 'header',
    title: 'Easy Point',
    segment: '/',
    icon: <DashboardIcon />
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Ordenes',
    icon: <ReceiptIcon />,
  },
    {
    segment: 'expenses',
    title: 'Gastos',
    icon: <AttachMoneyIcon />,
  },
      {
    segment: 'customers',
    title: 'Clientes',
    icon: <AssignmentIndIcon />,
  },
  {
    segment: 'pending',
    title: 'Cuentas pendientes',
    icon: <RequestQuoteIcon />,
  },
    {
    segment: 'products',
    title: 'Productos',
    icon: <StorageIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reportes',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Historial de ventas',
        icon: <DescriptionIcon />,
      },
    ],
  },
];

export default function Home() {
  return (
    <MenuBar navigation={NAVIGATION}/>
  );
}

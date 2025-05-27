"use client"
import MenuBar from "@/app/MenuBar"

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
    icon: <DashboardIcon  />
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon sx={{ fontSize: 20 }}/>,
  },
  {
    segment: 'orders',
    title: 'Ordenes',
    icon: <ReceiptIcon sx={{ fontSize: 20 }}/>,
  },
    {
    segment: 'expenses',
    title: 'Gastos',
    icon: <AttachMoneyIcon sx={{ fontSize: 20 }}/>,
  },
      {
    segment: 'customers',
    title: 'Clientes',
    icon: <AssignmentIndIcon sx={{ fontSize: 20 }}/>,
  },
  {
    segment: 'pending',
    title: 'Cuentas pendientes',
    icon: <RequestQuoteIcon sx={{ fontSize: 20 }}/>,
  },
    {
    segment: 'products',
    title: 'Productos',
    icon: <StorageIcon sx={{ fontSize: 20 }}/>,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    title: 'Reportes',
    segment: undefined,
    kind: 'parent',
    icon: <BarChartIcon sx={{ fontSize: 20 }}/>,
    children: [
      {
        segment: 'sales',
        title: 'Historial de ventas',
        icon: <DescriptionIcon sx={{ fontSize: 20 }}/>,
      },
    ],
  },
];

export default function Home() {



  return (

    <>
      <MenuBar navigation={NAVIGATION} />
    </>

  );
}

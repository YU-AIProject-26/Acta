import { Outlet } from 'react-router-dom';
import Header from './Header';
import {
  LayoutWrapper,
  MainContent,
} from './DashboardLayout.styles';

export default function DashboardLayout() {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
}
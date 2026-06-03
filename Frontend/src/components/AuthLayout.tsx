import { Outlet, Link } from 'react-router-dom';
import {
  LayoutWrapper,
  Header,
  HeaderInner,
  LogoLink,
  LogoIcon,
  LogoText,
  Content,
} from './AuthLayout.styles';

export default function AuthLayout() {
  return (
    <LayoutWrapper>
      <Header>
        <HeaderInner>
          <LogoLink as = {Link} to = "/landing">
            <LogoIcon>
              <span>A</span>
            </LogoIcon>
            <LogoText>Acta</LogoText>
          </LogoLink>
        </HeaderInner>
      </Header>

      <Content>
        <Outlet />
      </Content>
    </LayoutWrapper>
  );
}
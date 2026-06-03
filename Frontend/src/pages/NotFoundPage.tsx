import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import {
  PageWrapper,
  Card,
  IconBox,
  ErrorCode,
  Title,
  Description,
  ButtonGroup,
  PrimaryLinkButton,
  OutlineLinkButton,
} from './NotFoundPage.styles';

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <Card>
        <IconBox>
          <AlertCircle />
        </IconBox>

        <ErrorCode>404</ErrorCode>

        <Title>페이지를 찾을 수 없습니다</Title>

        <Description>
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
          <br />
          URL을 다시 확인해주세요.
        </Description>

        <ButtonGroup>
          <PrimaryLinkButton as = {Link} to = "/">
            <Home />
            대시보드로 이동
          </PrimaryLinkButton>

          <OutlineLinkButton as = {Link} to = "/landing">
            랜딩 페이지로 이동
          </OutlineLinkButton>
        </ButtonGroup>
      </Card>
    </PageWrapper>
  );
}
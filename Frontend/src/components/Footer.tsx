import { Link } from 'react-router-dom';
import {
  FooterWrapper,
  FooterInner,
  FooterTop,
  BrandLink,
  BrandIcon,
  BrandText,
  FooterLinks,
  FooterLink,
  FooterBottom,
} from './Footer.styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterTop>
          <BrandLink as = {Link} to = "/">
            <BrandIcon>
              <span>A</span>
            </BrandIcon>
            <BrandText>Acta</BrandText>
          </BrandLink>

          <FooterLinks>
            <FooterLink as = {Link} to = "/service">
              서비스 소개
            </FooterLink>
            <FooterLink as = {Link} to = "/contact">
              문의
            </FooterLink>
            <FooterLink as = {Link} to = "/terms">
              이용약관
            </FooterLink>
            <FooterLink as = {Link} to = "/privacy">
              개인정보처리방침
            </FooterLink>
          </FooterLinks>
        </FooterTop>

        <FooterBottom>© 2026 Acta. All rights reserved.</FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
}
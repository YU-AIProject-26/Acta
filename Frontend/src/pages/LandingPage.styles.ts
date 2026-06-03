import styled from 'styled-components';
import Button from '../components/Button';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s;

  html.dark & {
    background: linear-gradient(to bottom, #1a1a1a, #0f0f0f, #1a1a1a);
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f3f4f6;

  html.dark & {
    background: rgba(26, 26, 26, 0.8);
    border-bottom-color: #1f2937;
  }
`;

export const HeaderInner = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BrandIcon = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.375rem;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease;

  ${BrandLink}:hover & {
    transform: scale(1.05);
  }

  span {
    color: #ffffff;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1;
  }
`;

export const BrandText = styled.span`
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderGhostButton = styled(Button)`
  font-size: 0.875rem;
  cursor: default;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    &:hover {
      background: #1f2937;
    }
  }
`;

export const HeaderPrimaryButton = styled(Button)`
  background: #2563eb;
  color: #ffffff;
  font-size: 0.875rem;
  height: 2.25rem;
  padding: 0 1rem;
  cursor: default;

  &:hover {
    background: rgba(37, 99, 235, 0.9);
  }
`;

export const Main = styled.main`
  flex: 1;
  padding-top: 3.5rem;
`;

export const HeroSection = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  padding: 8rem 1.5rem 5rem;
  position: relative;
`;

export const HeroGlow = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 9999px;
  filter: blur(64px);
  pointer-events: none;

  html.dark & {
    background: rgba(37, 99, 235, 0.05);
  }
`;

export const HeroContent = styled.div`
  max-width: 48rem;
  position: relative;
  z-index: 10;
`;

export const HeroTitle = styled.h1`
  font-size: 64px;
  line-height: 1.1;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1.5rem;
  letter-spacing: -0.025em;

  html.dark & {
    color: #ffffff;
  }
`;

export const HeroGradientText = styled.span`
  background: linear-gradient(to right, #2563eb, rgba(37, 99, 235, 0.6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin: 0 0 2.5rem;
  line-height: 1.75;
  max-width: 36rem;

  html.dark & {
    color: #d1d5db;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeroPrimaryButton = styled(Button)`
  height: 3rem;
  padding: 0 1.5rem;
  font-size: 1rem;
  background: #2563eb;
  color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);
  cursor: default;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.9);
    box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.2);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const HeroGhostButton = styled(Button)`
  height: 3rem;
  padding: 0 1.5rem;
  font-size: 1rem;
  cursor: default;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    &:hover {
      background: #1f2937;
    }
  }
`;

export const PreviewSection = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem 8rem;
`;

export const PreviewCard = styled.div`
  position: relative;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: linear-gradient(to bottom right, #f9fafb, #f3f4f6);
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  html.dark & {
    border-color: rgba(55, 65, 81, 0.5);
    background: linear-gradient(to bottom right, #1f1f1f, #151515);
  }
`;

export const PreviewGlowTop = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 8rem;
  height: 8rem;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 9999px;
  filter: blur(40px);
`;

export const PreviewGlowBottom = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 8rem;
  height: 8rem;
  background: rgba(37, 99, 235, 0.05);
  border-radius: 9999px;
  filter: blur(40px);
`;

export const PreviewScreen = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: #ffffff;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  html.dark & {
    background: #0a0a0a;
    border-color: #374151;
  }
`;

export const PreviewContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const PreviewIconWrap = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2563eb;

  html.dark & {
    background: rgba(37, 99, 235, 0.2);
  }
`;

export const PreviewLabel = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
`;

export const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(107, 114, 128, 0.4) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(107, 114, 128, 0.4) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.05;
`;

export const FeaturesSection = styled.section`
  border-top: 1px solid #f3f4f6;
  padding: 5rem 0;

  html.dark & {
    border-top-color: #1f2937;
  }
`;

export const SectionContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem;

  html.dark & {
    color: #ffffff;
  }
`;

export const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin: 0;

  html.dark & {
    color: #d1d5db;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem;
`;

export const FeatureCard = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(37, 99, 235, 0.5);
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.05);
  }

  html.dark & {
    background: #1a1a1a;
    border-color: rgba(55, 65, 81, 0.5);

    &:hover {
      border-color: rgba(37, 99, 235, 0.5);
    }
  }
`;

export const FeatureIconWrap = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: rgba(37, 99, 235, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #2563eb;

  html.dark & {
    background: rgba(37, 99, 235, 0.2);
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.5rem;

  html.dark & {
    color: #ffffff;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.625;
  margin: 0;

  html.dark & {
    color: #d1d5db;
  }
`;

export const DetailsSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(to bottom, transparent, rgba(249, 250, 251, 0.5), transparent);

  html.dark & {
    background: linear-gradient(to bottom, transparent, rgba(26, 26, 26, 0.5), transparent);
  }
`;

export const DetailRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5rem;
  align-items: center;
  margin-bottom: 8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DetailText = styled.div``;

export const DetailBadge = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  margin-bottom: 1.5rem;

  html.dark & {
    background: rgba(37, 99, 235, 0.2);
  }
`;

export const DetailTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem;

  html.dark & {
    color: #ffffff;
  }
`;

export const DetailDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.75;
  margin: 0 0 2rem;

  html.dark & {
    color: #d1d5db;
  }
`;

export const DetailList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DetailListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #374151;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    display: block;
    line-height: 1.5;
  }

  html.dark & {
    color: #e5e7eb;
  }
`;

export const DetailListCheck = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background: #2563eb;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.75rem;
  line-height: 1;
`;

export const DetailVisualWrap = styled.div`
  position: relative;
`;

export const DetailVisualGlow = styled.div<{ $reverse?: boolean }>`
  position: absolute;
  inset: -1rem;
  border-radius: 1rem;
  background: ${({ $reverse }) =>
    $reverse
      ? 'linear-gradient(to left, rgba(37, 99, 235, 0.2), rgba(37, 99, 235, 0.05))'
      : 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(37, 99, 235, 0.05))'};
  filter: blur(24px);
`;

export const DetailVisualCard = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12);

  html.dark & {
    background: #1a1a1a;
    border-color: rgba(55, 65, 81, 0.5);
  }
`;

export const DetailVisualScreen = styled.div`
  width: 100%;
  height: 20rem;
  background: linear-gradient(to bottom right, #f9fafb, #f3f4f6);
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;

  html.dark & {
    background: linear-gradient(to bottom right, #0f0f0f, #151515);
    border-color: #374151;
  }
`;

export const WorkflowSection = styled.section`
  padding: 8rem 0;
`;

export const WorkflowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
`;

export const WorkflowCard = styled.div`
  text-align: center;
`;

export const WorkflowNumber = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  border-radius: 0.75rem;
  background: linear-gradient(to bottom right, #2563eb, rgba(37, 99, 235, 0.7));
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);
`;

export const WorkflowTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const WorkflowDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.625;
  color: #4b5563;

  html.dark & {
    color: #d1d5db;
  }
`;

export const CTASection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(to bottom right, #111827, #1f2937, #111827);
  position: relative;
  overflow: hidden;

  html.dark & {
    background: linear-gradient(to bottom right, #0a0a0a, #000000, #0a0a0a);
  }
`;

export const CTAGlowLeft = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  width: 24rem;
  height: 24rem;
  background: rgba(37, 99, 235, 0.2);
  border-radius: 9999px;
  filter: blur(64px);
`;

export const CTAGlowRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 25%;
  width: 24rem;
  height: 24rem;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 9999px;
  filter: blur(64px);
`;

export const CTAContent = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export const CTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1.5rem;
`;

export const CTADescription = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  margin: 0 0 2.5rem;
`;

export const CTAButton = styled(Button)`
  background: #ffffff;
  color: #000000;
  height: 3rem;
  padding: 0 2rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  cursor: default;

  &:hover {
    background: #e5e7eb;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
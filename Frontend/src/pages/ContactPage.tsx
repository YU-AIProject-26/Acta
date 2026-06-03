import {
  PageWrapper,
  PageInner,
  HeaderSection,
  Title,
  Description,
  Meta,
  ContentGrid,
  MainCard,
  SideCard,
  Section,
  SectionTitle,
  Paragraph,
  InfoLabel,
  InfoValue,
  Form,
  FieldGroup,
  Label,
  Input,
  Select,
  Textarea,
  CheckboxRow,
  Checkbox,
  CheckboxText,
  PrimaryButton,
  BottomSection,
  BackLink,
} from './InfoPage.styles';

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageInner>
        <HeaderSection>
          <Title>문의</Title>
          <Description>
            Acta 프로젝트에 대한 기능 문의, 오류 제보, 제안 사항은 아래 양식을
            통해 남길 수 있습니다.
          </Description>
          <Meta>문의 내용을 남겨주시면 확인 후 안내드릴 수 있도록 준비하고 있습니다.</Meta>
        </HeaderSection>

        <ContentGrid>
          <MainCard>
            <Section>
              <SectionTitle>문의 남기기</SectionTitle>
              <Form>
                <FieldGroup>
                  <Label htmlFor = "name">이름 (선택)</Label>
                  <Input id = "name" type = "text" placeholder = "이름을 입력해주세요" />
                </FieldGroup>

                <FieldGroup>
                  <Label htmlFor = "email">이메일</Label>
                  <Input
                    id = "email"
                    type = "email"
                    placeholder = "답변 받을 이메일을 입력해주세요"
                  />
                </FieldGroup>

                <FieldGroup>
                  <Label htmlFor = "category">문의 유형</Label>
                  <Select id = "category" defaultValue="">
                    <option value = "" disabled>
                      문의 유형을 선택해주세요
                    </option>
                    <option value = "service">서비스 이용 문의</option>
                    <option value = "bug">오류 및 버그 제보</option>
                    <option value = "proposal">기능 제안</option>
                    <option value = "other">기타</option>
                  </Select>
                </FieldGroup>

                <FieldGroup>
                  <Label htmlFor = "message">문의 내용</Label>
                  <Textarea
                    id = "message"
                    placeholder = "문의 내용을 자세히 작성해주세요"
                  />
                </FieldGroup>

                <CheckboxRow htmlFor = "contact-agree">
                  <Checkbox id = "contact-agree" type = "checkbox" />
                  <CheckboxText>
                    문의 응답을 위해 필요한 최소한의 정보 수집 및 이용에
                    동의합니다.
                  </CheckboxText>
                </CheckboxRow>

                <PrimaryButton type = "button">문의 보내기</PrimaryButton>
              </Form>
            </Section>

            <Section>
                <SectionTitle>안내</SectionTitle>
                <Paragraph>
                    서비스 이용 중 궁금한 점이나 제안 사항이 있다면 내용을 자세히 남겨주세요.
                </Paragraph>
            </Section>
          </MainCard>

          <SideCard>
            <InfoLabel>문의 가능 항목</InfoLabel>
            <InfoValue>
                서비스 이용 방법, 기능 제안, UI/UX 피드백, 오류 제보, 프로젝트 관련
                일반 문의를 남길 수 있습니다.
            </InfoValue>

            <InfoLabel>답변 안내</InfoLabel>
            <InfoValue>
                문의 내용은 입력한 이메일을 기준으로 확인 및 답변이 진행됩니다.
                프로젝트 데모 단계에서는 실제 응답이 즉시 제공되지 않을 수 있습니다.
            </InfoValue>

            <InfoLabel>개인정보 안내</InfoLabel>
            <InfoValue>
                문의 접수 과정에서는 답변을 위해 필요한 최소한의 정보만 입력받는 것을
                원칙으로 합니다. 자세한 내용은 개인정보처리방침을 참고해주세요.
            </InfoValue>

            <InfoLabel>추가 안내</InfoLabel>
            <InfoValue>
                오류 제보의 경우 사용 환경과 함께 증상을 구체적으로 작성해주시면 문제를
                확인하는 데 도움이 됩니다.
            </InfoValue>
            </SideCard>
        </ContentGrid>

        <BottomSection>
          <BackLink to = "/landing">랜딩페이지로 돌아가기</BackLink>
        </BottomSection>
      </PageInner>
    </PageWrapper>
  );
}
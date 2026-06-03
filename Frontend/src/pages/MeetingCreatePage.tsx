import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  Mic,
  //MicOff,
  ChevronRight,
  FileAudio,
  CheckCircle,
  XCircle,
  Loader2,
  X,
  Pause,
  Square,
  Trash2,
  Play,
} from "lucide-react";
import { createMeeting } from "../api/meetings_api";
import {
  PageWrapper,
  Inner,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbCurrent,
  PageTitle,
  MainCard,
  Section,
  SectionTitle,
  UploadArea,
  HiddenInput,
  UploadContent,
  UploadTitle,
  UploadDescription,
  ErrorText,
  SelectedFileCloseButton,
  DividerRow,
  DividerLine,
  DividerText,
  RecordingRow,
  PrimaryButton,
  //DangerButton,
  RecordingStatus,
  RecordingDot,
  RecordingTime,
  RecordingText,
  RecordingControlCard,
  WaveformBox,
  WaveBar,
  RecordingActionRow,
  IconCircleButton,
  FormSection,
  FormGroup,
  Label,
  TextInput,
  SelectWrapper,
  SelectElement,
  StatusCard,
  StatusRow,
  StatusContent,
  StatusTitle,
  StatusDescription,
  ProgressTrack,
  ProgressBar,
  ActionRow,
  SecondaryButton,
} from "./MeetingCreatePage.styles";

type UploadState = "idle" | "uploading" | "analyzing" | "success" | "error";
type RecordingUiState = "idle" | "recording" | "paused" | "stopped";

const MAX_FILE_SIZE = 1024 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["mp3", "wav", "m4a", "aac"];

const waveformHeightsRecording = [
  20, 34, 18, 42, 26, 48, 22, 38, 16, 44, 28, 36, 20, 40, 24, 32,
];
const waveformHeightsPaused = [
  18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
];

export default function MeetingCreatePage() {
  const navigate = useNavigate();
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [recordingUiState, setRecordingUiState] =
    useState<RecordingUiState>("idle");
  const [recordingTime, setRecordingTime] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [meetingAt, setMeetingAt] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [participantCount, setParticipantCount] = useState(1);
  const [tags, setTags] = useState("");
  const [folder, setFolder] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasSelectedFile = !!selectedFile;
  const isRecording =
    recordingUiState === "recording" || recordingUiState === "paused";
  const isUploadDisabled = isRecording;
  const isRecordingDisabled = hasSelectedFile;
  const waveformHeights =
    recordingUiState === "paused"
      ? waveformHeightsPaused
      : waveformHeightsRecording;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (recordingUiState === "recording") {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [recordingUiState]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const validateAudioFile = (file: File) => {
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return "지원하지 않는 파일 형식입니다. MP3, WAV, M4A, AAC 파일만 업로드할 수 있습니다.";
    }

    if (file.size > MAX_FILE_SIZE) {
      return "파일 크기가 너무 큽니다. 최대 1GB까지 업로드할 수 있습니다.";
    }

    return "";
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setTitle("");
    setDescription("");
    setMeetingAt("");
    setDurationMinutes(0);
    setParticipantCount(1);
    setTags("");
    setFolder("");
    setFileError("");
  };

  const applySelectedFile = (file: File) => {
    const errorMessage = validateAudioFile(file);

    if (errorMessage) {
      setSelectedFile(null);
      setTitle("");
      setFileError(errorMessage);
      return;
    }

    setFileError("");
    setSelectedFile(file);
    setTitle(file.name.replace(/\.[^/.]+$/, ""));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isUploadDisabled) return;
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (isUploadDisabled) {
      setFileError(
        "녹음 중에는 파일을 업로드할 수 없습니다. 먼저 녹음을 중지해주세요.",
      );
      return;
    }

    const file = e.dataTransfer.files[0];
    if (!file) return;

    applySelectedFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUploadDisabled) {
      setFileError(
        "녹음 중에는 파일을 업로드할 수 없습니다. 먼저 녹음을 중지해주세요.",
      );
      e.target.value = "";
      return;
    }

    const file = e.target.files?.[0];
    if (!file) return;

    applySelectedFile(file);
    e.target.value = "";
  };

  const handleUpload = async () => {
    if (!selectedFile && recordingUiState === "idle") return;

    setUploadState("uploading");
    setFileError("");

    const formData = new FormData();
    formData.append("title", title.trim() || "회의 제목 없음");
    formData.append(
      "description",
      description.trim() || "회의 설명이 없습니다.",
    );
    formData.append(
      "meetingAt",
      meetingAt ? new Date(meetingAt).toISOString() : new Date().toISOString(),
    );
    formData.append(
      "durationMinutes",
      String(
        durationMinutes > 0
          ? durationMinutes
          : Math.max(1, Math.ceil(recordingTime / 60)),
      ),
    );
    formData.append("participantCount", String(Math.max(1, participantCount)));
    formData.append("folderName", folder || "기본");

    tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
      .forEach((tag) => formData.append("tags", tag));

    if (selectedFile) {
      formData.append("audioFile", selectedFile);
    } else {
      formData.append(
        "audioFile",
        new File([new Blob(["dummy audio content"])], "recording.wav", {
          type: "audio/wav",
        }),
      );
    }

    try {
      const createdMeeting = await createMeeting(formData);
      setUploadState("analyzing");
      console.log(createdMeeting);
      console.log(createdMeeting.id);

      setTimeout(() => {
        setUploadState("success");

        setTimeout(() => {
          navigate(`/meetings/${createdMeeting.id}`);
        }, 1500);
      }, 1500);
    } catch (error) {
      console.error("회의 생성 실패:", error);
      setUploadState("error");
      setFileError("회의 업로드에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleStartRecording = () => {
    if (hasSelectedFile) {
      setFileError(
        "파일이 선택된 상태에서는 녹음을 시작할 수 없습니다. 파일 선택을 해제하거나 업로드를 진행해주세요.",
      );
      return;
    }

    setFileError("");
    setRecordingTime(0);
    setRecordingUiState("recording");
  };

  const handlePauseRecording = () => {
    setRecordingUiState("paused");
  };

  const handleResumeRecording = () => {
    setRecordingUiState("recording");
  };

  const handleStopRecording = () => {
    setRecordingUiState("stopped");
  };

  const handleCancelRecording = () => {
    setRecordingUiState("idle");
    setRecordingTime(0);
    setFileError("");
  };

  return (
    <PageWrapper>
      <Inner>
        <Breadcrumb>
          <BreadcrumbLink to="/meetings">내 회의</BreadcrumbLink>
          <ChevronRight className="breadcrumb-icon" />
          <BreadcrumbCurrent>회의 생성</BreadcrumbCurrent>
        </Breadcrumb>

        <PageTitle>회의 생성</PageTitle>

        <MainCard>
          <Section>
            <SectionTitle>음성 파일 업로드</SectionTitle>

            <UploadArea
              $dragging={isDragging}
              $selected={!!selectedFile}
              $disabled={isUploadDisabled}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => {
                if (isUploadDisabled) {
                  setFileError(
                    "녹음 중에는 파일을 업로드할 수 없습니다. 먼저 녹음을 중지해주세요.",
                  );
                  return;
                }

                fileInputRef.current?.click();
              }}
            >
              <HiddenInput
                ref={fileInputRef}
                type="file"
                accept=".mp3,.wav,.m4a,.aac,audio/*"
                onChange={handleFileSelect}
              />

              {selectedFile && (
                <SelectedFileCloseButton
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSelectedFile();
                  }}
                  aria-label="선택 파일 해제"
                >
                  <X className="close-icon" />
                </SelectedFileCloseButton>
              )}

              <UploadContent>
                {selectedFile ? (
                  <>
                    <FileAudio className="upload-main-icon selected" />
                    <UploadTitle>{selectedFile.name}</UploadTitle>
                    <UploadDescription>
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </UploadDescription>
                  </>
                ) : (
                  <>
                    <Upload className="upload-main-icon" />
                    <UploadTitle>
                      음성 파일을 드래그하거나 클릭하여 업로드하세요
                    </UploadTitle>
                    <UploadDescription>
                      지원 형식: MP3, WAV, M4A, AAC (최대 1GB)
                    </UploadDescription>
                  </>
                )}
              </UploadContent>
            </UploadArea>

            {isRecording && (
              <ErrorText>녹음 중에는 파일 업로드를 할 수 없습니다.</ErrorText>
            )}

            {hasSelectedFile && !isRecording && (
              <ErrorText>
                파일이 선택된 상태에서는 녹음을 시작할 수 없습니다.
              </ErrorText>
            )}

            {fileError && <ErrorText>{fileError}</ErrorText>}
          </Section>

          <DividerRow>
            <DividerLine />
            <DividerText>또는</DividerText>
            <DividerLine />
          </DividerRow>

          <Section>
            <SectionTitle>실시간 녹음</SectionTitle>

            {recordingUiState === "idle" ? (
              <RecordingRow>
                <PrimaryButton
                  type="button"
                  onClick={handleStartRecording}
                  disabled={isRecordingDisabled}
                >
                  <Mic className="button-icon" />
                  녹음 시작
                </PrimaryButton>
              </RecordingRow>
            ) : (
              <>
                <RecordingRow>
                  <RecordingStatus>
                    <div>
                      <RecordingDot />
                    </div>
                    <RecordingTime>{formatTime(recordingTime)}</RecordingTime>
                    <RecordingText>녹음 중...</RecordingText>
                  </RecordingStatus>
                </RecordingRow>

                <RecordingControlCard>
                  <WaveformBox>
                    {waveformHeights.map((height, index) => (
                      <WaveBar
                        key={index}
                        $height={height}
                        $paused={recordingUiState === "paused"}
                        $delay={index * 0.08}
                      />
                    ))}
                  </WaveformBox>

                  <RecordingActionRow>
                    {recordingUiState === "recording" ? (
                      <IconCircleButton
                        type="button"
                        title="일시정지"
                        onClick={handlePauseRecording}
                      >
                        <Pause className="control-icon" />
                      </IconCircleButton>
                    ) : (
                      <IconCircleButton
                        type="button"
                        title="다시 시작"
                        onClick={handleResumeRecording}
                      >
                        <Play className="control-icon" />
                      </IconCircleButton>
                    )}

                    <IconCircleButton
                      type="button"
                      title="종료"
                      onClick={handleStopRecording}
                    >
                      <Square className="control-icon" />
                    </IconCircleButton>

                    <IconCircleButton
                      type="button"
                      $danger
                      title="취소"
                      onClick={handleCancelRecording}
                    >
                      <Trash2 className="control-icon" />
                    </IconCircleButton>
                  </RecordingActionRow>
                </RecordingControlCard>
              </>
            )}
          </Section>

          {(selectedFile || recordingUiState !== "idle") && (
            <FormSection>
              <SectionTitle>회의 정보</SectionTitle>

              <FormGroup>
                <Label htmlFor="meeting-title">회의 제목 *</Label>
                <TextInput
                  id="meeting-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="회의 제목을 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="meeting-folder">폴더 선택</Label>
                <SelectWrapper>
                  <SelectElement
                    id="meeting-folder"
                    value={folder}
                    onChange={(e) => setFolder(e.target.value)}
                  >
                    <option value="">폴더를 선택하세요</option>
                    <option value="work">업무</option>
                    <option value="personal">개인</option>
                    <option value="team">팀 회의</option>
                    <option value="project">프로젝트</option>
                  </SelectElement>
                </SelectWrapper>
              </FormGroup>
            </FormSection>
          )}

          {uploadState !== "idle" && (
            <StatusCard>
              {uploadState === "uploading" && (
                <StatusRow>
                  <Loader2 className="status-icon spinning accent" />
                  <StatusContent>
                    <StatusTitle>업로드 중...</StatusTitle>
                    <ProgressTrack>
                      <ProgressBar />
                    </ProgressTrack>
                  </StatusContent>
                </StatusRow>
              )}

              {uploadState === "analyzing" && (
                <StatusRow>
                  <Loader2 className="status-icon spinning accent" />
                  <StatusContent>
                    <StatusTitle>AI 분석 중...</StatusTitle>
                    <StatusDescription>
                      회의 내용을 분석하고 있습니다
                    </StatusDescription>
                  </StatusContent>
                </StatusRow>
              )}

              {uploadState === "success" && (
                <StatusRow>
                  <CheckCircle className="status-icon success" />
                  <StatusContent>
                    <StatusTitle>업로드 완료!</StatusTitle>
                    <StatusDescription>
                      회의 페이지로 이동합니다...
                    </StatusDescription>
                  </StatusContent>
                </StatusRow>
              )}

              {uploadState === "error" && (
                <StatusRow>
                  <StatusContent className="error-layout">
                    <div className="error-left">
                      <XCircle className="status-icon error" />
                      <div>
                        <StatusTitle>업로드 실패</StatusTitle>
                        <StatusDescription>
                          파일 업로드 중 오류가 발생했습니다
                        </StatusDescription>
                      </div>
                    </div>

                    <SecondaryButton
                      type="button"
                      onClick={() => setUploadState("idle")}
                    >
                      재시도
                    </SecondaryButton>
                  </StatusContent>
                </StatusRow>
              )}
            </StatusCard>
          )}

          {uploadState === "idle" && (
            <ActionRow>
              <PrimaryButton
                type="button"
                $fullWidth
                onClick={handleUpload}
                disabled={!selectedFile && recordingUiState === "idle"}
              >
                업로드 시작
              </PrimaryButton>

              <SecondaryButton
                type="button"
                $fullWidth
                onClick={() => navigate("/meetings")}
              >
                취소
              </SecondaryButton>
            </ActionRow>
          )}
        </MainCard>
      </Inner>
    </PageWrapper>
  );
}

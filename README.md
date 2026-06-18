# ACTA

> AI 기반 회의 비서 웹 서비스

## 📌 프로젝트 소개

**ACTA**는 회의 내용을 자동으로 기록, 분석, 정리하여 회의 이후 발생하는 문서화 작업의 부담을 줄이고 협업 효율을 높이기 위한 **AI 기반 회의 비서 웹 서비스**입니다.

---

## 📁 프로젝트 구조

본 저장소는 프론트엔드와 백엔드가 통합된 모노레포(Monorepo) 구조로 구성되어 있습니다.

```text
root/
├── frontend/                 # React 기반 프론트엔드
└── backend/
    ├── spring-server/        # Spring Boot 기반 API 서버
    └── ai-server/            # FastAPI 기반 AI 분석 서버
```

---

## ⚙️ 개발 환경

### 💻 Frontend

| 항목             | 버전                  | 비고      |
| ---------------- | --------------------- | --------- |
| Framework        | React 19              | Vite 기반 |
| Build Tool       | Vite 7                |           |
| Language         | TypeScript 5.8        |           |
| Styling          | Styled-Components 6.1 |           |
| State Management | Jotai 2.15            |           |
| API Client       | Axios 1.12            |           |
| Package Manager  | npm                   |           |

### 🖥️ Backend

| 항목        | 버전                               | 비고                      |
| ----------- | ---------------------------------- | ------------------------- |
| Java        | 17                                 | 프로젝트 소스 컴파일 대상 |
| JDK         | 22.0.2 (Temurin)                   | 로컬 실행 환경            |
| Spring Boot | 3.5.6                              |                           |
| Gradle      | 8.14.3                             | Wrapper 사용              |
| Database    | MySQL 8.4.6                        |                           |
| AI Server   | FastAPI                            | Python 기반               |
| AI Stack    | Transformers, OpenAI API, Pyannote | 음성 분석 및 화자 분리    |

---

## 🚀 실행 방법

### 1. 저장소 복제

```bash
git clone https://github.com/YU-AIProject-26/Acta.git
cd Acta
```

---

### 2. Frontend 실행

```bash
# 프론트엔드 디렉토리 이동
cd frontend

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

기본 실행 주소:

```text
http://localhost:5173
```

---

### 3. Spring Boot 서버 실행

```bash
# Spring Boot 서버 디렉토리 이동
cd backend/spring-server

# 의존성 다운로드 및 빌드
./gradlew clean build

# 서버 실행
./gradlew bootRun
```

기본 실행 주소:

```text
http://localhost:8080
```

---

### 4. AI 서버 실행 (FastAPI)

```bash
# AI 서버 디렉토리 이동
cd backend/ai-server

# 가상환경 생성
python -m venv venv
```

#### 가상환경 활성화

**macOS / Linux**

```bash
source venv/bin/activate
```

**Windows**

```bash
venv\Scripts\activate
```

#### 패키지 설치 및 서버 실행

```bash
# 의존성 설치
pip install -r requirements.txt

# FastAPI 서버 실행
uvicorn main:app --reload
```

기본 실행 주소:

```text
http://localhost:8000
```

---

## 🛠️ 기술 스택

### Frontend

- React
- TypeScript
- Vite
- Styled-Components
- Jotai
- Axios

### Backend

- Spring Boot
- Java
- MySQL
- FastAPI
- Python

### AI

- OpenAI API
- Transformers
- Pyannote Audio
- Whisper

```

```

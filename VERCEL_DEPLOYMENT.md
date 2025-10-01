# Vercel 배포 가이드

이 문서는 브이원정보통신 홈페이지를 Vercel에 배포하는 방법을 설명합니다.

## 📋 사전 준비사항

1. **Vercel 계정 생성**
   - https://vercel.com 에 접속하여 계정 생성
   - GitHub 계정으로 로그인 권장

2. **GitHub 저장소**
   - 이 프로젝트가 GitHub에 푸시되어 있어야 합니다
   - 현재 저장소: `v1-homepage`

3. **환경변수 준비**
   - Neon Database URL
   - 기타 필요한 API 키들

---

## 🚀 배포 방법

### 방법 1: Vercel CLI 사용 (추천)

#### 1단계: Vercel CLI 설치
```bash
npm install -g vercel
```

#### 2단계: 로그인
```bash
vercel login
```

#### 3단계: 프로젝트 초기화
프로젝트 루트 디렉토리에서:
```bash
vercel
```

질문에 다음과 같이 답변:
- **Set up and deploy?** → Yes
- **Which scope?** → 본인의 계정 선택
- **Link to existing project?** → No
- **Project name?** → `v1-homepage` (또는 원하는 이름)
- **In which directory is your code located?** → `./`

#### 4단계: 환경변수 설정
Vercel 대시보드에서 또는 CLI로:
```bash
vercel env add DATABASE_URL
```

입력 시 Neon Database 연결 문자열 입력:
```
postgresql://user:password@host/database?sslmode=require
```

#### 5단계: 프로덕션 배포
```bash
vercel --prod
```

---

### 방법 2: Vercel 대시보드 사용

#### 1단계: GitHub 연동
1. https://vercel.com/new 접속
2. **Import Git Repository** 클릭
3. GitHub 저장소 `v1-homepage` 선택

#### 2단계: 프로젝트 설정
```
Framework Preset: Vite
Build Command: npm run vercel-build
Output Directory: dist/public
Install Command: npm install
```

#### 3단계: 환경변수 설정
**Environment Variables** 섹션에서:
- **Name**: `DATABASE_URL`
- **Value**: `postgresql://user:password@host/database?sslmode=require`
- **Environment**: Production, Preview, Development 모두 체크

#### 4단계: 배포
**Deploy** 버튼 클릭

---

## 🔧 필수 환경변수

Vercel 대시보드 → Settings → Environment Variables에서 설정:

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `DATABASE_URL` | Neon PostgreSQL 연결 문자열 | `postgresql://...` |
| `NODE_ENV` | 환경 (자동 설정됨) | `production` |

---

## 🔍 배포 확인

배포가 완료되면 Vercel이 자동으로 URL을 생성합니다:
- **프로덕션**: `https://v1-homepage.vercel.app`
- **프리뷰**: `https://v1-homepage-xxx.vercel.app` (PR마다 자동 생성)

### 테스트 체크리스트
- [ ] 홈페이지가 정상적으로 로드되는가?
- [ ] 모든 이미지가 표시되는가?
- [ ] 네비게이션이 작동하는가?
- [ ] 블로그 RSS 피드가 로드되는가?
- [ ] 상담신청 폼이 작동하는가?
- [ ] 모바일에서도 잘 보이는가?

---

## 🌐 커스텀 도메인 설정

### Vercel에서 도메인 연결

1. **Vercel 대시보드**
   - 프로젝트 선택 → Settings → Domains

2. **도메인 추가**
   ```
   예: v1info.com 또는 www.v1info.com
   ```

3. **DNS 설정**
   도메인 등록업체(가비아, 후이즈 등)에서:
   
   **A 레코드 방식:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **CNAME 방식 (www):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **확인**
   - DNS 전파는 최대 48시간 소요 (보통 1-2시간)
   - https://your-domain.com 으로 접속 테스트

---

## 🔄 자동 배포 (CI/CD)

GitHub와 연동하면 자동 배포됩니다:

- **main 브랜치 push** → 프로덕션 자동 배포
- **다른 브랜치 push** → 프리뷰 배포 생성
- **Pull Request** → 자동 프리뷰 URL 생성

---

## 🐛 문제 해결

### 1. 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build
```

**일반적인 문제:**
- TypeScript 에러 → `npm run check`로 확인
- 의존성 문제 → `npm install` 다시 실행
- 환경변수 누락 → Vercel에서 확인

### 2. API 라우트 404 에러
- `vercel.json`의 routes 설정 확인
- 서버 코드가 제대로 빌드되었는지 확인

### 3. 이미지 로딩 실패
- `client/public/images/` 폴더 확인
- 이미지 경로가 절대 경로인지 확인

### 4. 데이터베이스 연결 실패
- `DATABASE_URL` 환경변수 확인
- Neon DB가 활성 상태인지 확인
- SSL 모드 (`sslmode=require`) 포함 여부 확인

---

## 📊 성능 모니터링

### Vercel Analytics
1. 대시보드 → Analytics 탭
2. 페이지 로드 시간, 방문자 수 등 확인

### Speed Insights
1. Settings → Speed Insights 활성화
2. Core Web Vitals 모니터링

---

## 💰 비용 안내

### Hobby (무료) 플랜
- ✅ 무제한 배포
- ✅ 100GB 대역폭/월
- ✅ HTTPS 자동
- ✅ 커스텀 도메인
- ⚠️ 서버리스 함수 실행 시간 제한

### Pro ($20/월) 플랜
- ✅ 팀 협업
- ✅ 1TB 대역폭/월
- ✅ 우선 지원
- ✅ 고급 분석

**이 프로젝트는 Hobby 플랜으로 충분합니다!**

---

## 📞 추가 도움

- **Vercel 문서**: https://vercel.com/docs
- **커뮤니티**: https://github.com/vercel/vercel/discussions
- **지원**: support@vercel.com

---

## ✅ 배포 완료 체크리스트

- [ ] GitHub에 최신 코드 푸시
- [ ] Vercel 계정 생성 및 로그인
- [ ] 프로젝트 import 또는 CLI로 배포
- [ ] 환경변수 설정 (DATABASE_URL)
- [ ] 배포 성공 확인
- [ ] 모든 페이지 테스트
- [ ] 커스텀 도메인 설정 (선택)
- [ ] 팀원에게 URL 공유

---

**배포 완료 후 예상 URL**: `https://v1-homepage.vercel.app` 🎉


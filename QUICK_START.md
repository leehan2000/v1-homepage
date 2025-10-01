# 🚀 Vercel 빠른 배포 가이드

## 5분만에 배포하기!

### 1️⃣ Vercel CLI 설치 (선택사항)

Windows PowerShell 또는 터미널에서:
```bash
npm install -g vercel
```

### 2️⃣ GitHub에 코드 푸시

현재 변경사항을 커밋하고 푸시:
```bash
git add .
git commit -m "Vercel 배포 준비 완료"
git push origin main
```

### 3️⃣ Vercel에서 배포

**방법 A: Vercel 웹사이트 사용 (추천 - 가장 쉬움)**

1. https://vercel.com 접속 → GitHub 계정으로 로그인
2. **"Add New..."** → **"Project"** 클릭
3. GitHub 저장소 `v1-homepage` Import
4. 다음 설정 확인:
   ```
   Framework Preset: Vite
   Build Command: npm run vercel-build
   Output Directory: dist/public
   Install Command: npm install
   ```
5. **Environment Variables** 추가:
   - Name: `DATABASE_URL`
   - Value: Neon DB 연결 문자열 입력
     ```
     postgresql://[username]:[password]@[host]/[database]?sslmode=require
     ```
6. **Deploy** 클릭!

**방법 B: CLI 사용 (빠름)**

프로젝트 디렉토리에서:
```bash
vercel login
vercel
```

질문에 답변하고 배포!

---

## ✅ 배포 후 확인사항

배포 완료 후 다음을 확인하세요:

- [ ] 홈페이지가 로드되는가?
- [ ] 이미지가 모두 표시되는가?
- [ ] 네비게이션이 작동하는가?
- [ ] 상담 폼이 작동하는가?

---

## 🔗 예상 URL

배포 완료 후 다음과 같은 URL을 받게 됩니다:
```
https://v1-homepage-xxxxx.vercel.app
```

---

## 📝 Neon Database URL 찾는 방법

1. https://console.neon.tech 로그인
2. 프로젝트 선택
3. **Connection Details** 클릭
4. **Connection String** 복사

형식:
```
postgresql://username:password@host/database?sslmode=require
```

---

## ❓ 문제 발생 시

### 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build
```

### 환경변수 문제
Vercel 대시보드 → Settings → Environment Variables에서 `DATABASE_URL` 확인

### 더 자세한 정보
`VERCEL_DEPLOYMENT.md` 파일 참고

---

**완료! 🎉**

배포가 성공하면 팀원들에게 URL을 공유하세요!


# 마이그레이션 실행 방법

## 처음 설정
```bash
# 1. PostgreSQL 서버 실행 확인
# 2. .env의 DATABASE_URL 설정
# 3. 마이그레이션 실행
npm run db:push

# 4. 시드 데이터 삽입
npm run db:seed
```

## 스키마 변경시
```bash
npm run db:migrate -- --name 변경내용설명
```

## DB 초기화 (개발용)
```bash
npm run db:reset
```

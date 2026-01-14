/**
 * 히어로 이미지 최적화 스크립트
 * 7개 히어로 이미지를 WebP로 변환하고 리사이즈합니다.
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 대상 이미지 목록 (8개)
const heroImages = [
  'U+connect.png',
  'internet.png',
  '대표번호_히어로.png',
  'business-phone-hero.png',
  'mobileinternet.png',
  'internetphone.png',
  'internetphon.png', // BusinessPhone.tsx에서 사용
  'soho_hero.png',
];

const imagesDir = join(__dirname, '../client/public/images');
const targetWidth = 1600;
const webpQuality = 70;

async function optimizeImage(filename) {
  const inputPath = join(imagesDir, filename);
  const outputPath = join(imagesDir, filename.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

  // 원본 파일 존재 확인
  if (!existsSync(inputPath)) {
    console.log(`⚠️  파일을 찾을 수 없습니다: ${filename}`);
    return false;
  }

  try {
    // 이미지 정보 가져오기
    const metadata = await sharp(inputPath).metadata();
    const originalSize = metadata.width;

    // 리사이즈 및 WebP 변환
    await sharp(inputPath)
      .resize(targetWidth, null, {
        withoutEnlargement: true, // 원본보다 크게 만들지 않음
        fit: 'inside',
      })
      .webp({ quality: webpQuality })
      .toFile(outputPath);

    // 파일 크기 비교
    const fs = await import('fs/promises');
    const originalStats = await fs.stat(inputPath);
    const webpStats = await fs.stat(outputPath);
    const reduction = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`✅ ${filename}`);
    console.log(`   원본: ${originalSize}px × ${metadata.height}px, ${(originalStats.size / 1024).toFixed(1)}KB`);
    console.log(`   WebP: ${targetWidth}px (리사이즈), ${(webpStats.size / 1024).toFixed(1)}KB (${reduction}% 감소)`);
    console.log(`   저장 위치: ${outputPath.replace(__dirname, '')}\n`);

    return true;
  } catch (error) {
    console.error(`❌ ${filename} 변환 실패:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 히어로 이미지 최적화 시작...\n');
  console.log(`대상 폴더: ${imagesDir}\n`);

  let successCount = 0;
  let failCount = 0;

  for (const filename of heroImages) {
    const success = await optimizeImage(filename);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log('\n📊 최적화 완료');
  console.log(`✅ 성공: ${successCount}개`);
  if (failCount > 0) {
    console.log(`❌ 실패: ${failCount}개`);
  }
  console.log('\n💡 원본 이미지는 유지되었습니다. WebP 파일이 생성되었습니다.');
}

main().catch(console.error);

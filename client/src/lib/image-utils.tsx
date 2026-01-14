import React from 'react';

/**
 * 이미지 최적화 유틸리티 함수
 * WebP 우선 로딩 + fallback 지원
 */

/**
 * 이미지 경로를 WebP 경로로 변환
 * @param src 원본 이미지 경로 (예: "/images/hero.png")
 * @returns WebP 경로 (예: "/images/hero.webp")
 */
export function preferWebp(src: string): string {
  return src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
}

/**
 * WebP 이미지 로딩 실패 감지를 위한 프리로더
 * background-image에 사용할 때 유용합니다.
 * 
 * @param webpSrc WebP 이미지 경로
 * @param fallbackSrc 원본 이미지 경로 (fallback)
 * @param onError WebP 로딩 실패 시 호출될 콜백
 * @returns 숨은 img 엘리먼트 (JSX)
 */
export function WebpPreloader({
  webpSrc,
  fallbackSrc,
  onError,
}: {
  webpSrc: string;
  fallbackSrc: string;
  onError: () => void;
}) {
  return (
    <img
      src={webpSrc}
      onError={onError}
      style={{ display: 'none' }}
      alt=""
      aria-hidden="true"
    />
  );
}

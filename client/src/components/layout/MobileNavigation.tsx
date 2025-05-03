import { useState } from "react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn, scrollToTop } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  // 페이지 이동과 메뉴 닫기를 동시에 처리하는 함수
  const handleLinkClick = () => {
    onClose();
    scrollToTop(0);
  };
  return (
    <div className={cn(
      "mobile-menu fixed left-0 w-full bg-white shadow-md md:hidden z-40 transform transition-transform",
      isOpen ? "translate-y-0" : "-translate-y-full"
    )}
    style={{ top: '5.5rem' }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-5.5rem)] overflow-y-auto animate-fadeIn">
        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
             onClick={handleLinkClick}>HOME</Link>
        
        <Accordion type="single" collapsible>
          {/* 브이원의 이야기 */}
          <AccordionItem value="about">
            <AccordionTrigger className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10">
              브이원의 이야기
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 space-y-1">
                <Link href="/about/story" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>시작 이야기</Link>
                <Link href="/about/partnership" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>동업 이야기</Link>
                <Link href="/about/vision" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>비전 & 미션</Link>
                <Link href="/about/ceo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>대표 인사말</Link>
                <Link href="/about/history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>연혁 (History)</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* 사람들 */}
          <AccordionItem value="people">
            <AccordionTrigger className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10">
              사람들
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 space-y-1">
                <Link href="/people/employees" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>직원 소개</Link>
                <Link href="/people/philosophy" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>일하는 철학</Link>
                <Link href="/people/stories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>현장 이야기</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* 사업분야 */}
          <AccordionItem value="services">
            <AccordionTrigger className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10">
              사업분야
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 space-y-1">
                <Link href="/services/wireless" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>무선통신</Link>
                <Link href="/services/wired" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>유선통신</Link>
                <Link href="/services/vehicle-iot" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>차량관제 / IoT</Link>
                <Link href="/services/solutions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>업종별 제안</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* 진행 사례 */}
          <AccordionItem value="cases">
            <AccordionTrigger className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10">
              진행 사례
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 space-y-1">
                <Link href="/cases/clients" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>고객사 / 도입사례</Link>
                <Link href="/cases/reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>설치 후기</Link>
                <Link href="/cases/field-stories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>현장 이야기</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* 공식 인증 / 수상 */}
          <AccordionItem value="certifications">
            <AccordionTrigger className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10">
              공식 인증 / 수상
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 space-y-1">
                <Link href="/certifications/partners" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>파트너 인증</Link>
                <Link href="/certifications/awards" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>계약서 / 상장 / 감사패 이미지</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* 소식 & 블로그 */}
          <AccordionItem value="news">
            <AccordionTrigger className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10">
              소식 & 블로그
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 space-y-1">
                <Link href="/news/content" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>정보 콘텐츠</Link>
                <Link href="/news/customer-reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>고객 후기</Link>
                <Link href="/news/daily" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>브이원 일상</Link>
                <Link href="/news/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={handleLinkClick}>블로그 바로가기</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Link href="/contact/consultation" asChild>
          <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleLinkClick}>
            상담 / 문의하기
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;

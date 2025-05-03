import { useState } from "react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <div className={cn(
      "mobile-menu fixed left-0 w-full bg-white shadow-md md:hidden z-40 transform transition-transform",
      isOpen ? "translate-y-0" : "-translate-y-full"
    )}
    style={{ top: '4rem' }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
             onClick={onClose}>HOME</Link>
        
        <Accordion type="single" collapsible>
          {/* 브이원의 이야기 */}
          <AccordionItem value="about">
            <AccordionTrigger className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10">
              브이원의 이야기
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 space-y-1">
                <Link href="/about/story" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>시작 이야기</Link>
                <Link href="/about/partnership">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>동업 이야기</a>
                </Link>
                <Link href="/about/vision">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>비전 & 미션</a>
                </Link>
                <Link href="/about/ceo">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>대표 인사말</a>
                </Link>
                <Link href="/about/history">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>연혁 (History)</a>
                </Link>
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
                <Link href="/people/employees">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>직원 소개</a>
                </Link>
                <Link href="/people/philosophy">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>일하는 철학</a>
                </Link>
                <Link href="/people/stories">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>현장 이야기</a>
                </Link>
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
                <Link href="/services/wireless">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>무선통신</a>
                </Link>
                <Link href="/services/wired">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>유선통신</a>
                </Link>
                <Link href="/services/vehicle-iot">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>차량관제 / IoT</a>
                </Link>
                <Link href="/services/solutions">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>업종별 제안</a>
                </Link>
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
                <Link href="/cases/clients">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>고객사 / 도입사례</a>
                </Link>
                <Link href="/cases/reviews">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>설치 후기</a>
                </Link>
                <Link href="/cases/field-stories">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>현장 이야기</a>
                </Link>
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
                <Link href="/certifications/partners">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>파트너 인증</a>
                </Link>
                <Link href="/certifications/awards">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>계약서 / 상장 / 감사패 이미지</a>
                </Link>
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
                <Link href="/news/content">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>정보 콘텐츠</a>
                </Link>
                <Link href="/news/customer-reviews">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>고객 후기</a>
                </Link>
                <Link href="/news/daily">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>브이원 일상</a>
                </Link>
                <Link href="/news/blog">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10" 
                     onClick={onClose}>블로그 바로가기</a>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Link href="/contact">
          <Button className="w-full bg-primary hover:bg-primary/90" onClick={onClose}>
            상담 / 문의하기
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import MobileNavigation from "./MobileNavigation";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  
  // 메뉴와 서브메뉴 스타일 정의
  const menuTriggerStyle = { fontSize: '1.05rem' };
  const subMenuUlStyle = "flex flex-row space-x-4 p-3 min-w-[580px]";
  const subMenuLinkStyle = "block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm";
  
  // 모든 서브메뉴 링크에 스타일 적용 함수
  const applySubMenuStyle = (path: string, isActive: boolean) => {
    return cn(
      subMenuLinkStyle,
      isActive && "bg-accent/50"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location === path || location.startsWith(`${path}/`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "w-full bg-white z-50 fixed top-0 transition-shadow duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="V1 Information Communications" 
              className="h-10 md:h-11 w-auto" 
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* 브이원의 이야기 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/about") ? "bg-accent/50" : ""} style={menuTriggerStyle}>
                    브이원의 이야기
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-row space-x-6 p-4 min-w-[600px]">
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={applySubMenuStyle("/about/story", isActive("/about/story"))}
                        >
                          <Link href="/about/story">
                            시작 이야기
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={applySubMenuStyle("/about/partnership", isActive("/about/partnership"))}
                        >
                          <Link href="/about/partnership">
                            동업 이야기
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={applySubMenuStyle("/about/vision", isActive("/about/vision"))}
                        >
                          <Link href="/about/vision">
                            비전 & 미션
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={applySubMenuStyle("/about/ceo", isActive("/about/ceo"))}
                        >
                          <Link href="/about/ceo">
                            대표 인사말
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={applySubMenuStyle("/about/history", isActive("/about/history"))}
                        >
                          <Link href="/about/history">
                            연혁 (History)
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 사람들 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/people") ? "bg-accent/50" : ""} style={menuTriggerStyle}>
                    사람들
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className={subMenuUlStyle}>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/people/employees") && "bg-accent/50"
                          )}
                        >
                          <Link href="/people/employees">
                            직원 소개
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/people/philosophy") && "bg-accent/50"
                          )}
                        >
                          <Link href="/people/philosophy">
                            일하는 철학
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/people/stories") && "bg-accent/50"
                          )}
                        >
                          <Link href="/people/stories">
                            현장 이야기
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 사업분야 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/services") ? "bg-accent/50" : ""} style={menuTriggerStyle}>
                    사업분야
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className={subMenuUlStyle}>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={applySubMenuStyle("/services/wireless", isActive("/services/wireless"))}
                        >
                          <Link href="/services/wireless">
                            무선통신
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={applySubMenuStyle("/services/wired", isActive("/services/wired"))}
                        >
                          <Link href="/services/wired">
                            유선통신
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={applySubMenuStyle("/services/vehicle-iot", isActive("/services/vehicle-iot"))}
                        >
                          <Link href="/services/vehicle-iot">
                            차량관제 / IoT
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/services/solutions") && "bg-accent/50"
                          )}
                        >
                          <Link href="/services/solutions">
                            업종별 제안
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 진행 사례 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/cases") ? "bg-accent/50" : ""} style={menuTriggerStyle}>
                    진행 사례
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-row space-x-6 p-4 min-w-[550px]">
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/cases/clients") && "bg-accent/50"
                          )}
                        >
                          <Link href="/cases/clients">
                            고객사 / 도입사례
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/cases/reviews") && "bg-accent/50"
                          )}
                        >
                          <Link href="/cases/reviews">
                            설치 후기
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/cases/field-stories") && "bg-accent/50"
                          )}
                        >
                          <Link href="/cases/field-stories">
                            현장 이야기
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 공식 인증 / 수상 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/certifications") ? "bg-accent/50" : ""} style={menuTriggerStyle}>
                    공식 인증 / 수상
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-row space-x-6 p-4 min-w-[550px]">
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/certifications/partners") && "bg-accent/50"
                          )}
                        >
                          <Link href="/certifications/partners">
                            파트너 인증
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/certifications/awards") && "bg-accent/50"
                          )}
                        >
                          <Link href="/certifications/awards">
                            계약서 / 상장 / 감사패 이미지
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 소식 & 블로그 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/news") ? "bg-accent/50" : ""} style={menuTriggerStyle}>
                    소식 & 블로그
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className={subMenuUlStyle}>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/news/content") && "bg-accent/50"
                          )}
                        >
                          <Link href="/news/content">
                            정보 콘텐츠
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/news/customer-reviews") && "bg-accent/50"
                          )}
                        >
                          <Link href="/news/customer-reviews">
                            고객 후기
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/news/daily") && "bg-accent/50"
                          )}
                        >
                          <Link href="/news/daily">
                            브이원 일상
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/news/blog") && "bg-accent/50"
                          )}
                        >
                          <Link href="/news/blog">
                            블로그 바로가기
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 상담신청 */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(
                    navigationMenuTriggerStyle,
                    isActive("/contact") && "bg-accent/50",
                    "bg-primary text-white hover:bg-primary-600 hover:text-white"
                  )}>
                    <Link href="/contact">
                      상담신청
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle mobile menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
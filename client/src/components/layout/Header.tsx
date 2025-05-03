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
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const navigationMenuTriggerStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

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
          <Link href="/">
            <a className="flex items-center">
              <div className="flex items-center">
                <span className="text-primary font-bold text-2xl">V1</span>
                <span className="ml-2 text-base font-medium">INFORMATION &amp; COMMUNICATION</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* HOME */}
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle,
                      isActive("/") && "bg-accent/50"
                    )}>
                      HOME
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* 브이원의 이야기 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/about") ? "bg-accent/50" : ""}>
                    브이원의 이야기
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <Link href="/about/story">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/about/story") && "bg-accent/50"
                          )}>
                            시작 이야기
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/partnership">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/about/partnership") && "bg-accent/50"
                          )}>
                            동업 이야기
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/vision">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/about/vision") && "bg-accent/50"
                          )}>
                            비전 & 미션
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/ceo">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/about/ceo") && "bg-accent/50"
                          )}>
                            대표 인사말
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/history">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/about/history") && "bg-accent/50"
                          )}>
                            연혁 (History)
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 사람들 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/people") ? "bg-accent/50" : ""}>
                    사람들
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <Link href="/people/employees">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/people/employees") && "bg-accent/50"
                          )}>
                            직원 소개
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/people/philosophy">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/people/philosophy") && "bg-accent/50"
                          )}>
                            일하는 철학
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/people/stories">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/people/stories") && "bg-accent/50"
                          )}>
                            현장 이야기
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 사업분야 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/services") ? "bg-accent/50" : ""}>
                    사업분야
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <Link href="/services/wireless">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/services/wireless") && "bg-accent/50"
                          )}>
                            무선통신
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/wired">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/services/wired") && "bg-accent/50"
                          )}>
                            유선통신
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/vehicle-iot">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/services/vehicle-iot") && "bg-accent/50"
                          )}>
                            차량관제 / IoT
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/solutions">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/services/solutions") && "bg-accent/50"
                          )}>
                            업종별 제안
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 진행 사례 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/cases") ? "bg-accent/50" : ""}>
                    진행 사례
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <Link href="/cases/clients">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/cases/clients") && "bg-accent/50"
                          )}>
                            고객사 / 도입사례
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/cases/reviews">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/cases/reviews") && "bg-accent/50"
                          )}>
                            설치 후기
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/cases/field-stories">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/cases/field-stories") && "bg-accent/50"
                          )}>
                            현장 이야기
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 공식 인증 / 수상 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/certifications") ? "bg-accent/50" : ""}>
                    공식 인증 / 수상
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-1 p-2">
                      <li>
                        <Link href="/certifications/partners">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/certifications/partners") && "bg-accent/50"
                          )}>
                            파트너 인증
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/certifications/awards">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/certifications/awards") && "bg-accent/50"
                          )}>
                            계약서 / 상장 / 감사패 이미지
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 소식 & 블로그 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/news") ? "bg-accent/50" : ""}>
                    소식 & 블로그
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <Link href="/news/content">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/news/content") && "bg-accent/50"
                          )}>
                            정보 콘텐츠
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/news/customer-reviews">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/news/customer-reviews") && "bg-accent/50"
                          )}>
                            고객 후기
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/news/daily">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/news/daily") && "bg-accent/50"
                          )}>
                            브이원 일상
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/news/blog">
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive("/news/blog") && "bg-accent/50"
                          )}>
                            블로그 바로가기
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 상담신청 */}
                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle,
                      isActive("/contact") && "bg-accent/50",
                      "bg-primary text-white hover:bg-primary-600 hover:text-white"
                    )}>
                      상담신청
                    </NavigationMenuLink>
                  </Link>
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

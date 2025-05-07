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
import logoImage from "../../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const menuTriggerStyle = { fontSize: "1.05rem" };
  const subMenuUlStyle = "flex flex-row space-x-5 p-2 min-w-[749px] justify-center";
  const subMenuLinkStyle =
    "block select-none rounded-md p-1.5 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent/20 hover:text-primary hover:shadow-md hover:translate-y-[-2px] focus:bg-accent focus:text-accent-foreground text-base relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full before:opacity-0 hover:before:opacity-100 border border-transparent hover:border-primary/10 text-center w-full";

  const applySubMenuStyle = (path: string, isActive: boolean) =>
    cn(subMenuLinkStyle, isActive && "bg-accent/50");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    location === path || location.startsWith(`${path}/`);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "w-full bg-white/95 backdrop-blur-sm z-50 fixed top-0 transition-all duration-300",
        scrolled ? "shadow-lg py-2 md:py-3 border-b border-primary/10" : "py-5 md:py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 group">
            <div className="logo-wrapper transition-all duration-300 group-hover:shadow-lg group-active:scale-95">
              <img
                src={logoImage}
                alt="V1 Information Communications"
                className="h-14 md:h-16 lg:h-20 w-auto group-hover:brightness-110"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 animate-slideInTop" style={{ animationDelay: "0.3s" }}>
            <NavigationMenu>
              <NavigationMenuList>
                {/* 브이원의 이야기 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/about") ? "bg-accent/50" : ""} style={menuTriggerStyle}>
                    브이원의 이야기
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className={subMenuUlStyle}>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/about/story", isActive("/about/story"))}>
                          <Link href="/about/story">시작 이야기</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/about/partnership", isActive("/about/partnership"))}>
                          <Link href="/about/partnership">동업 이야기</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/about/vision", isActive("/about/vision"))}>
                          <Link href="/about/vision">비전 & 미션</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/about/ceo", isActive("/about/ceo"))}>
                          <Link href="/about/ceo">대표 인사말</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/about/history", isActive("/about/history"))}>
                          <Link href="/about/history">연혁 (History)</Link>
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
                        <NavigationMenuLink asChild className={applySubMenuStyle("/people/employees", isActive("/people/employees"))}>
                          <Link href="/people/employees">People</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/people/philosophy", isActive("/people/philosophy"))}>
                          <Link href="/people/philosophy">일하는 철학</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/people/stories", isActive("/people/stories"))}>
                          <Link href="/people/stories">현장 이야기</Link>
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
                        <NavigationMenuLink asChild className={applySubMenuStyle("/services/wireless", isActive("/services/wireless"))}>
                          <Link href="/services/wireless">무선통신</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/services/wired", isActive("/services/wired"))}>
                          <Link href="/services/wired">유선통신</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/services/vehicle-iot", isActive("/services/vehicle-iot"))}>
                          <Link href="/services/vehicle-iot">차량관제 / IoT</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/services/solutions", isActive("/services/solutions"))}>
                          <Link href="/services/solutions">업종별 제안</Link>
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
                    <ul className={subMenuUlStyle}>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/cases/clients", isActive("/cases/clients"))}>
                          <Link href="/cases/clients">고객사 / 도입사례</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/cases/reviews", isActive("/cases/reviews"))}>
                          <Link href="/cases/reviews">설치 후기</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 공식 인증 / 수상 - 파트너 인증 제거됨 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/certifications") ? "bg-accent/50" : ""} style={menuTriggerStyle}>
                    공식 인증 / 수상
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className={subMenuUlStyle}>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/certifications/awards", isActive("/certifications/awards"))}>
                          <Link href="/certifications/awards">상장 / 감사패</Link>
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
                        <NavigationMenuLink asChild className={applySubMenuStyle("/news/daily", isActive("/news/daily"))}>
                          <Link href="/news/daily">브이원 일상</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild className={applySubMenuStyle("/news/blog", isActive("/news/blog"))}>
                          <Link href="/news/blog">블로그</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 상담신청 */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle,
                      isActive("/contact") && "bg-accent/50",
                      "bg-primary text-white hover:bg-primary-600 hover:text-white hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] relative overflow-hidden before:absolute before:w-12 before:h-full before:top-0 before:-left-10 before:transform before:skew-x-[30deg] before:bg-white/10 hover:before:animate-shine"
                    )}
                  >
                    <Link href="/contact">상담신청</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
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

      <MobileNavigation isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
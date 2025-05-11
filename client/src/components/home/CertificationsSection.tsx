const CertificationsSection = () => {
  const partners = [
    {
      name: "LGU+",
      logo: "/images/LG_U+_CI.svg.png"
    },
    {
      name: "에스원",
      logo: "/images/s1.png"
    },
    {
      name: "메가커피",
      logo: "/images/mega.png"
    },
    {
      name: "한살림",
      logo: "/images/hansalim.png"
    },
    {
      name: "메뉴잇",
      logo: "/images/menuit.png"    
    },
    {
      name: "퍼니랜드",
      logo: "/images/funni.png"
    }
  ];

  return (
    <section className="py-16 bg-lggray border-b border-lgborder">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lgtext mb-6 relative inline-block">
            공식 인증 & 파트너십
            <div className="h-1 w-1/2 bg-lgred mt-3 mx-auto"></div>
          </h2>
          <p className="text-lg text-lgtext_light max-w-3xl mx-auto leading-relaxed">
            브이원정보통신은 다양한 기관과 기업으로부터 인정받은 공식 파트너입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border-t-2 border-lgred grayscale hover:grayscale-0 transition-all duration-300 hover:-translate-y-1">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

const CertificationsSection = () => {
  const partners = [
    {
      name: "KT Corporation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/KT_Corporation_logo.svg/1200px-KT_Corporation_logo.svg.png"
    },
    {
      name: "SK Telecom",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SK_Telecom_Logo.svg/1200px-SK_Telecom_Logo.svg.png"
    },
    {
      name: "LG U+",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_U%2B_logo.svg/1200px-LG_U%2B_logo.svg.png"
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Cisco_logo.svg/1200px-Cisco_logo.svg.png"
    },
    {
      name: "Ubiquiti",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Ubiquiti_Inc_logo.svg"
    },
    {
      name: "Samsung Electronics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Samsung_Electronics_logo.svg/1280px-Samsung_Electronics_logo.svg.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">공식 인증 & 파트너십</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            브이원정보통신은 다양한 기관과 기업으로부터 인정받은 공식 파트너입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
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

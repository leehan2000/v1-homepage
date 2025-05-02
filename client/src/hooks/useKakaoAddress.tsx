import { useState, useEffect } from 'react';

declare global {
  interface Window {
    daum: any;
  }
}

export const useKakaoAddress = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Kakao address search script if not already loaded
    if (!document.getElementById('daum-postcode-script')) {
      const script = document.createElement('script');
      script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.id = 'daum-postcode-script';
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }

    return () => {
      // Clean up is not needed because we want to keep the script loaded
    };
  }, []);

  const openSearchAddress = (callback: (address: string) => void) => {
    if (!isScriptLoaded) {
      console.warn('Kakao address search script not loaded yet');
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data: any) => {
        let fullAddress = data.roadAddress || data.jibunAddress;
        
        // For some addresses, there are extra details that can be included
        if (data.buildingName && !fullAddress.includes(data.buildingName)) {
          fullAddress += ` (${data.buildingName})`;
        }
        
        callback(fullAddress);
      }
    }).open();
  };

  return { openSearchAddress, isScriptLoaded };
};

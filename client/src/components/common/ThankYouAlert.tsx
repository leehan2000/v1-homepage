import { createContext, useState, useContext, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle } from "lucide-react";

interface ThankYouContextType {
  showThankYou: () => void;
  hideThankYou: () => void;
}

const ThankYouContext = createContext<ThankYouContextType | undefined>(undefined);

export const ThankYouProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const showThankYou = () => {
    setVisible(true);
    
    // Auto scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  const hideThankYou = () => {
    setVisible(false);
  };

  return (
    <ThankYouContext.Provider value={{ showThankYou, hideThankYou }}>
      <ThankYouContextValues.Provider value={visible}>
        {children}
      </ThankYouContextValues.Provider>
    </ThankYouContext.Provider>
  );
};

const ThankYouContextValues = createContext<boolean>(false);

export const useThankYou = () => {
  const context = useContext(ThankYouContext);
  if (context === undefined) {
    throw new Error("useThankYou must be used within a ThankYouProvider");
  }
  return context;
};

export const useThankYouVisible = () => {
  const context = useContext(ThankYouContextValues);
  return context;
};

const ThankYouAlert = () => {
  const isVisible = useThankYouVisible();
  const { hideThankYou } = useThankYou();

  return (
    <div
      className={cn(
        "thank-you-alert fixed top-0 left-0 w-full bg-green-100 text-green-800 px-4 py-3 shadow-md z-50",
        isVisible ? "show" : ""
      )}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          <p>상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.</p>
        </div>
        <button
          onClick={hideThankYou}
          className="text-green-800 hover:text-green-900"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ThankYouAlert;

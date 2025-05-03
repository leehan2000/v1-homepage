import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function formatPhoneNumber(phoneNumber: string): string {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Check length to determine format
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
  }
  
  // Return as is if format doesn't match
  return phoneNumber;
}

export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'wireless': 'wifi',
    'wired': 'network-wired',
    'vehicle-iot': 'car',
    'solutions': 'building',
    'default': 'signal'
  };

  return icons[category] || icons.default;
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhoneNumber(phone: string): boolean {
  const re = /^[0-9]{2,3}-?[0-9]{3,4}-?[0-9]{4}$/;
  return re.test(phone);
}

export function scrollToTop(offset: number = 0): void {
  window.scrollTo({
    top: offset,
    behavior: 'instant'
  });
}

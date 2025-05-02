import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  address: string;
  addressDetail?: string;
  service: string;
  message?: string;
  terms: boolean;
}

export const useGoogleSheets = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const submitForm = async (data: FormData): Promise<void> => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Format data for submission
      const fullAddress = data.addressDetail 
        ? `${data.address}, ${data.addressDetail}` 
        : data.address;

      const formData = {
        name: data.name,
        phone: data.phone,
        address: fullAddress,
        service: data.service,
        message: data.message || '',
        timestamp: new Date().toISOString()
      };

      // Make POST request to the server endpoint which will handle Google Sheets integration
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitting(false);
      return Promise.resolve();
      
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      return Promise.reject(error);
    }
  };

  return {
    submitForm,
    isSubmitting,
    error
  };
};

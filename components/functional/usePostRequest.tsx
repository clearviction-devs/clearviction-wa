import { useState } from 'react';

const usePostRequest = (url: any) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const makeRequest = async (requestBody: any) => {
    setIsSuccess(false);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setErrorMessage(null);
        setIsSuccess(true);
        return;
      }

      const errorText = await response.text();
      setErrorMessage(`Server error: ${errorText}`);
    } catch (error: unknown) {
      setIsSuccess(false);
      if (error instanceof Error) {
        setErrorMessage(`Network error: ${error.message}`);
        return;
      }
      setErrorMessage('An unknown error occurred');
    }
  };

  return {
    makeRequest,
    errorMessage,
    isSuccess,
  };
};

export default usePostRequest;

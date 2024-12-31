import React, { useState } from 'react';

const SignNow: React.FC = () => {
  // const [token, setToken] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);

  const copyTemplate = async (templateId: string, documentName: string) => {
    try {
      const response = await fetch('/api/signNowAccessTokenApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ templateId, documentName }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Template Copied Successfully:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Call this function with appropriate parameters
  copyTemplate('your-template-id', 'New Document Name');
  

  return (
    <div>
      <h1>Sign Now</h1>
      <p>This is the Sign Now page.</p>
      <button onClick={() => copyTemplate('abc1d8bd38c14630a537ba88fd9c7153abc81220', 'New PURCHASE AGREEMENT')}>
        Copy Template
      </button>
    </div>
  );
};

export default SignNow;

import React, { useState } from 'react';

const SignNow: React.FC = () => {

  // const [documentId, setDocumentId] = useState<string>('');
  const [fields, setFields] = useState<
    { field_name: string; prefilled_text: string }[]
  >([
    { field_name: 'pricePerShare', prefilled_text: '$10' },
  ]);


  const copyTemplate = async (templateId: string, documentName: string, fields: Array<{ field_name: string; prefilled_text: string }>) => {
    try {
      const response = await fetch('/api/signNowAccessTokenApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ templateId, documentName, fields }),
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

  const handleTestClick = () => {
    const templateId = 'abc1d8bd38c14630a537ba88fd9c7153abc81220';
    const documentName = 'New PURCHASE AGREEMENT';
    copyTemplate(templateId, documentName, fields);
  };
  

  return (
    <div>
      <h1>Sign Now</h1>
      <p>This is the Sign Now page.</p>
      <button onClick={handleTestClick}>Test</button>
    </div>
  );
};

export default SignNow;

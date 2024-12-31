// import { NextApiRequest, NextApiResponse } from 'next';

// const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
//   if (req.method === 'POST') {
//     const url = 'https://api.signnow.com/oauth2/token';
//     const credentials = 'ZDdmMjU2YjEzOWJiYTZlZDdkOTI1ZGJjYWMxZGZmOTQ6ZTkxYjZhNDYzOWY2NjZkZjMyMDYzMTM2MjJlOGEwNGE=';

//     const body = new URLSearchParams({
//       username: 'timyao.aehl@gmail.com',
//       password: 'Aehlbiya7540!',
//       grant_type: 'password',
//       scope: '*',
//       refresh_token: '',
//       code: '',
//       expiration_time: '60',
//     });

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           Authorization: `Basic ${credentials}`,
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: body.toString(),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       res.status(200).json(data);
//     } catch (error: unknown) {
//       const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
//       res.status(500).json({ error: errorMessage });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };

// export default handler;

import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const tokenUrl = 'https://api.signnow.com/oauth2/token';
    const credentials = 'ZDdmMjU2YjEzOWJiYTZlZDdkOTI1ZGJjYWMxZGZmOTQ6ZTkxYjZhNDYzOWY2NjZkZjMyMDYzMTM2MjJlOGEwNGE=';
    
    const { templateId, documentName } = req.body;

    if (!templateId || !documentName) {
      res.status(400).json({ error: 'Missing required parameters: templateId or documentName' });
      return;
    }

    const tokenBody = new URLSearchParams({
      username: 'timyao.aehl@gmail.com',
      password: 'Aehlbiya7540!',
      grant_type: 'password',
      scope: '*',
      refresh_token: '',
      code: '',
      expiration_time: '120',
    });

    try {
      // Step 1: Get Access Token
      const tokenResponse = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: tokenBody.toString(),
      });

      if (!tokenResponse.ok) {
        throw new Error(`Error fetching token: ${tokenResponse.status}`);
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      // Step 2: Use Access Token to Copy Template
      const templateCopyUrl = `https://api.signnow.com/template/${templateId}/copy`;

      const copyResponse = await fetch(templateCopyUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          document_name: documentName,
        }),
      });

      if (!copyResponse.ok) {
        throw new Error(`Error copying template: ${copyResponse.status}`);
      }

      const copyData = await copyResponse.json();
      const documentId = copyData.id;

      // Step 3: Use Document ID to Get Document Info
      const documentInfoUrl = `https://api.signnow.com/document/${documentId}`;

      const documentInfoResponse = await fetch(documentInfoUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!documentInfoResponse.ok) {
        throw new Error(`Error fetching document: ${documentInfoResponse.status}`);
      }
      const documentData = await documentInfoResponse.json();


      // Return the response from the second API call
      res.status(200).json(documentData);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;


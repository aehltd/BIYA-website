import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const tokenUrl = 'https://api.signnow.com/oauth2/token';
    const credentials = 'ZDdmMjU2YjEzOWJiYTZlZDdkOTI1ZGJjYWMxZGZmOTQ6ZTkxYjZhNDYzOWY2NjZkZjMyMDYzMTM2MjJlOGEwNGE=';

    const { templateId, documentName, fields } = req.body;

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
      const roleId1 = documentData.roles[0].id;
      const roleId2 = documentData.roles[1].id;

      // Step 4: Edit the stock price in the document

      const documentFieldsUrl = `https://api.signnow.com/v2/documents/${documentId}/prefill-texts`;

      const documentFieldsResponse = await fetch(documentFieldsUrl, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          fields: [
            {
              field_name: "pricePerShare",
              prefilled_text: `${fields[0].prefilled_text}`,
            },
          ],
        }),
      });

      if (!documentFieldsResponse.ok) {
        throw new Error(`Error fetching document: ${documentFieldsResponse.status}`);
      }

      // Step 5: Send the document for signing

      const documentSendUrl = `https://api.signnow.com/document/${documentId}/invite`;

      const documentSendResponse = await fetch(documentSendUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          document_id: `${documentId}`,
          to: [
            {
              email: "greatfuture7540@gmail.com",
              role_id: `${roleId2}`,
              role: "Recipient 1",
              order: "1",
              force_new_signature: "1",
              reassign: "0",
              decline_by_signature: "0",
              reminder: "0",
              expiration_days: "30",
              language: "en",
              subject: "You’ve got a new signature request",
              message: "Hi, this is an invite to sign a document from BIYA. Please review and sign the document.",
            },
            {
              email: "timyao.aehl@gmail.com",
              role_id: `${roleId1}`,
              role: "AEHL",
              order: "2",
              force_new_signature: "1",
              reassign: "0",
              decline_by_signature: "0",
              reminder: "0",
              expiration_days: "30",
              language: "en",
              subject: "You’ve got a new PURCHASE AGREEMENT to sign",
              message: "Hi, this is an invite to sign a document from BIYA. Please review and sign the document.",
            }
          ],
          from: "timyao.aehl@gmail.com",
          subject: "TEST!!! BIYA needs your signature",
          message: "TEST!!! BIYA invited you to sign the PURCHASE AGREEMENT"
        }),
      });

      if (!documentSendResponse.ok) {
        throw new Error(`Error fetching document: ${documentSendResponse.status}`);
      }

      // Return the response from the second API call
      res.status(200).json(documentSendResponse);
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


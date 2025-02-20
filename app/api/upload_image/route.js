import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disables automatic body parsing by Next.js
  },
};

export async function POST(req,res) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');
        const image_name = formData.get('image_name');
        if (!file) {
          return new Response('No file uploaded', { status: 400 });
        }
    
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const uploadPath = path.join(process.cwd(), '/public/product_image', image_name);
    
        // Save the file to the server
        fs.writeFileSync(uploadPath, buffer);
    
        return new Response(JSON.stringify({ message: 'File uploaded successfully' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error(error);
        return new Response('File upload failed', { status: 500 });
      }
};


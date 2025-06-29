import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  // Map your form fields to PerfexCRM lead fields
  const leadData = {
    name: data['Full Name'],
    email: data['Email'],
    phonenumber: data['Phone'],
    description: data['Message'],
    // Add more mappings if needed
  };

  // PerfexCRM API endpoint and token
  const PERFEX_API_URL = 'https://kiwipbc.co.nz/api/leads';
  const PERFEX_API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiY29udGFjdGZvcm1tYWlud2Vic2l0ZSIsIm5hbWUiOiJjcmVhdGVsZWFkZSIsIkFQSV9USU1FIjoxNzUxMTU1NTgzfQ.h2lnn8V9yn6Eqi4z32XODlbvH-KrcmxqIzlJc2h220o';

  const response = await fetch(PERFEX_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${PERFEX_API_TOKEN}`,
    },
    body: JSON.stringify(leadData),
  });

  if (response.ok) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } else {
    const error = await response.json();
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
};

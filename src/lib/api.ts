// lib/api.ts
// import { getAccessToken } from '@NextAuth/nextjs-NextAuth';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function authenticatedFetch(endpoint: string, options: RequestInit = {}) {
  const response = await fetch('/api/auth/token');
  const { accessToken } = await response.json();
  
  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      ...options.headers,
    },
  });
}

// Usage examples
export const createShortUrl = async (url: string, customAlias?: string) => {
  const response = await authenticatedFetch('/urls/shorten', {
    method: 'POST',
    body: JSON.stringify({
      target_url: url,
      custom_alias: customAlias
    }),
  });
  return response.json();
};

export const getMyUrls = async () => {
  const response = await authenticatedFetch('/urls/my-urls');
  return response.json();
};

export const createPaymentOrder = async (planName: string) => {
  const response = await authenticatedFetch('/payments/create-order', {
    method: 'POST',
    body: JSON.stringify({ plan_name: planName }),
  });
  return response.json();
};
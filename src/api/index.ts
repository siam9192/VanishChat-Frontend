import envConfig from '../envConfig';
import Cookie from 'js-cookie';

async function GET(endPoint: string) {
  try {
    const token = Cookie.get('accessToken');

    const res = await fetch(`${envConfig.serverBaseUrl}/${endPoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Unknown error occurred');
    }

    const data = await res.json(); // parse response JSON
    return data;
  } catch (error) {
    throw error;
  }
}

async function POST(endPoint: string, body: Record<string, unknown>) {
  try {
    const token = Cookie.get('accessToken');

    const res = await fetch(`${envConfig.serverBaseUrl}/${endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Unknown error occurred');
    }

    const data = await res.json(); // parse response JSON
    return data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error; // optionally rethrow or return a fallback value
  }
}

async function PATCH(endPoint: string, body: Record<string, unknown>) {
  try {
    const token = Cookie.get('accessToken');

    const res = await fetch(`${envConfig.serverBaseUrl}/${endPoint}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Unknown error occurred');
    }

    const data = await res.json(); // parse response JSON
    return data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error; // optionally rethrow or return a fallback value
  }
}

async function DELETE(endPoint: string) {
  try {
    const token = Cookie.get('accessToken');
    const res = await fetch(`${envConfig.serverBaseUrl}/${endPoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Unknown error occurred');
    }

    const data = await res.json(); // parse response JSON
    return data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error; // optionally rethrow or return a fallback value
  }
}

export default {
  GET,
  POST,
  PATCH,
  DELETE,
};

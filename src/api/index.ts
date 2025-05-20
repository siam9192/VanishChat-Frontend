import envConfig from '../envConfig';

async function post(endPoint: string) {
  try {
    const res = await fetch(`${envConfig.serverBaseUrl}/${endPoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        // 'Authorization': `Bearer ${yourToken}`
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Unknown error occurred');
    }

    const data = await res.json(); // parse response JSON
    return data;
  } catch (error) {}
}

async function POST(endPoint: string, body: Record<string, unknown>) {
  try {
    const res = await fetch(`${envConfig.serverBaseUrl}/${endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        // 'Authorization': `Bearer ${yourToken}`
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
    const res = await fetch(`${envConfig.serverBaseUrl}/${endPoint}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        // 'Authorization': `Bearer ${yourToken}`
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
    const res = await fetch(`${envConfig.serverBaseUrl}/${endPoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        // 'Authorization': `Bearer ${yourToken}`
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
  POST,
  PATCH,
  DELETE,
};

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Calls the backend login endpoint.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<{access_token: string, refresh_token: string, token_type: string, expires_in: number}>}
 */
export async function login(username, password) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.detail || 'Invalid username or password');
  }

  return response.json();
}

const SESSION_KEY = 'auth_token';
const USERNAME_KEY = 'auth_username';

/** Persist the authentication token and username in sessionStorage. */
export function saveSession(accessToken, username) {
  sessionStorage.setItem(SESSION_KEY, accessToken);
  sessionStorage.setItem(USERNAME_KEY, username);
}

/** Remove the authentication data from sessionStorage. */
export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(USERNAME_KEY);
}

/** Return the stored access token, or null if not authenticated. */
export function getToken() {
  return sessionStorage.getItem(SESSION_KEY);
}

/** Return the stored username, or null if not authenticated. */
export function getUsername() {
  return sessionStorage.getItem(USERNAME_KEY);
}

/** Returns true if the user has an active session. */
export function isAuthenticated() {
  return Boolean(getToken());
}

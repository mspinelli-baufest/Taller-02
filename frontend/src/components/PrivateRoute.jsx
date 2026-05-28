import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../api/session';

/**
 * Renders children only if the user is authenticated.
 * Otherwise redirects to the login page.
 */
export default function PrivateRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

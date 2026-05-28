import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { saveSession } from '../api/session';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await login(username, password);
      saveSession(data.access_token, username);
      navigate('/welcome', { replace: true });
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Iniciar Sesión</h1>
          <p className={styles.subtitle}>Ingrese sus credenciales para continuar</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {error && (
            <div className={styles.errorBanner} role="alert" aria-live="assertive">
              {error}
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="username" className={styles.label}>
              Usuario
            </label>
            <input
              id="username"
              type="text"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              disabled={loading}
              placeholder="admin"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              disabled={loading}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={loading || !username || !password}
          >
            {loading ? 'Ingresando…' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
}

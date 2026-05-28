import { useNavigate } from 'react-router-dom';
import { clearSession, getUsername } from '../api/session';
import styles from './WelcomePage.module.css';

export default function WelcomePage() {
  const navigate = useNavigate();
  const username = getUsername() || 'usuario';

  function handleLogout() {
    clearSession();
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <span className={styles.brand}>Taller-02</span>
        <div className={styles.navRight}>
          <span className={styles.userInfo}>👤 {username}</span>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.iconWrapper} aria-hidden="true">
            ✅
          </div>
          <h1 className={styles.title}>¡Bienvenido, {username}!</h1>
          <p className={styles.description}>
            Has iniciado sesión exitosamente. Tu sesión está activa y segura.
          </p>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Estado</span>
              <span className={styles.infoBadge}>Autenticado</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Usuario</span>
              <span className={styles.infoValue}>{username}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

# Frontend — Taller-02

Aplicación web React que implementa un flujo de autenticación con JWT utilizando el backend FastAPI de este repositorio.

## Características

- **Página de Login** (`/login`): formulario de inicio de sesión que consume el endpoint `POST /auth/login` del backend y almacena el token en `sessionStorage`.
- **Página de Bienvenida** (`/welcome`): página protegida que sólo es accesible si el usuario ha iniciado sesión. Muestra el nombre del usuario y un botón de cierre de sesión.
- **Protección de rutas**: cualquier intento de acceder a `/welcome` sin sesión activa redirige automáticamente a `/login`.
- **Cierre de sesión**: limpia los datos de `sessionStorage` y redirige a `/login`.

## Tecnologías

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router v7](https://reactrouter.com/)
- CSS Modules siguiendo el estándar de diseño definido en [`DESIGN.md`](../DESIGN.md)

## Credenciales por defecto

Las mismas que el backend:

| Campo      | Valor      |
|------------|------------|
| Usuario    | `admin`    |
| Contraseña | `admin123` |

---

## Requisitos

- [Node.js](https://nodejs.org/) ≥ 18
- [npm](https://www.npmjs.com/) ≥ 9
- El backend corriendo en `http://localhost:8000` (ver `backend/README.md`)

---

## Instalación y ejecución

### 1. Instalar dependencias

```bash
# Desde la carpeta frontend/
npm install
```

### 2. Configurar la URL del backend (opcional)

Por defecto, el frontend apunta a `http://localhost:8000`. Para cambiar esto, crea un archivo `.env.local`:

```bash
cp .env.example .env.local
# Edita VITE_API_URL si el backend corre en otro host/puerto
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en <http://localhost:5173>.

### 4. Generar la build de producción

```bash
npm run build
```

Los archivos estáticos se generan en `frontend/dist/`.

### 5. Vista previa de la build de producción

```bash
npm run preview
```

---

## Estructura del proyecto

```
frontend/
├── public/                # Archivos estáticos públicos
├── src/
│   ├── api/
│   │   ├── auth.js        # Cliente HTTP para el endpoint de login
│   │   └── session.js     # Utilidades para manejar la sesión (sessionStorage)
│   ├── components/
│   │   └── PrivateRoute.jsx  # Componente de ruta protegida
│   ├── pages/
│   │   ├── LoginPage.jsx          # Página de inicio de sesión
│   │   ├── LoginPage.module.css
│   │   ├── WelcomePage.jsx        # Página de bienvenida (protegida)
│   │   └── WelcomePage.module.css
│   ├── App.jsx            # Configuración de rutas (BrowserRouter)
│   ├── index.css          # Variables CSS globales y estilos base
│   └── main.jsx           # Punto de entrada de la aplicación
├── .env.example           # Plantilla de variables de entorno
├── index.html
├── package.json
└── vite.config.js
```

---

## Uso junto al backend

1. Levanta el backend:

   ```bash
   cd backend/
   docker compose up --build
   # o con Poetry: poetry run uvicorn app.main:app --reload
   ```

2. Inicia el frontend:

   ```bash
   cd frontend/
   npm install
   npm run dev
   ```

3. Abre <http://localhost:5173>, ingresa con `admin` / `admin123` y serás redirigido a la pantalla de bienvenida.

---

## Estándar de diseño

El frontend sigue el estándar de diseño definido en [`DESIGN.md`](../DESIGN.md) ubicado en la raíz del proyecto:

- **Paleta de colores**: azul primario `#2563EB`, fondo `#F1F5F9`, superficie blanca `#FFFFFF`.
- **Tipografía**: fuente Inter, tamaño base 16 px.
- **Componentes**: botones, inputs y tarjetas según las especificaciones del documento.


# ✨🛍️💻 Fake Store React App

📦 Este repositorio contiene una aplicación web desarrollada con React que simula una tienda en línea: puedes ver productos, analizarlos, agregarlos al carrito, simular una compra y más, todo utilizando la [Fake Store API](https://fakestoreapi.com/). El proyecto fue construido con Vite, React Router, Context API, hooks, y pruebas utilizando Vitest y React Testing Library. 🧪⚙️🔗

## 🖼️ Capturas de pantalla

![Captura desde 2025-05-14 13-52-33](https://github.com/user-attachments/assets/4328219f-e3e4-475d-9749-7966e522b142)

![Captura desde 2025-05-14 13-52-22](https://github.com/user-attachments/assets/5a94931d-c0b0-46e4-a9ab-1063bb04645d)

---

## 📄📌🧭 Menú

- 📺 Demo
- ⚙️ Funcionalidades
- 🧰 Tecnologías
- 🖥️ Cómo ejecutarlo localmente

  - 🔍 Requisitos
  - 📦 Instalación de dependencias
  - 🚀 Ejecutar entorno de desarrollo
  - 🛠️ Generar build de producción

- 🧪 Pruebas
- 🗂️ Estructura de carpetas
- 📜 Scripts disponibles
- 🌍 Despliegue
- 🤝 Contribuciones
- 📄 Licencia
- 📬 Contacto

## 🧪🔗🖥️ Demo

Mira la demo aquí:
[Fake Store](https://fakestr.netlify.app/)
📱⚡🛒

## 🚀🛠️📦 Funcionalidades

- 🔄 Carga asincrónica del catálogo de productos.
- 📝 Vista de detalles con descripción, precio y valoraciones.
- 🛒 Carrito con funciones para agregar, quitar y modificar cantidades.
- 📊 Resumen con totales y productos seleccionados.
- 📱 Diseño responsive con enfoque mobile-first.
- 🧭 Navegación mediante React Router.
- 🌐 Manejo de estado global usando Context API.
- 🔁 Hooks personalizados para lógica reutilizable.
- 🧹 Código limpio con ESLint y Prettier.
- 🧪 Pruebas unitarias e integradas con Vitest y React Testing Library.

## 🧰🔧💡 Stack Tecnológico

- ⚛️ React 18
- ⚡ Vite
- 🧭 React Router DOM
- 🌐 Context API
- 🧪 Vitest + React Testing Library
- 🧹 ESLint
- 🎨 CSS Modules

## 🖥️🧪🔄 Ejecución Local

### 🔍⚙️📋 Requisitos

- 🟢 Node.js >= 16
- 📦 npm >= 8 / Yarn >= 1.22

### 📥📂🔧 Instalación

```bash
git clone https://github.com/carlosfrontend/fake-store.git
cd fake-store
npm install # o yarn install
```

### 🚀🧪🌐 Ejecutar entorno de desarrollo

```bash
npm run dev # o yarn dev
```

Accede en: `http://localhost:5173`
🧑‍💻💻🌍

### 🏗️📦📤 Generar build de producción

```bash
npm run build # o yarn build
```

Archivos generados en la carpeta `dist/`
🔒⚙️📁

## 🧪📊🔍 Pruebas

```bash
npm run test # o yarn test
```

Modo watch:

```bash
npm run test:watch # o yarn test:watch
```

📈🔁📋

## 🗂️📁🧱 Estructura del Proyecto

```
fake-store/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── tests/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── .gitignore
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️📜📌 Scripts

- ▶️ `npm run dev` — Iniciar entorno de desarrollo
- 🏗️ `npm run build` — Generar build de producción
- 👁️ `npm run preview` — Previsualizar la build
- 🧹 `npm run lint` — Ejecutar linter
- 🧪 `npm run test` — Ejecutar pruebas
- 🔁 `npm run test:watch` — Ejecutar pruebas en modo observación

## 🚀🌍📤 Despliegue

### 🌐🗺️🧭 Netlify

1. 📝 Crear el archivo `public/_redirects` con el contenido:

   ```
   /* /index.html 200
   ```

2. ⚙️ Configurar:

   - 🛠️ Comando de build: `npm run build`
   - 📂 Carpeta de salida: `dist/`

### ☁️📡🧭 Vercel

1. 📝 Crear el archivo `vercel.json`:

   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

2. ⬆️ Subir el repositorio a Vercel
   🚀📁🔗

## 🙌👥🔧 Contribuciones

1. 🍴 Haz un fork del repositorio
2. 🌿 Crea una rama: `git checkout -b feature/NuevaFeature`
3. 🛠️ Realiza tus cambios y haz commit: `git commit -m "feat: NuevaFeature"`
4. 📤 Envía tus cambios: `git push origin feature/NuevaFeature`
5. 🔁 Abre un Pull Request
   🎯🧪🔄

## 📄⚖️📘 Licencia

MIT — Ver [LICENSE](./LICENSE)
📑🔓📝

## 📬👤🌐 Contacto

📝  [Portafolio de Carlos Frontend](https://carlospulido-portafolio.vercel.app/)

[GitHub de carlosfrontend](https://github.com/carlosfrontend)
✉️💬📡

---

🚀 Gracias por visitar este proyecto. ¡No dudes en dejar tu ⭐ si te resulta útil o inspirador! Tu apoyo ayuda a mantener y mejorar este tipo de desarrollos. 🙌💡✨

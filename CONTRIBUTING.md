# Guía de contribución

¡Gracias por tu interés en contribuir a este proyecto! Esta guía resume cómo configurar el entorno de desarrollo y las convenciones básicas a seguir.

## Configuración del entorno

1. Clona el repositorio y entra al directorio del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Copia el archivo de variables de entorno de ejemplo y completa tus propias credenciales:
   ```bash
   cp .env.example .env
   ```
   Las variables `VITE_EMAILJS_*` son necesarias para que el formulario de contacto funcione y se obtienen desde tu cuenta de [EmailJS](https://www.emailjs.com/). El archivo `.env` no debe subirse al repositorio.
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del proyecto

```
src/
├── components/    # Componentes reutilizables (Navbar, Hero, Footer, secciones)
├── pages/         # Páginas principales
├── assets/        # Imágenes e íconos
├── locales/       # Traducciones (i18n)
├── lib/           # Utilidades
└── i18n.jsx       # Configuración de internacionalización
```

## Scripts disponibles

- `npm run dev`: levanta el servidor de desarrollo.
- `npm run lint`: ejecuta ESLint sobre el proyecto.
- `npm run build`: genera la build de producción.
- `npm run preview`: previsualiza la build de producción localmente.

## Convenciones

- Ejecuta `npm run lint` antes de enviar un pull request y corrige cualquier advertencia.
- Usa mensajes de commit claros y descriptivos, explicando el "por qué" del cambio.
- Mantén los componentes pequeños y enfocados en una sola responsabilidad.
- Si agregas textos visibles al usuario, recuerda añadir las traducciones correspondientes en `src/locales/` (español e inglés).

## Pull requests

- Describe claramente el problema que resuelve o la funcionalidad que agrega tu PR.
- Si tu cambio afecta la UI, incluye capturas de pantalla o un breve video.
- Asegúrate de que el proyecto compile correctamente con `npm run build` antes de abrir el PR.

# Tickets-frontend
Proyecto Frontend para web app de tickets para GaytanStudio

## QuickStart
```
npm install
npm install framer-motion
npm install react-modal tailwindcss
npm run dev
```
## Project Structure
### Pages

El mayor cambio en esta estructura de carpetas es la adición de la carpeta pages. Esta carpeta debe contener una carpeta para cada página de su aplicación.

### Components

La carpeta components contendrá cada uno de los componentes de toda la aplicación.

### Layout

La carpeta layouts es realmente simple. Se trata de una carpeta especial para colocar cualquier componente basado en el diseño. Esto sería cosas como una barra lateral, barra de navegación, contenedor, etc. 

### Utils

Esta carpeta es para almacenar todas las funciones de utilidad, tales como formateadores. Esta es una carpeta bastante sencilla y todos los archivos en esta carpeta deben ser igualmente sencillos.

### Routes

La última carpeta es la carpeta Routes. Esta carpeta es para almacenar todas las rutas del proyecto, permite tener una mejor organización de como moverse entre las paginas de la webapp.
```
.
├── README.md
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── public
│	└── vite.svg
└── src
	│   App.css
	│   App.jsx
	│   index.css
	│   main.jsx
	│
	├───assets
	│       react.svg
	│
	├───components
	├───layout
	├───pages
	│   └───Authentification
	│           Login.jsx
	│
	├───routes
	├───themes
	└───utils
```

# Timefly-Frontend

Timefly-Frontend es una interfaz de usuario (aplicación frontend ) diseñada para hacer uso de la API REST Timefly-Backend y facilitar la experiencia del usuario al permitir gestionar de forma interactiva e intuitiva el registro de llegadas y salidas de personal. Este proyecto está construido con React 18 y Material-UI (MUI).

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **Reactjs 18**: Biblioteca para construir interfaces de usuariomediante js.
- **Material-UI (MUI)**: Biblioteca de componentes basada en Material Design para React.
- **npm**: Gestor de paquetes para instalar dependencias.

## Configuración del Proyecto

### Instalación

1. Clona el repositorio:

    git clone https://github.com/IamRodion/Timefly-Frontend.git

2. Ingresa a la carpeta del proyecto creado

    cd Timefly-Frontend

3. Instala las dependencias del proyecto:

    npm install 

    (Por temas de compatibilidad es posible que salgan algunas advertencias, ejecutar npm audit fix, 
        no ejecutar npm audit fix --force, las advertencias que salen son de compatibilidad pero no representan riesgo alguno)

4. Inicia el servidor de desarrollo:
    npm start


-- Esto iniciará la aplicación en http://localhost:3000.


## Estructura del Proyecto

Timefly-Frontend/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── theme/
│   ├── auth/
│   ├── layouts/
│   ├── services/
│   ├── components/
│   │   ├── Formulario.jsx
│   │   ├── BotonGuardar.jsx
│   ├── App.js
│   ├── index.js
├── public/
│   ├── images/
├── package.json

- src/components: Contiene los componentes reutilizables de la aplicación.
- App.js: Punto de entrada principal de la interfaz.
- index.js: Archivo principal para renderizar la aplicación en el DOM.

## Personalización
Para agregar más funcionalidades o personalizar el diseño:
    1. Consulta la documentación oficial de Material-UI.
    2. Crea nuevos componentes en la carpeta components.
## Recursos Adicionales
    1. Documentación de React
    2. Documentación de Material-UI

















































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

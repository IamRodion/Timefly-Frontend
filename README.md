# Timefly-Frontend

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

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




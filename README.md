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




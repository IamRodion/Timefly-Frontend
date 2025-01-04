# Timefly-Frontend

Timefly-Frontend es una interfaz de usuario (aplicación frontend) diseñada para hacer uso de la API REST Timefly-Backend y facilitar la experiencia del usuario al permitir gestionar de forma interactiva e intuitiva el registro de llegadas y salidas de personal. Este proyecto está construido con React 18 y Material-UI (MUI).

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **Reactjs 18**: Biblioteca para construir interfaces de usuario mediante JavaScript.
- **Material-UI (MUI) 6.3.0**: Biblioteca de componentes basada en Material Design para React.
- **npm**: Gestor de paquetes para instalar dependencias.
- **Vite 6.0.7 + SJ+SWC**: Herramienta de construcción rápida para aplicaciones web modernas con soporte para SWC.

## Configuración del Proyecto

### Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/IamRodion/Timefly-Frontend.git
    ```

2. Ingresa a la carpeta del proyecto creado

    ```sh
    cd Timefly-Frontend
    ```

3. Instala las dependencias del proyecto:

    ```sh
    npm install 
    ```

    (Por temas de compatibilidad es posible que salgan algunas advertencias. Ejecutar `npm audit fix`, pero no ejecutar `npm audit fix --force`, ya que las advertencias son de compatibilidad pero no representan riesgo alguno).

4. Inicia el servidor de desarrollo:

    ```sh
    npm run dev
    ```

    -- Esto iniciará la aplicación en [http://localhost:8080].

## Estructura del Proyecto inicial

Timefly-Frontend/
├── src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
├── layouts/
│   ├── MainLayout.jsx
│   ├── DashboardLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── 
│   ├── Dashboard.jsx
├── App.jsx
├── main.jsx


- App.jsx: Aquí defines tus rutas utilizando React Router. App actúa como una especie de "routero", gestionando las diferentes rutas de tu aplicación.
- main.jsx: Este es el archivo de entrada principal, donde renderizas tu aplicación y configuras el Router.
- Layouts: Estos componentes sirven como plantillas para las diferentes secciones de tu aplicación.
- Components: Contiene los componentes reutilizables de la aplicación.

## Personalización

Para agregar más funcionalidades o personalizar el diseño:
1. Consulta la documentación oficial de Material-UI.
2. Crea nuevos componentes en la carpeta components.

## Recursos Adicionales

1. [Documentación de React](https://reactjs.org/docs/getting-started.html)
2. [Documentación de Material-UI](https://mui.com/getting-started/installation/)
3. [Documentación de Vite](https://vitejs.dev/guide/)
4. [Documentación de SWC](https://swc.rs/docs/getting-started)

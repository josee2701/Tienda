# Proyecto de Inventario

Este proyecto es una aplicación de inventario que utiliza Django como backend y React como frontend. El entorno del proyecto está gestionado con Docker para facilitar la configuración y ejecución.

## Estructura del Proyecto

- **Backend**: Django
- **Frontend**: React
- **Contenedor**: Docker
- **Base de Datos**: PostgreSQL

.
├── arbol_proyecto.txt
├── Backend
│   ├── App
│   │   ├── Productos
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── _init__.py
│   │   │   ├── migrations
│   │   │   │   ├── 0001_initial.py
│   │   │   │   ├── 0002_remove_product_descripcion_product_color_and_more.py
│   │   │   │   ├── 0003_alter_product_color_alter_product_imagen.py
│   │   │   │   ├── _init__.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   ├── Stock
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── _init__.py
│   │   │   ├── migrations
│   │   │   │   ├── 0001_initial.py
│   │   │   │   ├── _init__.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   └── Ventas
│   │       ├── admin.py
│   │       ├── apps.py
│   │       ├── _init__.py
│   │       ├── migrations
│   │       │   ├── 0001_initial.py
│   │       │   ├── 0002_rename_customer_ventas_cliente_and_more.py
│   │       │   ├── _init__.py
│   │       ├── models.py
│   │       ├── serializers.py
│   │       ├── tests.py
│   │       ├── urls.py
│   │       └── views.py
│   ├── Config
│   │   ├── asgi.py
│   │   ├── _init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── db.sqlite3
│   ├── Dockerfile
│   ├── entrypoint.sh
│   ├── manage.py
│   ├── media
│   │   └── productos
│   │       ├── 1366_2000.jpg
│   │       ├── descarga_1.jpg
│   │       ├── descarga.jpg
│   │       ├── IMG_20230131_130916_bnjSvMZ.jpg
│   │       ├── IMG_20230131_130916.jpg
│   │       └── istockphoto-1395191574-612x612.jpg
│   └── requirements.txt
├── docker-compose.yml
├── Frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── Navbar
│   │   │   │   ├── Navbar.css
│   │   │   │   └── Navbar.js
│   │   │   ├── Productos
│   │   │   │   ├── AddProductos.js
│   │   │   │   ├── Productos.css
│   │   │   │   ├── Productos.js
│   │   │   │   ├── TablaProductos.js
│   │   │   │   └── UpdateProductos.js
│   │   │   ├── Stock
│   │   │   │   ├── AddStock.js
│   │   │   │   ├── Inventario.css
│   │   │   │   ├── Inventario.js
│   │   │   │   ├── TablaInventario.js
│   │   │   │   └── UpdateStock.js
│   │   │   ├── Tienda
│   │   │   │   ├── ListaProductos.js
│   │   │   │   ├── Producto.js
│   │   │   │   ├── Productos.css
│   │   │   │   └── Tienda.js
│   │   │   └── Ventas
│   │   │       ├── TablaVentas.js
│   │   │       └── Ventas.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   └── yarn.lock
└── README.md

## Requisitos

Para ejecutar este proyecto localmente, necesitarás tener instalado:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuración y Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Construye y ejecuta los contenedores:**

    ```bash
    docker-compose up --build
    ```

   Este comando construye las imágenes de Docker para el backend y el frontend, y luego inicia los contenedores.

2. **Accede a la aplicación:**

    - **Frontend**: [http://localhost:3000](http://localhost:3000)
    - **Backend (Django Admin)**: [http://localhost:8000/admin](http://localhost:8000/admin)

    Puedes usar estas URLs para interactuar con la aplicación y el panel de administración de Django.

3. **Parar los contenedores:**

    Para detener los contenedores, usa:

    ```bash
    docker-compose down
    ```

## Scripts Disponibles

En el contenedor de frontend (React), puedes ejecutar los siguientes scripts:

- **`npm start`**: Inicia la aplicación en modo desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para verla en acción.
- **`npm test`**: Ejecuta el test runner en modo interactivo.
- **`npm run build`**: Construye la aplicación para producción. Los archivos generados estarán en el directorio `build`.
- **`npm run eject`**: Expone la configuración de build para personalizarla (es una operación irreversible).

## Información Adicional

- **Documentación de Create React App**: [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- **Documentación de React**: [React Docs](https://reactjs.org/)
- **Documentación de Django**: [Django Docs](https://docs.djangoproject.com/)

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/tu-feature`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Añadir nueva feature'`).
4. Envía tus cambios a tu fork (`git push origin feature/tu-feature`).
5. Crea un pull request en el repositorio original.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## PROYECTO
# Tienda de Ropa 👙💞

## Introducción al Proyecto 🚀
"Hoy voy a presentarles mi proyecto: una tienda de ropa en línea. Este sistema backend está diseñado para manejar las funcionalidades principales de un comercio electrónico, como la gestión de productos, categorías, pedidos y usuarios. Además, implementé seguridad con autenticación JWT y encriptación de contraseñas para proteger los datos de los usuarios.
## Motivación del Proyecto 🎯
"Quise desarrollar este proyecto para practicar y fortalecer mis habilidades en desarrollo backend, especialmente utilizando Node.js, Sequelize, y MySQL. También quería aprender cómo implementar una API RESTful completa que incluyera autenticación y CRUDs (crear, leer, actualizar y eliminar) para manejar datos de manera eficiente."
### Características 📋
- **CRUD de Categorías**: Crear, leer, actualizar y eliminar categorías de productos. 🏷️
- **CRUD de Productos**: Gestión completa de productos, incluyendo validaciones y filtros. 👗
- **Gestión de Pedidos**: Crear pedidos y ver productos relacionados. 📦
- **Autenticación de Usuarios**: Registro de usuarios, inicio de sesión y perfil de usuario. 🔐
- **Seeders**: Población de la base de datos con productos de ejemplo. 🌱

## Estructura de la Base de Datos 🗂️
"El diseño de la base de datos incluye:
Una tabla de usuarios con atributos como nombre, apellido, correo y fecha de nacimiento.
Una tabla de productos con descripción, precio y relación con las categorías.
Una tabla de categorías para clasificar los productos.
Una tabla de pedidos que vincula a los usuarios y a los productos que compran, mediante una tabla intermedia orders_products."
## Estructura del Proyecto 📂
![ProyectoTienaRopa](Copy%20of%20e_commerce.png)

- Gestión de Usuarios: 
Permite registrar nuevos usuarios, iniciar sesión, y proteger las rutas mediante autenticación JWT.
- Gestión de Categorías:
 Los administradores pueden crear, editar, eliminar y listar las categorías de productos, como ropa para hombre, mujer o niños.
 - Gestión de Productos: 
Se pueden añadir productos con su descripción, precio y categoría asignada. También se pueden actualizar o eliminar.
- Gestión de Pedidos: 
Los usuarios pueden realizar pedidos, vinculando los productos deseados.
- Relación Productos-Pedidos: 
Implementé una tabla intermedia para manejar la relación entre productos y pedidos, lo que permite agregar múltiples productos a un pedido.
- Reseñas de Productos: 
Los usuarios pueden calificar los productos con comentarios, lo que mejora la experiencia del cliente.

## Tecnologías Utilizadas 🛠️

- **Node.js** 🚀
- **Express** 🌐
- **Sequelize** (ORM para MySQL) 🔄
- **MySQL** (Base de datos) 🗄️
- **bcrypt** (Encriptación de contraseñas) 🔒
- **JWT** (Autenticación) 🔑
## Instalación 🛠️

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/karensalazar3/ProyectoTiendaRopaKs/edit/main/README.md
   cd tienda-ropa
   Rutas de la API 🌐
## Autenticación 🔑
POST /users/register: Registra un nuevo usuario.
POST /users/login: Inicia sesión y devuelve un token JWT.
## Categorías 🏷️
GET /categories: Obtiene todas las categorías.
POST /categories: Crea una nueva categoría.
PUT /categories/:id: Actualiza una categoría existente.
DELETE /categories/:id: Elimina una categoría.

## Productos 👙
GET /products: Obtiene todos los productos.
POST /products: Crea un nuevo producto.
PUT /products/:id: Actualiza un producto existente.
DELETE /products/:id: Elimina un producto.
## Pedidos 📦
GET /orders: Obtiene todos los pedidos.
POST /orders: Crea un nuevo pedido.
GET /orders/:id: Obtiene un pedido específico.
## Productos en Pedido 🛒
POST /order-products: Relaciona un producto a un pedido con la cantidad deseada.

## Reseñas ⭐
POST /reviews: Crea una nueva reseña para un producto.
GET /reviews: Obtiene todas las reseñas.
## Variables de Entorno 🌱
Asegúrate de tener configurado tu entorno con las siguientes variables:

DB_HOST: Dirección del host de la base de datos.
DB_USER: Usuario de la base de datos.
DB_PASSWORD: Contraseña del usuario.
DB_NAME: Nombre de la base de datos.
## Contribución 🤝
Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor crea un issue o envía un pull request.

## Licencia 📜
Este proyecto está bajo la licencia MIT.

## Autor: Karen Salazar.
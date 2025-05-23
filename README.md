# Social Network Monorepo

Este proyecto contiene el backend desarrollado en NestJS con una arquitectura basada en microservicios y una aplicación web desarrollada en React. Se utiliza Docker para manejar los contenedores de los servicios y la base de datos PostgreSQL.


## Instalación

Pasos para configurar el entorno local:

### Requisitos

Tener instalado:
- Docker
- Docker Compose
- Git

### Clonar el repositorio
```
git clone https://github.com/fperaza7/social-network.git
cd social-network

```
### Construir y ejecutar los contenedores
Ejecutar el comando en la raíz del repositorio para construir y ejecutar los contenedores.
```
docker-compose up -d --build
```
## Acceso a la aplicación

- El microservicio de auth estará disponible en http://localhost:3001
- El microservicio de users estará disponible en http://localhost:3002
- El microservicio de posts estará disponible en http://localhost:3003
- La aplicación web estará disponible en http://localhost:3000

## Apagar los contenedores

Para apagar los contenedores, ejecutar el comando correspondiente.
```
docker-compose down
```

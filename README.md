# crud_angula_spring_mysql

## Directorio estudianteBack
Encontrara el proyecto creado Spring Boot, conectado a la BD.

1. Realizar los cambios de configuracion conexion a BD en "aplication.properties"
2. Script inicial para crear BD
-- Crear BD Obligatorio antes de iniciar el Back
CREATE DATABASE persona_nova DEFAULT CHARACTER SET utf8;

-- No necesario realizar Back creara la tabla
CREATE TABLE persona_nova.estudiantes (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NULL,
  lastname VARCHAR(65) NULL,
  PRIMARY KEY (id));
  
-- Insertar datos prueba estudiantes
insert into persona_nova.estudiantes (id, apellido, email, nombre) values
(1, 'Aguilar', 'aguilar@gmail.com', 'Antonio'),
(2, 'Infante', 'pinfante@gmail.com', 'Pedro');

-- Visualizar datos de las tablas
SELECT * FROM persona_nova.personas;

3. Despues de ejecutar la aplicacion por primera vez, comentar últimas 3 lineas del archivo "aplication.properties"
para que cada vez que se inicie la aplicación no cree las tablas nuevamente.

4. Consultas endpoint - en caso de haber agregado datos de pruebas sin ejecutar Front Angular
Agregar estudiantes
POST - http://localhost:8080/api/estudiantes
{
        "nombre": "Michael",
        "apellido": "Arvelaez",
        "email": "ma@gmail.com"
}

Consultar estudiantes
GET - http://localhost:8080/api/estudiantes

## Directorio estudianteBack
1. En primera instancia ejecutar dentro del directorio en terminal la instalacion de la carpeta node
npm install

2. Validar el Back en ejecucion

3. Iniciar proyecto Front
npm start


## Instructivo

Pagina principal lista de estudiantes, en caso de tener registrados:

El listado tiene opción de ver los detalles del estudiante:

Como se puede ver en la parte superior esta la navegacion donde tambien puede realizar un nuevo registro:

El formulario esta validado por el Front.


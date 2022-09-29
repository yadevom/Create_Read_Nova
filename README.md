# Create and Reade Angular, Spring Boot & MySQL

## Directorio estudianteBack
Backend realizado mediante el framework Spring Boot, corre en el Pto. 8080.
Gestor de Base de datos utilizado MySQL.

1. Realizar los cambios de configuracion conexion a BD en "aplication.properties"
2. Script inicial para crear BD

```
-- Crear BD Obligatorio antes de iniciar el Back
CREATE DATABASE persona_nova DEFAULT CHARACTER SET utf8;
```

```
-- No necesario realizar Back creara la tabla
CREATE TABLE persona_nova.estudiantes (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NULL,
  lastname VARCHAR(65) NULL,
  PRIMARY KEY (id));
```

```  
-- Insertar datos prueba estudiantes
insert into persona_nova.estudiantes (id, apellido, email, nombre) values
(1, 'Aguilar', 'aguilar@gmail.com', 'Antonio'),
(2, 'Infante', 'pinfante@gmail.com', 'Pedro');
```

```
-- Visualizar datos de las tablas
SELECT * FROM persona_nova.personas;
```

3. Despues de ejecutar la aplicacion por primera vez, comentar últimas 3 lineas del archivo "aplication.properties"
para que cada vez que se inicie la aplicación no cree las tablas nuevamente.


4. Consultas endpoint - en caso de haber agregado datos de pruebas sin ejecutar Front Angular
Agregar estudiantes

```
POST - http://localhost:8080/api/estudiantes
{
        "nombre": "Michael",
        "apellido": "Arvelaez",
        "email": "ma@gmail.com"
}
```

Consultar estudiantes
```
GET - http://localhost:8080/api/estudiantes
```
## Directorio estudianteFront
Frontend realizado mediante el framework Angular, corre en el Pto. 4200.

1. En primera instancia ejecutar dentro del directorio en terminal la creacion de la carpeta "node"

```
npm install
```

2. Validar el Back en ejecucion

3. Iniciar proyecto Front
```
npm start
```

## Instructivo

Pagina principal lista de estudiantes, en caso de tener registrados:

![Image text](https://github.com/yadevom/Create_Read_Nova/blob/main/estudianteFront/src/assets/fron1.png)

El listado tiene opción de ver los detalles del estudiante:

![Image text](https://github.com/yadevom/Create_Read_Nova/blob/main/estudianteFront/src/assets/fron2.png)

Como se puede ver en la parte superior esta la navegacion donde tambien puede realizar un nuevo registro:

![Image text](https://github.com/yadevom/Create_Read_Nova/blob/main/estudianteFront/src/assets/fron3.png)

El formulario esta validado por el Front.
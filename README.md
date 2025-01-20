# Tarea: Mejoras al Proyecto "Mi Comida Favorita"



## Creacion del Proyecto

Este proyecto se genero con: `npx create-expo-app MiComidaFavorita --template blank`

## Hacer correr


Para hacer correr usar:  `npx expo start`

# MEJORAS REALIZADAS
1. #### Mejoras en el Formulario de Registro
   Se implementa validacion de los datos a registrar, tomando en cuenta que se ingrese un mail valido, 
   una contraseña segura, con minimo 8 caracteres, y caracteres de seguridad,
   tambien se agrega un nuevo campo de confirmacion de contraseña para hacer la validacion.

   Se muestra los errores detallados 


2. #### Mejoras en el Formulario de Login
   Valida el formato de mail ingresado sea correcto, y que la contraseña no este vacia.
   
   Tambien se deshabilita el boton de inicio de sesion si no se cumplen las condiciones previas.


3. #### Implementación de Loading States
   Se evita doble clicks, en todos los eventos, agregando un Loading State, que bloque toda la pantalla.

   Esto evita que se presionen botones antes de terminar la llamada a un evento

# CAPTURAS DE LA APLICACION

![Captura1](https://github.com/mcastillo1302/micomidafavorita/blob/main/assets/screenshot/0dee6b49-c4bf-4224-a73a-5d0d71244775.jpg)

 
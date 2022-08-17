# Hotel App


Requerimiento
VAOVA requiere de una aplicación web que le permita gestionar los hoteles con los
cuales ha realizado convenio para ofrecerlos dentro de sus planes turísticos, cada
hotel que se registra desde la aplicación debe tener su propio perfil con los datos
generales, galería de imágenes, logotipo, calificación, etc. Además debe permitir la
creación, edición, cargue de inventario, listado de hoteles, y otras funcionalidades
adicionales.
Criterios de aceptación de la aplicación web
1. Registro de usuarios (Máx. 100 puntos)
a. Este registro se debe hacer por medio de email y contraseña
i. Datos requeridos (Nombre, Email, Contraseña, Avatar (Opcional)
b. Registro mediante Gmail (Opcional)
c. La integración se debe hacer con Firebase, o con local storage
d. Se dan puntos extras si se implementan librerías agnósticas a React al
momento de realizar la integración con Firebase, (Local storage no requiere
librerías adicionales)
2. Login de usuarios (Máx. 100 puntos)
a. Login mediante usuario y contraseña
b. Si en el paso 1 se implementa Registro con Gmail se debe hacer login con
esta misma integración
3. Sesión de usuario (Máx 80 puntos)
a. Se debe persistir la sesión del usuario, mediante session storage


4. Perfil del hotel (Crud del hotel) (Máx. 70 puntos)

a. Nombre, descripción, País, Departamento, Municipio o localidad, logo, tipo
de hotel (3, 4, 5 estrellas), Calificación o score (dado a la creatividad)
b. Tipo de habitaciones o tipo de acomodación disponibles en el hotel En el
tipo habitaciones se debe especificar el tipo de acomodación: habitación
sencilla (single room), Habitación con dos camas (two twin bedroom), Un
dormitorio de matrimonio (one queen bedroom), si se marca uno o todos
tipos se habilita un campo numérico para cada uno, donde se especifique
el número de habitaciones disponibles.
_____________________________________________________________________________________
i. En número de habitaciones por tipo, se debe especificar la cantidad
de
habitaciones disponibles por acomodación, es decir se manejan 3
campos numéricos para las tres acomodaciones mencionadas.
c. Actualización de hotel, mismos campos del punto a
d. Perfil o detalle del hotel
i. En esta sección se desarrollará una pantalla que presente de forma
amigable e intuitiva los datos del hotel
e. Listado de hoteles
i. Dado a la creatividad
5. Cerrar sesión (Máx. 200 puntos, opcional no penalizable)
a. Si la implementación se realiza con Firebase, se debe enviar instrucción de
cierre de sesión desde el SDK
b. Se debe limpiar los datos de la sesión en Local Storage
6. Diseño responsive (Máx. 300 puntos)
7. Crear un repositorio en Github, y publicar el proyecto en GH Pages, Netlify,
Heroku, etc. (500 puntos)
8. Documentación del proyecto en el readme.md (Máx. 200 puntos)
a. Comandos
b. URL de publicación
A tener en cuenta
• Se puede optar por hacer el Login mediante email y contraseña o Gmail, no es
necesario realizar ambos tipos de autenticación
• Si escoge Firebase, es necesario realizar el Login mediante esta plataforma
• Cada numeral especificado es obligatorio, modulo no realizado, se penalizará con
el valor del puntaje de cada funcionalidad.
• Es permitido emplear librerías de UI como Bootstrap, MUI, tailwind etc, MUI ya
implementa emotion mediante los sx props
• El código se debe hacer en inglés, el copy en español
• Esta prueba tiene un tiempo máximo de realización de una semana (7 días
calendario)
• Creatividad, diseño y arquitectura (Max 600 puntos) 
_____________________________________________________________________________________
Ítems requeridos
• Se deben implementar únicamente componentes funcionales
• Implementar custom Hooks, Render props y context Api
• Validación de formularios mediante formik
• Si la prueba se realiza en Javascript implementar prop types y default props
• Si la prueba se realiza en TS implementar interfaces o custom types
Bonificaciones
• Estilizar los componentes empleando styled components o emotion es
opcional, pero da puntos importantes en la calificación de la prueba (Máx. 300
puntos extra).
• Implementar Firebase, (Máx. 200 puntos extra)
• Implementación de Redux (Máx. 120 puntos extra)
• TypeScript (Máx. 120 puntos extra)
• Implementar internacionalización (Máx. 50 puntos extra)
• No es necesario implementar servicios externos
Para resolución de dudas de la prueba escribir a Juan Manuel Méndez
<jmmendez@vaovatravel.com> 
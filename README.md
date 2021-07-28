# Preámbulo

Studio Ghibli, es un estudio japonés de animación, considerado por la crítica especializada y muchos cinéfilos como uno de los mejores estudios de animación del mundo en la actualidad.
Sus encantadores películas han acompañado a muchos durante su infancia y ha cautivado a muchos otros, que aun sin importad la edad, género o condición siguen disfrutando de las películas que ofrece ESTUDIO GHIBLI. Por ese motivo, decidimos trabajar con esta data y tenemos la idea de hacer un página linda y encantadora.

# Aspecto visual

## Prototipo de alta fidelidad

![Prototipo](./img/prototipo.png)

## Colores

Como bien sabemos los colores que nos rodean, influyen en como percibimos nuestro alrededor, en cómo los sentimos y nuestras decisiones, muchas veces de manera inconsciente.
La idea es que los usuarios al ver la app web, de inmediato reconozcan que pertenece a Studio Ghibli.
Como colores principales estamos usando los siguientes:

- Blanco: #FFFFFF
- Celeste: #5C91CC
- Gris: #535353

Usamos el color celeste en nuestra app, ya que el logo de Studio Ghibli lo usa igualmente, reforzando así la idea principal del nombre de la marca, (vuelo, viento y libertad).
Quisimos complementar con colores que hemos visto muy representados anteriormente en sus películas y que combinan a perfección con el celeste, los cuales vendrían siendo el blanco y el gris.

## Formas

Quisimos agregar en el fondo (que realizamos nosotras mismas con la herramienta Illustrator) una especie de collage en color gris muy tenue, con la figura del personaje Totoro, el cual encontramos en la película (Mi vecino Totoro). Este personaje ha sido seleccionado para ser parte del logo de Studio Ghibli.

## Tipografías

Utilizamos:
- Monospace.

Es una tipografía tipo Sans Serif, que expresan modernidad, cercanía y son legibles en distintos tamaños.

[](https://paoperez.com/tipografias-personalidad-transmite/)

# Historias de usuario

## Historia de usuario # 1

Como: Usuario.
Quiero: Me gustaría que la app tuviera un color que sea inidentificable con Studio Ghibli y qué tenga una página de bienvenida y luego otra que te muestre las películas.
Para: Al entrar a la web, sin necesidad de ver un logo, poder saber de qué es la página y luego con un botón, te muestre las películas dividiendo así, la bienvenida de la información y que no se vea saturada la galería de películas.

## Criterios de aceptación

- Investigar sobre los colores que identifican a Studio Ghibli.
- Colocar de fondo de la página de bienvenida, una imagen representativa de estudio Ghibli.
- Hacer una página de bienvenida con un botón de iniciar.
- Que el botón de iniciar que redireccione a la galería de películas.

## Historia de usuario # 2

Como: Usuario.
Quiero: ver una página que deje ordenar y buscar información y poder usar la página desde mi teléfono, Tablet y pc de escritorio.
Para: Navegar de manera más fácil en la página y visualizarla bien desde cualquier dispositivo.

## Criterios de aceptación

- Crear la página de inicio.
- Agregar el logo de Studio Ghibli.
- Agregar un input de búsqueda.
- Agregar los selects de ordenar y filtar.
- Que la barra búsqueda se adapte a cualquier dispositivo.

## Historia de usuario # 3

Como: persona que usa páginas de películas.
Quiero: ver todos los posters de las películas.
Para: verlas todas y poder elegir.

 ## Criterios de aceptación

- Investigar sobre.map.
- Implementar.map para crear un nuevo array solamente con los posters.
- Crear una etiqueta en Js donde vamos a llamar al array que hemos creado.

## Historia de usuario # 4

Como: usuario
Quiero: buscar las películas por su nombre.
Para: poder encontrarlas más fácilmente.

## Criterios de aceptación

- Investigar sobre filtros de búsqueda.
- Hacer una función con el método que consigamos.
- Conectarlo al input search que ya tenemos.
- Al tipear nos vaya mostrando el resultado (no tenemos botón de búsqueda).

## Historia de Usuario # 5

Como: usuario
Quiero: ver las películas según el director y/o el productor.
Para: para identificar o comprar la calidad de la película.

## Criterios de aceptación

- Investigar sobre filter.
- Agregar opciones con los nombres de los directores.
- Al hacer click en las opciones, nos muestre las películas filtradas por nombre de director.

## Historia de Usuario # 6

Como: persona que usa páginas de películas.
Quiero: ver todos los posters de las películas y poder ver las 10 películas más vistas o reconocidas.
Para: verlas todas y poder elegir.

## Criterios de aceptación

- Investigar sobre .map.
- Implementar .map para crear un nuevo array solamente con los posters.
- Crear una etiqueta en js donde vamos a llamar al array que hemos creado
- Agregar un botón "Top 10".
- Al hacer click en el top 10, hacer un sort que va a jalar el score de las 10 primeras pelis con más puntaje más alto.
- Mostrar de manera descendente (De las más alta, hasta la más baja).

## Historia de usuario # 7

Como: usuario.
Quiero: poder ordenar las películas de las más viejas a las más actuales y viceversa.
Para: para poder verlas de manera cronológicas.

## Criterios de aceptación

- Investigar sobre sort.
- Agregar una opción descendente y otra ascendente.
- Al hacer click en las opciones, nos muestre las películas ordenadas según sea el caso.

## Historia de usuario # 8

Como: usuario.
Quiero: hacer click en los posters y ver la info de la peli.
Para: poder acceder a la info.

## Criterios de aceptación

- Al darle click al poster, nos redireccione a una pantalla de información.
- Llamar toda la info de la data y mostrarla.
- Usar innerHTML para quitar la galería y mostrar información de la película.
- Agregar estilos css a la pantalla de información para que sea vea bien y que sea responsive.
- Agregar un select que contenga: people, vehicle, location.
- Mostrar al seleccionar el botón correspondiente: People, vehicle, location, (según sea el caso).

## Historia de usuario # 9

Como: usuario.
Quiero: buscar las películas por su nombre.
Para: poder encontrarlas más fácilmente.

## Criterios de aceptación

- Investigar sobre filtros de búsqueda.
- Hacer una función con el método que consigamos.
- Conectarlo al input search que ya tenemos.
- Al tipear nos vaya mostrando el resultado (no tenemos botón de búsqueda).

## Historia de usuario # 10

Como: usuario.
Quiero: poder ver info de los personajes principales de cada película.
Para: comparar y conocer.

## Criterios de aceptación

- Crear en html un contenedor para el modal.
- Agg la info del modal desde js.
- Agg un escuchador que funcione cuando hagamos click o pasemos el cursor por encima.

# Funcionamiento

- Al ingresar encuentras un pagina de inicio con un botón, que al darle click le envía a otra sección de la página.
- En la siguiente sección, se encuentra la galería de películas producidas por Studio Ghibli.
- En la parte superior de la galería encontramos una barra de navegación, la cual contiene:
- El logo de Studio Ghibli.
- Un input de búsqueda, que al escribir organiza las películas según el nombre que vaya escribiendo el usuario y oculta las películas que ya no cumplen con las letras que se escriban.
- Un select que consta de opciones que permiten el ordenado de las películas por fechas ascendentes y fechas descendentes.
- Otro select que consta de todos los nombres de los productores de películas de estudio Ghibli y que al seleccionar alguno, se filtran y se muestras sólo las películas realizadas por ese productor.
- Cuando hacemos click en alguna película, la página nos muestra otra página con toda la info de esta película.
- En la sección en la que se encuentra la info de la película, en la parte inferior encontramos un select que nos deja tomar como opción: Personajes, locaciones y vehículos.
- Al dar click en cualquiera de las opciones anteriores, nos despliega imágenes de personajes, locaciones o vehículos.
- Si hacemos click en cualquier imagen, podemos ver su información desplegada en un modal.

# Objetivos de aprendizaje

## HTML y CSS

- Usar HTML semántico.
- Usar selectores de CSS.
- Construir la aplicación respetando el diseño realizado (maquetación).
- Usar flexbox en CSS.

## DOM y Web APIs

- Usar selectores del DOM.
- Manejar de eventos del DOM.
- Manipular dinamicamente el DOM. (appendChild, createElement,  createTextNode, innerHTML, textContent, etc).

## JavaScript

- Usar de condicionales (if-else, operador ternario).
- Usar bucles (for, forEach).
- Usar funciones (parámetros, argumentos, valor de retorno).
- Manipular arrays (filter, map, sort).
- Manipular objects (key, value).
- Uso ES modules (import, export).
- Diferenciar entre expression y statements.
- Diferenciar entre tipos de datos atómicos y estructurados.}

## Testing

- Testeo unitario.
- Estructura del código y guía de estilo.
- Organizar y dividir el código en módulos (Modularización).
- Uso de identificadores descriptivos (Nomenclatura, Semántica).
- Uso de linter (ESLINT).

## Git y GitHub

- Uso de comandos de git (add, commit, pull, status, push).
- Manejo de repositorios de GitHub (clone, fork, gh-pages).
- Colaboración en Github (branches, pull requests, tags).

## UX

- Diseñar la aplicación pensando y entendiendo al usuario.
- Crear prototipos para obtener feedback e iterar.
- Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- Planear y ejecutar tests de usabilidad.

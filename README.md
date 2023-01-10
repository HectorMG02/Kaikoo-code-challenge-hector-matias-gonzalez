# kaikoo-code-challenge

## Build Setup

```bash
# Instalar dependencias
$ npm install

# Arrancar proyecto en local en localhost:3000
$ npm run dev
```

## Detalles de la prueba
Para realizar la prueba me he basado en Atomic Design para la creación de componentes de tal manera que sean reutilizables y escalables.
Esta ha sido mi primera toma de contacto con Vue y con Nuxt.js por lo que, como dirían en el LOL, soy "**first time Nuxt**". He instalado eslint para tener un código más limpio y ordenado usando comillas dobles y punto y coma.

Para pintar las cards de los campeones he creado una variable llamada **filteredChampions** ya que no quería modificar la variable original con todos los campeones. Con esta variable he pintado las tarjetas intentando que el estilo se parezca lo máximo posible al de la vista de referencia y al figma.

En cuanto a los filtros he usado la propiedad *.filter()* de los arrays para filtrar dentro del array filteredChampions.

En cuanto a la tarea adicional de añadir/eliminar campeones a favoritos he usado el localStorage para almacenar dichos datos ya que no conozco las alternativas que ofrece Vue para almacenar datos como en React (Redux, Context API, etc...).

Dentro de los filtros destacar que el filtro de tipo texto funciona dándole a enter para buscar y si eliminas el texto automáticamente se actualiza la lista de campeones. El selector con input integrado funciona al igual que en la página de referencia.

